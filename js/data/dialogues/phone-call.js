import { createDialogue } from '../dialogueSchema.js?v=content109';

export const PHONE_CALL_DIALOGUES = [
  createDialogue({
    id: 'phone-call-resolving-misunderstanding-b1-01',
    locationId: 'phone-call',
    scenarioId: 'resolving-misunderstanding',
    title: 'Resolving a Misunderstanding',
    level: 'B1',
    variant: 1,
    length: 'medium',
    goal: 'Clear up a misunderstanding about a missed meeting.',
    tags: ['problem-solving', 'apology'],
    sceneType: 'home',
    characters: {
      A: { name: 'Sofia', role: 'Colleague', gender: 'female', accent: 'american', avatarPreset: 'colleague_f' },
      B: { name: 'You', role: 'Colleague', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Hey, it’s Sofia. I thought we agreed to meet at two — I waited for twenty minutes.', translation_tr: 'Merhaba, ben Sofia. Saat ikide buluşmayı kararlaştırdığımızı sanıyordum — yirmi dakika bekledim.', emotion: 'concerned', register: 'neutral' },
      {
        speaker: 'B', expected: 'I’m really sorry, I think there’s been a mix-up. I had three o’clock in my calendar.',
        altAccepted: ['I’m so sorry, I must have misunderstood — I had three o’clock written down.', 'Sorry about that, I think we got our wires crossed — I thought it was three.'],
        translation_tr: 'Gerçekten özür dilerim, sanırım bir karışıklık olmuş. Ben takvimimde üçü yazmıştım.',
        register: 'neutral', ipa: '/aɪm ˈrɪəli ˈsɒri aɪ θɪŋk ðɛərz bɪn ə mɪksˈʌp aɪ hæd θriː əˈklɒk ɪn maɪ ˈkælɪndər/',
        grammar: [
          { word: 'I think there’s been a mix-up', role: 'softening phrase + present perfect', note: 'Avoids blaming either person directly; presents it as a neutral mistake.' },
          { word: 'I had ... in my calendar', role: 'past simple', note: 'Explains your side of the misunderstanding factually.' }
        ],
        keyExpressions: [{ phrase: 'a mix-up', meaning: 'a confusion or mistake, often about times/plans' }, { phrase: 'get your wires crossed', meaning: 'idiom: to misunderstand each other about arrangements' }],
        exampleSentences: ['Sorry, there’s been a mix-up with the dates.'],
        pronunciationTips: ['Slow down slightly on "mix-up" so both syllables are clear.']
      },
      { speaker: 'A', text: 'Oh, I see — that explains it. No hard feelings, these things happen.', translation_tr: 'Ah, anlıyorum — bu açıklıyor. Kırgınlık yok, bu tür şeyler olur.', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'Thanks for understanding. Can we reschedule for tomorrow?',
        altAccepted: ['Thanks for being understanding. Shall we reschedule for tomorrow?', 'I appreciate that. Can we move it to tomorrow?'],
        translation_tr: 'Anlayışınız için teşekkürler. Yarına erteleyebilir miyiz?',
        register: 'neutral', ipa: '/θæŋks fɔːr ˌʌndərˈstændɪŋ kæn wiː ˌriːˈʃɛdjuːl fɔːr təˈmɒroʊ/',
        grammar: [
          { word: 'Thanks for understanding', role: 'gerund after preposition', note: '"For" is followed by the -ing form of the verb, not the base form.' },
          { word: 'reschedule', role: 'verb', note: 'Means "to arrange a new time" — the prefix "re-" means "again."' }
        ],
        keyExpressions: [{ phrase: 'reschedule for...', meaning: 'to set a new date/time for an appointment' }],
        exampleSentences: ['Could we reschedule for next week?'],
        pronunciationTips: ['Stress the second syllable of "reschedule": re-SCHED-ule.']
      }
    ]
  }),

  createDialogue({
    id: 'phone-call-making-appointment-a2-01',
    locationId: 'phone-call',
    scenarioId: 'making-appointment',
    title: 'Making an Appointment by Phone',
    level: 'A2',
    length: 'short',
    goal: 'Book an appointment and confirm the details on the phone.',
    tags: ['booking'],
    sceneType: 'home',
    characters: {
      A: { name: 'Sarah', role: 'Receptionist', gender: 'female', accent: 'british', avatarPreset: 'receptionist_f' },
      B: { name: 'You', role: 'Caller', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Good morning, Riverside Clinic. How can I help?', translation_tr: 'Günaydın, Riverside Kliniği. Nasıl yardımcı olabilirim?', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'Hello, I’d like to make an appointment with Dr Shah.',
        altAccepted: ['Hi, could I book an appointment with Dr Shah?', 'Good morning — I need to see Dr Shah, please.'],
        translation_tr: 'Merhaba, Dr Shah ile randevu almak istiyorum.',
        register: 'formal', ipa: '/aɪd laɪk tuː meɪk ən əˈpɔɪntmənt/',
        grammar: [
          { word: 'make an appointment', role: 'fixed collocation', note: 'English "makes" or "books" an appointment — never "takes" one.' },
          { word: 'with Dr Shah', role: 'preposition', note: 'You have an appointment WITH a person, AT a place.' }
        ],
        keyExpressions: [{ phrase: 'make an appointment', meaning: 'arrange a fixed time to meet a professional' }],
        exampleSentences: ['I made an appointment for Tuesday.', 'Can I book an appointment?'],
        pronunciationTips: ['"appointment" is stressed in the middle: a-POINT-ment.']
      },
      { speaker: 'A', text: 'She has a slot on Thursday at ten, or Friday at three.', translation_tr: 'Perşembe onda veya cuma üçte yeri var.', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Thursday at ten would be better for me.',
        altAccepted: ['I’ll take Thursday morning, please.', 'Ten on Thursday suits me best.'],
        translation_tr: 'Perşembe saat on benim için daha iyi olur.',
        register: 'formal', ipa: '/ˈθɜːrzdeɪ æt ten wʊd biː ˈbetər fɔːr miː/',
        grammar: [
          { word: 'would be better', role: 'polite comparative', note: '"Would" softens the preference so it does not sound like a demand.' },
          { word: 'slot', role: 'noun (speaker A)', note: 'An available period of time in a schedule.' }
        ],
        keyExpressions: [{ phrase: 'that suits me', meaning: 'that time is convenient for me' }],
        exampleSentences: ['Monday would be better for us.', 'Does two o’clock suit you?'],
        pronunciationTips: ['"Thursday" starts with the th sound — put your tongue between your teeth.']
      }
    ]
  }),

  createDialogue({
    id: 'phone-call-customer-service-call-b1-01',
    locationId: 'phone-call',
    scenarioId: 'customer-service-call',
    title: 'Calling Customer Service',
    level: 'B1',
    length: 'medium',
    goal: 'Explain a billing problem on the phone and get it resolved.',
    tags: ['complaint', 'problem-solving'],
    sceneType: 'home',
    characters: {
      A: { name: 'Kevin', role: 'Customer Service Agent', gender: 'male', accent: 'american', avatarPreset: 'assistant_m' },
      B: { name: 'You', role: 'Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Thanks for holding. How can I help you today?', translation_tr: 'Beklediğiniz için teşekkürler. Bugün nasıl yardımcı olabilirim?', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'I’ve been charged twice for the same order.',
        altAccepted: ['There’s a duplicate charge on my account.', 'My card was debited two times for one purchase.'],
        translation_tr: 'Aynı sipariş için iki kez ücretlendirildim.',
        register: 'formal', ipa: '/aɪv bɪn tʃɑːrdʒd twaɪs fɔːr ðə seɪm ˈɔːrdər/',
        grammar: [
          { word: 'I’ve been charged', role: 'present perfect passive', note: 'The focus is on you and the result; who made the error is not the point yet.' },
          { word: 'twice', role: 'frequency adverb', note: 'Means two times — more natural than saying "two times" here.' }
        ],
        keyExpressions: [{ phrase: 'charged twice', meaning: 'billed two times for one purchase' }],
        exampleSentences: ['I’ve been charged for delivery.', 'We were billed twice.'],
        pronunciationTips: ['"charged" is one syllable, ending in a /d͡ʒd/ sound.']
      },
      { speaker: 'A', text: 'I’m sorry about that. Could you give me the order number?', translation_tr: 'Bunun için üzgünüm. Sipariş numarasını verebilir misiniz?', emotion: 'apologetic', register: 'formal' },
      {
        speaker: 'B', expected: 'It’s A as in Alpha, four, nine, two, seven.',
        altAccepted: ['Yes — A, four nine two seven.', 'The number is A-4927. Shall I repeat it?'],
        translation_tr: 'A — Alpha’daki gibi — dört, dokuz, iki, yedi.',
        register: 'formal', ipa: '/eɪ æz ɪn ˈælfə fɔːr naɪn tuː ˈsevən/',
        grammar: [
          { word: 'A as in Alpha', role: 'clarification device', note: 'Naming a word that starts with the letter prevents confusion on the phone.' },
          { word: 'four, nine, two, seven', role: 'digit-by-digit', note: 'Reference numbers are read one digit at a time, with small pauses.' }
        ],
        keyExpressions: [{ phrase: 'X as in Y', meaning: 'clarifying a letter by giving an example word' }],
        exampleSentences: ['M as in Mary.', 'That’s S for Sugar.'],
        pronunciationTips: ['Pause briefly between digits — clarity beats speed on the phone.']
      },
      { speaker: 'A', text: 'I can see the duplicate. I’ll refund it today.', translation_tr: 'Mükerrer işlemi görüyorum. Bugün iade edeceğim.', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Thank you. Could you send me an email confirming that?',
        altAccepted: ['Great — please confirm it by email.', 'Thanks. May I have written confirmation?'],
        translation_tr: 'Teşekkürler. Bunu onaylayan bir e-posta gönderebilir misiniz?',
        register: 'formal', ipa: '/kʊd juː send miː ən ˈiːmeɪl kənˈfɜːrmɪŋ ðæt/',
        grammar: [
          { word: 'confirming that', role: 'participle clause', note: 'Short for "which confirms that" — compact and professional.' },
          { word: 'send me an email', role: 'double object', note: 'English allows "send someone something" without "to".' }
        ],
        keyExpressions: [{ phrase: 'confirm it in writing', meaning: 'get a written record of the agreement' }],
        exampleSentences: ['Could you email me the receipt?'],
        pronunciationTips: ['Always ask for written confirmation — and say it as a polite request, not a demand.']
      }
    ]
  })
];
