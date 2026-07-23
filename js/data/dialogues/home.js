import { createDialogue } from '../dialogueSchema.js?v=content110';

export const HOME_DIALOGUES = [
  createDialogue({
    id: 'home-about-your-day-a1-01',
    locationId: 'home',
    scenarioId: 'about-your-day',
    title: 'Talking About Your Day',
    level: 'A1',
    length: 'short',
    goal: 'Tell someone at home how your day went.',
    tags: ['small-talk', 'feelings'],
    sceneType: 'home',
    characters: {
      A: { name: 'Sam', role: 'Housemate', gender: 'male', accent: 'american', avatarPreset: 'guest_m' },
      B: { name: 'You', role: 'Housemate', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Hey, you’re back! How was your day?', translation_tr: 'Selam, dönmüşsün! Günün nasıldı?', emotion: 'happy', register: 'informal' },
      {
        speaker: 'B', expected: 'It was long, but pretty good.',
        altAccepted: ['Quite busy, but good.', 'It was tiring, but okay.'],
        translation_tr: 'Uzundu ama oldukça iyiydi.',
        register: 'informal', ipa: '/ɪt wɒz lɒŋ bʌt ˈprɪti ɡʊd/',
        grammar: [
          { word: 'It was', role: 'past simple of "be"', note: 'Used to describe a finished period of time — your day.' },
          { word: 'pretty', role: 'adverb of degree', note: 'Informally means "quite / fairly", not "beautiful".' }
        ],
        keyExpressions: [{ phrase: 'pretty good', meaning: 'quite good — a relaxed, everyday reply' }],
        exampleSentences: ['The film was pretty long.', 'It was tiring, but fun.'],
        pronunciationTips: ['"pretty" in this sense is often said PRI-ee in fast American speech.']
      },
      { speaker: 'A', text: 'What did you get up to?', translation_tr: 'Neler yaptın?', emotion: 'curious', register: 'informal' },
      {
        speaker: 'B', expected: 'I had two meetings and then I went to the gym.',
        altAccepted: ['I worked all morning and went to the gym after.', 'Meetings all day, then the gym.'],
        translation_tr: 'İki toplantım vardı, sonra spor salonuna gittim.',
        register: 'informal', ipa: '/aɪ hæd tuː ˈmiːtɪŋz ænd ðen aɪ went tuː ðə dʒɪm/',
        grammar: [
          { word: 'had', role: 'past simple of "have"', note: 'Irregular verb: have → had. Used here to mean "there were on my schedule".' },
          { word: 'then', role: 'sequencing adverb', note: 'Shows the order of events — first one thing, then another.' },
          { word: 'went', role: 'past simple of "go"', note: 'Irregular: go → went. Never say "goed".' }
        ],
        keyExpressions: [{ phrase: 'get up to', meaning: 'informal way of asking what someone did with their time' }],
        exampleSentences: ['I had lunch and then I studied.', 'What did you get up to at the weekend?'],
        pronunciationTips: ['"went to the" blends into "wen-tuh-thuh".']
      },
      { speaker: 'A', text: 'Nice. Dinner’s almost ready, by the way.', translation_tr: 'Güzel. Bu arada yemek neredeyse hazır.', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Perfect, I’m starving. Do you need any help?',
        altAccepted: ['Great, I’m really hungry. Can I help?', 'Amazing — shall I set the table?'],
        translation_tr: 'Mükemmel, açlıktan ölüyorum. Yardım ister misin?',
        register: 'informal', ipa: '/aɪm ˈstɑːrvɪŋ duː juː niːd ˈeni help/',
        grammar: [
          { word: 'I’m starving', role: 'exaggeration', note: 'Very common informal way to say "I am very hungry" — nobody takes it literally.' },
          { word: 'any help', role: 'quantifier in a question', note: '"Any" is standard with uncountable nouns in questions.' }
        ],
        keyExpressions: [{ phrase: 'I’m starving', meaning: 'I am extremely hungry (informal)' }],
        exampleSentences: ['I’m starving — when do we eat?', 'Do you need any help with that?'],
        pronunciationTips: ['Stretch the first syllable for effect: STAAAR-ving.']
      }
    ]
  }),

  createDialogue({
    id: 'home-household-chores-a2-01',
    locationId: 'home',
    scenarioId: 'household-chores',
    title: 'Sharing the Housework',
    level: 'A2',
    length: 'short',
    goal: 'Agree who does which household task, and negotiate a fair share.',
    tags: ['negotiation', 'making-plans'],
    sceneType: 'home',
    characters: {
      A: { name: 'Nina', role: 'Housemate', gender: 'female', accent: 'american', avatarPreset: 'colleague_f' },
      B: { name: 'You', role: 'Housemate', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'The kitchen is a mess again. Can we sort out a rota?', translation_tr: 'Mutfak yine dağılmış. Bir sıra çizelgesi yapabilir miyiz?', emotion: 'concerned', register: 'informal' },
      {
        speaker: 'B', expected: 'Sure. I can do the dishes if you take out the rubbish.',
        altAccepted: ['Good idea. I’ll wash up if you handle the bins.', 'Yes — I’ll do the dishes and you do the bins?'],
        translation_tr: 'Tabii. Sen çöpü çıkarırsan ben bulaşıkları yaparım.',
        register: 'informal', ipa: '/aɪ kæn duː ðə ˈdɪʃɪz ɪf juː teɪk aʊt ðə ˈrʌbɪʃ/',
        grammar: [
          { word: 'if you take out', role: 'first conditional', note: 'After "if" about the future, use the present simple — never "will".' },
          { word: 'do the dishes', role: 'fixed collocation', note: 'English says "do the dishes" or "wash up" — not "make the dishes".' },
          { word: 'take out', role: 'phrasal verb', note: 'Means to carry rubbish outside. Separable: take the rubbish out.' }
        ],
        keyExpressions: [{ phrase: 'do the dishes', meaning: 'wash the plates, cups and cutlery' }],
        exampleSentences: ['I’ll cook if you clean.', 'Can you take out the rubbish?'],
        pronunciationTips: ['"dishes" ends with a clear /ɪz/ sound because of the -sh ending.']
      },
      { speaker: 'A', text: 'Deal. What about the bathroom? Neither of us has touched it.', translation_tr: 'Anlaştık. Peki banyo? İkimiz de el sürmedik.', emotion: 'thinking', register: 'informal' },
      {
        speaker: 'B', expected: 'How about we take turns every other week?',
        altAccepted: ['Why don’t we alternate weeks?', 'Shall we swap each week?'],
        translation_tr: 'İki haftada bir sırayla yapmaya ne dersin?',
        register: 'informal', ipa: '/haʊ əˈbaʊt wiː teɪk tɜːrnz ˈevri ˈʌðər wiːk/',
        grammar: [
          { word: 'How about we', role: 'suggestion form', note: 'Informal and friendly. Followed by a normal clause, not an infinitive.' },
          { word: 'take turns', role: 'fixed expression', note: 'Means to do something one after another, alternately.' },
          { word: 'every other week', role: 'frequency phrase', note: 'Means "one week yes, one week no" — alternate weeks.' }
        ],
        keyExpressions: [{ phrase: 'take turns', meaning: 'each person does it in rotation' }],
        exampleSentences: ['We take turns driving.', 'I go to the gym every other day.'],
        pronunciationTips: ['"every other" is usually reduced to "ev-ry-uh-ther".']
      },
      { speaker: 'A', text: 'That sounds fair. I’ll start this week then.', translation_tr: 'Bu adil görünüyor. O zaman bu hafta ben başlarım.', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Thanks — I’ll write it on the fridge so we don’t forget.',
        altAccepted: ['Great, I’ll put it on the calendar.', 'Perfect. I’ll make a list so we both remember.'],
        translation_tr: 'Teşekkürler — unutmayalım diye buzdolabına yazacağım.',
        register: 'informal', ipa: '/aɪl raɪt ɪt ɒn ðə frɪdʒ soʊ wiː doʊnt fərˈɡet/',
        grammar: [
          { word: 'so we don’t forget', role: 'purpose clause', note: '"So (that)" explains the reason for an action. The present tense is used for the future here.' }
        ],
        keyExpressions: [{ phrase: 'so we don’t forget', meaning: 'in order to remember' }],
        exampleSentences: ['I’ll set an alarm so I don’t oversleep.'],
        pronunciationTips: ['"don’t forget" — the t of "don’t" almost disappears before the f.']
      }
    ]
  }),

  createDialogue({
    id: 'home-hosting-guest-b1-01',
    locationId: 'home',
    scenarioId: 'hosting-guest',
    title: 'Welcoming a Guest to Your Home',
    level: 'B1',
    length: 'short',
    goal: 'Make a visitor feel comfortable and offer them food and drink.',
    tags: ['small-talk'],
    sceneType: 'home',
    characters: {
      A: { name: 'Rosa', role: 'Guest', gender: 'female', accent: 'international', avatarPreset: 'agent_f' },
      B: { name: 'You', role: 'Host', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Thanks for inviting me! Your place is lovely.', translation_tr: 'Davet ettiğin için teşekkürler! Evin çok güzel.', emotion: 'happy', register: 'informal' },
      {
        speaker: 'B', expected: 'Thank you! Come in, make yourself at home.',
        altAccepted: ['That’s kind of you — please come in and relax.', 'Thanks! Have a seat, make yourself comfortable.'],
        translation_tr: 'Teşekkürler! İçeri gel, kendi evin gibi rahat ol.',
        register: 'informal', ipa: '/kʌm ɪn meɪk jɔːrˈself æt hoʊm/',
        grammar: [
          { word: 'make yourself at home', role: 'fixed expression (imperative)', note: 'A warm invitation to relax and behave as if it were their own house.' },
          { word: 'Come in', role: 'imperative', note: 'Imperatives sound friendly, not rude, when welcoming someone.' }
        ],
        keyExpressions: [{ phrase: 'make yourself at home', meaning: 'please relax and feel comfortable here' }],
        exampleSentences: ['Come in, make yourself at home.', 'Have a seat, I’ll be right back.'],
        pronunciationTips: ['Say the phrase warmly and slowly — the tone carries the hospitality.']
      },
      { speaker: 'A', text: 'It smells amazing in here. Are you cooking?', translation_tr: 'Burası harika kokuyor. Yemek mi yapıyorsun?', emotion: 'curious', register: 'informal' },
      {
        speaker: 'B', expected: 'Yes, dinner will be ready in about twenty minutes. Would you like something to drink?',
        altAccepted: ['I am — it’ll be ready soon. Can I get you a drink?', 'Yes, nearly done. What can I get you to drink?'],
        translation_tr: 'Evet, yemek yirmi dakika içinde hazır olur. Bir şey içmek ister misin?',
        register: 'informal', ipa: '/wʊd juː laɪk ˈsʌmθɪŋ tuː drɪŋk/',
        grammar: [
          { word: 'Would you like', role: 'polite offer', note: 'The standard polite way to offer something — softer than "Do you want".' },
          { word: 'something to drink', role: 'pronoun + infinitive', note: 'The infinitive explains the purpose: something (in order) to drink.' },
          { word: 'will be ready', role: 'future simple', note: 'A prediction about a fixed point in the near future.' }
        ],
        keyExpressions: [{ phrase: 'Would you like something to drink?', meaning: 'the classic host’s offer' }],
        exampleSentences: ['Would you like something to eat?', 'Dinner will be ready soon.'],
        pronunciationTips: ['"Would you" often blends into "wud-juh".']
      },
      { speaker: 'A', text: 'A glass of water would be great, thanks.', translation_tr: 'Bir bardak su harika olur, teşekkürler.', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Coming right up. Have a seat while I finish in the kitchen.',
        altAccepted: ['I’ll get it now — please sit down.', 'Of course. Take a seat, I won’t be long.'],
        translation_tr: 'Hemen geliyor. Ben mutfakta işimi bitirene kadar sen otur.',
        register: 'informal', ipa: '/ˈkʌmɪŋ raɪt ʌp hæv ə siːt/',
        grammar: [
          { word: 'Coming right up', role: 'fixed expression', note: 'Means "I will bring it immediately" — common in homes and restaurants.' },
          { word: 'while I finish', role: 'time clause', note: '"While" introduces an action happening at the same time.' }
        ],
        keyExpressions: [{ phrase: 'Coming right up', meaning: 'I’ll bring it straight away' }],
        exampleSentences: ['Two coffees? Coming right up.', 'Have a seat while I get changed.'],
        pronunciationTips: ['Keep it upbeat and quick — it is a cheerful phrase.']
      }
    ]
  })
];
