import { createDialogue } from '../dialogueSchema.js?v=content109';

export const PARTY_DIALOGUES = [
  createDialogue({
    id: 'party-meeting-someone-new-a2-01',
    locationId: 'party',
    scenarioId: 'meeting-someone-new',
    title: 'Meeting Someone New at a Party',
    level: 'A2',
    variant: 1,
    length: 'medium',
    goal: 'Introduce yourself and make small talk with someone new.',
    tags: ['small-talk', 'meeting-someone'],
    sceneType: 'party',
    characters: {
      A: { name: 'Jordan', role: 'Party Guest', gender: 'male', accent: 'canadian', avatarPreset: 'guest_m' },
      B: { name: 'You', role: 'Party Guest', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Hi! I don’t think we’ve met. I’m Jordan.', translation_tr: 'Merhaba! Sanırım tanışmadık. Ben Jordan.', emotion: 'happy', register: 'informal' },
      {
        speaker: 'B', expected: 'Nice to meet you, Jordan. I’m Alex.',
        altAccepted: ['Nice to meet you. My name is Alex.', 'Pleased to meet you, I’m Alex.'],
        translation_tr: 'Tanıştığımıza memnun oldum, Jordan. Ben Alex.',
        register: 'informal', ipa: '/naɪs tuː miːt juː ˈdʒɔːrdən aɪm ˈæləks/',
        grammar: [
          { word: 'Nice to meet you', role: 'fixed greeting phrase', note: 'The standard response when meeting someone for the first time.' },
          { word: 'I’m Alex', role: 'subject + verb + name', note: 'A simple way to introduce your own name.' }
        ],
        keyExpressions: [{ phrase: 'Nice to meet you', meaning: 'a standard, friendly greeting for a first meeting' }],
        exampleSentences: ['Nice to meet you, I’ve heard a lot about you.'],
        pronunciationTips: ['Say "nice to meet you" as one smooth, connected phrase.']
      },
      { speaker: 'A', text: 'So, how do you know the host?', translation_tr: 'Peki, ev sahibini nereden tanıyorsun?', emotion: 'curious', register: 'informal' },
      {
        speaker: 'B', expected: 'We work together. What about you?',
        altAccepted: ['We’re coworkers. How about you?', 'We work at the same company. And you?'],
        translation_tr: 'Birlikte çalışıyoruz. Ya sen?',
        register: 'informal', ipa: '/wiː wɜːrk təˈgɛðər wʌt əˈbaʊt juː/',
        grammar: [
          { word: 'We work together', role: 'present simple', note: 'Describes a general, ongoing fact about your relationship.' },
          { word: 'What about you?', role: 'fixed question', note: 'A quick way to turn the question back to the other person.' }
        ],
        keyExpressions: [{ phrase: 'What about you?', meaning: 'used to ask the same question back to someone' }],
        exampleSentences: ['I’m from Spain — what about you?'],
        pronunciationTips: ['Rise in pitch on "you" — it signals you’re asking a genuine question back.']
      },
      { speaker: 'A', text: 'Oh nice! I’m actually her neighbor.', translation_tr: 'Ah harika! Ben aslında onun komşusuyum.', emotion: 'happy', register: 'informal' },
      {
        speaker: 'B', expected: 'That’s great. It’s a nice party, isn’t it?',
        altAccepted: ['Cool! It’s a nice party, right?', 'That’s nice. This is a great party.'],
        translation_tr: 'Harika. Güzel bir parti, değil mi?',
        register: 'informal', ipa: '/ðæts greɪt ɪts ə naɪs ˈpɑːrti ˈɪznt ɪt/',
        grammar: [
          { word: 'isn’t it?', role: 'question tag', note: 'Added to a statement to invite agreement — common in casual conversation.' }
        ],
        keyExpressions: [{ phrase: '..., isn’t it?', meaning: 'a question tag used to invite agreement' }],
        exampleSentences: ['It’s a lovely evening, isn’t it?'],
        pronunciationTips: ['The tag "isn’t it" usually rises in pitch at the end, like a real question.']
      }
    ]
  }),

  createDialogue({
    id: 'party-party-smalltalk-a2-01',
    locationId: 'party',
    scenarioId: 'party-smalltalk',
    title: 'Small Talk at a Party',
    level: 'A2',
    length: 'short',
    goal: 'Keep a light conversation going with someone you just met.',
    tags: ['small-talk'],
    sceneType: 'party',
    characters: {
      A: { name: 'Nora', role: 'Guest', gender: 'female', accent: 'american', avatarPreset: 'colleague_f' },
      B: { name: 'You', role: 'Guest', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'So, how do you know the host?', translation_tr: 'Peki, ev sahibini nereden tanıyorsun?', emotion: 'curious', register: 'informal' },
      {
        speaker: 'B', expected: 'We used to work together. How about you?',
        altAccepted: ['We were colleagues a few years ago. And you?', 'Through work, actually. What about you?'],
        translation_tr: 'Eskiden birlikte çalışıyorduk. Ya sen?',
        register: 'informal', ipa: '/wiː juːst tuː wɜːrk təˈɡeðər haʊ əˈbaʊt juː/',
        grammar: [
          { word: 'used to work', role: 'past habit', note: '"Used to" describes something true in the past but not now. Always followed by the base verb.' },
          { word: 'How about you?', role: 'return question', note: 'Keeps the conversation balanced — essential in small talk.' }
        ],
        keyExpressions: [{ phrase: 'used to', meaning: 'a past habit or state that has ended' }],
        exampleSentences: ['I used to live in Ankara.', 'We used to be neighbours.'],
        pronunciationTips: ['"used to" is pronounced "yoos-tuh" — the d disappears.']
      },
      { speaker: 'A', text: 'We’re neighbours. She’s been so kind since I moved in.', translation_tr: 'Komşuyuz. Taşındığımdan beri çok iyi davrandı.', emotion: 'happy', register: 'informal' },
      {
        speaker: 'B', expected: 'That’s lovely. Have you lived here long?',
        altAccepted: ['How nice. How long have you been in the area?', 'That’s great. Are you new to the neighbourhood?'],
        translation_tr: 'Ne güzel. Uzun zamandır mı burada yaşıyorsun?',
        register: 'informal', ipa: '/hæv juː lɪvd hɪər lɒŋ/',
        grammar: [
          { word: 'Have you lived', role: 'present perfect question', note: 'Asks about a period continuing to the present.' },
          { word: 'long', role: 'adverb in questions', note: 'In questions we say "long"; in positive statements we say "a long time".' }
        ],
        keyExpressions: [{ phrase: 'Have you lived here long?', meaning: 'a natural follow-up question in small talk' }],
        exampleSentences: ['Have you worked here long?', 'I’ve lived here for years.'],
        pronunciationTips: ['Keep your intonation rising and warm — this is a friendly question.']
      }
    ]
  }),

  createDialogue({
    id: 'party-saying-goodbye-a2-01',
    locationId: 'party',
    scenarioId: 'saying-goodbye',
    title: 'Leaving a Party Politely',
    level: 'A2',
    length: 'short',
    goal: 'Say goodbye gracefully and thank your host.',
    tags: ['small-talk'],
    sceneType: 'party',
    characters: {
      A: { name: 'Emre', role: 'Host', gender: 'male', accent: 'international', avatarPreset: 'guest_m' },
      B: { name: 'You', role: 'Guest', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Leaving already? It’s still early!', translation_tr: 'Şimdiden mi gidiyorsun? Daha erken!', emotion: 'surprised', register: 'informal' },
      {
        speaker: 'B', expected: 'I’m afraid I have to go — I’ve got an early start tomorrow.',
        altAccepted: ['Sadly yes, I have work early in the morning.', 'I’d love to stay, but I have to be up early.'],
        translation_tr: 'Korkarım gitmem gerek — yarın erken kalkacağım.',
        register: 'informal', ipa: '/aɪv ɡɒt ən ˈɜːrli stɑːrt təˈmɒroʊ/',
        grammar: [
          { word: 'I have to go', role: 'obligation', note: 'Explains that the reason is external, not a lack of interest — softer than "I want to go".' },
          { word: 'an early start', role: 'fixed phrase', note: 'Means beginning your day early, usually for work.' }
        ],
        keyExpressions: [{ phrase: 'an early start', meaning: 'having to get up or begin early' }],
        exampleSentences: ['I’ve got an early start on Monday.'],
        pronunciationTips: ['"have to" sounds like "haf-tuh".']
      },
      { speaker: 'A', text: 'No worries. I’m really glad you came.', translation_tr: 'Sorun değil. Geldiğine gerçekten sevindim.', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Thanks for having me — it was a great evening.',
        altAccepted: ['Thank you for inviting me, I had a lovely time.', 'It was really fun. Thanks for everything!'],
        translation_tr: 'Davet ettiğin için teşekkürler — harika bir akşamdı.',
        register: 'informal', ipa: '/θæŋks fɔːr ˈhævɪŋ miː ɪt wɒz ə ɡreɪt ˈiːvnɪŋ/',
        grammar: [
          { word: 'Thanks for having me', role: 'fixed expression', note: 'The standard phrase a guest says when leaving. "Having" means hosting.' },
          { word: 'it was', role: 'past simple', note: 'The evening is finished from your point of view, so the past tense is right.' }
        ],
        keyExpressions: [{ phrase: 'Thanks for having me', meaning: 'the classic guest’s thank-you on leaving' }],
        exampleSentences: ['Thanks for having us!', 'It was a lovely evening.'],
        pronunciationTips: ['Say it warmly with a falling tone — it is a genuine closing.']
      }
    ]
  })
];
