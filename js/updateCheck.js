// Self-update check.
//
// Everything else in the app is cache-busted by the ?v= stamp that
// tools/stamp-version.ps1 writes into every asset URL. index.html is the one
// file that cannot be stamped -- it is the entry point, so its URL is fixed --
// and GitHub Pages serves it with max-age=600. For up to ten minutes (much
// longer for a page saved to the home screen, which may not revalidate on
// launch at all) a browser answers from its own cache, hands back the previous
// index.html, and that old document points at all the old stamped URLs. The
// result is a fully consistent but stale build: exactly the "I deployed and my
// phone still shows the old version" problem.
//
// So the running build asks the server what the current build is. version.json
// is fetched with cache: 'no-store' plus a unique query, which bypasses both
// the browser cache and any intermediate CDN copy. If the answer differs from
// the build that is running, we navigate to the same page with the new version
// in the query string. That is a URL the cache has never seen, so the browser
// must fetch index.html from the network, and the fresh document carries the
// new stamps for everything else.
//
// BUILD is rewritten by tools/stamp-version.ps1 -- do not edit it by hand.
export const BUILD = 'content110';

const RELOAD_GUARD = 'speakscenes:update-attempt';

/** Checks the deployed version and reloads once if this build is stale.
 *  Never throws and never blocks boot: on any failure (offline, bad JSON,
 *  storage disabled) the app simply keeps running the build it has. */
export async function checkForUpdate() {
  let latest;
  try {
    const res = await fetch(`version.json?t=${Date.now()}`, { cache: 'no-store' });
    if (!res.ok) return false;
    latest = (await res.json()).version;
  } catch (e) {
    return false;                 // offline or blocked -- carry on as-is
  }

  if (!latest || latest === BUILD) return false;

  // Reload at most once per deployed version. Without this, a mismatch we
  // cannot resolve (say version.json is ahead of the files actually on the
  // CDN) would put the app in a reload loop.
  try {
    if (sessionStorage.getItem(RELOAD_GUARD) === latest) return false;
    sessionStorage.setItem(RELOAD_GUARD, latest);
  } catch (e) {
    return false;                 // private mode with storage off: don't risk a loop
  }

  // Same document, new URL -> guaranteed cache miss on index.html.
  // replace() keeps this out of the back-button history.
  const url = new URL(window.location.href);
  url.searchParams.set('v', latest);
  window.location.replace(url.toString());
  return true;
}
