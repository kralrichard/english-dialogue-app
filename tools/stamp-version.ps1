# Stamps a cache-busting version onto every local asset URL.
#
#   ./tools/stamp-version.ps1              # version = current UTC timestamp
#   ./tools/stamp-version.ps1 -Version v42 # explicit version
#   ./tools/stamp-version.ps1 -Check       # report only, change nothing
#
# WHY THIS EXISTS
# ---------------
# GitHub Pages serves every file with "Cache-Control: max-age=600", and we
# cannot change that header. For ten minutes a browser answers from its own
# cache without asking the server at all.
#
# A query string on the entry point alone does NOT solve this. ES module
# specifiers resolve against the *importing module's* URL and the query is not
# inherited, so `js/app.js?v=9` still imports a bare `js/ui/router.js`. Before
# this script existed, bumping the entry version refreshed exactly one file out
# of 119 and left every screen and every dialogue served from the old cache --
# which is how new content could ship and stay invisible on a phone.
#
# So the version has to be stamped onto each specifier. Because the whole set
# changes together, a release is atomic: either the browser has the old
# index.html and loads a fully consistent old build, or it has the new one and
# every URL is new to the cache and fetched fresh. A half-old, half-new mix is
# not reachable.
#
# Run this before committing a release, then commit the result.
param(
    [string]$Version,
    [switch]$Check
)
$ErrorActionPreference = 'Stop'

$root = Split-Path $PSScriptRoot -Parent
if (-not $Version) { $Version = (Get-Date).ToUniversalTime().ToString('yyyyMMdd-HHmm') }
if ($Version -notmatch '^[A-Za-z0-9._-]+$') { throw "Version may only contain letters, digits, dot, dash, underscore: '$Version'" }

# Local module specifiers only: './x.js', '../y/z.js'. Bare and absolute URLs
# are left alone so any future CDN import keeps working.
$reStatic  = [regex]"(?<pre>\bfrom\s*['""])(?<path>\.{1,2}/[^'""?]+?\.js)(?:\?v=[^'""]*)?(?<post>['""])"
$reDynamic = [regex]"(?<pre>\bimport\(\s*['""])(?<path>\.{1,2}/[^'""?]+?\.js)(?:\?v=[^'""]*)?(?<post>['""])"
# index.html: local css/js references, skipping data: and absolute URLs.
$reHtml    = [regex]"(?<pre>\b(?:src|href)="")(?<path>(?!https?:|data:|//)[^""?]+?\.(?:js|css))(?:\?v=[^""]*)?(?<post>"")"

$stampedFiles = 0
$stampedUrls  = 0
$existing     = @{}

function Update-File([string]$path, [regex[]]$patterns) {
    $text = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    $original = $text
    # The MatchEvaluator below runs in a child scope, so the counter has to live
    # at script scope for both sides to see the same variable.
    $script:count = 0
    foreach ($re in $patterns) {
        $text = $re.Replace($text, {
            param($m)
            $script:count++
            # Record versions already present so -Check can report drift.
            $had = [regex]::Match($m.Value, '\?v=([^''"]*)')
            if ($had.Success) { $script:existing[$had.Groups[1].Value] = $true } else { $script:existing['(none)'] = $true }
            "$($m.Groups['pre'].Value)$($m.Groups['path'].Value)?v=$script:Version$($m.Groups['post'].Value)"
        })
    }
    if ($script:count -gt 0) {
        $script:stampedUrls += $script:count
        if ($text -ne $original) {
            $script:stampedFiles++
            if (-not $Check) {
                [System.IO.File]::WriteAllText($path, $text, (New-Object System.Text.UTF8Encoding($false)))
            }
        }
    }
}

foreach ($f in Get-ChildItem (Join-Path $root 'js') -Recurse -Filter *.js) {
    Update-File $f.FullName @($reStatic, $reDynamic)
}
Update-File (Join-Path $root 'index.html') @($reHtml)

# index.html cannot carry a ?v= stamp (its URL is the entry point), so the
# running build compares itself against version.json and reloads when they
# differ. Both sides of that comparison are written here so they can never
# drift apart. See js/updateCheck.js.
$versionJson = Join-Path $root 'version.json'
$buildFile   = Join-Path $root 'js\updateCheck.js'
if (-not $Check) {
    [System.IO.File]::WriteAllText($versionJson, "{`"version`": `"$Version`"}`n", (New-Object System.Text.UTF8Encoding($false)))
    $bt = [System.IO.File]::ReadAllText($buildFile, [System.Text.Encoding]::UTF8)
    $bt = [regex]::Replace($bt, "(?<pre>export const BUILD = ')[^']*(?<post>';)", "`${pre}$Version`${post}")
    [System.IO.File]::WriteAllText($buildFile, $bt, (New-Object System.Text.UTF8Encoding($false)))
}

$found = ($existing.Keys | Sort-Object) -join ', '
if ($Check) {
    Write-Output "CHECK ONLY - nothing written."
    Write-Output "URLs found      : $stampedUrls"
    Write-Output "Versions in tree: $found"
    Write-Output "Files that would change with -Version ${Version}: $stampedFiles"
} else {
    Write-Output "Version stamped : $Version"
    Write-Output "URLs stamped    : $stampedUrls"
    Write-Output "Files changed   : $stampedFiles"
    Write-Output "Replaced        : $found"
}
