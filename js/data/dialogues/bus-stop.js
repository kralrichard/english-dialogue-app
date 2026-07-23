import { createDialogue } from '../dialogueSchema.js';

export const BUS_STOP_DIALOGUES = [
  createDialogue({
    id: 'bus-stop-asking-route-a1-01',
    locationId: 'bus-stop',
    scenarioId: 'asking-route',
    title: 'Which Bus Goes to the Centre?',
    level: 'A1',
    length: 'short',
    goal: 'Find out which bus to take and how long it will take.',
    tags: ['directions'],
    sceneType: 'street',
    characters: {
      A: { name: 'Ahmed', role: 'Person Waiting', gender: 'male', accent: 'international', avatarPreset: 'guest_m' },
      B: { name: 'You', role: 'Traveller', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Are you waiting for the number twelve as well?', translation_tr: 'Siz de on iki numarayı mı bekliyorsunuz?', emotion: 'curious', register: 'informal' },
      {
        speaker: 'B', expected: 'I’m not sure. Which bus goes to the city centre?',
        altAccepted: ['Actually, which bus goes downtown?', 'I don’t know — does this one go to the centre?'],
        translation_tr: 'Emin değilim. Şehir merkezine hangi otobüs gidiyor?',
        register: 'neutral', ipa: '/wɪtʃ bʌs ɡoʊz tuː ðə ˈsɪti ˈsentər/',
        grammar: [
          { word: 'Which bus', role: 'question word + noun', note: '"Which" is used when choosing from a limited group — the buses at this stop.' },
          { word: 'goes', role: 'present simple, third person', note: 'The subject "bus" is singular, so the verb takes -es.' }
        ],
        keyExpressions: [{ phrase: 'Which bus goes to...?', meaning: 'the standard way to ask about a route' }],
        exampleSentences: ['Which train goes to the airport?', 'Which bus goes to the station?'],
        pronunciationTips: ['"goes" rhymes with "nose" — a long /oʊ/.']
      },
      { speaker: 'A', text: 'The twelve does. It stops right outside the main square.', translation_tr: 'On iki gidiyor. Tam ana meydanın önünde duruyor.', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'How long does it take?',
        altAccepted: ['How long is the journey?', 'How many minutes is it?'],
        translation_tr: 'Ne kadar sürüyor?',
        register: 'neutral', ipa: '/haʊ lɒŋ dʌz ɪt teɪk/',
        grammar: [
          { word: 'take', role: 'verb of duration', note: 'For travel time English uses "take": It takes twenty minutes.' }
        ],
        keyExpressions: [{ phrase: 'How long does it take?', meaning: 'asking about the duration of a journey or task' }],
        exampleSentences: ['How long does the flight take?', 'It takes about an hour.'],
        pronunciationTips: ['Say it as one quick chunk: "how-long-duz-it-take".']
      },
      { speaker: 'A', text: 'About twenty minutes at this time of day.', translation_tr: 'Günün bu saatinde yaklaşık yirmi dakika.', emotion: 'neutral', register: 'informal' },
      {
        speaker: 'B', expected: 'That’s not bad. Thanks for your help!',
        altAccepted: ['That’s quick, thanks!', 'Good, thank you very much.'],
        translation_tr: 'Fena değil. Yardımınız için teşekkürler!',
        register: 'informal', ipa: '/ðæts nɒt bæd θæŋks fɔːr jɔːr help/',
        grammar: [
          { word: 'That’s not bad', role: 'understatement', note: 'A very English way of saying "that is quite good" without sounding excited.' }
        ],
        keyExpressions: [{ phrase: 'not bad', meaning: 'reasonably good — a mild, positive reaction' }],
        exampleSentences: ['The food was not bad at all.', 'Not bad for a first try!'],
        pronunciationTips: ['Stress "bad" lightly; the meaning is positive, so keep your tone warm.']
      }
    ]
  }),

  createDialogue({
    id: 'bus-stop-waiting-chat-a2-01',
    locationId: 'bus-stop',
    scenarioId: 'waiting-chat',
    title: 'Chatting While the Bus Is Late',
    level: 'A2',
    length: 'short',
    goal: 'Make small talk with a stranger while waiting for a delayed bus.',
    tags: ['small-talk'],
    sceneType: 'street',
    characters: {
      A: { name: 'Margaret', role: 'Person Waiting', gender: 'female', accent: 'british', avatarPreset: 'colleague_f' },
      B: { name: 'You', role: 'Traveller', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'This bus is always late, isn’t it?', translation_tr: 'Bu otobüs hep geç kalıyor, değil mi?', emotion: 'concerned', register: 'informal' },
      {
        speaker: 'B', expected: 'I’ve been waiting for fifteen minutes already.',
        altAccepted: ['I’ve been here for a quarter of an hour.', 'Yes, I’ve been waiting quite a while.'],
        translation_tr: 'On beş dakikadır bekliyorum.',
        register: 'informal', ipa: '/aɪv bɪn ˈweɪtɪŋ fɔːr fɪfˈtiːn ˈmɪnɪts ɔːlˈredi/',
        grammar: [
          { word: 'I’ve been waiting', role: 'present perfect continuous', note: 'For an action that started in the past and is still happening now.' },
          { word: 'for fifteen minutes', role: 'duration with "for"', note: 'Use "for" with a length of time; use "since" with a starting point.' },
          { word: 'already', role: 'adverb', note: 'At the end of the sentence it adds a note of impatience or surprise.' }
        ],
        keyExpressions: [{ phrase: 'I’ve been waiting for...', meaning: 'stating how long you have been waiting' }],
        exampleSentences: ['I’ve been living here for two years.', 'She’s been studying since morning.'],
        pronunciationTips: ['"I’ve been" is reduced in speech to "ayv-bin" — very quick.']
      },
      { speaker: 'A', text: 'Oh dear. There must be traffic on the bridge again.', translation_tr: 'Vah vah. Köprüde yine trafik olmalı.', emotion: 'thinking', register: 'informal' },
      {
        speaker: 'B', expected: 'Probably. Do you take this bus every day?',
        altAccepted: ['Maybe. Do you use this route often?', 'You might be right. Is this your usual bus?'],
        translation_tr: 'Muhtemelen. Bu otobüse her gün mü biniyorsunuz?',
        register: 'informal', ipa: '/ˈprɒbəbli duː juː teɪk ðɪs bʌs ˈevri deɪ/',
        grammar: [
          { word: 'take this bus', role: 'collocation', note: 'In English you "take" a bus, train or taxi — not "ride" it in everyday speech.' },
          { word: 'every day', role: 'frequency phrase', note: 'Two separate words. "Everyday" as one word is an adjective meaning "ordinary".' }
        ],
        keyExpressions: [{ phrase: 'Do you take this bus?', meaning: 'a natural small-talk question at a bus stop' }],
        exampleSentences: ['I take the metro to work.', 'We take a taxi when it rains.'],
        pronunciationTips: ['"Probably" is often shortened to two syllables: PROB-ly.']
      },
      { speaker: 'A', text: 'Every morning, sadly. Ah — here it comes at last!', translation_tr: 'Maalesef her sabah. Ah — sonunda geliyor!', emotion: 'happy', register: 'informal' },
      {
        speaker: 'B', expected: 'Finally! Have a good day.',
        altAccepted: ['At last! Have a nice day.', 'Great — take care!'],
        translation_tr: 'Nihayet! İyi günler.',
        register: 'informal', ipa: '/ˈfaɪnəli hæv ə ɡʊd deɪ/',
        grammar: [
          { word: 'Finally', role: 'adverb as exclamation', note: 'On its own it expresses relief that something took a long time.' }
        ],
        keyExpressions: [{ phrase: 'Have a good day', meaning: 'a warm, standard way to end a short conversation' }],
        exampleSentences: ['Finally, the rain stopped!', 'Have a good evening.'],
        pronunciationTips: ['Stretch the first syllable of "finally" to show relief: FIII-nally.']
      }
    ]
  })
];
