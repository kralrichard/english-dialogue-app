import { createDialogue } from '../dialogueSchema.js?v=content107';

export const TECH_STORE_DIALOGUES = [
  createDialogue({
    id: 'tech-store-product-advice-b1-01',
    locationId: 'tech-store',
    scenarioId: 'product-advice',
    title: 'Asking About a Laptop',
    level: 'B1',
    variant: 1,
    length: 'medium',
    goal: 'Get advice on which laptop suits your needs and budget.',
    tags: ['advice'],
    sceneType: 'retail',
    characters: {
      A: { name: 'Kevin', role: 'Store Assistant', gender: 'male', accent: 'australian', avatarPreset: 'assistant_m' },
      B: { name: 'Customer', role: 'Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Hey, welcome in! Are you looking for anything in particular?', translation_tr: 'Merhaba, hoş geldiniz! Belirli bir şey mi arıyorsunuz?', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Yes, I’m looking for a laptop that’s good for video editing.',
        altAccepted: ['I’m looking for a laptop for video editing.', 'Yes, I need a laptop that can handle video editing.'],
        translation_tr: 'Evet, video düzenleme için iyi bir laptop arıyorum.',
        register: 'neutral', ipa: '/jɛs aɪm ˈlʊkɪŋ fɔːr ə ˈlæptɒp ðæts gʊd fɔːr ˈvɪdioʊ ˈɛdɪtɪŋ/',
        grammar: [
          { word: 'I’m looking for', role: 'present continuous', note: 'Common polite phrase for stating a shopping goal.' },
          { word: 'that’s good for', role: 'relative clause', note: '"That" introduces extra information describing the laptop.' }
        ],
        keyExpressions: [{ phrase: 'I’m looking for...', meaning: 'a standard shopping phrase to state what you want' }],
        exampleSentences: ['I’m looking for a phone with a good camera.'],
        pronunciationTips: ['Link "looking for" smoothly — the "g" softens into the next word.']
      },
      { speaker: 'A', text: 'Sure. What’s your budget looking like?', translation_tr: 'Tabii. Bütçeniz nasıl?', emotion: 'neutral', register: 'informal' },
      {
        speaker: 'B', expected: 'I’d rather not spend more than a thousand dollars.',
        altAccepted: ['Ideally under a thousand dollars.', 'I don’t want to spend more than a thousand.'],
        translation_tr: 'Bin dolardan fazla harcamamayı tercih ederim.',
        register: 'neutral', ipa: '/aɪd ˈræðər nɒt spɛnd mɔːr ðæn ə ˈθaʊzənd ˈdɒlərz/',
        grammar: [
          { word: 'I’d rather not', role: 'preference structure (would rather)', note: 'Followed by the base form of the verb — "spend," not "to spend" or "spending."' },
          { word: 'more than', role: 'comparative phrase', note: 'Sets an upper limit on the amount.' }
        ],
        keyExpressions: [{ phrase: 'I’d rather not...', meaning: 'a polite way to express a preference against something' }],
        exampleSentences: ['I’d rather not go out tonight.'],
        pronunciationTips: ['Contract "I would" naturally to "I’d" — one quick syllable.']
      },
      { speaker: 'A', text: 'No worries, I’ve got a couple of great options in that range. This one has a fast processor and a great screen.', translation_tr: 'Sorun değil, o aralıkta birkaç harika seçeneğim var. Bunun hızlı bir işlemcisi ve harika bir ekranı var.', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'That sounds great. Could I try it out first?',
        altAccepted: ['That sounds good. Can I try it before I decide?', 'Sounds perfect — mind if I try it out?'],
        translation_tr: 'Kulağa harika geliyor. Önce deneyebilir miyim?',
        register: 'neutral', ipa: '/ðæt saʊndz greɪt kʊd aɪ traɪ ɪt aʊt fɜːrst/',
        grammar: [
          { word: 'That sounds great', role: 'linking phrase', note: '"Sound" here means "to seem" based on what you’ve heard, not literal sound.' },
          { word: 'try it out', role: 'phrasal verb', note: '"Try out" means to test something before deciding.' }
        ],
        keyExpressions: [{ phrase: 'try (something) out', meaning: 'to test something before making a decision' }],
        exampleSentences: ['Can I try out the demo version first?'],
        pronunciationTips: ['Stress "sounds" and "great" evenly — both carry positive emphasis.']
      }
    ]
  }),

  createDialogue({
    id: 'tech-store-comparing-options-b1-01',
    locationId: 'tech-store',
    scenarioId: 'comparing-options',
    title: 'Comparing Two Laptops',
    level: 'B1',
    length: 'short',
    goal: 'Compare two products and choose based on your needs.',
    tags: ['advice', 'problem-solving'],
    sceneType: 'retail',
    characters: {
      A: { name: 'Ravi', role: 'Sales Assistant', gender: 'male', accent: 'indian', avatarPreset: 'assistant_m' },
      B: { name: 'You', role: 'Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Both are good machines. It depends what you need it for.', translation_tr: 'İkisi de iyi makineler. Ne için kullanacağınıza bağlı.', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'What’s the main difference between these two?',
        altAccepted: ['How do they differ?', 'Could you explain the difference between them?'],
        translation_tr: 'Bu ikisi arasındaki temel fark ne?',
        register: 'neutral', ipa: '/wɒts ðə meɪn ˈdɪfrəns bɪˈtwiːn ðiːz tuː/',
        grammar: [
          { word: 'the difference between', role: 'fixed collocation', note: 'Always "between" for two things, "among" for three or more.' },
          { word: 'main', role: 'adjective', note: 'Means most important — asks for the key point, not every detail.' }
        ],
        keyExpressions: [{ phrase: 'the difference between X and Y', meaning: 'the standard comparison question' }],
        exampleSentences: ['What’s the difference between these plans?'],
        pronunciationTips: ['"difference" is often two syllables in speech: DIF-runce.']
      },
      { speaker: 'A', text: 'This one has a better screen; that one has double the battery life.', translation_tr: 'Bunun ekranı daha iyi; şununsa pil ömrü iki katı.', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'I travel a lot, so battery life matters more to me.',
        altAccepted: ['Since I’m often away from a plug, battery is the priority.', 'Battery matters more — I work on trains a lot.'],
        translation_tr: 'Çok seyahat ediyorum, bu yüzden pil ömrü benim için daha önemli.',
        register: 'neutral', ipa: '/aɪ ˈtrævəl ə lɒt soʊ ˈbætəri laɪf ˈmætərz mɔːr tuː miː/',
        grammar: [
          { word: 'so', role: 'result connector', note: 'Introduces the consequence of the fact you just gave.' },
          { word: 'matters more to me', role: 'verb + comparative', note: '"Matter" means to be important. Note "to me", not "for me", here.' }
        ],
        keyExpressions: [{ phrase: 'it matters more to me', meaning: 'stating your personal priority' }],
        exampleSentences: ['Price matters more than design to me.'],
        pronunciationTips: ['"battery" is often BAT-ree in fast speech.']
      }
    ]
  }),

  createDialogue({
    id: 'tech-store-warranty-questions-b1-01',
    locationId: 'tech-store',
    scenarioId: 'warranty-questions',
    title: 'Asking About the Warranty',
    level: 'B1',
    length: 'short',
    goal: 'Understand what the warranty covers and for how long.',
    tags: ['problem-solving'],
    sceneType: 'retail',
    characters: {
      A: { name: 'Ravi', role: 'Sales Assistant', gender: 'male', accent: 'indian', avatarPreset: 'assistant_m' },
      B: { name: 'You', role: 'Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'It comes with a standard two-year warranty.', translation_tr: 'Standart iki yıl garantiyle geliyor.', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'Does the warranty cover accidental damage?',
        altAccepted: ['Is accidental damage included?', 'What if I drop it — is that covered?'],
        translation_tr: 'Garanti kaza sonucu hasarı kapsıyor mu?',
        register: 'neutral', ipa: '/dʌz ðə ˈwɒrənti ˈkʌvər ækˈsɪdəntəl ˈdæmɪdʒ/',
        grammar: [
          { word: 'cover', role: 'verb', note: 'In insurance and warranties, "cover" means to include and pay for.' },
          { word: 'accidental damage', role: 'compound noun', note: 'Damage caused by an accident, not by a manufacturing fault.' }
        ],
        keyExpressions: [{ phrase: 'Does it cover...?', meaning: 'checking what a warranty includes' }],
        exampleSentences: ['Does it cover water damage?', 'The warranty covers parts and labour.'],
        pronunciationTips: ['"warranty" is WOR-un-tee — three syllables.']
      },
      { speaker: 'A', text: 'No, that’s an optional extra for forty a year.', translation_tr: 'Hayır, o yılda kırk liralık isteğe bağlı bir ek.', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'What happens if it breaks after the warranty expires?',
        altAccepted: ['And once the two years are up?', 'What are my options after the warranty ends?'],
        translation_tr: 'Garanti bittikten sonra bozulursa ne olur?',
        register: 'neutral', ipa: '/wɒt ˈhæpənz ɪf ɪt breɪks ˈɑːftər ðə ˈwɒrənti ɪkˈspaɪərz/',
        grammar: [
          { word: 'expires', role: 'verb', note: 'Means to reach the end of its valid period — used for warranties, passports, tickets.' },
          { word: 'What happens if', role: 'conditional question', note: 'Present tense after "if" even though it refers to the future.' }
        ],
        keyExpressions: [{ phrase: 'the warranty expires', meaning: 'the guarantee period ends' }],
        exampleSentences: ['My passport expires in June.', 'What happens if I cancel?'],
        pronunciationTips: ['"expires" is stressed on the second syllable: ex-PIRES.']
      }
    ]
  })
];
