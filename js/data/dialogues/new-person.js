import { createDialogue } from '../dialogueSchema.js';

export const NEW_PERSON_DIALOGUES = [
  createDialogue({
    id: 'new-person-introducing-yourself-a1-01',
    locationId: 'new-person',
    scenarioId: 'introducing-yourself',
    title: 'Introducing Yourself',
    level: 'A1',
    length: 'short',
    goal: 'Introduce yourself and ask basic questions about someone new.',
    tags: ['meeting-someone', 'small-talk'],
    sceneType: 'party',
    characters: {
      A: { name: 'Jack', role: 'New Acquaintance', gender: 'male', accent: 'american', avatarPreset: 'guest_m' },
      B: { name: 'You', role: 'Guest', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Hi, I don’t think we’ve met. I’m Jack.', translation_tr: 'Merhaba, sanırım tanışmadık. Ben Jack.', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Nice to meet you, Jack. I’m Elif.',
        altAccepted: ['Hi Jack, I’m Elif. Nice to meet you.', 'Pleased to meet you — my name is Elif.'],
        translation_tr: 'Memnun oldum Jack. Ben Elif.',
        register: 'informal', ipa: '/naɪs tuː miːt juː aɪm/',
        grammar: [
          { word: 'Nice to meet you', role: 'fixed expression', note: 'Used only the FIRST time you meet someone. Later, say "Nice to see you".' },
          { word: 'I’m', role: 'contraction of "I am"', note: 'Almost always contracted in speech; "I am Elif" sounds unnaturally formal.' }
        ],
        keyExpressions: [{ phrase: 'Nice to meet you', meaning: 'the standard greeting when meeting someone for the first time' }],
        exampleSentences: ['Nice to meet you, Sarah.', 'I’m Ahmet — pleased to meet you.'],
        pronunciationTips: ['"meet you" often blends into "mee-chu".']
      },
      { speaker: 'A', text: 'Where are you from, Elif?', translation_tr: 'Nerelisin, Elif?', emotion: 'curious', register: 'informal' },
      {
        speaker: 'B', expected: 'I’m from Turkey, but I live in London now.',
        altAccepted: ['I come from Turkey. I’m based in London these days.', 'Originally from Turkey — I moved to London last year.'],
        translation_tr: 'Türkiye’denim ama şu an Londra’da yaşıyorum.',
        register: 'informal', ipa: '/aɪm frɒm ˈtɜːrki bʌt aɪ lɪv ɪn ˈlʌndən naʊ/',
        grammar: [
          { word: 'I’m from', role: 'origin structure', note: 'For your country of origin English uses "be from", not "come from" in most casual speech.' },
          { word: 'I live', role: 'present simple', note: 'For a permanent or long-term situation — not "I am living" unless it is temporary.' }
        ],
        keyExpressions: [{ phrase: 'I’m from...', meaning: 'stating your country or city of origin' }],
        exampleSentences: ['I’m from Izmir.', 'She’s from Canada but lives in Berlin.'],
        pronunciationTips: ['"from" is unstressed and weak: /frəm/.']
      },
      { speaker: 'A', text: 'Oh, how long have you been here?', translation_tr: 'Vay, ne zamandır buradasın?', emotion: 'curious', register: 'informal' },
      {
        speaker: 'B', expected: 'For about two years. And you?',
        altAccepted: ['Around two years now. How about you?', 'Two years or so. What about you?'],
        translation_tr: 'Yaklaşık iki yıldır. Ya sen?',
        register: 'informal', ipa: '/fɔːr əˈbaʊt tuː jɪərz ænd juː/',
        grammar: [
          { word: 'For about two years', role: 'duration answer', note: 'Answers "How long...?" — "for" plus a length of time.' },
          { word: 'And you?', role: 'return question', note: 'A short, essential phrase that keeps a conversation balanced.' }
        ],
        keyExpressions: [{ phrase: 'And you?', meaning: 'turning the same question back to the other person' }],
        exampleSentences: ['I’ve been here for six months. And you?', 'I’m a teacher. What about you?'],
        pronunciationTips: ['Let "And you?" rise at the end — it is a genuine question.']
      }
    ]
  }),

  createDialogue({
    id: 'new-person-exchanging-contact-a2-01',
    locationId: 'new-person',
    scenarioId: 'exchanging-contact',
    title: 'Exchanging Contact Details',
    level: 'A2',
    length: 'short',
    goal: 'Offer to stay in touch and swap phone numbers naturally.',
    tags: ['meeting-someone', 'making-plans'],
    sceneType: 'party',
    characters: {
      A: { name: 'Lucia', role: 'New Acquaintance', gender: 'female', accent: 'international', avatarPreset: 'colleague_f' },
      B: { name: 'You', role: 'Guest', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'It was really nice talking to you. We should do this again.', translation_tr: 'Seninle sohbet etmek çok güzeldi. Bunu tekrar yapmalıyız.', emotion: 'happy', register: 'informal' },
      {
        speaker: 'B', expected: 'I’d like that. Shall we swap numbers?',
        altAccepted: ['Definitely! Can I get your number?', 'That would be great — do you want to exchange numbers?'],
        translation_tr: 'Bunu isterim. Numaralarımızı paylaşalım mı?',
        register: 'informal', ipa: '/aɪd laɪk ðæt ʃæl wiː swɒp ˈnʌmbərz/',
        grammar: [
          { word: 'I’d like that', role: 'polite acceptance', note: 'A warm way to accept a suggestion without repeating the whole idea.' },
          { word: 'Shall we', role: 'suggestion (British)', note: 'Used for suggestions involving both speakers. Americans often prefer "Should we".' },
          { word: 'swap', role: 'informal verb', note: 'Means "exchange" — casual and very common in speech.' }
        ],
        keyExpressions: [{ phrase: 'swap numbers', meaning: 'exchange phone numbers with someone' }],
        exampleSentences: ['Shall we swap emails?', 'I’d like that a lot.'],
        pronunciationTips: ['"Shall we" is usually reduced to "shal-wee".']
      },
      { speaker: 'A', text: 'Sure! What’s yours?', translation_tr: 'Tabii! Seninki nedir?', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'It’s oh-seven-double-two, three-four-five-six-seven-eight.',
        altAccepted: ['Let me write it down for you.', 'I’ll send you a message so you have mine.'],
        translation_tr: 'Sıfır-yedi-çift iki, üç-dört-beş-altı-yedi-sekiz.',
        register: 'informal', ipa: '/oʊ ˈsevən ˈdʌbəl tuː θriː fɔːr faɪv sɪks ˈsevən eɪt/',
        grammar: [
          { word: 'oh', role: 'spoken form of zero', note: 'In phone numbers, English speakers say "oh" for 0, not "zero".' },
          { word: 'double two', role: 'repeated digit', note: 'For two identical digits, British English says "double two" instead of "two two".' }
        ],
        keyExpressions: [{ phrase: 'double + digit', meaning: 'the natural way to say a repeated number aloud' }],
        exampleSentences: ['My number is oh-double-seven...', 'It’s triple eight at the end.'],
        pronunciationTips: ['Group digits in twos or threes and pause between groups — much easier to follow.']
      },
      { speaker: 'A', text: 'Got it. I’ll message you so you have mine too.', translation_tr: 'Aldım. Benimki de sende olsun diye sana mesaj atarım.', emotion: 'happy', register: 'informal' },
      {
        speaker: 'B', expected: 'Perfect. Let’s keep in touch!',
        altAccepted: ['Great — talk soon!', 'Sounds good. Stay in touch!'],
        translation_tr: 'Mükemmel. İletişimde kalalım!',
        register: 'informal', ipa: '/lets kiːp ɪn tʌtʃ/',
        grammar: [
          { word: 'Let’s', role: 'contraction of "let us"', note: 'Makes a friendly suggestion that includes both speakers.' },
          { word: 'keep in touch', role: 'idiom', note: 'Means to stay in contact over time — never "keep in contact with touch".' }
        ],
        keyExpressions: [{ phrase: 'keep in touch', meaning: 'stay in contact in the future' }],
        exampleSentences: ['Let’s keep in touch!', 'We stayed in touch for years.'],
        pronunciationTips: ['"keep in" links smoothly: "kee-pin".']
      }
    ]
  })
];
