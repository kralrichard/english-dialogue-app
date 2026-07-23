import { createDialogue } from '../dialogueSchema.js?v=content108';

export const TAXI_DIALOGUES = [
  createDialogue({
    id: 'taxi-giving-directions-a1-01',
    locationId: 'taxi',
    scenarioId: 'giving-directions',
    title: 'Giving Directions to the Driver',
    level: 'A1',
    variant: 1,
    length: 'short',
    goal: 'Tell the driver where you want to go and pay at the end.',
    tags: ['directions'],
    sceneType: 'taxi',
    characters: {
      A: { name: 'Sam', role: 'Taxi Driver', gender: 'male', accent: 'american', avatarPreset: 'driver_m' },
      B: { name: 'Passenger', role: 'Taxi Passenger', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Hi, where would you like to go?', translation_tr: 'Merhaba, nereye gitmek istersiniz?', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'To the central station, please.',
        altAccepted: ['The central station, please.', 'To the train station, please.'],
        translation_tr: 'Merkez istasyona, lütfen.',
        register: 'neutral', ipa: '/tuː ðə ˈsɛntrəl ˈsteɪʃən pliːz/',
        grammar: [
          { word: 'To', role: 'preposition of direction', note: 'Shows the destination — "to + place."' },
          { word: 'the central station', role: 'object', note: 'The specific place you want to go.' },
          { word: 'please', role: 'politeness marker', note: 'Softens the instruction.' }
        ],
        keyExpressions: [{ phrase: 'To + place, please', meaning: 'a simple way to state your destination to a driver' }],
        exampleSentences: ['To the airport, please.'],
        pronunciationTips: ['Stress "central" on the first syllable: CEN-tral.']
      },
      { speaker: 'A', text: 'No problem. It will take about ten minutes.', translation_tr: 'Sorun değil. Yaklaşık on dakika sürecek.', emotion: 'neutral', register: 'informal' },
      {
        speaker: 'B', expected: 'That’s fine, thank you.',
        altAccepted: ['That’s okay, thanks.', 'Great, thank you.'],
        translation_tr: 'Sorun değil, teşekkür ederim.',
        register: 'neutral', ipa: '/ðæts faɪn θæŋk juː/',
        grammar: [{ word: 'That’s fine', role: 'fixed response', note: 'Shows the information is acceptable to you.' }],
        keyExpressions: [{ phrase: 'That’s fine', meaning: 'used to accept information calmly' }],
        exampleSentences: ['That’s fine, no rush.'],
        pronunciationTips: ['Keep your voice relaxed and even — this is a calm, easy response.']
      },
      { speaker: 'A', text: 'Here we are. That’s twelve dollars.', translation_tr: 'İşte geldik. On iki dolar.', emotion: 'neutral', register: 'informal' },
      {
        speaker: 'B', expected: 'Here you go. Keep the change.',
        altAccepted: ['Here you are. Keep the change.'],
        translation_tr: 'Buyurun. Üstü kalsın.',
        register: 'informal', ipa: '/hɪər juː goʊ kiːp ðə tʃeɪndʒ/',
        grammar: [
          { word: 'Keep the change', role: 'fixed expression', note: 'Tells the driver they can keep the extra money as a tip.' }
        ],
        keyExpressions: [{ phrase: 'Keep the change', meaning: 'let the person keep the extra money as a tip' }],
        exampleSentences: ['That’s fifteen, keep the change.'],
        pronunciationTips: ['Say "change" with a clear "ch" sound, like "chair."']
      }
    ]
  }),

  createDialogue({
    id: 'taxi-discussing-fare-b1-01',
    locationId: 'taxi',
    scenarioId: 'discussing-fare',
    title: 'Questioning the Fare',
    level: 'B1',
    length: 'short',
    goal: 'Query an unexpectedly high fare politely and reach agreement.',
    tags: ['negotiation', 'complaint'],
    sceneType: 'taxi',
    characters: {
      A: { name: 'Hasan', role: 'Taxi Driver', gender: 'male', accent: 'international', avatarPreset: 'driver_m' },
      B: { name: 'You', role: 'Passenger', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Here we are. That’ll be forty-two, please.', translation_tr: 'Geldik. Kırk iki olacak, lütfen.', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'That’s more than I expected. Is the meter running correctly?',
        altAccepted: ['I thought it would be around thirty. Could you check the meter?', 'That seems high — was there a surcharge?'],
        translation_tr: 'Beklediğimden fazla. Taksimetre doğru çalışıyor mu?',
        register: 'neutral', ipa: '/ðæts mɔːr ðæn aɪ ɪkˈspektɪd/',
        grammar: [
          { word: 'more than I expected', role: 'comparative clause', note: 'States the problem factually without accusing anyone — the polite way to query a price.' },
          { word: 'the meter running', role: 'noun + present participle', note: '"Running" here means operating or working.' }
        ],
        keyExpressions: [{ phrase: 'more than I expected', meaning: 'a neutral way to challenge a price' }],
        exampleSentences: ['It cost more than I expected.', 'Is the meter on?'],
        pronunciationTips: ['Keep an even tone — sounding accusatory rarely helps.']
      },
      { speaker: 'A', text: 'There’s a night surcharge after eleven, plus the airport fee.', translation_tr: 'On birden sonra gece tarifesi var, artı havalimanı ücreti.', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'I see. Could I have a receipt showing the breakdown?',
        altAccepted: ['That explains it. May I have an itemised receipt?', 'Understood — could you print a receipt, please?'],
        translation_tr: 'Anladım. Dökümü gösteren bir fiş alabilir miyim?',
        register: 'neutral', ipa: '/kʊd aɪ hæv ə rɪˈsiːt ˈʃoʊɪŋ ðə ˈbreɪkdaʊn/',
        grammar: [
          { word: 'breakdown', role: 'noun', note: 'Here it means a detailed list of the parts of a total — not a mechanical failure.' },
          { word: 'showing', role: 'participle clause', note: 'Short for "which shows" — a compact way to describe the receipt.' }
        ],
        keyExpressions: [{ phrase: 'a breakdown of the cost', meaning: 'an itemised explanation of a total' }],
        exampleSentences: ['Could I have a receipt?', 'Send me a breakdown of the charges.'],
        pronunciationTips: ['The p in "receipt" is silent: /rɪˈsiːt/.']
      }
    ]
  }),

  createDialogue({
    id: 'taxi-driver-smalltalk-a2-01',
    locationId: 'taxi',
    scenarioId: 'driver-smalltalk',
    title: 'Small Talk with the Driver',
    level: 'A2',
    length: 'short',
    goal: 'Make friendly conversation during a taxi ride.',
    tags: ['small-talk'],
    sceneType: 'taxi',
    characters: {
      A: { name: 'Hasan', role: 'Taxi Driver', gender: 'male', accent: 'international', avatarPreset: 'driver_m' },
      B: { name: 'You', role: 'Passenger', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'First time in the city?', translation_tr: 'Şehre ilk gelişiniz mi?', emotion: 'curious', register: 'informal' },
      {
        speaker: 'B', expected: 'Yes, I arrived yesterday. It looks beautiful so far.',
        altAccepted: ['It is — I got here last night. I love it already.', 'Yes, my first visit. It seems lovely.'],
        translation_tr: 'Evet, dün geldim. Şimdiye kadar çok güzel görünüyor.',
        register: 'informal', ipa: '/aɪ əˈraɪvd ˈjestərdeɪ ɪt lʊks ˈbjuːtɪfəl soʊ fɑːr/',
        grammar: [
          { word: 'arrived', role: 'past simple', note: 'We arrive IN a city, but arrive AT a building or airport.' },
          { word: 'so far', role: 'time expression', note: 'Means "up to now" — leaves room for the opinion to change.' }
        ],
        keyExpressions: [{ phrase: 'so far', meaning: 'until now' }],
        exampleSentences: ['So far, so good.', 'I arrived in London on Tuesday.'],
        pronunciationTips: ['"beautiful" has three syllables: BYOO-ti-ful.']
      },
      { speaker: 'A', text: 'You should try the old market. Tourists always miss it.', translation_tr: 'Eski çarşıyı görmelisiniz. Turistler hep kaçırır.', emotion: 'happy', register: 'informal' },
      {
        speaker: 'B', expected: 'Thanks for the tip. Whereabouts is it?',
        altAccepted: ['Good to know — where exactly is that?', 'I’ll write that down. Is it far from the centre?'],
        translation_tr: 'Tavsiye için teşekkürler. Tam olarak nerede?',
        register: 'informal', ipa: '/θæŋks fɔːr ðə tɪp ˈweərəbaʊts ɪz ɪt/',
        grammar: [
          { word: 'Whereabouts', role: 'informal question word', note: 'A friendly, conversational version of "where exactly".' },
          { word: 'Thanks for the tip', role: 'fixed expression', note: '"Tip" means advice here, not money.' }
        ],
        keyExpressions: [{ phrase: 'Whereabouts?', meaning: 'informal "where exactly?"' }],
        exampleSentences: ['Whereabouts do you live?', 'Thanks for the tip!'],
        pronunciationTips: ['"Whereabouts" is stressed on the first syllable: WHERE-abouts.']
      }
    ]
  })
];
