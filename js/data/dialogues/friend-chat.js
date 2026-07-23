import { createDialogue } from '../dialogueSchema.js?v=content109';

export const FRIEND_CHAT_DIALOGUES = [
  createDialogue({
    id: 'friend-chat-catching-up-a2-01',
    locationId: 'friend-chat',
    scenarioId: 'catching-up',
    title: 'Catching Up After a Long Time',
    level: 'A2',
    length: 'short',
    goal: 'Reconnect with a friend you have not seen for a while.',
    tags: ['small-talk'],
    sceneType: 'home',
    characters: {
      A: { name: 'Zoe', role: 'Old Friend', gender: 'female', accent: 'american', avatarPreset: 'assistant_f' },
      B: { name: 'You', role: 'Friend', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'I can’t believe it’s been a year! How have you been?', translation_tr: 'Bir yıl olduğuna inanamıyorum! Nasılsın?', emotion: 'happy', register: 'informal' },
      {
        speaker: 'B', expected: 'I’ve been really busy, but things are going well.',
        altAccepted: ['Pretty good, just very busy with work.', 'Not bad! Busy, but everything’s fine.'],
        translation_tr: 'Çok meşguldüm ama işler iyi gidiyor.',
        register: 'informal', ipa: '/aɪv bɪn ˈrɪəli ˈbɪzi bʌt θɪŋz ɑːr ˈɡoʊɪŋ wel/',
        grammar: [
          { word: 'I’ve been', role: 'present perfect', note: 'The natural answer to "How have you been?" — it covers the whole period since you last met.' },
          { word: 'things are going well', role: 'fixed expression', note: 'A general, positive summary of your life. "Things" means your situation overall.' }
        ],
        keyExpressions: [{ phrase: 'How have you been?', meaning: 'asking about someone’s life since you last met' }],
        exampleSentences: ['I’ve been travelling a lot.', 'Things are going well at work.'],
        pronunciationTips: ['"I’ve been" is reduced to "ayv-bin" — quick and unstressed.']
      },
      { speaker: 'A', text: 'That’s good to hear. Are you still at the same company?', translation_tr: 'Bunu duymak güzel. Hâlâ aynı şirkette misin?', emotion: 'curious', register: 'informal' },
      {
        speaker: 'B', expected: 'No, I changed jobs in March. I’m much happier now.',
        altAccepted: ['Actually, I moved to a new company in the spring.', 'I left in March — the new place is better.'],
        translation_tr: 'Hayır, martta iş değiştirdim. Şimdi çok daha mutluyum.',
        register: 'informal', ipa: '/aɪ tʃeɪndʒd dʒɒbz ɪn mɑːrtʃ aɪm mʌtʃ ˈhæpiər naʊ/',
        grammar: [
          { word: 'changed jobs', role: 'collocation, plural', note: 'English says "change jobs" in the plural — you leave one and start another.' },
          { word: 'much happier', role: 'comparative + intensifier', note: '"Much" strengthens a comparative. Never say "very happier".' },
          { word: 'in March', role: 'preposition of time', note: 'Use "in" with months and years: in March, in 2024.' }
        ],
        keyExpressions: [{ phrase: 'change jobs', meaning: 'move from one employer to another' }],
        exampleSentences: ['She changed jobs last year.', 'I feel much better today.'],
        pronunciationTips: ['"changed" ends in a /d/ sound — one syllable, not "chang-ed".']
      },
      { speaker: 'A', text: 'That’s great news. We should meet up properly soon.', translation_tr: 'Harika haber. Yakında doğru dürüst buluşmalıyız.', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Definitely. Are you free next weekend?',
        altAccepted: ['Absolutely — how about next weekend?', 'Yes, let’s do it. What are you doing on Saturday?'],
        translation_tr: 'Kesinlikle. Önümüzdeki hafta sonu boş musun?',
        register: 'informal', ipa: '/ˈdefɪnətli ɑːr juː friː nekst ˈwiːkend/',
        grammar: [
          { word: 'Definitely', role: 'strong agreement', note: 'A one-word enthusiastic yes — very common in spoken English.' },
          { word: 'Are you free', role: 'availability question', note: '"Free" here means "not busy", the standard word for checking availability.' }
        ],
        keyExpressions: [{ phrase: 'meet up', meaning: 'to get together socially, usually by arrangement' }],
        exampleSentences: ['Are you free on Friday?', 'Let’s meet up next week.'],
        pronunciationTips: ['"Definitely" has four syllables: DEF-i-nit-lee.']
      }
    ]
  }),

  createDialogue({
    id: 'friend-chat-weekend-plans-a2-01',
    locationId: 'friend-chat',
    scenarioId: 'weekend-plans',
    title: 'Making Weekend Plans',
    level: 'A2',
    length: 'short',
    goal: 'Suggest an activity, respond to a counter-suggestion and agree a time.',
    tags: ['making-plans'],
    sceneType: 'home',
    characters: {
      A: { name: 'Tariq', role: 'Friend', gender: 'male', accent: 'british', avatarPreset: 'guest_m' },
      B: { name: 'You', role: 'Friend', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Any plans for Saturday?', translation_tr: 'Cumartesi için planın var mı?', emotion: 'curious', register: 'informal' },
      {
        speaker: 'B', expected: 'Nothing yet. Do you fancy going to the cinema?',
        altAccepted: ['Not really. How about a film?', 'I’m free — shall we see a movie?'],
        translation_tr: 'Henüz yok. Sinemaya gitmeye ne dersin?',
        register: 'informal', ipa: '/duː juː ˈfænsi ˈɡoʊɪŋ tuː ðə ˈsɪnəmə/',
        grammar: [
          { word: 'Do you fancy', role: 'British informal suggestion', note: 'Means "would you like". Always followed by a noun or -ing form.' },
          { word: 'going', role: 'gerund after "fancy"', note: 'Never "fancy to go" — the -ing form is required.' },
          { word: 'Nothing yet', role: 'short answer', note: '"Yet" shows the situation could still change.' }
        ],
        keyExpressions: [{ phrase: 'Do you fancy...?', meaning: 'an informal British way to suggest an activity' }],
        exampleSentences: ['Do you fancy a coffee?', 'Do you fancy going for a walk?'],
        pronunciationTips: ['"fancy" is FAN-see with a clear first syllable.']
      },
      { speaker: 'A', text: 'I’ve seen everything that’s on. What about bowling instead?', translation_tr: 'Vizyondaki her şeyi izledim. Onun yerine bowlinge ne dersin?', emotion: 'thinking', register: 'informal' },
      {
        speaker: 'B', expected: 'Good idea, I haven’t been bowling for ages.',
        altAccepted: ['I love that idea — it’s been years!', 'Sounds fun. I haven’t played in a long time.'],
        translation_tr: 'İyi fikir, uzun zamandır bowlinge gitmedim.',
        register: 'informal', ipa: '/aɪ ˈhævənt bɪn ˈboʊlɪŋ fɔːr ˈeɪdʒɪz/',
        grammar: [
          { word: 'haven’t been', role: 'present perfect negative', note: 'Connects a past absence to now: from some point until today.' },
          { word: 'for ages', role: 'idiomatic duration', note: 'Informal exaggeration meaning "for a very long time".' }
        ],
        keyExpressions: [{ phrase: 'for ages', meaning: 'for a very long time (informal)' }],
        exampleSentences: ['I haven’t seen him for ages.', 'We haven’t been there in years.'],
        pronunciationTips: ['"for ages" links into "fer-ay-jiz".']
      },
      { speaker: 'A', text: 'Great — shall we say seven at the centre?', translation_tr: 'Harika — merkezde yedide diyelim mi?', emotion: 'happy', register: 'informal' },
      {
        speaker: 'B', expected: 'Seven works for me. See you there!',
        altAccepted: ['Perfect, seven it is.', 'That’s fine — I’ll meet you outside.'],
        translation_tr: 'Yedi bana uyar. Orada görüşürüz!',
        register: 'informal', ipa: '/ˈsevən wɜːrks fɔːr miː siː juː ðeər/',
        grammar: [
          { word: 'works for me', role: 'fixed expression', note: 'Confirms a time or arrangement suits you.' },
          { word: 'See you there', role: 'closing phrase', note: 'Used when you have agreed on a meeting place.' }
        ],
        keyExpressions: [{ phrase: 'shall we say', meaning: 'a soft way to propose a specific time' }],
        exampleSentences: ['Shall we say eight?', 'Friday works for me.'],
        pronunciationTips: ['Keep "see you there" light and quick — it is a warm sign-off.']
      }
    ]
  }),

  createDialogue({
    id: 'friend-chat-sharing-news-b1-01',
    locationId: 'friend-chat',
    scenarioId: 'sharing-news',
    title: 'Sharing Big News',
    level: 'B1',
    length: 'short',
    goal: 'Share personal news and react warmly to a friend’s news.',
    tags: ['feelings', 'small-talk'],
    sceneType: 'home',
    characters: {
      A: { name: 'Mia', role: 'Close Friend', gender: 'female', accent: 'american', avatarPreset: 'journalist_f' },
      B: { name: 'You', role: 'Friend', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Guess what — I got the job in Barcelona!', translation_tr: 'Bil bakalım ne oldu — Barselona’daki işi aldım!', emotion: 'happy', register: 'informal' },
      {
        speaker: 'B', expected: 'That’s amazing! Congratulations, you totally deserve it.',
        altAccepted: ['Wow, congratulations! I’m so happy for you.', 'No way — that’s brilliant news! Well done.'],
        translation_tr: 'Bu harika! Tebrikler, bunu tamamen hak ettin.',
        register: 'informal', ipa: '/ðæts əˈmeɪzɪŋ kənˌɡrætʃəˈleɪʃənz/',
        grammar: [
          { word: 'Congratulations', role: 'fixed plural noun', note: 'Always plural in English — never "congratulation".' },
          { word: 'deserve', role: 'verb', note: 'Means you have earned something through your own effort or quality.' },
          { word: 'totally', role: 'intensifier (informal)', note: 'Adds emphasis in casual speech: totally right, totally deserve it.' }
        ],
        keyExpressions: [{ phrase: 'you deserve it', meaning: 'a warm way to say the success was earned' }],
        exampleSentences: ['Congratulations on your promotion!', 'She really deserves this.'],
        pronunciationTips: ['"Congratulations" is stressed on the fourth syllable: con-grat-yu-LAY-shuns.']
      },
      { speaker: 'A', text: 'Thank you! I’m nervous though — it’s a big move.', translation_tr: 'Teşekkürler! Ama gerginim — büyük bir değişiklik.', emotion: 'concerned', register: 'informal' },
      {
        speaker: 'B', expected: 'That’s completely normal. But you’ve wanted this for years.',
        altAccepted: ['Of course you are — it’s a huge change. But this is your dream.', 'Anyone would be. Still, you’ve worked so hard for it.'],
        translation_tr: 'Bu tamamen normal. Ama sen bunu yıllardır istiyordun.',
        register: 'informal', ipa: '/ðæts kəmˈpliːtli ˈnɔːrməl bʌt juːv ˈwɒntɪd ðɪs fɔːr jɪərz/',
        grammar: [
          { word: 'you’ve wanted', role: 'present perfect', note: 'A desire that began in the past and continues now — perfect for encouragement.' },
          { word: 'But', role: 'contrast connector', note: 'Acknowledges the worry first, then offers a positive counterpoint. A kind structure.' }
        ],
        keyExpressions: [{ phrase: 'That’s completely normal', meaning: 'reassuring someone that their feeling is understandable' }],
        exampleSentences: ['It’s normal to feel nervous.', 'I’ve wanted to visit Japan for years.'],
        pronunciationTips: ['Slow down on "completely normal" — reassurance sounds better unhurried.']
      },
      { speaker: 'A', text: 'You’re right. I just hope I settle in okay.', translation_tr: 'Haklısın. Sadece uyum sağlayabilmeyi umuyorum.', emotion: 'thinking', register: 'informal' },
      {
        speaker: 'B', expected: 'You will. And I’ll come and visit as soon as you’re settled.',
        altAccepted: ['You’ll be fine — and I’m coming to visit!', 'Of course you will. I’ll fly over once you’re there.'],
        translation_tr: 'Sağlarsın. Yerleşir yerleşmez seni ziyarete geleceğim.',
        register: 'informal', ipa: '/aɪl kʌm ænd ˈvɪzɪt æz suːn æz jʊr ˈsetəld/',
        grammar: [
          { word: 'as soon as you’re settled', role: 'time clause', note: 'After "as soon as" about the future, use the present tense — not "will be".' },
          { word: 'settle in', role: 'phrasal verb', note: 'Means to get comfortable in a new home, job or city.' }
        ],
        keyExpressions: [{ phrase: 'settle in', meaning: 'to adapt and feel at home somewhere new' }],
        exampleSentences: ['I’ll call you as soon as I land.', 'It took a month to settle in.'],
        pronunciationTips: ['"as soon as" reduces to "uh-soo-nuz" in fluent speech.']
      }
    ]
  })
];
