import { createDialogue } from '../dialogueSchema.js';

export const PASSPORT_CONTROL_DIALOGUES = [
  createDialogue({
    id: 'passport-control-standard-entry-a1-01',
    locationId: 'passport-control',
    scenarioId: 'standard-entry',
    title: 'Standard Entry Questions',
    level: 'A1',
    variant: 1,
    length: 'short',
    goal: 'Answer the passport officer’s questions and enter the country.',
    tags: ['travel'],
    sceneType: 'airport',
    characters: {
      A: { name: 'Officer Reyes', role: 'Passport Control Officer', gender: 'male', accent: 'american', avatarPreset: 'officer_m' },
      B: { name: 'Traveler', role: 'Traveler', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Good morning. May I see your passport, please?', translation_tr: 'Günaydın. Pasaportunuzu görebilir miyim, lütfen?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Of course. Here you are.',
        altAccepted: ['Sure, here you are.', 'Yes, here you go.'],
        translation_tr: 'Elbette. Buyurun.',
        register: 'formal', ipa: '/əv kɔːrs hɪər juː ɑːr/',
        grammar: [
          { word: 'Of course', role: 'fixed response', note: 'A polite way to agree immediately to a request.' }
        ],
        keyExpressions: [{ phrase: 'Of course', meaning: 'a polite way of saying "yes, certainly"' }],
        exampleSentences: ['Of course, one moment please.'],
        pronunciationTips: ['Keep "of course" short and connected — it should sound like one word.']
      },
      { speaker: 'A', text: 'What is the purpose of your visit?', translation_tr: 'Ziyaretinizin amacı nedir?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'I’m here on vacation.',
        altAccepted: ['I’m here for tourism.', 'I’m visiting for vacation.'],
        translation_tr: 'Tatil için buradayım.',
        register: 'neutral', ipa: '/aɪm hɪər ɒn veɪˈkeɪʃən/',
        grammar: [
          { word: 'I’m here', role: 'subject + verb + adverb', note: 'States your current location/purpose.' },
          { word: 'on vacation', role: 'prepositional phrase', note: '"On" is used with certain fixed travel expressions like "on vacation," "on business."' }
        ],
        keyExpressions: [{ phrase: 'on vacation', meaning: 'traveling for rest/leisure, not work' }, { phrase: 'on business', meaning: 'traveling for work' }],
        exampleSentences: ['I’m here on business.', 'We’re here on vacation for two weeks.'],
        pronunciationTips: ['Stress the second syllable of "vacation": va-CA-tion.']
      },
      { speaker: 'A', text: 'How long will you be staying?', translation_tr: 'Ne kadar süre kalacaksınız?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'I’ll be staying for one week.',
        altAccepted: ['I’m staying for a week.', 'For one week.'],
        translation_tr: 'Bir hafta kalacağım.',
        register: 'neutral', ipa: '/aɪl biː ˈsteɪɪŋ fɔːr wʌn wiːk/',
        grammar: [
          { word: 'I’ll be staying', role: 'future continuous', note: 'Describes a planned action that will continue over a period of time.' },
          { word: 'for one week', role: 'time expression', note: 'States the duration of the stay.' }
        ],
        keyExpressions: [{ phrase: 'I’ll be staying for...', meaning: 'used to state the length of your stay' }],
        exampleSentences: ['I’ll be staying for three days.'],
        pronunciationTips: ['Contract "I will" to "I’ll" — say it as one quick syllable.']
      }
    ]
  }),

  createDialogue({
    id: 'passport-control-extended-questioning-b2-01',
    locationId: 'passport-control',
    scenarioId: 'extended-questioning',
    title: 'Extended Questioning at the Border',
    level: 'B2',
    length: 'medium',
    goal: 'Answer detailed border questions calmly and consistently.',
    tags: ['problem-solving'],
    sceneType: 'airport',
    characters: {
      A: { name: 'Officer Lang', role: 'Border Officer', gender: 'female', accent: 'international', avatarPreset: 'officer_m' },
      B: { name: 'You', role: 'Traveller', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'You’ve visited three times this year. What’s the reason for the frequency?', translation_tr: 'Bu yıl üç kez geldiniz. Bu sıklığın sebebi nedir?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'My company has a branch here, so I come over for quarterly meetings.',
        altAccepted: ['I travel here for work — my employer has an office in the city.', 'Business. Our regional office is here and I attend reviews every quarter.'],
        translation_tr: 'Şirketimin burada bir şubesi var, üç aylık toplantılar için geliyorum.',
        register: 'formal', ipa: '/maɪ ˈkʌmpəni hæz ə brɑːntʃ hɪər soʊ aɪ kʌm ˈoʊvər/',
        grammar: [
          { word: 'so', role: 'result connector', note: 'Links the fact to the explanation clearly — border officers value directness.' },
          { word: 'quarterly', role: 'adjective of frequency', note: 'Means four times a year, every three months.' }
        ],
        keyExpressions: [{ phrase: 'come over', meaning: 'travel here from another country' }],
        exampleSentences: ['We hold quarterly reviews.', 'He comes over every summer.'],
        pronunciationTips: ['Answer at a steady pace — rushing can read as nervousness.']
      },
      { speaker: 'A', text: 'Who covers your expenses while you’re here?', translation_tr: 'Buradayken masraflarınızı kim karşılıyor?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'My employer does. I have a letter confirming that, if you’d like to see it.',
        altAccepted: ['The company pays for everything — I can show you the letter.', 'My employer covers them. I have documentation with me.'],
        translation_tr: 'İşverenim karşılıyor. İsterseniz bunu doğrulayan bir mektubum var.',
        register: 'formal', ipa: '/maɪ ɪmˈplɔɪər dʌz aɪ hæv ə ˈletər kənˈfɜːrmɪŋ ðæt/',
        grammar: [
          { word: 'My employer does', role: 'auxiliary substitution', note: '"Does" replaces "covers my expenses" — natural and concise.' },
          { word: 'if you’d like to see it', role: 'conditional offer', note: 'Offering evidence proactively builds credibility.' }
        ],
        keyExpressions: [{ phrase: 'cover expenses', meaning: 'pay the costs' }],
        exampleSentences: ['Who covers the cost?', 'I have a letter confirming my booking.'],
        pronunciationTips: ['"employer" is stressed in the middle: em-PLOY-er.']
      },
      { speaker: 'A', text: 'That won’t be necessary. How long will you stay this time?', translation_tr: 'Buna gerek olmayacak. Bu sefer ne kadar kalacaksınız?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Five days. I fly back on Sunday evening.',
        altAccepted: ['Just under a week — my return flight is Sunday.', 'Five nights, returning on Sunday.'],
        translation_tr: 'Beş gün. Pazar akşamı dönüyorum.',
        register: 'formal', ipa: '/faɪv deɪz aɪ flaɪ bæk ɒn ˈsʌndeɪ ˈiːvnɪŋ/',
        grammar: [
          { word: 'I fly back', role: 'present simple for timetables', note: 'Fixed schedules use the present simple, even about the future.' },
          { word: 'on Sunday evening', role: 'preposition of time', note: 'Use "on" with a specific day, even with a part of that day attached.' }
        ],
        keyExpressions: [{ phrase: 'fly back', meaning: 'return by plane' }],
        exampleSentences: ['I fly out on Monday.', 'The train leaves at six.'],
        pronunciationTips: ['Give short, factual answers — extra detail invites more questions.']
      }
    ]
  })
];
