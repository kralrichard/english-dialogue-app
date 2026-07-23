import { createDialogue } from '../dialogueSchema.js';

export const SCHOOL_DIALOGUES = [
  createDialogue({
    id: 'school-talking-teacher-a2-01',
    locationId: 'school',
    scenarioId: 'talking-teacher',
    title: 'Asking the Teacher for Help',
    level: 'A2',
    length: 'short',
    goal: 'Tell a teacher you did not understand something and ask for help.',
    tags: ['advice', 'problem-solving'],
    sceneType: 'school',
    characters: {
      A: { name: 'Mrs Kaya', role: 'Teacher', gender: 'female', accent: 'international', avatarPreset: 'manager_f' },
      B: { name: 'You', role: 'Student', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Did everyone follow today’s lesson?', translation_tr: 'Herkes bugünkü dersi takip edebildi mi?', emotion: 'friendly', register: 'neutral' },
      {
        speaker: 'B', expected: 'Sorry, I didn’t understand the last part.',
        altAccepted: ['I’m afraid I didn’t follow the ending.', 'Excuse me, I didn’t understand the final example.'],
        translation_tr: 'Kusura bakmayın, son kısmı anlamadım.',
        register: 'neutral', ipa: '/ˈsɒri aɪ ˈdɪdənt ˌʌndərˈstænd ðə lɑːst pɑːrt/',
        grammar: [
          { word: 'didn’t understand', role: 'past simple negative', note: 'After "didn’t," the verb goes back to its base form: understand, not understood.' },
          { word: 'the last part', role: 'definite noun phrase', note: '"The" because both speakers know which lesson is meant.' }
        ],
        keyExpressions: [{ phrase: 'I didn’t understand', meaning: 'the clearest, most useful sentence a language learner can say' }],
        exampleSentences: ['I didn’t understand the question.', 'Sorry, I didn’t catch that.'],
        pronunciationTips: ['"didn’t" is usually said "did-n" — the final t almost disappears.']
      },
      { speaker: 'A', text: 'No problem. Which part exactly — the examples or the rule?', translation_tr: 'Sorun değil. Tam olarak hangi kısım — örnekler mi kural mı?', emotion: 'curious', register: 'neutral' },
      {
        speaker: 'B', expected: 'Could you explain the rule again, please?',
        altAccepted: ['Can you go over the rule one more time?', 'Would you mind repeating the rule?'],
        translation_tr: 'Kuralı tekrar açıklayabilir misiniz, lütfen?',
        register: 'neutral', ipa: '/kʊd juː ɪkˈspleɪn ðə ruːl əˈɡen pliːz/',
        grammar: [
          { word: 'Could you explain', role: 'polite request', note: '"Could you" is the safest polite request form with a teacher or stranger.' },
          { word: 'again', role: 'adverb', note: 'Goes at the end of the sentence in English, unlike Turkish word order.' }
        ],
        keyExpressions: [{ phrase: 'Could you explain ... again?', meaning: 'politely asking for a repeat explanation' }],
        exampleSentences: ['Could you say that again?', 'Could you explain this word?'],
        pronunciationTips: ['"explain" is stressed on the second syllable: ex-PLAIN.']
      },
      { speaker: 'A', text: 'Of course. Come to my desk after class and we’ll go through it slowly.', translation_tr: 'Elbette. Dersten sonra masama gel, yavaşça birlikte üzerinden geçelim.', emotion: 'friendly', register: 'neutral' },
      {
        speaker: 'B', expected: 'Thank you, that would really help.',
        altAccepted: ['Thanks, I’d appreciate that.', 'Thank you — that would be great.'],
        translation_tr: 'Teşekkürler, bu gerçekten yardımcı olur.',
        register: 'neutral', ipa: '/θæŋk juː ðæt wʊd ˈrɪəli help/',
        grammar: [
          { word: 'that would help', role: 'conditional "would"', note: 'Talks about a helpful result in an imagined future situation.' }
        ],
        keyExpressions: [{ phrase: 'that would really help', meaning: 'a warm way to accept an offer of assistance' }],
        exampleSentences: ['That would be perfect, thank you.'],
        pronunciationTips: ['"would" has a silent l: /wʊd/.']
      }
    ]
  }),

  createDialogue({
    id: 'school-homework-help-a2-01',
    locationId: 'school',
    scenarioId: 'homework-help',
    title: 'Asking About the Homework',
    level: 'A2',
    length: 'short',
    goal: 'Check what the homework is and when it must be handed in.',
    tags: ['problem-solving'],
    sceneType: 'school',
    characters: {
      A: { name: 'Mr Doyle', role: 'Teacher', gender: 'male', accent: 'irish', avatarPreset: 'clerk_m' },
      B: { name: 'You', role: 'Student', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Right, that’s everything for today. Any questions?', translation_tr: 'Tamam, bugünlük bu kadar. Sorusu olan?', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'Yes — what exactly do we have to do for homework?',
        altAccepted: ['Sorry, what’s the homework?', 'Could you tell us what the homework is?'],
        translation_tr: 'Evet — ödev için tam olarak ne yapmamız gerekiyor?',
        register: 'neutral', ipa: '/wɒt ɪɡˈzæktli duː wiː hæv tuː duː fɔːr ˈhoʊmwɜːrk/',
        grammar: [
          { word: 'have to do', role: 'obligation', note: '"Have to" expresses an external obligation — the teacher’s rule, not your choice.' },
          { word: 'exactly', role: 'adverb', note: 'Placed after the question word to ask for precise information.' },
          { word: 'homework', role: 'uncountable noun', note: 'Never "homeworks" — it has no plural in English.' }
        ],
        keyExpressions: [{ phrase: 'What do we have to do?', meaning: 'asking what is required of you' }],
        exampleSentences: ['What do I have to bring?', 'We have to finish it tonight.'],
        pronunciationTips: ['"have to" is pronounced "haf-tuh" — the v becomes an f sound.']
      },
      { speaker: 'A', text: 'Read chapter six and answer the questions at the end.', translation_tr: 'Altıncı bölümü okuyun ve sonundaki soruları cevaplayın.', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'When do we have to hand it in?',
        altAccepted: ['When is it due?', 'What day should we bring it?'],
        translation_tr: 'Ne zaman teslim etmemiz gerekiyor?',
        register: 'neutral', ipa: '/wen duː wiː hæv tuː hænd ɪt ɪn/',
        grammar: [
          { word: 'hand it in', role: 'phrasal verb', note: 'Means "submit". The object "it" goes between the two parts: hand it in, not hand in it.' }
        ],
        keyExpressions: [{ phrase: 'hand in', meaning: 'to give completed work to a teacher' }],
        exampleSentences: ['I handed my essay in late.', 'When is the project due?'],
        pronunciationTips: ['Link the words: "hand-it-in" flows as one unit.']
      },
      { speaker: 'A', text: 'By Friday morning, please. Email it if you’re absent.', translation_tr: 'Cuma sabahına kadar lütfen. Gelemezseniz e-posta ile gönderin.', emotion: 'formal', register: 'neutral' },
      {
        speaker: 'B', expected: 'Got it. Thanks, Mr Doyle.',
        altAccepted: ['Understood, thank you.', 'Okay, thanks a lot.'],
        translation_tr: 'Anladım. Teşekkürler, Mr Doyle.',
        register: 'informal', ipa: '/ɡɒt ɪt θæŋks/',
        grammar: [
          { word: 'Got it', role: 'informal fixed expression', note: 'Short for "I have got it" — means "I understand". Common but informal.' }
        ],
        keyExpressions: [{ phrase: 'Got it', meaning: 'a quick, casual way to confirm you understood' }],
        exampleSentences: ['Got it, I’ll be there at six.'],
        pronunciationTips: ['In American English the t sounds like a soft d: "gah-dit".']
      }
    ]
  })
];
