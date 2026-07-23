import { createDialogue } from '../dialogueSchema.js?v=content109';

export const AIRPORT_DIALOGUES = [
  createDialogue({
    id: 'airport-check-in-desk-a2-01',
    locationId: 'airport',
    scenarioId: 'check-in-desk',
    title: 'Airline Check-in Desk',
    level: 'A2',
    variant: 1,
    length: 'medium',
    goal: 'Check in for your flight and check your luggage.',
    tags: ['travel', 'booking'],
    sceneType: 'airport',
    characters: {
      A: { name: 'Priya', role: 'Check-in Agent', gender: 'female', accent: 'indian', avatarPreset: 'agent_f' },
      B: { name: 'Passenger', role: 'Passenger', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Good morning. Where are you flying today?', translation_tr: 'Günaydın. Bugün nereye uçuyorsunuz?', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'I’m flying to London.',
        altAccepted: ['I’m going to London.'],
        translation_tr: 'Londra’ya uçuyorum.',
        register: 'neutral', ipa: '/aɪm ˈflaɪɪŋ tuː ˈlʌndən/',
        grammar: [
          { word: 'I’m flying', role: 'present continuous', note: 'Used for a planned future action — a booked flight.' },
          { word: 'to London', role: 'prepositional phrase', note: 'Shows the destination.' }
        ],
        keyExpressions: [{ phrase: 'I’m flying to...', meaning: 'used to state your flight destination' }],
        exampleSentences: ['I’m flying to Paris tomorrow.'],
        pronunciationTips: ['Say "flying" with a clear long "i" sound: FLY-ing.']
      },
      { speaker: 'A', text: 'May I see your passport, please?', translation_tr: 'Pasaportunuzu görebilir miyim, lütfen?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'Of course. Here you are.',
        altAccepted: ['Sure, here you go.'],
        translation_tr: 'Elbette. Buyurun.',
        register: 'formal', ipa: '/əv kɔːrs hɪər juː ɑːr/',
        grammar: [{ word: 'Of course', role: 'fixed response', note: 'Polite agreement to a request.' }],
        keyExpressions: [{ phrase: 'Of course', meaning: 'certainly, yes' }],
        exampleSentences: ['Of course, one moment.'],
        pronunciationTips: ['Link the two words smoothly: "of course" almost sounds like "uh-course."']
      },
      { speaker: 'A', text: 'Thank you. Do you have any bags to check in?', translation_tr: 'Teşekkürler. Check-in yapacak bagajınız var mı?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Yes, just one suitcase.',
        altAccepted: ['Yes, one suitcase.', 'Yes, I have one bag.'],
        translation_tr: 'Evet, sadece bir bavul.',
        register: 'neutral', ipa: '/jɛs dʒʌst wʌn ˈsuːtkeɪs/',
        grammar: [
          { word: 'just', role: 'adverb (limiting)', note: 'Means "only" — limits the quantity to one.' },
          { word: 'one suitcase', role: 'object', note: 'The item being checked in.' }
        ],
        keyExpressions: [{ phrase: 'just one...', meaning: 'only one, nothing more' }],
        exampleSentences: ['I only have one carry-on bag.'],
        pronunciationTips: ['Stress "suit" in "suitcase": SUIT-case.']
      },
      { speaker: 'A', text: 'Perfect. Please place it on the scale.', translation_tr: 'Mükemmel. Lütfen teraziye koyun.', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Sure, here it is.',
        altAccepted: ['Okay, here it is.', 'Sure, no problem.'],
        translation_tr: 'Tabii, işte burada.',
        register: 'neutral', ipa: '/ʃʊər hɪər ɪt ɪz/',
        grammar: [{ word: 'here it is', role: 'fixed phrase', note: 'Used when handing over or presenting an object.' }],
        keyExpressions: [{ phrase: 'here it is', meaning: 'said while presenting an object' }],
        exampleSentences: ['Here it is, right on the scale.'],
        pronunciationTips: ['Keep the rhythm even across the three words.']
      }
    ]
  }),

  createDialogue({
    id: 'airport-missed-flight-b1-01',
    locationId: 'airport',
    scenarioId: 'missed-flight',
    title: 'Missing a Flight',
    level: 'B1',
    variant: 1,
    length: 'long',
    goal: 'Explain that you missed your flight and find a solution.',
    tags: ['problem-solving'],
    sceneType: 'airport',
    characters: {
      A: { name: 'Priya', role: 'Airline Agent', gender: 'female', accent: 'indian', avatarPreset: 'agent_f' },
      B: { name: 'Passenger', role: 'Passenger', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Hello, how can I help you?', translation_tr: 'Merhaba, size nasıl yardımcı olabilirim?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'I just missed my flight to Berlin. Is there anything you can do?',
        altAccepted: ['I’ve just missed my flight to Berlin — can you help me?', 'I missed my flight to Berlin. What are my options?'],
        translation_tr: 'Berlin’e olan uçağımı az önce kaçırdım. Yapabileceğiniz bir şey var mı?',
        register: 'neutral', ipa: '/aɪ dʒʌst mɪst maɪ flaɪt tuː bərˈlɪn ɪz ðɛər ˈɛnɪθɪŋ juː kæn duː/',
        grammar: [
          { word: 'I just missed', role: 'past simple + adverb', note: '"Just" shows the action happened very recently.' },
          { word: 'Is there anything you can do?', role: 'polite request for help', note: 'A softer way to ask for a solution than a direct demand.' }
        ],
        keyExpressions: [{ phrase: 'Is there anything you can do?', meaning: 'a polite way to ask for help or a solution' }],
        exampleSentences: ['I just missed the bus — is there anything you can do?'],
        pronunciationTips: ['Don’t rush "missed my flight" — pronounce the final "t" in "missed" clearly.']
      },
      { speaker: 'A', text: 'I’m sorry to hear that. Let me check the next available flight for you.', translation_tr: 'Bunu duyduğuma üzüldüm. Sizin için bir sonraki uygun uçuşu kontrol edeyim.', emotion: 'apologetic', register: 'formal' },
      {
        speaker: 'B', expected: 'Thank you, I really appreciate it.',
        altAccepted: ['Thanks, I appreciate that.', 'Thank you so much, I appreciate it.'],
        translation_tr: 'Teşekkür ederim, gerçekten minnettarım.',
        register: 'neutral', ipa: '/θæŋk juː aɪ ˈrɪəli əˈpriːʃieɪt ɪt/',
        grammar: [
          { word: 'I really appreciate it', role: 'fixed expression', note: '"Appreciate" is a slightly more formal, heartfelt way of saying "thank you."' }
        ],
        keyExpressions: [{ phrase: 'I appreciate it', meaning: 'a sincere way to express thanks' }],
        exampleSentences: ['Thanks for your patience, I really appreciate it.'],
        pronunciationTips: ['Stress "really" and slow down slightly to sound sincere.']
      },
      { speaker: 'A', text: 'There’s a flight in three hours, but there’s a fifty-dollar rebooking fee. Would that work for you?', translation_tr: 'Üç saat sonra bir uçuş var ama elli dolarlık bir yeniden rezervasyon ücreti var. Bu sizin için uygun olur mu?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'That works for me. I’ll pay the fee.',
        altAccepted: ['That’s fine, I’ll pay the fee.', 'Sounds good, I’ll pay the rebooking fee.'],
        translation_tr: 'Benim için uygun. Ücreti öderim.',
        register: 'neutral', ipa: '/ðæt wɜːrks fɔːr miː aɪl peɪ ðə fiː/',
        grammar: [
          { word: 'That works for me', role: 'fixed expression', note: 'A common informal way to accept a suggestion or plan.' },
          { word: 'I’ll pay', role: 'future simple (willingness)', note: 'Expresses a decision made at the moment of speaking.' }
        ],
        keyExpressions: [{ phrase: 'That works for me', meaning: 'used to agree that a plan or option is acceptable' }],
        exampleSentences: ['Three o’clock works for me.'],
        pronunciationTips: ['Contract "I will" naturally to "I’ll" — don’t pronounce it as two separate words.']
      }
    ]
  }),

  createDialogue({
    id: 'airport-security-a2-01',
    locationId: 'airport',
    scenarioId: 'security',
    title: 'Going Through Security',
    level: 'A2',
    length: 'short',
    goal: 'Follow security instructions and answer staff questions.',
    tags: ['problem-solving'],
    sceneType: 'airport',
    characters: {
      A: { name: 'Officer Cole', role: 'Security Officer', gender: 'male', accent: 'american', avatarPreset: 'officer_m' },
      B: { name: 'You', role: 'Passenger', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Please put your laptop and liquids in a separate tray.', translation_tr: 'Lütfen dizüstü bilgisayarınızı ve sıvılarınızı ayrı bir kaba koyun.', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'Should I take off my shoes as well?',
        altAccepted: ['Do I need to remove my shoes too?', 'And my shoes — do those come off?'],
        translation_tr: 'Ayakkabılarımı da çıkarmalı mıyım?',
        register: 'neutral', ipa: '/ʃʊd aɪ teɪk ɒf maɪ ʃuːz æz wel/',
        grammar: [
          { word: 'take off', role: 'separable phrasal verb', note: 'Means to remove clothing. You can say "take off my shoes" or "take my shoes off".' },
          { word: 'as well', role: 'adverb phrase', note: 'Means "also" and goes at the end of the sentence.' }
        ],
        keyExpressions: [{ phrase: 'take off', meaning: 'to remove an item of clothing' }],
        exampleSentences: ['Take off your jacket, please.', 'I’d like a coffee as well.'],
        pronunciationTips: ['"take off" links into "tay-koff".']
      },
      { speaker: 'A', text: 'No, shoes can stay on. Do you have anything in your pockets?', translation_tr: 'Hayır, ayakkabılar kalabilir. Ceplerinizde bir şey var mı?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'Just my phone and some coins.',
        altAccepted: ['Only my phone and keys.', 'Nothing — just a phone.'],
        translation_tr: 'Sadece telefonum ve biraz bozuk para.',
        register: 'neutral', ipa: '/dʒʌst maɪ foʊn ænd sʌm kɔɪnz/',
        grammar: [
          { word: 'Just', role: 'limiting adverb', note: 'Means "only" — signals the list is short and harmless.' },
          { word: 'some coins', role: 'quantifier + plural', note: '"Some" with plurals means an unspecified small number.' }
        ],
        keyExpressions: [{ phrase: 'Just my...', meaning: 'a natural way to give a short, reassuring list' }],
        exampleSentences: ['Just a bottle of water.', 'I have some cash on me.'],
        pronunciationTips: ['"coins" ends in a /z/ sound, not /s/.']
      },
      { speaker: 'A', text: 'Put them in the tray and step through, please.', translation_tr: 'Onları kaba koyup geçin lütfen.', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Of course. Is it all right to take my bag now?',
        altAccepted: ['Sure. Can I collect my bag?', 'Done — may I pick up my things?'],
        translation_tr: 'Tabii. Şimdi çantamı alabilir miyim?',
        register: 'formal', ipa: '/ɪz ɪt ɔːl raɪt tuː teɪk maɪ bæɡ naʊ/',
        grammar: [
          { word: 'Is it all right to', role: 'permission structure', note: 'Followed by an infinitive — a polite, everyday way to ask permission.' }
        ],
        keyExpressions: [{ phrase: 'step through', meaning: 'walk through the scanner' }],
        exampleSentences: ['Is it all right to sit here?'],
        pronunciationTips: ['"all right" is two words, often sounding like "ol-right".']
      }
    ]
  }),

  createDialogue({
    id: 'airport-lost-luggage-b1-01',
    locationId: 'airport',
    scenarioId: 'lost-luggage',
    title: 'Reporting Lost Luggage',
    level: 'B1',
    length: 'medium',
    goal: 'Report a missing suitcase and arrange for it to be delivered.',
    tags: ['problem-solving', 'complaint'],
    sceneType: 'airport',
    characters: {
      A: { name: 'Nadia', role: 'Baggage Services Agent', gender: 'female', accent: 'international', avatarPreset: 'agent_f' },
      B: { name: 'You', role: 'Passenger', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Baggage services. What can I do for you?', translation_tr: 'Bagaj hizmetleri. Sizin için ne yapabilirim?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'My suitcase didn’t arrive on the flight from Istanbul.',
        altAccepted: ['My bag hasn’t come through from the Istanbul flight.', 'I’m missing a suitcase from flight TK1980.'],
        translation_tr: 'Valizim İstanbul’dan gelen uçuşla gelmedi.',
        register: 'formal', ipa: '/maɪ ˈsuːtkeɪs ˈdɪdənt əˈraɪv ɒn ðə flaɪt/',
        grammar: [
          { word: 'didn’t arrive', role: 'past simple negative', note: 'The flight has landed, so the event is finished — past simple is correct.' },
          { word: 'on the flight', role: 'preposition', note: 'Things and people travel ON a flight, not "in" or "with" it.' }
        ],
        keyExpressions: [{ phrase: 'my luggage didn’t arrive', meaning: 'the core sentence for reporting lost baggage' }],
        exampleSentences: ['My bag didn’t arrive.', 'She wasn’t on the flight.'],
        pronunciationTips: ['"suitcase" is SOOT-case — the first syllable is stressed.']
      },
      { speaker: 'A', text: 'I’m sorry to hear that. Do you have your baggage tag?', translation_tr: 'Bunu duyduğuma üzüldüm. Bagaj etiketiniz var mı?', emotion: 'apologetic', register: 'formal' },
      {
        speaker: 'B', expected: 'Yes, here it is. It’s a large black suitcase with red straps.',
        altAccepted: ['Here you are. It’s black, large, with red bands around it.', 'Here — a big black case, easy to recognise by the red straps.'],
        translation_tr: 'Evet, buyurun. Kırmızı kayışlı, büyük siyah bir valiz.',
        register: 'formal', ipa: '/ə lɑːrdʒ blæk ˈsuːtkeɪs wɪð red stræps/',
        grammar: [
          { word: 'large black suitcase', role: 'adjective order', note: 'English orders adjectives: size before colour — a large black case, never "black large".' },
          { word: 'with red straps', role: 'descriptive phrase', note: '"With" adds a distinguishing feature — essential for identification.' }
        ],
        keyExpressions: [{ phrase: 'baggage tag', meaning: 'the sticker with the barcode given at check-in' }],
        exampleSentences: ['A small brown bag.', 'It’s a blue case with wheels.'],
        pronunciationTips: ['Adjective order errors are very noticeable — practise "large black" as a unit.']
      },
      { speaker: 'A', text: 'It’s still in Istanbul. It should arrive on tonight’s flight.', translation_tr: 'Hâlâ İstanbul’da. Bu geceki uçuşla gelmesi lazım.', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Could you deliver it to my hotel when it arrives?',
        altAccepted: ['Would it be possible to send it to my hotel?', 'Can it be brought to my accommodation?'],
        translation_tr: 'Geldiğinde otelime teslim edebilir misiniz?',
        register: 'formal', ipa: '/kʊd juː dɪˈlɪvər ɪt tuː maɪ hoʊˈtel/',
        grammar: [
          { word: 'when it arrives', role: 'time clause', note: 'Present simple after "when" even though it refers to the future.' },
          { word: 'deliver it to', role: 'verb + preposition', note: 'Something is delivered TO a place or person.' }
        ],
        keyExpressions: [{ phrase: 'deliver it to my hotel', meaning: 'requesting onward delivery of found luggage' }],
        exampleSentences: ['Call me when you land.', 'They delivered it to my office.'],
        pronunciationTips: ['"deliver" is stressed in the middle: de-LIV-er.']
      }
    ]
  }),

  createDialogue({
    id: 'airport-boarding-info-a1-01',
    locationId: 'airport',
    scenarioId: 'boarding-info',
    title: 'Asking About Boarding',
    level: 'A1',
    length: 'short',
    goal: 'Find your gate and boarding time.',
    tags: ['directions'],
    sceneType: 'airport',
    characters: {
      A: { name: 'Sam', role: 'Airport Staff', gender: 'male', accent: 'british', avatarPreset: 'assistant_m' },
      B: { name: 'You', role: 'Passenger', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Can I help you with anything?', translation_tr: 'Bir konuda yardımcı olabilir miyim?', emotion: 'friendly', register: 'neutral' },
      {
        speaker: 'B', expected: 'Yes, which gate is flight BA210?',
        altAccepted: ['Where is the gate for flight BA210?', 'What gate does BA210 leave from?'],
        translation_tr: 'Evet, BA210 sefer sayılı uçuş hangi kapıda?',
        register: 'neutral', ipa: '/wɪtʃ ɡeɪt ɪz flaɪt biː eɪ tuː wʌn ˈzɪəroʊ/',
        grammar: [
          { word: 'which gate', role: 'question word + noun', note: '"Which" is used because the airport has a limited set of gates.' }
        ],
        keyExpressions: [{ phrase: 'Which gate?', meaning: 'asking where your flight departs from' }],
        exampleSentences: ['Which platform is the train?', 'Which floor is it on?'],
        pronunciationTips: ['Flight numbers are read digit by digit: B-A-two-one-zero.']
      },
      { speaker: 'A', text: 'Gate twenty-two, but it hasn’t opened yet.', translation_tr: 'Yirmi iki numaralı kapı, ama henüz açılmadı.', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'What time does boarding start?',
        altAccepted: ['When do we board?', 'What time should I be at the gate?'],
        translation_tr: 'Biniş saat kaçta başlıyor?',
        register: 'neutral', ipa: '/wɒt taɪm dʌz ˈbɔːrdɪŋ stɑːrt/',
        grammar: [
          { word: 'boarding', role: 'gerund as noun', note: 'The -ing form used as a noun meaning "the process of getting on".' },
          { word: 'does ... start', role: 'present simple question', note: 'For scheduled events English uses the present simple, not the future.' }
        ],
        keyExpressions: [{ phrase: 'boarding starts', meaning: 'when passengers begin getting on the plane' }],
        exampleSentences: ['What time does the film start?', 'Boarding starts at six.'],
        pronunciationTips: ['"boarding" rhymes with "recording" — a long /ɔː/ sound.']
      }
    ]
  })
];
