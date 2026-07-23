import { createDialogue } from '../dialogueSchema.js?v=content110';

export const DIRECTIONS_DIALOGUES = [
  createDialogue({
    id: 'directions-asking-directions-a1-01',
    locationId: 'directions',
    scenarioId: 'asking-directions',
    title: 'Asking the Way to the Station',
    level: 'A1',
    length: 'short',
    goal: 'Stop a stranger politely and follow simple directions.',
    tags: ['directions'],
    sceneType: 'street',
    characters: {
      A: { name: 'Grace', role: 'Passer-by', gender: 'female', accent: 'british', avatarPreset: 'colleague_f' },
      B: { name: 'You', role: 'Tourist', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Sorry, were you trying to ask me something?', translation_tr: 'Pardon, bana bir şey mi soracaktınız?', emotion: 'friendly', register: 'neutral' },
      {
        speaker: 'B', expected: 'Yes, excuse me. How do I get to the train station?',
        altAccepted: ['Excuse me, where is the train station?', 'Sorry to bother you — which way is the station?'],
        translation_tr: 'Evet, affedersiniz. Tren istasyonuna nasıl giderim?',
        register: 'neutral', ipa: '/haʊ duː aɪ ɡet tuː ðə treɪn ˈsteɪʃən/',
        grammar: [
          { word: 'How do I get to', role: 'fixed question pattern', note: 'The most useful sentence for asking directions anywhere in the world.' },
          { word: 'Excuse me', role: 'opener', note: 'Always start with this when stopping a stranger.' }
        ],
        keyExpressions: [{ phrase: 'How do I get to...?', meaning: 'asking for directions to a place' }],
        exampleSentences: ['How do I get to the airport?', 'How do I get to the museum from here?'],
        pronunciationTips: ['"get to" often blends into "ged-uh" in American speech.']
      },
      { speaker: 'A', text: 'Go straight on, then take the second left. It’s opposite the bank.', translation_tr: 'Düz devam edin, sonra ikinci soldan dönün. Bankanın karşısında.', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'Straight on, then second left. Is it far?',
        altAccepted: ['Second left after going straight — how far is it?', 'Got it. Is it walking distance?'],
        translation_tr: 'Düz, sonra ikinci sol. Uzak mı?',
        register: 'neutral', ipa: '/streɪt ɒn ðen ˈsekənd left ɪz ɪt fɑːr/',
        grammar: [
          { word: 'Straight on, then second left', role: 'repetition to confirm', note: 'Repeating directions back is a natural way to check you understood.' },
          { word: 'Is it far?', role: 'short question', note: '"Far" is used mainly in questions and negatives; in positives we say "a long way".' }
        ],
        keyExpressions: [{ phrase: 'take the second left', meaning: 'turn left at the second street' }],
        exampleSentences: ['Take the first right.', 'Is it far from here?'],
        pronunciationTips: ['Stress the numbers — "SECOND left" is the key detail.']
      },
      { speaker: 'A', text: 'About five minutes on foot.', translation_tr: 'Yürüyerek yaklaşık beş dakika.', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'Perfect. Thank you so much for your help.',
        altAccepted: ['Great, thanks a lot!', 'Thank you, that’s very kind.'],
        translation_tr: 'Mükemmel. Yardımınız için çok teşekkür ederim.',
        register: 'neutral', ipa: '/θæŋk juː soʊ mʌtʃ fɔːr jɔːr help/',
        grammar: [
          { word: 'on foot', role: 'fixed prepositional phrase', note: 'Means "walking". We say "on foot", never "by foot".' }
        ],
        keyExpressions: [{ phrase: 'on foot', meaning: 'by walking' }],
        exampleSentences: ['It’s ten minutes on foot.', 'We went there on foot.'],
        pronunciationTips: ['"so much" — stress "much" to sound genuinely grateful.']
      }
    ]
  }),

  createDialogue({
    id: 'directions-being-lost-a2-01',
    locationId: 'directions',
    scenarioId: 'being-lost',
    title: 'Completely Lost in a New City',
    level: 'A2',
    length: 'short',
    goal: 'Explain that you are lost and work out where you are.',
    tags: ['directions', 'problem-solving'],
    sceneType: 'street',
    characters: {
      A: { name: 'Hugo', role: 'Shop Owner', gender: 'male', accent: 'international', avatarPreset: 'clerk_m' },
      B: { name: 'You', role: 'Tourist', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'You look confused — can I help?', translation_tr: 'Kafanız karışmış görünüyor — yardım edebilir miyim?', emotion: 'friendly', register: 'neutral' },
      {
        speaker: 'B', expected: 'Yes, please. I think I’m lost — my phone has no signal.',
        altAccepted: ['Please — I’ve lost my way and my phone isn’t working.', 'Yes, I can’t find my hotel and I have no internet.'],
        translation_tr: 'Evet, lütfen. Sanırım kayboldum — telefonum çekmiyor.',
        register: 'neutral', ipa: '/aɪ θɪŋk aɪm lɒst maɪ foʊn hæz noʊ ˈsɪɡnəl/',
        grammar: [
          { word: 'I’m lost', role: 'adjective with "be"', note: 'English uses "be lost" as a state, not "I lost myself".' },
          { word: 'has no signal', role: 'have + no + noun', note: '"Have no" is a compact alternative to "doesn’t have any".' }
        ],
        keyExpressions: [{ phrase: 'I’m lost', meaning: 'I don’t know where I am' }],
        exampleSentences: ['I think we’re lost.', 'My phone has no battery.'],
        pronunciationTips: ['"signal" is SIG-nul — the second syllable is very weak.']
      },
      { speaker: 'A', text: 'No worries. Where are you trying to go?', translation_tr: 'Merak etmeyin. Nereye gitmeye çalışıyorsunuz?', emotion: 'friendly', register: 'neutral' },
      {
        speaker: 'B', expected: 'I’m looking for the Grand Hotel on Market Street.',
        altAccepted: ['I need to find the Grand Hotel.', 'I’m trying to reach Market Street.'],
        translation_tr: 'Market Caddesi’ndeki Grand Otel’i arıyorum.',
        register: 'neutral', ipa: '/aɪm ˈlʊkɪŋ fɔːr ðə ɡrænd hoʊˈtel/',
        grammar: [
          { word: 'looking for', role: 'phrasal verb', note: 'Means "searching for". The "for" is required — never "looking the hotel".' },
          { word: 'on Market Street', role: 'preposition of place', note: 'Use "on" with street names in American English; British often uses "in".' }
        ],
        keyExpressions: [{ phrase: 'look for', meaning: 'to search for something or someone' }],
        exampleSentences: ['I’m looking for the post office.', 'She lives on Green Street.'],
        pronunciationTips: ['"looking for" reduces to "look-in-fer" in fast speech.']
      },
      { speaker: 'A', text: 'Ah, you’ve walked past it. Turn around and it’s on your right.', translation_tr: 'Ah, önünden geçmişsiniz. Geri dönün, sağınızda kalacak.', emotion: 'surprised', register: 'neutral' },
      {
        speaker: 'B', expected: 'Really? I must have walked straight past it. Thank you!',
        altAccepted: ['Oh no, I didn’t even notice it!', 'Seriously? Thanks so much for telling me.'],
        translation_tr: 'Gerçekten mi? Önünden geçip gitmiş olmalıyım. Teşekkürler!',
        register: 'informal', ipa: '/aɪ mʌst hæv wɔːkt streɪt pɑːst ɪt/',
        grammar: [
          { word: 'must have walked', role: 'modal of past deduction', note: 'Expresses a confident conclusion about the past based on evidence.' },
          { word: 'straight past', role: 'adverb + preposition', note: '"Straight past" emphasises that you did not notice it at all.' }
        ],
        keyExpressions: [{ phrase: 'must have + past participle', meaning: 'I am fairly sure this is what happened' }],
        exampleSentences: ['I must have left it at home.', 'She must have forgotten.'],
        pronunciationTips: ['"must have" is said "must-uv" — never "must of" in writing.']
      }
    ]
  })
];
