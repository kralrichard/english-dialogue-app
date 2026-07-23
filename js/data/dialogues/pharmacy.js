import { createDialogue } from '../dialogueSchema.js?v=content108';

export const PHARMACY_DIALOGUES = [
  createDialogue({
    id: 'pharmacy-asking-medicine-a1-01',
    locationId: 'pharmacy',
    scenarioId: 'asking-medicine',
    title: 'Asking for Medicine',
    level: 'A1',
    variant: 1,
    length: 'short',
    goal: 'Explain a symptom and buy the right medicine.',
    tags: ['problem-solving'],
    sceneType: 'retail',
    characters: {
      A: { name: 'Fatima', role: 'Pharmacist', gender: 'female', accent: 'british', avatarPreset: 'pharmacist_f' },
      B: { name: 'Customer', role: 'Pharmacy Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Hello. How can I help you today?', translation_tr: 'Merhaba. Bugün size nasıl yardımcı olabilirim?', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'I have a headache. Do you have any painkillers?',
        altAccepted: ['I’ve got a headache. Do you have painkillers?'],
        translation_tr: 'Başım ağrıyor. Ağrı kesiciniz var mı?',
        register: 'neutral', ipa: '/aɪ hæv ə ˈhɛdeɪk duː juː hæv ˈɛni ˈpeɪnˌkɪlərz/',
        grammar: [
          { word: 'I have', role: 'subject + verb', note: 'Used to describe a symptom you are experiencing now.' },
          { word: 'a headache', role: 'object', note: 'Pain in the head — a common symptom noun.' },
          { word: 'Do you have', role: 'question form (present simple)', note: 'The standard way to ask if a shop sells something.' },
          { word: 'any', role: 'quantifier', note: 'Used in questions before plural/uncountable nouns.' }
        ],
        keyExpressions: [{ phrase: 'Do you have any...?', meaning: 'a standard way to ask if something is available' }],
        exampleSentences: ['I have a sore throat.', 'Do you have any cough syrup?'],
        pronunciationTips: ['Stress "headache" on the first syllable: HEAD-ache.']
      },
      { speaker: 'A', text: 'Of course. Here’s some ibuprofen. Take one tablet every six hours.', translation_tr: 'Elbette. İşte biraz ibuprofen. Altı saatte bir tablet alın.', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'Thank you. How much is it?',
        altAccepted: ['Thanks. How much does it cost?', 'Thank you, how much is that?'],
        translation_tr: 'Teşekkürler. Ne kadar tutar?',
        register: 'neutral', ipa: '/θæŋk juː haʊ mʌtʃ ɪz ɪt/',
        grammar: [
          { word: 'How much', role: 'question word', note: 'Used to ask about price or quantity of uncountable things.' },
          { word: 'is it', role: 'subject + verb (present simple)', note: 'Refers back to "it" — the medicine.' }
        ],
        keyExpressions: [{ phrase: 'How much is it?', meaning: 'a simple way to ask the price of something' }],
        exampleSentences: ['How much is this shirt?'],
        pronunciationTips: ['Rise in pitch slightly on "much" — it’s the focus word in the question.']
      }
    ]
  }),

  createDialogue({
    id: 'pharmacy-side-effects-b1-01',
    locationId: 'pharmacy',
    scenarioId: 'side-effects',
    title: 'Asking About Side Effects',
    level: 'B1',
    length: 'short',
    goal: 'Check the side effects of a medicine and whether it affects driving.',
    tags: ['advice', 'problem-solving'],
    sceneType: 'retail',
    characters: {
      A: { name: 'Nadia', role: 'Pharmacist', gender: 'female', accent: 'international', avatarPreset: 'pharmacist_f' },
      B: { name: 'You', role: 'Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Here you are. Take one tablet twice a day with food.', translation_tr: 'Buyurun. Günde iki kez, yemekle birlikte bir tablet alın.', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Are there any side effects I should know about?',
        altAccepted: ['Does it have any side effects?', 'Is there anything I should watch out for?'],
        translation_tr: 'Bilmem gereken herhangi bir yan etkisi var mı?',
        register: 'formal', ipa: '/ɑːr ðeər ˈeni saɪd ɪˈfekts aɪ ʃʊd noʊ əˈbaʊt/',
        grammar: [
          { word: 'side effects', role: 'compound noun', note: 'Unwanted effects of a medicine, in addition to the intended one.' },
          { word: 'I should know about', role: 'relative clause', note: '"That" is omitted; the preposition "about" stays at the end.' }
        ],
        keyExpressions: [{ phrase: 'side effects', meaning: 'secondary, usually unwanted effects of a drug' }],
        exampleSentences: ['Are there any risks I should know about?'],
        pronunciationTips: ['"effects" (noun) vs "affects" (verb) — different words, similar sound.']
      },
      { speaker: 'A', text: 'It may make you drowsy, especially the first few days.', translation_tr: 'Özellikle ilk birkaç gün sizi uykulu yapabilir.', emotion: 'concerned', register: 'formal' },
      {
        speaker: 'B', expected: 'In that case, should I avoid driving?',
        altAccepted: ['Does that mean I shouldn’t drive?', 'Is it safe to drive while taking it?'],
        translation_tr: 'Bu durumda araba kullanmaktan kaçınmalı mıyım?',
        register: 'formal', ipa: '/ʃʊd aɪ əˈvɔɪd ˈdraɪvɪŋ/',
        grammar: [
          { word: 'avoid driving', role: 'verb + gerund', note: 'After "avoid" always use the -ing form, never the infinitive.' },
          { word: 'drowsy', role: 'adjective', note: 'Means sleepy — the standard word on medicine labels.' }
        ],
        keyExpressions: [{ phrase: 'avoid + -ing', meaning: 'the required structure after this verb' }],
        exampleSentences: ['Avoid drinking alcohol with it.', 'I avoid eating late.'],
        pronunciationTips: ['"drowsy" rhymes with "how-zee".']
      }
    ]
  }),

  createDialogue({
    id: 'pharmacy-refill-prescription-a2-01',
    locationId: 'pharmacy',
    scenarioId: 'refill-prescription',
    title: 'Refilling a Prescription',
    level: 'A2',
    length: 'short',
    goal: 'Collect a repeat prescription and check when it will be ready.',
    tags: ['problem-solving'],
    sceneType: 'retail',
    characters: {
      A: { name: 'Tom', role: 'Pharmacy Assistant', gender: 'male', accent: 'british', avatarPreset: 'clerk_m' },
      B: { name: 'You', role: 'Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Hello, how can I help?', translation_tr: 'Merhaba, nasıl yardımcı olabilirim?', emotion: 'friendly', register: 'neutral' },
      {
        speaker: 'B', expected: 'I’d like to pick up my repeat prescription, please.',
        altAccepted: ['I’m here to collect a prescription.', 'Could I refill my prescription?'],
        translation_tr: 'Tekrar reçetemi almak istiyorum, lütfen.',
        register: 'neutral', ipa: '/aɪd laɪk tuː pɪk ʌp maɪ rɪˈpiːt prɪˈskrɪpʃən/',
        grammar: [
          { word: 'pick up', role: 'phrasal verb', note: 'Means to collect something that is waiting for you.' },
          { word: 'repeat prescription', role: 'compound noun', note: 'A prescription renewed regularly without a new doctor’s visit.' }
        ],
        keyExpressions: [{ phrase: 'pick up a prescription', meaning: 'collect prepared medicine from a pharmacy' }],
        exampleSentences: ['I’ll pick it up tomorrow.', 'Can you pick up the kids?'],
        pronunciationTips: ['"prescription" is pre-SCRIP-shun — do not say "perscription".']
      },
      { speaker: 'A', text: 'Name and date of birth, please?', translation_tr: 'İsim ve doğum tarihi, lütfen?', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'Elif Yılmaz, the third of May, 1995.',
        altAccepted: ['It’s Elif Yılmaz, born on 3 May 1995.', 'Yılmaz — third of May, ninety-five.'],
        translation_tr: 'Elif Yılmaz, 3 Mayıs 1995.',
        register: 'neutral', ipa: '/ðə θɜːrd əv meɪ ˈnaɪntiːn ˈnaɪnti faɪv/',
        grammar: [
          { word: 'the third of May', role: 'date format', note: 'British style. Americans usually say "May third".' },
          { word: '1995', role: 'year reading', note: 'Years are read in pairs: nineteen ninety-five.' }
        ],
        keyExpressions: [{ phrase: 'date of birth', meaning: 'the standard identification question' }],
        exampleSentences: ['I was born in 2001.', 'The tenth of June.'],
        pronunciationTips: ['Say dates slowly — pharmacists must match records exactly.']
      }
    ]
  })
];
