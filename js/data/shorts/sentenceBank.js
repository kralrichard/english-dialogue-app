// ============================================================================
// Shorts sentence bank — the graded 10,000+ sentence stream the Shorts feed
// scrolls through.
//
// HOW IT REACHES 10k WITHOUT A BUILD STEP OR A HUGE HAND-WRITTEN FILE:
// each "frame" is one natural sentence pattern tagged with a CEFR level and a
// topic; it draws from the small, hand-checked banks in wordBanks.js. Combining
// ~40 frames with those banks yields well over ten thousand grammatically-
// correct sentences, each with a matching Turkish translation. A per-frame cap
// (deterministic seeded sampling) keeps the level distribution balanced and the
// generation reproducible — the same sentences appear in the same order every
// run, so a learner can leave and come back to the exact place they left off.
//
// A "Short" = { id, en, tr, level, topic, words }
//   words: the expected-word count, used only for the UI's difficulty dots.
//
// The bank is sorted A0 -> C2, so a learner literally starts life speaking
// single baby words and grows, sentence by sentence, toward confident C2 speech
// — which is the whole point of the growing-avatar mechanic.
// ============================================================================

import { NOUNS, NOUN_GROUPS, ADJECTIVES, VERBS, OPINION_SENTENCES, ACTIVITIES, DURATIONS, REQUESTS, DIRECTIONS_PLACES } from './wordBanks.js?v=content110';

// Nouns you can plausibly buy / order / carry — used by commerce frames so we
// never generate "I'd like to buy a doctor." Keeps the stream natural.
const GOODS = ['food', 'animals', 'objects', 'clothes', 'transport'].flatMap(t =>
  NOUN_GROUPS[t].map(([en, tr, art]) => ({ en, tr, art, topic: t })));

export const LEVEL_ORDER = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const levelRank = (c) => LEVEL_ORDER.indexOf(c);

// --- tiny deterministic RNG (mulberry32) ------------------------------------
function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function plural(word) {
  if (/(s|x|z|ch|sh)$/.test(word)) return word + 'es';
  if (/[^aeiou]y$/.test(word)) return word.slice(0, -1) + 'ies';
  if (word === 'mouse') return 'mice';
  if (word === 'tooth') return 'teeth';
  if (word === 'foot') return 'feet';
  if (word === 'sheep' || word === 'fish') return word;
  return word + 's';
}

// A frame produces sentences from one or more banks. `slots` is an array of
// banks; `make(items)` returns { en, tr }. `capN` limits how many combinations
// are emitted (deterministic sample when the full product is larger).
function frame(level, topic, capN, slots, make) {
  return { level, topic, capN, slots, make };
}

// Expand one frame into concrete sentences, capped + deterministic.
function expandFrame(f, seedBase) {
  const sizes = f.slots.map(s => s.length);
  const total = sizes.reduce((a, b) => a * b, 1);
  const rnd = mulberry32(seedBase);

  // choose which flat indices [0..total) to emit
  let picks;
  if (total <= f.capN) {
    picks = Array.from({ length: total }, (_, i) => i);
  } else {
    const seen = new Set();
    picks = [];
    // seeded rejection sampling for a distinct subset
    let guard = f.capN * 40;
    while (picks.length < f.capN && guard-- > 0) {
      const idx = Math.floor(rnd() * total);
      if (!seen.has(idx)) { seen.add(idx); picks.push(idx); }
    }
  }

  const out = [];
  for (const flat of picks) {
    // decode flat index -> one item per slot
    let rem = flat;
    const items = [];
    for (let s = f.slots.length - 1; s >= 0; s--) {
      const sz = sizes[s];
      items[s] = f.slots[s][rem % sz];
      rem = Math.floor(rem / sz);
    }
    const { en, tr } = f.make(items);
    out.push({ en, tr, level: f.level, topic: f.topic, words: en.split(/\s+/).length });
  }
  return out;
}

