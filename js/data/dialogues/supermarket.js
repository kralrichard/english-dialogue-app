import { createDialogue } from '../dialogueSchema.js?v=content108';

export const SUPERMARKET_DIALOGUES = [
  createDialogue({
    id: 'supermarket-finding-item-a1-01',
    locationId: 'supermarket',
    scenarioId: 'finding-item',
    title: 'Looking for the Milk',
    level: 'A1',
    length: 'short',
    goal: 'Ask a shop assistant where a product is and understand the answer.',
    tags: ['directions'],
    sceneType: 'retail',
    characters: {
      A: { name: 'Tom', role: 'Shop Assistant', gender: 'male', accent: 'british', avatarPreset: 'clerk_m' },
      B: { name: 'You', role: 'Shopper', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Hello, can I help you find something?', translation_tr: 'Merhaba, bir şey bulmanıza yardım edebilir miyim?', emotion: 'friendly', register: 'neutral' },
      {
        speaker: 'B', expected: 'Yes, where is the milk?',
        altAccepted: ['Excuse me, where can I find the milk?', 'I’m looking for the milk.'],
        translation_tr: 'Evet, süt nerede?',
        register: 'neutral', ipa: '/jes weər ɪz ðə mɪlk/',
        grammar: [
          { word: 'where is', role: 'question form', note: 'The verb "is" comes before the noun in questions.' },
          { word: 'the milk', role: 'definite article', note: 'We use "the" for a product category the shop obviously has.' }
        ],
        keyExpressions: [{ phrase: 'Where is...?', meaning: 'the simplest way to ask for a location' }],
        exampleSentences: ['Where is the bread?', 'Where is the exit?'],
        pronunciationTips: ['"Where is" often blends into "where-z" in fast speech.']
      },
      { speaker: 'A', text: 'It’s in aisle four, at the back on the left.', translation_tr: 'Dört numaralı reyonda, arkada solda.', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'Sorry, which aisle?',
        altAccepted: ['Could you repeat that, please?', 'Sorry, aisle four?'],
        translation_tr: 'Pardon, hangi reyon?',
        register: 'neutral', ipa: '/ˈsɒri wɪtʃ aɪl/',
        grammar: [
          { word: 'which', role: 'question word', note: 'Used instead of "what" when choosing from a limited set — here, the shop’s aisles.' }
        ],
        keyExpressions: [{ phrase: 'Sorry, which...?', meaning: 'a short, polite way to ask someone to repeat one detail' }],
        exampleSentences: ['Sorry, which platform?', 'Sorry, which floor?'],
        pronunciationTips: ['"aisle" sounds exactly like "I’ll" — the s is silent.']
      },
      { speaker: 'A', text: 'Aisle four. Just past the bread section.', translation_tr: 'Dördüncü reyon. Ekmek bölümünün hemen ilerisinde.', emotion: 'friendly', register: 'neutral' },
      {
        speaker: 'B', expected: 'Great, thank you for your help.',
        altAccepted: ['Thanks a lot!', 'Thank you very much.'],
        translation_tr: 'Harika, yardımınız için teşekkürler.',
        register: 'neutral', ipa: '/ɡreɪt θæŋk juː fɔːr jɔːr help/',
        grammar: [
          { word: 'for your help', role: 'preposition + noun', note: 'We thank someone FOR something — the preposition never changes.' }
        ],
        keyExpressions: [{ phrase: 'thank you for your help', meaning: 'a standard polite closing after someone assists you' }],
        exampleSentences: ['Thank you for your time.', 'Thanks for your patience.'],
        pronunciationTips: ['Stress "help" — it carries the meaning of the phrase.']
      }
    ]
  }),

  createDialogue({
    id: 'supermarket-product-questions-a2-01',
    locationId: 'supermarket',
    scenarioId: 'product-questions',
    title: 'Asking About a Product',
    level: 'A2',
    length: 'short',
    goal: 'Ask about ingredients and expiry, and decide whether to buy.',
    tags: ['problem-solving'],
    sceneType: 'retail',
    characters: {
      A: { name: 'Priya', role: 'Shop Assistant', gender: 'female', accent: 'indian', avatarPreset: 'pharmacist_f' },
      B: { name: 'You', role: 'Shopper', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'That’s a good choice — it’s our own brand.', translation_tr: 'İyi bir seçim — bu bizim kendi markamız.', emotion: 'friendly', register: 'neutral' },
      {
        speaker: 'B', expected: 'Does this contain any nuts?',
        altAccepted: ['Are there nuts in this?', 'Is this nut-free?'],
        translation_tr: 'Bunun içinde fındık fıstık var mı?',
        register: 'neutral', ipa: '/dʌz ðɪs kənˈteɪn ˈeni nʌts/',
        grammar: [
          { word: 'Does this contain', role: 'present simple question', note: 'After "does," the main verb has no -s: contain, not contains.' },
          { word: 'any', role: 'quantifier', note: 'Used in questions and negatives with plural or uncountable nouns.' }
        ],
        keyExpressions: [{ phrase: 'Does this contain...?', meaning: 'asking about ingredients, important for allergies' }],
        exampleSentences: ['Does this contain sugar?', 'Does it contain alcohol?'],
        pronunciationTips: ['"contain" is stressed on the second syllable: con-TAIN.']
      },
      { speaker: 'A', text: 'Let me check the label… No, it’s completely nut-free.', translation_tr: 'Etikete bir bakayım… Hayır, tamamen fındıksız.', emotion: 'thinking', register: 'neutral' },
      {
        speaker: 'B', expected: 'And how long does it last once it’s opened?',
        altAccepted: ['How long can I keep it after opening?', 'When does it expire after opening?'],
        translation_tr: 'Peki açıldıktan sonra ne kadar dayanır?',
        register: 'neutral', ipa: '/ænd haʊ lɒŋ dʌz ɪt lɑːst wʌns ɪts ˈoʊpənd/',
        grammar: [
          { word: 'How long', role: 'question phrase', note: 'Asks about duration of time, not physical length.' },
          { word: 'once it’s opened', role: 'time clause + passive', note: '"Once" means "as soon as / after". The passive focuses on the product, not who opens it.' }
        ],
        keyExpressions: [{ phrase: 'How long does it last?', meaning: 'asking how many days something stays good' }],
        exampleSentences: ['How long does the battery last?', 'Once it’s cooked, eat it within two days.'],
        pronunciationTips: ['"last once it’s" links together — practise it as one flowing chunk.']
      },
      { speaker: 'A', text: 'About five days in the fridge.', translation_tr: 'Buzdolabında yaklaşık beş gün.', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'Perfect, I’ll take two then.',
        altAccepted: ['Great, I’ll take two.', 'In that case, I’ll buy two.'],
        translation_tr: 'Mükemmel, o zaman iki tane alayım.',
        register: 'informal', ipa: '/ˈpɜːrfɪkt aɪl teɪk tuː ðen/',
        grammar: [
          { word: 'I’ll take', role: 'decision + verb "take"', note: 'In shops, "I’ll take it" is the natural way to say you will buy something.' },
          { word: 'then', role: 'discourse marker', note: 'At the end of a sentence it means "in that case / as a result of what you told me".' }
        ],
        keyExpressions: [{ phrase: 'I’ll take two', meaning: 'I have decided to buy two of these' }],
        exampleSentences: ['I’ll take the blue one.', 'We’ll take three, please.'],
        pronunciationTips: ['Final "then" is unstressed and quiet — it just softens the sentence.']
      }
    ]
  }),

  createDialogue({
    id: 'supermarket-checkout-a1-01',
    locationId: 'supermarket',
    scenarioId: 'checkout',
    title: 'Paying at the Checkout',
    level: 'A1',
    length: 'short',
    goal: 'Complete a purchase at the till and pay by card.',
    tags: ['ordering'],
    sceneType: 'retail',
    characters: {
      A: { name: 'Jess', role: 'Cashier', gender: 'female', accent: 'british', avatarPreset: 'waiter_f' },
      B: { name: 'You', role: 'Shopper', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Hi there. Do you need a bag?', translation_tr: 'Merhaba. Poşet ister misiniz?', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Yes, one bag please.',
        altAccepted: ['No thanks, I have my own.', 'Yes, please — just one.'],
        translation_tr: 'Evet, bir poşet lütfen.',
        register: 'informal', ipa: '/jes wʌn bæɡ pliːz/',
        grammar: [
          { word: 'one bag', role: 'number + singular noun', note: 'After "one," the noun stays singular: one bag, two bags.' }
        ],
        keyExpressions: [{ phrase: 'Do you need a bag?', meaning: 'a standard checkout question in most shops' }],
        exampleSentences: ['Yes, two bags please.', 'No thanks, I brought one.'],
        pronunciationTips: ['Keep "one bag please" as three short, even beats.']
      },
      { speaker: 'A', text: 'That comes to eighteen pounds forty.', translation_tr: 'Toplam on sekiz sterlin kırk peni.', emotion: 'neutral', register: 'informal' },
      {
        speaker: 'B', expected: 'Can I pay by card?',
        altAccepted: ['Do you take card?', 'Is card okay?'],
        translation_tr: 'Kartla ödeyebilir miyim?',
        register: 'neutral', ipa: '/kæn aɪ peɪ baɪ kɑːrd/',
        grammar: [
          { word: 'pay by card', role: 'fixed collocation', note: 'We say "pay BY card" but "pay IN cash" — the prepositions are fixed.' }
        ],
        keyExpressions: [{ phrase: 'pay by card', meaning: 'to pay with a bank or credit card' }],
        exampleSentences: ['Can I pay by card?', 'I’d rather pay in cash.'],
        pronunciationTips: ['"by card" — both words have a clear /k/ and /b/; don’t swallow them.']
      },
      { speaker: 'A', text: 'Of course. Tap whenever you’re ready.', translation_tr: 'Tabii ki. Hazır olduğunuzda okutabilirsiniz.', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Done. Could I have the receipt, please?',
        altAccepted: ['There we go. Can I get a receipt?', 'That’s done — receipt, please.'],
        translation_tr: 'Tamamdır. Fişi alabilir miyim, lütfen?',
        register: 'neutral', ipa: '/dʌn kʊd aɪ hæv ðə rɪˈsiːt pliːz/',
        grammar: [
          { word: 'Could I have', role: 'polite request', note: 'A soft, polite request form suitable for any shop.' },
          { word: 'the receipt', role: 'definite article', note: '"The" because both people know which receipt — this purchase.' }
        ],
        keyExpressions: [{ phrase: 'Could I have the receipt?', meaning: 'asking for proof of purchase' }],
        exampleSentences: ['Could I have a bag as well?', 'Could I have the menu, please?'],
        pronunciationTips: ['The "p" in "receipt" is silent: /rɪˈsiːt/.']
      }
    ]
  })
];
