import { createDialogue } from '../dialogueSchema.js?v=content110';

export const CUSTOMS_DIALOGUES = [
  createDialogue({
    id: 'customs-declaring-items-a2-01',
    locationId: 'customs',
    scenarioId: 'declaring-items',
    title: 'Declaring Items at Customs',
    level: 'A2',
    length: 'short',
    goal: 'Answer customs questions honestly and clearly.',
    tags: ['problem-solving'],
    sceneType: 'airport',
    characters: {
      A: { name: 'Officer Grant', role: 'Customs Officer', gender: 'male', accent: 'american', avatarPreset: 'officer_m' },
      B: { name: 'You', role: 'Traveller', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Do you have anything to declare?', translation_tr: 'Beyan edecek bir şeyiniz var mı?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'Yes, I have some food and a bottle of olive oil.',
        altAccepted: ['I’m carrying some food items and olive oil.', 'Yes — food, and one bottle of oil.'],
        translation_tr: 'Evet, biraz yiyecek ve bir şişe zeytinyağı var.',
        register: 'formal', ipa: '/aɪ hæv sʌm fuːd ænd ə ˈbɒtəl əv ˈɒlɪv ɔɪl/',
        grammar: [
          { word: 'some food', role: 'quantifier + uncountable noun', note: '"Food" is uncountable, so it takes "some", never "a food".' },
          { word: 'a bottle of', role: 'partitive phrase', note: 'To count uncountable things we use containers: a bottle of, a cup of, a piece of.' }
        ],
        keyExpressions: [{ phrase: 'anything to declare', meaning: 'goods you must legally report at customs' }],
        exampleSentences: ['I have a bottle of wine.', 'There’s some cheese in my bag.'],
        pronunciationTips: ['"bottle of" links into "bott-luv" in natural speech.']
      },
      { speaker: 'A', text: 'Is any of it meat or dairy?', translation_tr: 'Bunların içinde et veya süt ürünü var mı?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'No, it’s all sealed and vegetarian.',
        altAccepted: ['No meat or dairy — everything is packaged.', 'No, none of it. It’s all plant-based.'],
        translation_tr: 'Hayır, hepsi kapalı ambalajda ve vejetaryen.',
        register: 'formal', ipa: '/noʊ ɪts ɔːl siːld ænd ˌvedʒəˈteəriən/',
        grammar: [
          { word: 'it’s all', role: 'pronoun + quantifier', note: 'Refers back to the whole group of items mentioned earlier.' },
          { word: 'sealed', role: 'past participle as adjective', note: 'Describes the state of the packaging — closed and unopened.' }
        ],
        keyExpressions: [{ phrase: 'sealed', meaning: 'in unopened, factory-closed packaging' }],
        exampleSentences: ['It’s all vegetarian.', 'The package is still sealed.'],
        pronunciationTips: ['"sealed" ends in a /d/ sound, not /t/.']
      },
      { speaker: 'A', text: 'That’s fine. You can go through the green channel.', translation_tr: 'Sorun yok. Yeşil hattan geçebilirsiniz.', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Thank you. Have a good day.',
        altAccepted: ['Thanks very much.', 'Thank you, officer.'],
        translation_tr: 'Teşekkürler. İyi günler.',
        register: 'formal', ipa: '/θæŋk juː hæv ə ɡʊd deɪ/',
        grammar: [
          { word: 'go through', role: 'phrasal verb', note: 'Means to pass along or across — used for corridors, checks and channels.' }
        ],
        keyExpressions: [{ phrase: 'green channel', meaning: 'the customs exit for travellers with nothing to declare' }],
        exampleSentences: ['Go through the door on the left.'],
        pronunciationTips: ['Keep it short and polite — customs exchanges are brief by design.']
      }
    ]
  }),

  createDialogue({
    id: 'customs-random-check-b1-01',
    locationId: 'customs',
    scenarioId: 'random-check',
    title: 'A Random Baggage Check',
    level: 'B1',
    length: 'short',
    goal: 'Stay calm and cooperate during an unexpected bag search.',
    tags: ['problem-solving'],
    sceneType: 'airport',
    characters: {
      A: { name: 'Officer Diaz', role: 'Customs Officer', gender: 'female', accent: 'american', avatarPreset: 'agent_f' },
      B: { name: 'You', role: 'Traveller', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Excuse me, we’re carrying out random checks. Could you open your suitcase?', translation_tr: 'Affedersiniz, rastgele kontrol yapıyoruz. Valizinizi açabilir misiniz?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'Of course, no problem. It’s not locked.',
        altAccepted: ['Certainly, go ahead — it’s open.', 'Sure, here it is. There’s no lock on it.'],
        translation_tr: 'Elbette, sorun değil. Kilitli değil.',
        register: 'formal', ipa: '/əv kɔːrs noʊ ˈprɒbləm ɪts nɒt lɒkt/',
        grammar: [
          { word: 'Of course', role: 'agreement phrase', note: 'Signals immediate, willing cooperation — the right tone with officials.' },
          { word: 'It’s not locked', role: 'negative with "be"', note: 'Add "not" after the verb "be" to make it negative.' }
        ],
        keyExpressions: [{ phrase: 'carry out a check', meaning: 'to perform an inspection' }],
        exampleSentences: ['Of course, take your time.', 'The door isn’t locked.'],
        pronunciationTips: ['Keep your voice relaxed — sounding nervous invites more questions.']
      },
      { speaker: 'A', text: 'What’s in this box, please?', translation_tr: 'Bu kutunun içinde ne var, lütfen?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'It’s a gift for my sister — a ceramic bowl.',
        altAccepted: ['That’s a present, a bowl made of ceramic.', 'It’s just a souvenir for my family.'],
        translation_tr: 'Kız kardeşim için bir hediye — seramik bir kâse.',
        register: 'formal', ipa: '/ɪts ə ɡɪft fɔːr maɪ ˈsɪstər ə səˈræmɪk boʊl/',
        grammar: [
          { word: 'a gift for', role: 'noun + preposition', note: 'A gift is always FOR a person, never "to a person" in this structure.' },
          { word: 'ceramic', role: 'adjective of material', note: 'Material adjectives come directly before the noun: a ceramic bowl.' }
        ],
        keyExpressions: [{ phrase: 'a gift for someone', meaning: 'a present intended for that person' }],
        exampleSentences: ['It’s a present for my mother.', 'I bought a wooden box.'],
        pronunciationTips: ['"ceramic" is stressed on the second syllable: se-RAM-ic.']
      },
      { speaker: 'A', text: 'Thank you for your cooperation. You’re free to go.', translation_tr: 'İşbirliğiniz için teşekkürler. Geçebilirsiniz.', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'Thanks. Is it okay if I repack it here?',
        altAccepted: ['Thank you. May I close my bag here?', 'Thanks — can I sort my things out at this table?'],
        translation_tr: 'Teşekkürler. Burada tekrar yerleştirebilir miyim?',
        register: 'formal', ipa: '/ɪz ɪt ˈoʊkeɪ ɪf aɪ riːˈpæk ɪt hɪər/',
        grammar: [
          { word: 'Is it okay if', role: 'permission structure', note: 'Followed by present simple — a natural, mid-formal way to ask permission.' },
          { word: 'repack', role: 'prefix re- + verb', note: 'The prefix "re-" means "again": repack, rewrite, rebuild.' }
        ],
        keyExpressions: [{ phrase: 'Is it okay if...?', meaning: 'a relaxed but polite way to ask permission' }],
        exampleSentences: ['Is it okay if I sit here?', 'Is it okay if I call you later?'],
        pronunciationTips: ['"okay if" links into "oh-kay-if" with no pause.']
      }
    ]
  })
];
