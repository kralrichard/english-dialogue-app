import { createDialogue } from '../dialogueSchema.js?v=content107';

export const CLOTHING_STORE_DIALOGUES = [
  createDialogue({
    id: 'clothing-store-returning-item-b1-01',
    locationId: 'clothing-store',
    scenarioId: 'returning-item',
    title: 'Returning a Damaged Product',
    level: 'B1',
    variant: 1,
    length: 'medium',
    goal: 'Return a damaged jacket and get a refund or exchange.',
    tags: ['complaint', 'problem-solving'],
    sceneType: 'retail',
    characters: {
      A: { name: 'Nora', role: 'Store Assistant', gender: 'female', accent: 'scottish', avatarPreset: 'assistant_f' },
      B: { name: 'Customer', role: 'Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Hi, how can I help you today?', translation_tr: 'Merhaba, bugün size nasıl yardımcı olabilirim?', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'I’d like to return this jacket. There’s a tear in the sleeve.',
        altAccepted: ['I’d like to return this jacket — the sleeve is torn.', 'I want to return this jacket because the sleeve is torn.'],
        translation_tr: 'Bu ceketi iade etmek istiyorum. Kolunda bir yırtık var.',
        register: 'neutral', ipa: '/aɪd laɪk tuː rɪˈtɜːrn ðɪs ˈdʒækɪt ðɛərz ə tɛər ɪn ðə sliːv/',
        grammar: [
          { word: 'I’d like to return', role: 'polite request (would like + infinitive)', note: 'Softer and more formal than "I want to return."' },
          { word: 'There’s a tear', role: 'existential structure', note: 'Introduces the specific problem/damage.' },
          { word: 'in the sleeve', role: 'prepositional phrase', note: 'Specifies the exact location of the damage.' }
        ],
        keyExpressions: [{ phrase: 'I’d like to return this...', meaning: 'a polite, standard opener for a return request' }],
        exampleSentences: ['I’d like to return this shirt — it’s the wrong size.'],
        pronunciationTips: ['Pronounce "tear" (rip) as /tɛər/, not like "tear" (crying), which is /tɪər/.']
      },
      { speaker: 'A', text: 'I’m sorry about that. Do you have the receipt with you?', translation_tr: 'Bunun için üzgünüm. Yanınızda fişiniz var mı?', emotion: 'apologetic', register: 'formal' },
      {
        speaker: 'B', expected: 'Yes, I do. Here it is.',
        altAccepted: ['Yes, here it is.', 'Yes, I’ve got it right here.'],
        translation_tr: 'Evet, var. İşte burada.',
        register: 'neutral', ipa: '/jɛs aɪ duː hɪər ɪt ɪz/',
        grammar: [
          { word: 'Yes, I do', role: 'short answer (auxiliary "do")', note: 'A grammatically complete short answer to a "Do you...?" question.' }
        ],
        keyExpressions: [{ phrase: 'Yes, I do / No, I don’t', meaning: 'standard short answers to "do" questions' }],
        exampleSentences: ['Do you have ID? Yes, I do.'],
        pronunciationTips: ['Stress "do" a little in "Yes, I do" — it carries the emphasis of confirmation.']
      },
      { speaker: 'A', text: 'Great, thanks. Would you prefer a refund or an exchange?', translation_tr: 'Harika, teşekkürler. Para iadesi mi yoksa değişim mi tercih edersiniz?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'I’d prefer a refund, if that’s possible.',
        altAccepted: ['I’d rather have a refund, please.', 'A refund would be better, if possible.'],
        translation_tr: 'Mümkünse, para iadesini tercih ederim.',
        register: 'neutral', ipa: '/aɪd prɪˈfɜːr ə ˈriːfʌnd ɪf ðæts ˈpɒsəbəl/',
        grammar: [
          { word: 'I’d prefer', role: 'polite preference (would prefer)', note: 'A softer, more polite way to state a preference than "I want."' },
          { word: 'if that’s possible', role: 'conditional softener', note: 'Adds politeness by acknowledging it might not be possible.' }
        ],
        keyExpressions: [{ phrase: 'I’d prefer... if that’s possible', meaning: 'a polite way to state a preference while leaving room for the other option' }],
        exampleSentences: ['I’d prefer the window seat, if that’s possible.'],
        pronunciationTips: ['Stress "prefer" on the second syllable: pre-FER.']
      }
    ]
  }),

  createDialogue({
    id: 'clothing-store-asking-size-a1-01',
    locationId: 'clothing-store',
    scenarioId: 'asking-size',
    title: 'Asking for a Different Size',
    level: 'A1',
    length: 'short',
    goal: 'Ask whether an item comes in your size.',
    tags: ['ordering'],
    sceneType: 'retail',
    characters: {
      A: { name: 'Katie', role: 'Shop Assistant', gender: 'female', accent: 'british', avatarPreset: 'assistant_f' },
      B: { name: 'You', role: 'Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Can I help you with anything?', translation_tr: 'Bir konuda yardımcı olabilir miyim?', emotion: 'friendly', register: 'neutral' },
      {
        speaker: 'B', expected: 'Do you have this in a medium?',
        altAccepted: ['Have you got this in a larger size?', 'Is this available in medium?'],
        translation_tr: 'Bunun orta bedeni var mı?',
        register: 'neutral', ipa: '/duː juː hæv ðɪs ɪn ə ˈmiːdiəm/',
        grammar: [
          { word: 'Do you have this in', role: 'shopping question pattern', note: 'The standard way to ask about sizes or colours.' },
          { word: 'a medium', role: 'article + size', note: 'Sizes take "a": a small, a medium, a large.' }
        ],
        keyExpressions: [{ phrase: 'Do you have this in...?', meaning: 'asking for another size or colour' }],
        exampleSentences: ['Do you have this in blue?', 'Have you got it in a size 40?'],
        pronunciationTips: ['"medium" is MEE-dee-um — three syllables.']
      },
      { speaker: 'A', text: 'Let me check the stockroom. What colour would you like?', translation_tr: 'Depoya bir bakayım. Hangi rengi istersiniz?', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'The dark blue one, please.',
        altAccepted: ['Navy, if you have it.', 'The blue, please.'],
        translation_tr: 'Koyu mavi olanı, lütfen.',
        register: 'neutral', ipa: '/ðə dɑːrk bluː wʌn pliːz/',
        grammar: [
          { word: 'the dark blue one', role: 'pronoun "one"', note: '"One" replaces the noun so you do not repeat "shirt".' },
          { word: 'dark blue', role: 'compound adjective', note: 'The shade word comes before the colour: dark blue, light green.' }
        ],
        keyExpressions: [{ phrase: 'the ... one', meaning: 'a way to specify an item without repeating its name' }],
        exampleSentences: ['I’ll take the red one.', 'The small one, please.'],
        pronunciationTips: ['"one" sounds like "won" — /wʌn/.']
      }
    ]
  }),

  createDialogue({
    id: 'clothing-store-trying-on-a2-01',
    locationId: 'clothing-store',
    scenarioId: 'trying-on',
    title: 'Trying Clothes On',
    level: 'A2',
    length: 'short',
    goal: 'Use the fitting room and say whether something fits.',
    tags: ['ordering'],
    sceneType: 'retail',
    characters: {
      A: { name: 'Katie', role: 'Shop Assistant', gender: 'female', accent: 'british', avatarPreset: 'assistant_f' },
      B: { name: 'You', role: 'Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'The fitting rooms are just over there.', translation_tr: 'Kabinler tam şurada.', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'Thanks. Can I try these two on?',
        altAccepted: ['Great — may I try both of these?', 'Thank you. Is it okay to try these on?'],
        translation_tr: 'Teşekkürler. Bu ikisini deneyebilir miyim?',
        register: 'neutral', ipa: '/kæn aɪ traɪ ðiːz tuː ɒn/',
        grammar: [
          { word: 'try these on', role: 'separable phrasal verb', note: 'With a pronoun or short object, it goes in the middle: try them on, try these on.' }
        ],
        keyExpressions: [{ phrase: 'try something on', meaning: 'put on clothes to see if they fit' }],
        exampleSentences: ['Can I try it on?', 'She tried on three dresses.'],
        pronunciationTips: ['"try these on" links smoothly: "try-thee-zon".']
      },
      { speaker: 'A', text: 'Of course. How did they fit?', translation_tr: 'Elbette. Nasıl oldu?', emotion: 'curious', register: 'neutral' },
      {
        speaker: 'B', expected: 'The shirt fits well, but the trousers are too tight.',
        altAccepted: ['The top is fine, the trousers are a bit small.', 'Good on the shirt — the trousers don’t fit.'],
        translation_tr: 'Gömlek iyi oldu ama pantolon çok dar.',
        register: 'neutral', ipa: '/ðə ʃɜːrt fɪts wel bʌt ðə ˈtraʊzərz ɑːr tuː taɪt/',
        grammar: [
          { word: 'fits', role: 'verb', note: '"Fit" is about size; "suit" is about whether it looks good on you.' },
          { word: 'trousers are', role: 'plural noun', note: 'Trousers, jeans and shorts are always plural and take "are".' },
          { word: 'too tight', role: 'too + adjective', note: '"Too" means more than is acceptable — a problem, not just a description.' }
        ],
        keyExpressions: [{ phrase: 'it fits well', meaning: 'the size is right' }],
        exampleSentences: ['These shoes are too small.', 'That jacket suits you.'],
        pronunciationTips: ['British "trousers" vs American "pants" — note the difference.']
      }
    ]
  })
];
