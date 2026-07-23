import { createDialogue } from '../dialogueSchema.js';

export const GYM_DIALOGUES = [
  createDialogue({
    id: 'gym-membership-questions-a2-01',
    locationId: 'gym',
    scenarioId: 'membership-questions',
    title: 'Asking About Membership',
    level: 'A2',
    length: 'short',
    goal: 'Compare membership options and ask what is included.',
    tags: ['booking', 'problem-solving'],
    sceneType: 'gym',
    characters: {
      A: { name: 'Chris', role: 'Gym Receptionist', gender: 'male', accent: 'american', avatarPreset: 'assistant_m' },
      B: { name: 'You', role: 'Visitor', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Hi! Are you interested in joining?', translation_tr: 'Merhaba! Üye olmakla ilgileniyor musunuz?', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Yes, how much does a monthly membership cost?',
        altAccepted: ['Yes, what are your monthly prices?', 'I’d like to know the price per month.'],
        translation_tr: 'Evet, aylık üyelik ne kadar?',
        register: 'neutral', ipa: '/haʊ mʌtʃ dʌz ə ˈmʌnθli ˈmembərʃɪp kɒst/',
        grammar: [
          { word: 'How much does', role: 'price question', note: 'For prices English uses "How much does X cost?" or "How much is X?"' },
          { word: 'monthly', role: 'adjective from noun', note: 'From "month" + -ly. Also: weekly, yearly, daily.' }
        ],
        keyExpressions: [{ phrase: 'How much does it cost?', meaning: 'the standard way to ask a price' }],
        exampleSentences: ['How much does the ticket cost?', 'How much is a coffee here?'],
        pronunciationTips: ['"cost" has a short vowel — do not stretch it into "coast".']
      },
      { speaker: 'A', text: 'It’s thirty a month, or twenty-five if you pay for a year.', translation_tr: 'Aylık otuz, bir yıllık öderseniz yirmi beş.', emotion: 'neutral', register: 'informal' },
      {
        speaker: 'B', expected: 'Does that include the fitness classes?',
        altAccepted: ['Are the classes included?', 'Do I get access to classes as well?'],
        translation_tr: 'Buna fitness dersleri dahil mi?',
        register: 'neutral', ipa: '/dʌz ðæt ɪnˈkluːd ðə ˈfɪtnəs ˈklɑːsɪz/',
        grammar: [
          { word: 'Does that include', role: 'question about what is covered', note: 'Very useful for prices, packages and tickets.' },
          { word: 'classes', role: 'plural with -es', note: 'Nouns ending in -ss add -es in the plural: class → classes.' }
        ],
        keyExpressions: [{ phrase: 'Does that include...?', meaning: 'checking what is part of the price' }],
        exampleSentences: ['Does that include a locker?', 'Does the price include VAT?'],
        pronunciationTips: ['"classes" is two syllables: CLASS-iz.']
      },
      { speaker: 'A', text: 'Classes are included, but personal training costs extra.', translation_tr: 'Dersler dahil, ama kişisel antrenman ekstra ücretli.', emotion: 'neutral', register: 'informal' },
      {
        speaker: 'B', expected: 'Can I try the gym once before I decide?',
        altAccepted: ['Do you offer a free trial?', 'Could I have a trial session first?'],
        translation_tr: 'Karar vermeden önce bir kez deneyebilir miyim?',
        register: 'neutral', ipa: '/kæn aɪ traɪ ðə dʒɪm wʌns bɪˈfɔːr aɪ dɪˈsaɪd/',
        grammar: [
          { word: 'before I decide', role: 'time clause', note: 'After "before" about the future, English uses the present simple.' },
          { word: 'once', role: 'adverb of frequency', note: 'Here it means "one time", not "in the past".' }
        ],
        keyExpressions: [{ phrase: 'free trial', meaning: 'a chance to test a service without paying' }],
        exampleSentences: ['Can I try it before I buy it?', 'Call me before you leave.'],
        pronunciationTips: ['"decide" is stressed on the second syllable: de-CIDE.']
      }
    ]
  }),

  createDialogue({
    id: 'gym-asking-spotter-a2-01',
    locationId: 'gym',
    scenarioId: 'asking-spotter',
    title: 'Asking Someone for a Spot',
    level: 'A2',
    length: 'short',
    goal: 'Politely ask a stranger for help with a weight exercise.',
    tags: ['small-talk', 'problem-solving'],
    sceneType: 'gym',
    characters: {
      A: { name: 'Dev', role: 'Gym Member', gender: 'male', accent: 'indian', avatarPreset: 'guest_m' },
      B: { name: 'You', role: 'Gym Member', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Are you using this bench?', translation_tr: 'Bu sehpayı kullanıyor musunuz?', emotion: 'neutral', register: 'informal' },
      {
        speaker: 'B', expected: 'Yes, but I’m nearly done. Could you spot me on the last set?',
        altAccepted: ['I am, but one more set. Would you mind spotting me?', 'Yes — actually, could you help me with this last set?'],
        translation_tr: 'Evet ama neredeyse bitirdim. Son sette bana yardım eder misiniz?',
        register: 'informal', ipa: '/kʊd juː spɒt miː ɒn ðə lɑːst set/',
        grammar: [
          { word: 'spot me', role: 'gym-specific verb', note: 'To "spot" someone means to stand ready to help if they cannot lift the weight.' },
          { word: 'nearly done', role: 'adverb + adjective', note: '"Nearly" means almost — a soft way to say you will not be long.' }
        ],
        keyExpressions: [{ phrase: 'spot me', meaning: 'stand by and help me lift safely' }],
        exampleSentences: ['Could you spot me, please?', 'I’m nearly finished.'],
        pronunciationTips: ['"Could you" often blends into "cud-juh".']
      },
      { speaker: 'A', text: 'Sure, no problem. How many reps are you doing?', translation_tr: 'Tabii, sorun değil. Kaç tekrar yapıyorsunuz?', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Eight, but I might need help on the last two.',
        altAccepted: ['Eight reps — the final two are hard.', 'About eight, and I usually struggle at the end.'],
        translation_tr: 'Sekiz, ama son ikisinde yardıma ihtiyacım olabilir.',
        register: 'informal', ipa: '/eɪt bʌt aɪ maɪt niːd help ɒn ðə lɑːst tuː/',
        grammar: [
          { word: 'might need', role: 'modal of possibility', note: '"Might" expresses a real but uncertain possibility — softer than "will".' }
        ],
        keyExpressions: [{ phrase: 'I might need help', meaning: 'a modest way to warn someone you may struggle' }],
        exampleSentences: ['I might be late.', 'We might need an extra chair.'],
        pronunciationTips: ['"might need" — the t is swallowed: "my-need".']
      },
      { speaker: 'A', text: 'I’ve got you. Take your time.', translation_tr: 'Ben buradayım. Acele etme.', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Thanks a lot, I really appreciate it.',
        altAccepted: ['Cheers, that’s really helpful.', 'Thank you — much appreciated.'],
        translation_tr: 'Çok teşekkürler, gerçekten minnettarım.',
        register: 'informal', ipa: '/θæŋks ə lɒt aɪ ˈrɪəli əˈpriːʃieɪt ɪt/',
        grammar: [
          { word: 'I’ve got you', role: 'idiom (from the speaker A)', note: 'Means "I am here / I will catch you" — reassurance, not possession.' }
        ],
        keyExpressions: [{ phrase: 'I’ve got you', meaning: 'don’t worry, I am supporting you' }],
        exampleSentences: ['Thanks a lot for waiting.'],
        pronunciationTips: ['"a lot" is two words — never write or say "alot".']
      }
    ]
  }),

  createDialogue({
    id: 'gym-class-signup-a2-01',
    locationId: 'gym',
    scenarioId: 'class-signup',
    title: 'Signing Up for a Fitness Class',
    level: 'A2',
    length: 'short',
    goal: 'Book a place in a class and check what you need to bring.',
    tags: ['booking'],
    sceneType: 'gym',
    characters: {
      A: { name: 'Amy', role: 'Class Instructor', gender: 'female', accent: 'australian', avatarPreset: 'assistant_f' },
      B: { name: 'You', role: 'Gym Member', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Hi! Looking to join the yoga class?', translation_tr: 'Merhaba! Yoga dersine katılmak mı istiyorsunuz?', emotion: 'happy', register: 'informal' },
      {
        speaker: 'B', expected: 'Yes, is there space in the Tuesday class?',
        altAccepted: ['Yes, are there any places left on Tuesday?', 'I’d like to join — is Tuesday full?'],
        translation_tr: 'Evet, salı dersinde yer var mı?',
        register: 'neutral', ipa: '/ɪz ðeər speɪs ɪn ðə ˈtuːzdeɪ klɑːs/',
        grammar: [
          { word: 'Is there space', role: 'existential question', note: '"Space" here is uncountable, meaning available room or places.' },
          { word: 'in the Tuesday class', role: 'preposition of place', note: 'We are "in" a class when we participate in it.' }
        ],
        keyExpressions: [{ phrase: 'Is there space?', meaning: 'asking whether places are still available' }],
        exampleSentences: ['Is there space for one more?', 'Are there any seats left?'],
        pronunciationTips: ['"Tuesday" is TOOZ-day in American, TYOOZ-day in British English.']
      },
      { speaker: 'A', text: 'There are two places left. Shall I book you in?', translation_tr: 'İki yer kaldı. Sizi kaydedeyim mi?', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Yes please. What should I bring with me?',
        altAccepted: ['Yes, thank you. Do I need to bring anything?', 'Please do. What do I need for the class?'],
        translation_tr: 'Evet lütfen. Yanımda ne getirmeliyim?',
        register: 'neutral', ipa: '/wɒt ʃʊd aɪ brɪŋ wɪð miː/',
        grammar: [
          { word: 'should I bring', role: 'modal for advice', note: '"Should" asks for a recommendation about what is sensible.' },
          { word: 'with me', role: 'prepositional phrase', note: 'Optional but very natural — English often adds it after "bring".' }
        ],
        keyExpressions: [{ phrase: 'book someone in', meaning: 'to reserve a place for someone' }],
        exampleSentences: ['What should I wear?', 'Should I bring my own mat?'],
        pronunciationTips: ['The l in "should" is silent: /ʃʊd/.']
      },
      { speaker: 'A', text: 'Just a towel and water — we provide the mats.', translation_tr: 'Sadece havlu ve su — matları biz sağlıyoruz.', emotion: 'neutral', register: 'informal' },
      {
        speaker: 'B', expected: 'Great, I’ll see you on Tuesday then.',
        altAccepted: ['Perfect — see you Tuesday!', 'Sounds good, I’ll be there.'],
        translation_tr: 'Harika, o zaman salı görüşürüz.',
        register: 'informal', ipa: '/aɪl siː juː ɒn ˈtuːzdeɪ ðen/',
        grammar: [
          { word: 'I’ll see you', role: 'future arrangement', note: 'A warm, natural way to end a conversation about a future meeting.' },
          { word: 'on Tuesday', role: 'preposition of time', note: 'Use "on" with days of the week: on Monday, on Friday.' }
        ],
        keyExpressions: [{ phrase: 'See you on Tuesday', meaning: 'a friendly closing for a planned meeting' }],
        exampleSentences: ['See you on Friday!', 'I’ll see you at six.'],
        pronunciationTips: ['"see you" often becomes "see-yuh" in relaxed speech.']
      }
    ]
  })
];