// ============================================================================
// FRAMES — grouped by level. Each `make` receives the picked bank items.
// ============================================================================
const N = NOUNS, A = ADJECTIVES, V = VERBS;

const FRAMES = [
  // ---------------- A0 : first mini-sentences ----------------------------
  // Deliberately NOT bare single words: even the very first cards are tiny
  // real utterances, so the learner is speaking sentences from card one.
  frame('A0', 'first-words', 999, [N], ([n]) => ({ en: `${cap(n.art)} ${n.en}!`, tr: `Bir ${n.tr}!` })),
  frame('A0', 'pointing', 999, [N], ([n]) => ({ en: `Look, ${n.art} ${n.en}!`, tr: `Bak, bir ${n.tr}!` })),
  frame('A0', 'pointing', 999, [N], ([n]) => ({ en: `There, ${n.art} ${n.en}!`, tr: `İşte orada bir ${n.tr}!` })),
  frame('A0', 'first-words', 999, [N], ([n]) => ({ en: `Another ${n.en}!`, tr: `Bir ${n.tr} daha!` })),
  frame('A0', 'location', 999, [N], ([n]) => ({ en: `The ${n.en} is here!`, tr: `${cap(n.tr)} burada!` })),
  frame('A0', 'first-words', 999, [N], ([n]) => ({ en: `Oh, ${n.art} ${n.en}!`, tr: `Oo, bir ${n.tr}!` })),
  frame('A0', 'first-words', 260, [N, N], ([a, b]) => ({ en: `${cap(a.art)} ${a.en} and ${b.art} ${b.en}!`, tr: `Bir ${a.tr} ve bir ${b.tr}!` })),

  // ---------------- A1 : simple sentences --------------------------------
  frame('A1', 'naming', 999, [N], ([n]) => ({ en: `This is ${n.art} ${n.en}.`, tr: `Bu bir ${n.tr}.` })),
  frame('A1', 'naming', 999, [N], ([n]) => ({ en: `That is ${n.art} ${n.en}.`, tr: `Şu bir ${n.tr}.` })),
  frame('A1', 'having', 999, [N], ([n]) => ({ en: `I have ${n.art} ${n.en}.`, tr: `Bende bir ${n.tr} var.` })),
  frame('A1', 'wanting', 999, [N], ([n]) => ({ en: `I want ${n.art} ${n.en}.`, tr: `Bir ${n.tr} istiyorum.` })),
  frame('A1', 'seeing', 999, [N], ([n]) => ({ en: `I see ${n.art} ${n.en}.`, tr: `Bir ${n.tr} görüyorum.` })),
  frame('A1', 'seeing', 999, [N], ([n]) => ({ en: `I can see ${n.art} ${n.en}.`, tr: `Bir ${n.tr} görebiliyorum.` })),
  frame('A1', 'questions', 999, [N], ([n]) => ({ en: `Where is the ${n.en}?`, tr: `${cap(n.tr)} nerede?` })),
  frame('A1', 'questions', 999, [N], ([n]) => ({ en: `Is this ${n.art} ${n.en}?`, tr: `Bu bir ${n.tr} mı?` })),
  frame('A1', 'likes', 999, [N], ([n]) => ({ en: `I like ${plural(n.en)}.`, tr: `${cap(n.tr)} severim.` })),
  frame('A1', 'pointing', 999, [N], ([n]) => ({ en: `Look, ${n.art} ${n.en}!`, tr: `Bak, bir ${n.tr}!` })),
  frame('A1', 'finding', 999, [N], ([n]) => ({ en: `I found ${n.art} ${n.en}.`, tr: `Bir ${n.tr} buldum.` })),
  frame('A1', 'pointing', 999, [N], ([n]) => ({ en: `Here is ${n.art} ${n.en}.`, tr: `İşte bir ${n.tr}.` })),
  frame('A1', 'location', 999, [N], ([n]) => ({ en: `The ${n.en} is here.`, tr: `${cap(n.tr)} burada.` })),
  frame('A1', 'describing', 800, [A, N], ([a, n]) => ({ en: `It is ${a.art} ${a.en} ${n.en}.`, tr: `${cap(a.tr)} bir ${n.tr}.` })),
  frame('A1', 'describing', 800, [N, A], ([n, a]) => ({ en: `The ${n.en} is ${a.en}.`, tr: `${cap(n.tr)} ${a.tr}.` })),
  frame('A1', 'describing', 600, [N, A], ([n, a]) => ({ en: `The ${n.en} isn't ${a.en}.`, tr: `${cap(n.tr)} ${a.tr} değil.` })),
  frame('A1', 'routines', 999, [V], ([v]) => ({ en: `I ${v.en} every day.`, tr: `Her gün ${v.pres}.` })),
  frame('A1', 'likes', 999, [V], ([v]) => ({ en: `I like to ${v.en}.`, tr: `${cap(v.ger)} severim.` })),

  // ---------------- A2 : a bigger world ----------------------------------
  frame('A2', 'requests', 999, [GOODS], ([n]) => ({ en: `Can I have ${n.art} ${n.en}, please?`, tr: `Bir ${n.tr} alabilir miyim, lütfen?` })),
  frame('A2', 'needs', 999, [GOODS], ([n]) => ({ en: `I need a new ${n.en}.`, tr: `Yeni bir ${n.tr} lazım.` })),
  frame('A2', 'location', 999, [N], ([n]) => ({ en: `There is ${n.art} ${n.en} here.`, tr: `Burada bir ${n.tr} var.` })),
  frame('A2', 'negatives', 999, [N], ([n]) => ({ en: `I don't have ${n.art} ${n.en}.`, tr: `Bende ${n.tr} yok.` })),
  frame('A2', 'questions', 999, [N], ([n]) => ({ en: `Do you have ${n.art} ${n.en}?`, tr: `Sende ${n.tr} var mı?` })),
  frame('A2', 'shopping', 999, [GOODS], ([n]) => ({ en: `How much is the ${n.en}?`, tr: `${cap(n.tr)} ne kadar?` })),
  frame('A2', 'shopping', 999, [GOODS], ([n]) => ({ en: `I'm looking for ${n.art} ${n.en}.`, tr: `Bir ${n.tr} arıyorum.` })),
  frame('A2', 'negatives', 999, [GOODS], ([n]) => ({ en: `We don't need ${n.art} ${n.en}.`, tr: `Bize ${n.tr} gerekmiyor.` })),
  frame('A2', 'requests', 999, [GOODS], ([n]) => ({ en: `Could you bring me ${n.art} ${n.en}?`, tr: `Bana bir ${n.tr} getirir misin?` })),
  frame('A2', 'questions', 999, [N], ([n]) => ({ en: `Is there ${n.art} ${n.en} nearby?`, tr: `Yakınlarda bir ${n.tr} var mı?` })),
  frame('A2', 'describing', 1200, [A, N], ([a, n]) => ({ en: `I have ${a.art} ${a.en} ${n.en}.`, tr: `Bende ${a.tr} bir ${n.tr} var.` })),
  frame('A2', 'shopping', 900, [A, N], ([a, n]) => ({ en: `She bought ${a.art} ${a.en} ${n.en}.`, tr: `${cap(a.tr)} bir ${n.tr} aldı.` })),
  frame('A2', 'exclaim', 700, [A, N], ([a, n]) => ({ en: `What ${a.art} ${a.en} ${n.en}!`, tr: `Ne ${a.tr} bir ${n.tr}!` })),
  frame('A2', 'plans', 999, [V], ([v]) => ({ en: `I want to ${v.en} today.`, tr: `Bugün ${v.inf} istiyorum.` })),
  frame('A2', 'plans', 999, [V], ([v]) => ({ en: `Do you want to ${v.en}?`, tr: `${cap(v.inf)} ister misin?` })),
  frame('A2', 'negatives', 999, [V], ([v]) => ({ en: `I don't want to ${v.en} now.`, tr: `Şimdi ${v.inf} istemiyorum.` })),
  frame('A2', 'obligation', 999, [V], ([v]) => ({ en: `I have to ${v.en} now.`, tr: `Şimdi ${v.inf} zorundayım.` })),

  // ---------------- B1 : more independence -------------------------------
  frame('B1', 'experience', 300, [ACTIVITIES, DURATIONS], ([a, d]) =>
    ({ en: `I've been ${a[0]} for ${d[0]}.`, tr: `${cap(a[1])} ${d[1]}.` })),
  frame('B1', 'polite-requests', 999, [REQUESTS], ([r]) =>
    ({ en: `I was wondering if you could ${r[0]}.`, tr: `Acaba ${r[1]}?` })),
  frame('B1', 'directions', 999, [DIRECTIONS_PLACES], ([p]) =>
    ({ en: `Do you know where ${p[0]} is?`, tr: `${cap(p[1])} nerede biliyor musun?` })),
  frame('B1', 'opinions', 999, [OPINION_SENTENCES], ([s]) =>
    ({ en: `I think ${s.en}.`, tr: `Bence ${s.tr}.` })),
  frame('B1', 'describing', 1100, [A, N], ([a, n]) =>
    ({ en: `I've never seen such ${a.art} ${a.en} ${n.en} before.`, tr: `Daha önce hiç bu kadar ${a.tr} bir ${n.tr} görmemiştim.` })),
  frame('B1', 'shopping', 999, [GOODS], ([n]) => ({ en: `I'd like to buy ${n.art} ${n.en}.`, tr: `Bir ${n.tr} almak istiyorum.` })),
  frame('B1', 'questions', 999, [N], ([n]) => ({ en: `Have you ever seen ${n.art} ${n.en} like this?`, tr: `Hiç böyle bir ${n.tr} gördün mü?` })),
  frame('B1', 'plans', 999, [V], ([v]) => ({ en: `I've always wanted to ${v.en}.`, tr: `Her zaman ${v.inf} istemişimdir.` })),
  frame('B1', 'advice', 999, [V], ([v]) => ({ en: `It's important to ${v.en} regularly.`, tr: `Düzenli olarak ${v.inf} önemlidir.` })),

  // ---------------- B2 : complex social & professional -------------------
  frame('B2', 'opinions', 999, [OPINION_SENTENCES], ([s]) =>
    ({ en: `In my opinion, ${s.en}.`, tr: `Bence ${s.tr}.` })),
  frame('B2', 'opinions', 999, [OPINION_SENTENCES], ([s]) =>
    ({ en: `I'm not entirely sure, but ${s.en}.`, tr: `Tam emin değilim ama ${s.tr}.` })),
  frame('B2', 'polite-requests', 999, [REQUESTS], ([r]) =>
    ({ en: `I'd really appreciate it if you could ${r[0]}.`, tr: `${cap(r[1])} çok memnun olurum.` })),
  frame('B2', 'experience', 300, [ACTIVITIES, DURATIONS], ([a, d]) =>
    ({ en: `To be fair, I've been ${a[0]} for ${d[0]} now.`, tr: `Açıkçası, ${a[1]} ${d[1]} uğraşıyorum.` })),
  frame('B2', 'concession', 999, [OPINION_SENTENCES], ([s]) =>
    ({ en: `While I see your point, ${s.en}.`, tr: `Görüşünü anlıyorum ama ${s.tr}.` })),

  // ---------------- C1 : advanced ----------------------------------------
  frame('C1', 'opinions', 999, [OPINION_SENTENCES], ([s]) =>
    ({ en: `As far as I'm concerned, ${s.en}.`, tr: `Bana kalırsa ${s.tr}.` })),
  frame('C1', 'opinions', 999, [OPINION_SENTENCES], ([s]) =>
    ({ en: `There's no doubt in my mind that ${s.en}.`, tr: `Hiç şüphem yok ki ${s.tr}.` })),
  frame('C1', 'hedging', 999, [OPINION_SENTENCES], ([s]) =>
    ({ en: `It could be argued that ${s.en}.`, tr: `Denilebilir ki ${s.tr}.` })),

  // ---------------- C2 : confident, precise ------------------------------
  frame('C2', 'opinions', 999, [OPINION_SENTENCES], ([s]) =>
    ({ en: `It goes without saying that ${s.en}.`, tr: `Söylemeye gerek yok ki ${s.tr}.` })),
  frame('C2', 'nuance', 999, [OPINION_SENTENCES], ([s]) =>
    ({ en: `If I'm being completely honest, ${s.en}.`, tr: `Tamamen dürüst olmam gerekirse, ${s.tr}.` })),
  frame('C2', 'nuance', 999, [OPINION_SENTENCES], ([s]) =>
    ({ en: `One can hardly deny that ${s.en}.`, tr: `İnkar edilemez ki ${s.tr}.` })),

  // ---- deeper upper-level content ---------------------------------------
  // B2/C1/C2 used to hold only a few hundred cards between them, so those
  // stages repeated constantly. These frames build level-appropriate complex
  // sentences (subordinate clauses, hedging, inversion) from the same
  // hand-checked noun/adjective/verb banks.
  frame('B1', 'describing', 400, [N, A], ([n, a]) => ({ en: `I wonder whether the ${n.en} is really that ${a.en}.`, tr: `${cap(n.tr)} gerçekten bu kadar ${a.tr} mı, merak ediyorum.` })),
  frame('B1', 'describing', 400, [N, A], ([n, a]) => ({ en: `Don't you think the ${n.en} is too ${a.en}?`, tr: `Sence de ${n.tr} fazla ${a.tr} değil mi?` })),
  frame('B2', 'describing', 600, [N, A], ([n, a]) => ({ en: `Honestly, I didn't expect the ${n.en} to be that ${a.en}.`, tr: `Açıkçası ${n.tr} bu kadar ${a.tr} olur diye düşünmemiştim.` })),
  frame('B2', 'describing', 500, [N, A], ([n, a]) => ({ en: `It depends on how ${a.en} the ${n.en} actually is.`, tr: `${cap(n.tr)} gerçekte ne kadar ${a.tr}, ona bağlı.` })),
  frame('B2', 'describing', 400, [N, A], ([n, a]) => ({ en: `In my experience, the ${n.en} is rarely that ${a.en}.`, tr: `Tecrübeme göre ${n.tr} nadiren bu kadar ${a.tr} olur.` })),
  frame('B2', 'plans', 999, [V], ([v]) => ({ en: `I never thought I would ${v.en} at all.`, tr: `Bir gün ${v.inf} aklıma gelmezdi.` })),
  frame('B2', 'advice', 999, [V], ([v]) => ({ en: `I find it hard to ${v.en} regularly.`, tr: `Düzenli olarak ${v.inf} bana zor geliyor.` })),
  frame('C1', 'describing', 600, [N, A], ([n, a]) => ({ en: `It surprises me how ${a.en} the ${n.en} actually is.`, tr: `${cap(n.tr)} gerçekte ne kadar ${a.tr}, bu beni şaşırtıyor.` })),
  frame('C1', 'describing', 600, [N, A], ([n, a]) => ({ en: `One shouldn't assume the ${n.en} is always that ${a.en}.`, tr: `${cap(n.tr)} her zaman bu kadar ${a.tr} olur diye varsaymamak gerek.` })),
  frame('C1', 'describing', 600, [N, A], ([n, a]) => ({ en: `Whether the ${n.en} is really that ${a.en} remains to be seen.`, tr: `${cap(n.tr)} gerçekten bu kadar ${a.tr} mı, şüpheli.` })),
  frame('C1', 'advice', 999, [V], ([v]) => ({ en: `It would be well worth the effort to ${v.en} regularly.`, tr: `Düzenli olarak ${v.inf} gerçekten mantıklı olurdu.` })),
  frame('C1', 'advice', 999, [V], ([v]) => ({ en: `I'm aware that I ought to ${v.en} more often.`, tr: `Daha sık ${v.inf} gerektiğinin farkındayım.` })),
  frame('C2', 'describing', 600, [N, A], ([n, a]) => ({ en: `One could hardly claim that the ${n.en} is particularly ${a.en}.`, tr: `${cap(n.tr)} özellikle ${a.tr} denemez pek.` })),
  frame('C2', 'describing', 600, [N, A], ([n, a]) => ({ en: `There is no denying that the ${n.en} is remarkably ${a.en}.`, tr: `${cap(n.tr)} dikkat çekici derecede ${a.tr}, bu inkar edilemez.` })),
  frame('C2', 'describing', 500, [A, N], ([a, n]) => ({ en: `Rarely have I seen ${a.art} ${a.en} ${n.en}.`, tr: `Nadiren bu kadar ${a.tr} bir ${n.tr} gördüm.` })),
  frame('C2', 'nuance', 999, [V], ([v]) => ({ en: `In hindsight, I should ${v.en} far more often.`, tr: `Geriye dönüp bakınca çok daha sık ${v.inf} gerekirmiş.` }))
];

