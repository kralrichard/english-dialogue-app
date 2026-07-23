import { createDialogue } from '../dialogueSchema.js?v=content108';

export const CAR_RENTAL_DIALOGUES = [
  createDialogue({
    id: 'car-rental-renting-car-b1-01',
    locationId: 'car-rental',
    scenarioId: 'renting-car',
    title: 'Picking Up a Rental Car',
    level: 'B1',
    length: 'medium',
    goal: 'Collect a booked car and understand the insurance and fuel terms.',
    tags: ['booking', 'problem-solving'],
    sceneType: 'formal-office',
    characters: {
      A: { name: 'Paolo', role: 'Rental Agent', gender: 'male', accent: 'international', avatarPreset: 'clerk_m' },
      B: { name: 'You', role: 'Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Good morning. Do you have a reservation with us?', translation_tr: 'Günaydın. Bizde rezervasyonunuz var mı?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'Yes, I booked a compact car under the name Yılmaz.',
        altAccepted: ['Yes, there’s a booking under Yılmaz for a small car.', 'I reserved a compact car online — the name is Yılmaz.'],
        translation_tr: 'Evet, Yılmaz adına kompakt bir araba ayırttım.',
        register: 'formal', ipa: '/aɪ bʊkt ə ˈkɒmpækt kɑːr ˈʌndər ðə neɪm/',
        grammar: [
          { word: 'booked', role: 'past simple', note: 'Regular verb: book → booked. Describes a completed action in the past.' },
          { word: 'under the name', role: 'fixed expression', note: 'The standard phrase for identifying a reservation.' }
        ],
        keyExpressions: [{ phrase: 'under the name', meaning: 'registered in that person’s name' }],
        exampleSentences: ['I have a table booked under the name Ali.', 'The reservation is under my surname.'],
        pronunciationTips: ['"compact" as an adjective is stressed on the first syllable: COM-pact.']
      },
      { speaker: 'A', text: 'Found it. Would you like to add full insurance for fifteen a day?', translation_tr: 'Buldum. Günlük on beşe tam sigorta eklemek ister misiniz?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'What exactly does the basic insurance cover?',
        altAccepted: ['What’s already included in the standard cover?', 'Could you explain what the basic insurance covers?'],
        translation_tr: 'Temel sigorta tam olarak neyi kapsıyor?',
        register: 'formal', ipa: '/wɒt ɪɡˈzæktli dʌz ðə ˈbeɪsɪk ɪnˈʃʊrəns ˈkʌvər/',
        grammar: [
          { word: 'cover', role: 'verb', note: 'In insurance, "cover" means to pay for or protect against a certain risk.' },
          { word: 'exactly', role: 'adverb', note: 'Signals you want precise details, not a general answer.' }
        ],
        keyExpressions: [{ phrase: 'What does it cover?', meaning: 'asking which risks or costs are included' }],
        exampleSentences: ['Does the warranty cover water damage?', 'What exactly does the fee include?'],
        pronunciationTips: ['"insurance" — do not stress the first syllable; it is in-SHUR-ance.']
      },
      { speaker: 'A', text: 'Damage over five hundred euros. Below that, you pay yourself.', translation_tr: 'Beş yüz euro üzerindeki hasarı. Altındakini kendiniz ödersiniz.', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'In that case, I’ll take the full cover to be safe.',
        altAccepted: ['I’d rather take the full insurance then.', 'Then I’ll go with the full cover, thanks.'],
        translation_tr: 'O halde garanti olsun diye tam sigortayı alayım.',
        register: 'formal', ipa: '/ɪn ðæt keɪs aɪl teɪk ðə fʊl ˈkʌvər tuː biː seɪf/',
        grammar: [
          { word: 'In that case', role: 'linking phrase', note: 'Introduces a decision based on information you just received.' },
          { word: 'to be safe', role: 'infinitive of purpose', note: 'Explains the reason for the decision — as a precaution.' }
        ],
        keyExpressions: [{ phrase: 'In that case', meaning: 'given what you just told me' }],
        exampleSentences: ['In that case, we’ll leave earlier.', 'I’ll bring a coat, just to be safe.'],
        pronunciationTips: ['Pause slightly after "In that case" — it signals a decision is coming.']
      },
      { speaker: 'A', text: 'Certainly. Please return it with a full tank by Sunday at six.', translation_tr: 'Elbette. Lütfen pazar saat altıya kadar deposu dolu olarak teslim edin.', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'Understood. What happens if I’m running late?',
        altAccepted: ['Got it. And if I return it a bit late?', 'Clear. Is there a charge for a late return?'],
        translation_tr: 'Anladım. Gecikirsem ne olur?',
        register: 'formal', ipa: '/wɒt ˈhæpənz ɪf aɪm ˈrʌnɪŋ leɪt/',
        grammar: [
          { word: 'What happens if', role: 'first conditional question', note: 'Asks about a likely future consequence. Present tense follows "if".' },
          { word: 'running late', role: 'idiom', note: 'Means "behind schedule" — very common in spoken English.' }
        ],
        keyExpressions: [{ phrase: 'running late', meaning: 'later than planned' }],
        exampleSentences: ['What happens if it rains?', 'Sorry, I’m running late.'],
        pronunciationTips: ['"What happens if" flows as one chunk: "wha-happ-nzif".']
      }
    ]
  }),

  createDialogue({
    id: 'car-rental-return-problem-b2-01',
    locationId: 'car-rental',
    scenarioId: 'return-problem',
    title: 'Disputing a Charge on Return',
    level: 'B2',
    length: 'medium',
    goal: 'Politely but firmly challenge an unfair charge when returning a car.',
    tags: ['complaint', 'negotiation'],
    sceneType: 'formal-office',
    characters: {
      A: { name: 'Ms Harper', role: 'Branch Manager', gender: 'female', accent: 'british', avatarPreset: 'manager_f' },
      B: { name: 'You', role: 'Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'I’m afraid there’s a scratch on the rear bumper. That’s a two-hundred-euro charge.', translation_tr: 'Maalesef arka tamponda bir çizik var. Bu iki yüz euroluk bir ücret demek.', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'I’m sorry, but that scratch was already there when I collected the car.',
        altAccepted: ['With respect, the damage was there before I drove it.', 'Actually, that mark existed at pick-up.'],
        translation_tr: 'Kusura bakmayın ama o çizik arabayı teslim aldığımda zaten vardı.',
        register: 'formal', ipa: '/ðæt ˈskrætʃ wɒz ɔːlˈredi ðeər wen aɪ kəˈlektɪd ðə kɑːr/',
        grammar: [
          { word: 'I’m sorry, but', role: 'softener before disagreement', note: 'Signals politeness while introducing a firm objection — essential in formal complaints.' },
          { word: 'was already there', role: 'past simple + already', note: '"Already" emphasises the damage existed before your rental began.' }
        ],
        keyExpressions: [{ phrase: 'I’m sorry, but...', meaning: 'a polite opening for disagreeing with someone' }],
        exampleSentences: ['I’m sorry, but that’s not what I ordered.', 'The mark was already there.'],
        pronunciationTips: ['Stress "already" to make your point clear: awl-RED-ee.']
      },
      { speaker: 'A', text: 'It isn’t noted on the collection form, I’m afraid.', translation_tr: 'Maalesef teslim formunda belirtilmemiş.', emotion: 'concerned', register: 'formal' },
      {
        speaker: 'B', expected: 'I took photos at pick-up. Would you like me to show you?',
        altAccepted: ['I have dated photographs from the day I collected it.', 'I photographed the car that morning — shall I show you?'],
        translation_tr: 'Teslim alırken fotoğraf çektim. Size göstermemi ister misiniz?',
        register: 'formal', ipa: '/aɪ tʊk ˈfoʊtoʊz æt pɪk ʌp wʊd juː laɪk miː tuː ʃoʊ juː/',
        grammar: [
          { word: 'Would you like me to', role: 'polite offer', note: 'Offers an action while leaving the decision entirely to the other person.' },
          { word: 'took', role: 'past simple of "take"', note: 'Irregular: take → took. We "take" a photo, not "make" one.' }
        ],
        keyExpressions: [{ phrase: 'Would you like me to...?', meaning: 'a courteous way to offer to do something' }],
        exampleSentences: ['Would you like me to wait?', 'I took photos before I left.'],
        pronunciationTips: ['"pick-up" as a noun is stressed on the first part: PICK-up.']
      },
      { speaker: 'A', text: 'Yes, please. If the timestamp confirms it, I’ll remove the charge.', translation_tr: 'Evet lütfen. Zaman damgası doğrularsa ücreti kaldıracağım.', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Here they are — you can see the date and the same scratch.',
        altAccepted: ['Here you are; the date is visible in the corner.', 'These are the photos, with the timestamp shown.'],
        translation_tr: 'İşte buradalar — tarihi ve aynı çiziği görebilirsiniz.',
        register: 'formal', ipa: '/hɪər ðeɪ ɑːr juː kæn siː ðə deɪt/',
        grammar: [
          { word: 'Here they are', role: 'fixed expression, plural', note: 'Use "Here they are" for plural items; "Here it is" for one.' },
          { word: 'the same scratch', role: 'definite reference', note: '"The same" links the photo directly to the disputed damage.' }
        ],
        keyExpressions: [{ phrase: 'Here they are', meaning: 'said when presenting several items' }],
        exampleSentences: ['Here they are — both receipts.'],
        pronunciationTips: ['Keep the tone calm and factual; anger weakens a strong case.']
      },
      { speaker: 'A', text: 'You’re quite right. I’ll cancel the charge and note it on the file.', translation_tr: 'Kesinlikle haklısınız. Ücreti iptal edip dosyaya not düşeceğim.', emotion: 'apologetic', register: 'formal' },
      {
        speaker: 'B', expected: 'Thank you for sorting it out so quickly.',
        altAccepted: ['I appreciate you resolving it.', 'Thank you — I’m glad we cleared that up.'],
        translation_tr: 'Bu kadar çabuk çözdüğünüz için teşekkürler.',
        register: 'formal', ipa: '/θæŋk juː fɔːr ˈsɔːrtɪŋ ɪt aʊt soʊ ˈkwɪkli/',
        grammar: [
          { word: 'sorting it out', role: 'phrasal verb + gerund', note: 'Ending on a gracious note keeps the relationship positive after a dispute.' }
        ],
        keyExpressions: [{ phrase: 'clear something up', meaning: 'to resolve a misunderstanding' }],
        exampleSentences: ['Thanks for clearing that up.'],
        pronunciationTips: ['End with a warm falling tone — the disagreement is over.']
      }
    ]
  })
];
