import { createDialogue } from '../dialogueSchema.js?v=content108';

export const BANK_DIALOGUES = [
  createDialogue({
    id: 'bank-charge-complaint-b2-01',
    locationId: 'bank',
    scenarioId: 'charge-complaint',
    title: 'Disputing an Unexpected Charge',
    level: 'B2',
    variant: 1,
    length: 'long',
    goal: 'Dispute an unfamiliar charge on your account and get it resolved.',
    tags: ['complaint', 'negotiation'],
    sceneType: 'bank-office',
    characters: {
      A: { name: 'Mr. Osei', role: 'Bank Representative', gender: 'male', accent: 'british', avatarPreset: 'banker_m' },
      B: { name: 'Customer', role: 'Bank Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Good afternoon. What can I do for you?', translation_tr: 'İyi günler. Sizin için ne yapabilirim?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'I noticed a charge on my statement that I don’t recognize, and I’d like to dispute it.',
        altAccepted: ['There’s a charge on my account I don’t recognize, and I’d like to dispute it.', 'I’d like to dispute a charge on my statement — I don’t recall making it.'],
        translation_tr: 'Hesap özetimde tanımadığım bir ücret fark ettim ve bunu itiraz etmek istiyorum.',
        register: 'formal', ipa: '/aɪ ˈnoʊtɪst ə tʃɑːrdʒ ɒn maɪ ˈsteɪtmənt ðæt aɪ doʊnt ˈrɛkəgnaɪz ænd aɪd laɪk tuː dɪsˈpjuːt ɪt/',
        grammar: [
          { word: 'I noticed', role: 'past simple', note: 'States the discovery of the problem as a fact.' },
          { word: 'that I don’t recognize', role: 'relative clause', note: 'Adds identifying detail about the charge without starting a new sentence.' },
          { word: 'I’d like to dispute it', role: 'formal request', note: '"Dispute" is a precise, professional verb for formally challenging a charge.' }
        ],
        keyExpressions: [{ phrase: 'I’d like to dispute a charge', meaning: 'the standard formal phrase for challenging a transaction' }],
        exampleSentences: ['I’d like to dispute a transaction from last week.'],
        pronunciationTips: ['Stress "dispute" on the second syllable: dis-PUTE.']
      },
      { speaker: 'A', text: 'I understand your concern. Could you point out the specific transaction?', translation_tr: 'Endişenizi anlıyorum. Belirli işlemi gösterebilir misiniz?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Yes, it’s this one here — dated the fifteenth, for eighty-nine dollars.',
        altAccepted: ['It’s this transaction, dated the fifteenth, for eighty-nine dollars.', 'Right here — the one from the fifteenth for eighty-nine dollars.'],
        translation_tr: 'Evet, işte bu — on beşinde, seksen dokuz dolar tutarında.',
        register: 'neutral', ipa: '/jɛs ɪts ðɪs wʌn hɪər ˈdeɪtɪd ðə ˈfɪfˈtiːnθ fɔːr ˈeɪti naɪn ˈdɒlərz/',
        grammar: [
          { word: 'dated the fifteenth', role: 'reduced relative clause', note: 'A shortened way of saying "which is dated the fifteenth" — common in precise, formal descriptions.' }
        ],
        keyExpressions: [{ phrase: 'dated the [date]', meaning: 'used to identify a transaction or document by its date' }],
        exampleSentences: ['The invoice dated the third hasn’t been paid yet.'],
        pronunciationTips: ['Pronounce "eighty-nine" clearly as two distinct number words.']
      },
      { speaker: 'A', text: 'I see it. I’ll file a dispute right away, and you should hear back within five business days.', translation_tr: 'Görüyorum. Hemen bir itiraz başlatacağım ve beş iş günü içinde geri dönüş alacaksınız.', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'That’s reassuring. Will the amount be refunded while the dispute is being reviewed?',
        altAccepted: ['That’s good to hear. Will I get the money back while it’s under review?', 'Good. Is the charge refunded while the dispute is being investigated?'],
        translation_tr: 'Bu rahatlatıcı. İtiraz incelenirken tutar iade edilecek mi?',
        register: 'formal', ipa: '/ðæts ˌriːəˈʃʊərɪŋ wɪl ðə əˈmaʊnt biː ˈriːfʌndɪd waɪl ðə dɪsˈpjuːt ɪz ˈbiːɪŋ rɪˈvjuːd/',
        grammar: [
          { word: 'Will the amount be refunded', role: 'future passive question', note: 'The focus is on the amount, not who refunds it — passive voice is natural here.' },
          { word: 'while the dispute is being reviewed', role: 'present continuous passive', note: 'Describes an ongoing background process during another action.' }
        ],
        keyExpressions: [{ phrase: 'while ... is being reviewed/investigated', meaning: 'describes something happening during an ongoing process' }],
        exampleSentences: ['Will my application be processed while I’m abroad?'],
        pronunciationTips: ['Keep a calm, even tone — this is a clarifying question, not a complaint.']
      }
    ]
  }),

  createDialogue({
    id: 'bank-opening-account-b1-01',
    locationId: 'bank',
    scenarioId: 'opening-account',
    title: 'Opening a Bank Account',
    level: 'B1',
    length: 'medium',
    goal: 'Open an account and understand the documents and fees involved.',
    tags: ['problem-solving', 'booking'],
    sceneType: 'bank-office',
    characters: {
      A: { name: 'Mr Sharma', role: 'Bank Adviser', gender: 'male', accent: 'indian', avatarPreset: 'banker_m' },
      B: { name: 'You', role: 'Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Good morning. How can I assist you today?', translation_tr: 'Günaydın. Bugün size nasıl yardımcı olabilirim?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'I’d like to open a current account, please.',
        altAccepted: ['I want to open a bank account.', 'Could I set up a checking account?'],
        translation_tr: 'Bir vadesiz hesap açtırmak istiyorum, lütfen.',
        register: 'formal', ipa: '/aɪd laɪk tuː ˈoʊpən ə ˈkʌrənt əˈkaʊnt/',
        grammar: [
          { word: 'current account', role: 'British banking term', note: 'The everyday account. Americans call it a "checking account".' },
          { word: 'open an account', role: 'fixed collocation', note: 'English "opens" an account — never "makes" or "builds" one.' }
        ],
        keyExpressions: [{ phrase: 'open an account', meaning: 'to start a new bank account' }],
        exampleSentences: ['I opened a savings account last year.'],
        pronunciationTips: ['"account" is stressed on the second syllable: a-COUNT.']
      },
      { speaker: 'A', text: 'Certainly. Do you have proof of address and identification?', translation_tr: 'Elbette. Adres belgeniz ve kimliğiniz var mı?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'I have my passport, but what counts as proof of address?',
        altAccepted: ['I brought my passport. What documents show my address?', 'Passport yes — which papers do you accept for address?'],
        translation_tr: 'Pasaportum var ama adres belgesi olarak ne geçerli?',
        register: 'formal', ipa: '/wɒt kaʊnts æz pruːf əv əˈdres/',
        grammar: [
          { word: 'counts as', role: 'verb + preposition', note: 'Means "is officially accepted as" — very useful in bureaucratic contexts.' },
          { word: 'proof of address', role: 'fixed noun phrase', note: 'A document showing where you live — a bill or tenancy agreement.' }
        ],
        keyExpressions: [{ phrase: 'What counts as...?', meaning: 'asking which items are officially acceptable' }],
        exampleSentences: ['Does a bank statement count as proof?', 'What counts as hand luggage?'],
        pronunciationTips: ['"proof" has a long oo: /pruːf/.']
      },
      { speaker: 'A', text: 'A utility bill or tenancy agreement from the last three months.', translation_tr: 'Son üç aya ait bir fatura veya kira sözleşmesi.', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Are there any monthly fees for this account?',
        altAccepted: ['Does the account cost anything to maintain?', 'Is there a charge for keeping it open?'],
        translation_tr: 'Bu hesap için aylık ücret var mı?',
        register: 'formal', ipa: '/ɑːr ðeər ˈeni ˈmʌnθli fiːz fɔːr ðɪs əˈkaʊnt/',
        grammar: [
          { word: 'fees', role: 'plural noun', note: 'Regular charges for a service — distinct from "fine", which is a penalty.' },
          { word: 'Are there any', role: 'existential question with "any"', note: 'The standard structure for asking whether something exists.' }
        ],
        keyExpressions: [{ phrase: 'monthly fees', meaning: 'regular charges for holding an account' }],
        exampleSentences: ['Are there any hidden fees?', 'There’s no monthly charge.'],
        pronunciationTips: ['"fees" and "fees" — keep the /z/ ending clear.']
      }
    ]
  }),

  createDialogue({
    id: 'bank-lost-card-a2-01',
    locationId: 'bank',
    scenarioId: 'lost-card',
    title: 'Reporting a Lost Card',
    level: 'A2',
    length: 'short',
    goal: 'Block a lost bank card and order a replacement.',
    tags: ['problem-solving'],
    sceneType: 'bank-office',
    characters: {
      A: { name: 'Diane', role: 'Bank Clerk', gender: 'female', accent: 'american', avatarPreset: 'agent_f2' },
      B: { name: 'You', role: 'Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Good afternoon. What can I do for you?', translation_tr: 'İyi günler. Sizin için ne yapabilirim?', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'I’ve lost my debit card. Could you block it, please?',
        altAccepted: ['My card is missing — please cancel it.', 'I need to report a lost card and stop it.'],
        translation_tr: 'Banka kartımı kaybettim. Bloke edebilir misiniz, lütfen?',
        register: 'formal', ipa: '/aɪv lɒst maɪ ˈdebɪt kɑːrd kʊd juː blɒk ɪt/',
        grammar: [
          { word: 'I’ve lost', role: 'present perfect', note: 'The result matters now: you currently have no card.' },
          { word: 'block it', role: 'banking verb', note: 'Means to stop the card being used. Also "cancel" or "freeze".' }
        ],
        keyExpressions: [{ phrase: 'block a card', meaning: 'stop a card from being used' }],
        exampleSentences: ['I’ve lost my phone.', 'Please block the card immediately.'],
        pronunciationTips: ['"debit" is DEB-it, not "deebit".']
      },
      { speaker: 'A', text: 'It’s blocked now. Shall I order you a new one?', translation_tr: 'Şimdi bloke edildi. Size yenisini sipariş edeyim mi?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Yes, please. How long will it take to arrive?',
        altAccepted: ['Please do — when will it come?', 'Yes. How soon will I get it?'],
        translation_tr: 'Evet, lütfen. Gelmesi ne kadar sürer?',
        register: 'formal', ipa: '/haʊ lɒŋ wɪl ɪt teɪk tuː əˈraɪv/',
        grammar: [
          { word: 'to arrive', role: 'infinitive of purpose', note: 'Completes "How long will it take" — the standard delivery question.' }
        ],
        keyExpressions: [{ phrase: 'How long will it take?', meaning: 'asking about a waiting or delivery period' }],
        exampleSentences: ['How long will the repair take?'],
        pronunciationTips: ['Keep "will it" light and quick — the stress falls on "take".']
      }
    ]
  })
];