// ============================================================================
// Build the bank once, deterministically, and cache it.
// ============================================================================
let _bank = null;

export function buildShortsBank() {
  if (_bank) return _bank;
  const all = [];
  FRAMES.forEach((f, fi) => {
    const sentences = expandFrame(f, 1000 + fi * 7919);
    sentences.forEach((s, si) => all.push({ ...s, id: `s${fi}_${si}` }));
  });

  // De-duplicate by English text (a couple of frames can coincide on 1-word
  // baby utterances) so the stream never shows the same card twice.
  const seen = new Set();
  const deduped = all.filter(s => {
    const k = s.en.toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });

  // Stable sort by CEFR level (A0 -> C2). Within a level the order is the
  // frame/emit order above — reproducible run to run.
  deduped.sort((a, b) => levelRank(a.level) - levelRank(b.level));
  _bank = deduped;
  return _bank;
}

/** Index of the first sentence of each level, plus counts — used by the
 *  growth mechanic to know when a swipe crosses into a new life stage. */
export function levelBands() {
  const bank = buildShortsBank();
  const bands = {};
  LEVEL_ORDER.forEach(lv => { bands[lv] = { start: -1, count: 0 }; });
  bank.forEach((s, i) => {
    if (bands[s.level].start === -1) bands[s.level].start = i;
    bands[s.level].count++;
  });
  return bands;
}

/** The CEFR level shown at a given position in the stream. */
export function levelAtIndex(i) {
  const bank = buildShortsBank();
  const s = bank[Math.max(0, Math.min(bank.length - 1, i))];
  return s ? s.level : 'A0';
}

export function shortsCount() {
  return buildShortsBank().length;
}

// Cache the bank split by level so the feed can walk one level's sentences
// without re-filtering 10k entries on every card.
let _byLevel = null;
export function sentencesForLevel(level) {
  if (!_byLevel) {
    _byLevel = {};
    LEVEL_ORDER.forEach(lv => { _byLevel[lv] = []; });
    for (const s of buildShortsBank()) _byLevel[s.level].push(s);
  }
  return _byLevel[level] || [];
}

/** The card to show for a given life-level and cursor position (wraps around
 *  so a level with 300 sentences and cursor 812 still returns a valid card). */
export function shortForLevel(level, cursor) {
  const list = sentencesForLevel(level);
  if (!list.length) return buildShortsBank()[0];
  return list[cursor % list.length];
}
