import { createDialogue } from '../dialogueSchema.js';

export const CAFE_DIALOGUES = [
  createDialogue({
    id: 'cafe-ordering-coffee-a1-01',
    locationId: 'cafe',
    scenarioId: 'ordering-coffee',
    title: 'Ordering a Coffee',
    level: 'A1',
    variant: 1,
    length: 'short',
    goal: 'Order a drink and pay for it.',
    tags: ['ordering'],
    sceneType: 'cafe',
    characters: {
      A: { name: 'Marco', role: 'Barista', gender: 'male', accent: 'american', avatarPreset: 'barista_m' },
      B: { name: 'Customer', role: 'Café Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Hi there! What can I get for you?', translation_tr: 'Merhaba! Sizin için ne alabilirim?', emotion: 'happy', register: 'informal' },
      {
        speaker: 'B', expected: 'Can I have a medium latte, please?',
        altAccepted: ['I’d like a medium latte, please.', 'Can I get a medium latte, please?'],
        translation_tr: 'Orta boy bir latte alabilir miyim, lütfen?',
        register: 'informal', ipa: '/kæn aɪ hæv ə ˈmiːdiəm ˈlɑːteɪ pliːz/',
        grammar: [
          { word: 'Can I have', role: 'polite request form', note: 'A simple, common way to ask for something in a shop.' },
          { word: 'a', role: 'indefinite article', note: 'Used before "medium latte" because it is one, non-specific item.' },
          { word: 'medium', role: 'adjective', note: 'Describes the size of the drink.' },
          { word: 'please', role: 'politeness marker', note: 'Makes the request sound polite.' }
        ],
        keyExpressions: [{ phrase: 'Can I have...', meaning: 'a simple, polite way to order or ask for something' }],
        exampleSentences: ['Can I have the bill, please?', 'Can I have a glass of water?'],
        pronunciationTips: ['Say "latte" as LAH-tay, with stress on the first part.']
      },
      { speaker: 'A', text: 'Sure! For here or to go?', translation_tr: 'Tabii! Burada mı yoksa yanınıza mı?', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'To go, please.',
        altAccepted: ['To go, thanks.', 'For here, please.'],
        translation_tr: 'Yanıma alacağım, lütfen.',
        register: 'informal', ipa: '/tuː goʊ pliːz/',
        grammar: [
          { word: 'To go', role: 'fixed expression', note: 'Means "to take away," not to drink in the café.' }
        ],
        keyExpressions: [{ phrase: 'to go', meaning: 'take-away, not eaten/drunk on the premises' }],
        exampleSentences: ['I’ll have a coffee to go, please.'],
        pronunciationTips: ['Keep it short and clear — two even beats: "to" and "go."']
      },
      { speaker: 'A', text: 'Great, that’s four dollars fifty.', translation_tr: 'Harika, bu dört dolar elli sent.', emotion: 'neutral', register: 'informal' },
      {
        speaker: 'B', expected: 'Here you go.',
        altAccepted: ['Here you are.', 'Here’s five dollars.'],
        translation_tr: 'Buyurun.',
        register: 'informal', ipa: '/hɪər juː goʊ/',
        grammar: [
          { word: 'Here you go', role: 'fixed expression', note: 'Used when handing something (like money) to someone.' }
        ],
        keyExpressions: [{ phrase: 'here you go', meaning: 'said when giving something to someone, informal' }],
        exampleSentences: ['Here you go, one latte to go.'],
        pronunciationTips: ['Say it in one smooth breath, no pauses between the words.']
      }
    ]
  }),

  createDialogue({
    id: 'cafe-barista-smalltalk-a2-01',
    locationId: 'cafe',
    scenarioId: 'barista-smalltalk',
    title: 'Small Talk with the Barista',
    level: 'A2',
    length: 'short',
    goal: 'Have a short friendly exchange while your drink is made.',
    tags: ['small-talk'],
    sceneType: 'cafe',
    characters: {
      A: { name: 'Marco', role: 'Barista', gender: 'male', accent: 'american', avatarPreset: 'barista_m' },
      B: { name: 'You', role: 'Regular Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'The usual today? You’re here early!', translation_tr: 'Bugün her zamankinden mi? Erken gelmişsin!', emotion: 'happy', register: 'informal' },
      {
        speaker: 'B', expected: 'Yes, please. I’ve got an early meeting.',
        altAccepted: ['The usual, thanks — I start work early today.', 'Yes please. Busy morning ahead!'],
        translation_tr: 'Evet, lütfen. Erken bir toplantım var.',
        register: 'informal', ipa: '/aɪv ɡɒt ən ˈɜːrli ˈmiːtɪŋ/',
        grammar: [
          { word: 'I’ve got', role: 'informal "have"', note: 'Very common in British English for possession or arrangements.' },
          { word: 'an early meeting', role: 'article + adjective', note: '"An" is used because "early" starts with a vowel sound.' }
        ],
        keyExpressions: [{ phrase: 'the usual', meaning: 'the same order you always have' }],
        exampleSentences: ['I’ve got a lot on today.', 'She’s got an interview tomorrow.'],
        pronunciationTips: ['"I’ve got an" runs together: "ayv-gott-un".']
      },
      { speaker: 'A', text: 'Rather you than me! Cold out there, isn’t it?', translation_tr: 'Sen bilirsin! Dışarısı soğuk, değil mi?', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Freezing! I nearly turned back for a warmer coat.',
        altAccepted: ['Absolutely — I should have worn a thicker jacket.', 'It’s bitter. I wasn’t dressed for it at all.'],
        translation_tr: 'Buz gibi! Neredeyse daha kalın bir mont için geri dönecektim.',
        register: 'informal', ipa: '/ˈfriːzɪŋ aɪ ˈnɪərli tɜːrnd bæk/',
        grammar: [
          { word: 'Freezing', role: 'extreme adjective', note: 'Extreme adjectives replace "very cold" — do not say "very freezing".' },
          { word: 'nearly', role: 'adverb', note: 'Means "almost" — the action did not actually happen.' },
          { word: 'turned back', role: 'phrasal verb', note: 'Means to return the way you came.' }
        ],
        keyExpressions: [{ phrase: 'Rather you than me', meaning: 'humorous sympathy — I’m glad it’s not me' }],
        exampleSentences: ['It’s freezing today.', 'I nearly missed the bus.'],
        pronunciationTips: ['Say "Freezing!" with energy — one-word reactions need strong intonation.']
      }
    ]
  }),

  createDialogue({
    id: 'cafe-studying-chat-b1-01',
    locationId: 'cafe',
    scenarioId: 'studying-chat',
    title: 'Working at a Café',
    level: 'B1',
    length: 'short',
    goal: 'Ask about wifi and whether you can stay and work.',
    tags: ['problem-solving'],
    sceneType: 'cafe',
    characters: {
      A: { name: 'Ines', role: 'Café Staff', gender: 'female', accent: 'international', avatarPreset: 'assistant_f' },
      B: { name: 'You', role: 'Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'One flat white. Anything else?', translation_tr: 'Bir flat white. Başka bir şey?', emotion: 'neutral', register: 'informal' },
      {
        speaker: 'B', expected: 'Do you have wifi? I need to work for a couple of hours.',
        altAccepted: ['Is there wifi here? I’d like to stay and work.', 'What’s your wifi password? I have some work to do.'],
        translation_tr: 'Wifi var mı? Birkaç saat çalışmam gerekiyor.',
        register: 'informal', ipa: '/duː juː hæv ˈwaɪfaɪ aɪ niːd tuː wɜːrk/',
        grammar: [
          { word: 'a couple of hours', role: 'quantity phrase', note: 'Means roughly two, but often used loosely for "a few".' },
          { word: 'need to', role: 'necessity', note: 'Expresses something required by circumstances, not by a rule.' }
        ],
        keyExpressions: [{ phrase: 'a couple of hours', meaning: 'approximately two hours' }],
        exampleSentences: ['I’ll be there in a couple of minutes.'],
        pronunciationTips: ['"couple of" reduces to "coupla" in casual speech.']
      },
      { speaker: 'A', text: 'Yes, the password is on the receipt. Feel free to stay.', translation_tr: 'Evet, şifre fişin üzerinde. İstediğiniz kadar kalabilirsiniz.', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Great. Is it okay if I use the table by the plug?',
        altAccepted: ['Perfect — can I sit near a power socket?', 'Thanks. Do you mind if I take the corner table?'],
        translation_tr: 'Harika. Prizin yanındaki masayı kullanabilir miyim?',
        register: 'informal', ipa: '/ɪz ɪt ˈoʊkeɪ ɪf aɪ juːz ðə ˈteɪbəl baɪ ðə plʌɡ/',
        grammar: [
          { word: 'Is it okay if I', role: 'permission structure', note: 'Followed by present simple — friendly and non-demanding.' },
          { word: 'Feel free to', role: 'invitation (speaker A)', note: 'Means "you are welcome to" — very common in service English.' }
        ],
        keyExpressions: [{ phrase: 'Feel free to...', meaning: 'you are welcome to do that' }],
        exampleSentences: ['Feel free to ask questions.', 'Is it okay if I open the window?'],
        pronunciationTips: ['"okay if I" links smoothly: "oh-kay-if-eye".']
      }
    ]
  }),

  createDialogue({
    id: 'cafe-meeting-friend-a2-01',
    locationId: 'cafe',
    scenarioId: 'meeting-friend',
    title: 'Meeting a Friend at a Café',
    level: 'A2',
    length: 'short',
    goal: 'Greet a friend, apologise for being late and order together.',
    tags: ['small-talk', 'apology'],
    sceneType: 'cafe',
    characters: {
      A: { name: 'Ola', role: 'Friend', gender: 'female', accent: 'international', avatarPreset: 'colleague_f' },
      B: { name: 'You', role: 'Friend', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'There you are! I was starting to worry.', translation_tr: 'İşte buradasın! Endişelenmeye başlamıştım.', emotion: 'surprised', register: 'informal' },
      {
        speaker: 'B', expected: 'Sorry I’m late — the traffic was terrible.',
        altAccepted: ['I’m so sorry, the bus took ages.', 'Apologies! I got stuck in traffic.'],
        translation_tr: 'Geciktiğim için özür dilerim — trafik berbattı.',
        register: 'informal', ipa: '/ˈsɒri aɪm leɪt ðə ˈtræfɪk wɒz ˈterəbəl/',
        grammar: [
          { word: 'Sorry I’m late', role: 'fixed apology', note: 'Note the present tense "I’m" — you are late right now.' },
          { word: 'traffic', role: 'uncountable noun', note: 'Never "traffics". Use "heavy traffic", not "many traffic".' }
        ],
        keyExpressions: [{ phrase: 'Sorry I’m late', meaning: 'the standard apology for arriving late' }],
        exampleSentences: ['Sorry I’m late, the train was delayed.'],
        pronunciationTips: ['"terrible" has three syllables: TER-ruh-bul.']
      },
      { speaker: 'A', text: 'No worries at all. Shall we order?', translation_tr: 'Hiç sorun değil. Sipariş verelim mi?', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Yes, I’m buying today. What would you like?',
        altAccepted: ['Definitely — it’s on me. What do you fancy?', 'Let’s do it. My treat — pick anything.'],
        translation_tr: 'Evet, bugün ben ısmarlıyorum. Sen ne istersin?',
        register: 'informal', ipa: '/aɪm ˈbaɪɪŋ təˈdeɪ wɒt wʊd juː laɪk/',
        grammar: [
          { word: 'I’m buying', role: 'present continuous as offer', note: 'A friendly idiom meaning "I will pay this time".' },
          { word: 'What would you like?', role: 'polite offer question', note: 'Softer than "What do you want?" which can sound abrupt.' }
        ],
        keyExpressions: [{ phrase: 'it’s on me', meaning: 'I am paying — a warm, informal offer' }],
        exampleSentences: ['Dinner’s on me tonight.', 'What would you like to drink?'],
        pronunciationTips: ['Stress "I’m" to make the offer clear: I’M buying.']
      }
    ]
  })
];
