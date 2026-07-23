import { createDialogue } from '../dialogueSchema.js?v=content107';

export const RESTAURANT_DIALOGUES = [
  createDialogue({
    id: 'restaurant-ordering-food-a2-01',
    locationId: 'restaurant',
    scenarioId: 'ordering-food',
    title: 'Ordering Food',
    level: 'A2',
    variant: 1,
    length: 'medium',
    goal: 'Order a meal and a drink from the waiter.',
    tags: ['ordering'],
    sceneType: 'restaurant',
    characters: {
      A: { name: 'Elena', role: 'Waiter', gender: 'female', accent: 'american', avatarPreset: 'waiter_f' },
      B: { name: 'Diner', role: 'Restaurant Guest', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Hi, are you ready to order, or do you need a few more minutes?', translation_tr: 'Merhaba, sipariş vermeye hazır mısınız yoksa birkaç dakikaya daha mı ihtiyacınız var?', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'I’m ready. I’d like the grilled chicken with salad.',
        altAccepted: ['I’m ready to order. I’ll have the grilled chicken with salad.'],
        translation_tr: 'Hazırım. Salatalı ızgara tavuk istiyorum.',
        register: 'neutral', ipa: '/aɪm ˈrɛdi aɪd laɪk ðə grɪld ˈtʃɪkɪn wɪð ˈsæləd/',
        grammar: [
          { word: 'I’d like', role: 'polite request (would + like)', note: 'More polite than "I want" — the standard way to order food.' },
          { word: 'the grilled chicken', role: 'object', note: '"Grilled" is a past participle used as an adjective describing how the chicken is cooked.' },
          { word: 'with', role: 'preposition', note: 'Connects the main dish to what comes alongside it.' }
        ],
        keyExpressions: [{ phrase: 'I’d like...', meaning: 'a polite way to order food or request something' }],
        exampleSentences: ['I’d like the soup to start, please.'],
        pronunciationTips: ['Contract "I would" to "I’d" — it should sound like one syllable, not two words.']
      },
      { speaker: 'A', text: 'Great choice. And what would you like to drink?', translation_tr: 'Harika seçim. Peki içmek için ne istersiniz?', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Just a glass of water, please.',
        altAccepted: ['I’ll just have water, please.', 'Water, please.'],
        translation_tr: 'Sadece bir bardak su, lütfen.',
        register: 'neutral', ipa: '/dʒʌst ə glæs ʌv ˈwɔːtər pliːz/',
        grammar: [
          { word: 'Just', role: 'adverb (limiting)', note: 'Shows that this is the only thing you want — nothing more.' },
          { word: 'a glass of water', role: 'object', note: '"Glass of" is a common quantity expression for liquids.' }
        ],
        keyExpressions: [{ phrase: 'a glass of...', meaning: 'used for quantities of drinks' }],
        exampleSentences: ['Could I have a glass of orange juice?'],
        pronunciationTips: ['Say "glass" with a clear, short "a" sound.']
      },
      { speaker: 'A', text: 'Sure thing. Your food will be ready in about fifteen minutes.', translation_tr: 'Tabii ki. Yemeğiniz yaklaşık on beş dakika içinde hazır olacak.', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Perfect, thank you.',
        altAccepted: ['That’s great, thanks.', 'Sounds good, thank you.'],
        translation_tr: 'Mükemmel, teşekkür ederim.',
        register: 'neutral', ipa: '/ˈpɜːrfɪkt θæŋk juː/',
        grammar: [{ word: 'Perfect', role: 'interjection', note: 'Shows satisfaction with the information given.' }],
        keyExpressions: [{ phrase: 'Perfect, thank you', meaning: 'a warm, simple way to close a small exchange' }],
        exampleSentences: ['Perfect, thank you for your help.'],
        pronunciationTips: ['Stress the first syllable: PER-fect.']
      }
    ]
  }),

  createDialogue({
    id: 'restaurant-order-complaint-b1-01',
    locationId: 'restaurant',
    scenarioId: 'order-complaint',
    title: 'Complaining About an Order',
    level: 'B1',
    variant: 1,
    length: 'medium',
    goal: 'Explain that your order is wrong and get it fixed.',
    tags: ['complaint', 'problem-solving'],
    sceneType: 'restaurant',
    characters: {
      A: { name: 'Elena', role: 'Waiter', gender: 'female', accent: 'american', avatarPreset: 'waiter_f' },
      B: { name: 'Diner', role: 'Restaurant Guest', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Here’s your pasta — enjoy!', translation_tr: 'İşte makarnanız — afiyet olsun!', emotion: 'happy', register: 'informal' },
      {
        speaker: 'B', expected: 'Sorry, I think there’s been a mistake. I actually ordered the soup.',
        altAccepted: ['Excuse me, I think this is wrong — I ordered the soup.', 'Sorry, I ordered the soup, not the pasta.'],
        translation_tr: 'Üzgünüm, sanırım bir hata oldu. Aslında çorba sipariş etmiştim.',
        register: 'neutral', ipa: '/ˈsɒri aɪ θɪŋk ðɛərz bɪn ə mɪˈsteɪk aɪ ˈæktʃuəli ˈɔːrdərd ðə suːp/',
        grammar: [
          { word: 'I think', role: 'softening phrase', note: 'Makes the complaint sound polite instead of accusatory.' },
          { word: 'there’s been a mistake', role: 'present perfect passive', note: 'Focuses on the result (a mistake exists now) rather than blaming anyone directly.' },
          { word: 'actually', role: 'adverb', note: 'Signals a correction — "what really happened was..."' }
        ],
        keyExpressions: [{ phrase: 'I think there’s been a mistake', meaning: 'a polite way to point out an error' }],
        exampleSentences: ['I think there’s been a mistake with the bill.'],
        pronunciationTips: ['Keep your tone light and polite — rising intonation on "mistake" softens the complaint.']
      },
      { speaker: 'A', text: 'Oh, I’m so sorry about that! Let me fix it right away.', translation_tr: 'Aman, bunun için çok özür dilerim! Hemen düzelteyim.', emotion: 'apologetic', register: 'informal' },
      {
        speaker: 'B', expected: 'No worries, thanks for taking care of it.',
        altAccepted: ['It’s okay, thank you for sorting it out.', 'No problem, thanks for fixing it.'],
        translation_tr: 'Sorun değil, ilgilendiğiniz için teşekkürler.',
        register: 'informal', ipa: '/noʊ ˈwɜːrɪz θæŋks fɔːr ˈteɪkɪŋ kɛər ʌv ɪt/',
        grammar: [
          { word: 'No worries', role: 'fixed expression', note: 'A relaxed, informal way of saying "it’s fine" or "don’t worry about it."' },
          { word: 'taking care of it', role: 'phrasal expression', note: '"Take care of" means "to deal with / handle" a problem.' }
        ],
        keyExpressions: [{ phrase: 'take care of it', meaning: 'to deal with or resolve a problem' }],
        exampleSentences: ['Don’t worry, I’ll take care of it.'],
        pronunciationTips: ['"No worries" is casual — say it quickly and lightly, not formally.']
      }
    ]
  }),

  createDialogue({
    id: 'restaurant-menu-questions-a2-01',
    locationId: 'restaurant',
    scenarioId: 'menu-questions',
    title: 'Asking About the Menu',
    level: 'A2',
    length: 'short',
    goal: 'Ask what a dish contains and get a recommendation.',
    tags: ['ordering'],
    sceneType: 'restaurant',
    characters: {
      A: { name: 'Elena', role: 'Waiter', gender: 'female', accent: 'international', avatarPreset: 'waiter_f' },
      B: { name: 'You', role: 'Diner', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Are you ready to order, or do you need a few more minutes?', translation_tr: 'Sipariş vermeye hazır mısınız, yoksa birkaç dakikaya daha ihtiyacınız var mı?', emotion: 'friendly', register: 'neutral' },
      {
        speaker: 'B', expected: 'What’s in the house salad?',
        altAccepted: ['Could you tell me what the house salad has in it?', 'What does the house salad come with?'],
        translation_tr: 'Ev salatasının içinde ne var?',
        register: 'neutral', ipa: '/wɒts ɪn ðə haʊs ˈsæləd/',
        grammar: [
          { word: 'What’s in', role: 'contracted question', note: 'Short for "What is in" — the natural way to ask about ingredients.' },
          { word: 'the house salad', role: 'restaurant term', note: '"House" means the restaurant’s own version of a dish.' }
        ],
        keyExpressions: [{ phrase: 'What’s in it?', meaning: 'asking about the ingredients of a dish' }],
        exampleSentences: ['What’s in this sauce?', 'What does it come with?'],
        pronunciationTips: ['"salad" is SAL-ud — the second vowel is very weak.']
      },
      { speaker: 'A', text: 'Tomatoes, cucumber, olives and feta cheese.', translation_tr: 'Domates, salatalık, zeytin ve beyaz peynir.', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'That sounds good. What would you recommend as a main?',
        altAccepted: ['Nice. What’s your recommendation for a main course?', 'Lovely — what do you suggest for the main?'],
        translation_tr: 'Kulağa güzel geliyor. Ana yemek olarak ne önerirsiniz?',
        register: 'neutral', ipa: '/wɒt wʊd juː ˌrekəˈmend æz ə meɪn/',
        grammar: [
          { word: 'would you recommend', role: 'polite advice question', note: '"Would" makes the question softer and more polite than "do you recommend".' },
          { word: 'as a main', role: 'preposition of role', note: '"As" means "in the role of" — as a starter, as a main, as a dessert.' }
        ],
        keyExpressions: [{ phrase: 'What would you recommend?', meaning: 'asking staff for their suggestion' }],
        exampleSentences: ['What would you recommend to drink?', 'I’ll have the fish as a main.'],
        pronunciationTips: ['"recommend" is stressed on the last syllable: rec-o-MEND.']
      },
      { speaker: 'A', text: 'The grilled sea bass is very popular today.', translation_tr: 'Bugün ızgara levrek çok tutuluyor.', emotion: 'happy', register: 'neutral' },
      {
        speaker: 'B', expected: 'I’ll try that, thank you.',
        altAccepted: ['That sounds perfect — I’ll have it.', 'I’ll go for the sea bass then.'],
        translation_tr: 'Onu deneyeyim, teşekkürler.',
        register: 'neutral', ipa: '/aɪl traɪ ðæt θæŋk juː/',
        grammar: [
          { word: 'I’ll try', role: 'decision made now', note: 'Use "I’ll" for a choice you make at the moment of speaking.' }
        ],
        keyExpressions: [{ phrase: 'I’ll try that', meaning: 'accepting a recommendation' }],
        exampleSentences: ['I’ll go for the soup.', 'I’ll try the local speciality.'],
        pronunciationTips: ['Keep it short and warm — a smile is audible in your voice.']
      }
    ]
  }),

  createDialogue({
    id: 'restaurant-splitting-bill-b1-01',
    locationId: 'restaurant',
    scenarioId: 'splitting-bill',
    title: 'Splitting the Bill',
    level: 'B1',
    length: 'short',
    goal: 'Arrange to divide the bill between friends.',
    tags: ['problem-solving'],
    sceneType: 'restaurant',
    characters: {
      A: { name: 'Marco', role: 'Waiter', gender: 'male', accent: 'international', avatarPreset: 'barista_m' },
      B: { name: 'You', role: 'Diner', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Here’s the bill. Are you paying together?', translation_tr: 'Hesap burada. Birlikte mi ödüyorsunuz?', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'Could we split it three ways, please?',
        altAccepted: ['Can we divide it between three of us?', 'We’d like to pay separately — three cards.'],
        translation_tr: 'Üçe bölebilir miyiz, lütfen?',
        register: 'neutral', ipa: '/kʊd wiː splɪt ɪt θriː weɪz pliːz/',
        grammar: [
          { word: 'split it three ways', role: 'idiomatic structure', note: '"X ways" means "into X equal parts" — split it two ways, four ways.' }
        ],
        keyExpressions: [{ phrase: 'split the bill', meaning: 'divide the cost between people' }],
        exampleSentences: ['Let’s split it evenly.', 'We split the cost four ways.'],
        pronunciationTips: ['"three ways" — hold the "th" sound; it is difficult but noticeable.']
      },
      { speaker: 'A', text: 'Of course. Equally, or by what each person had?', translation_tr: 'Elbette. Eşit olarak mı, yoksa herkesin yediğine göre mi?', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'Equally is easier. Does that include the service charge?',
        altAccepted: ['Let’s just split it evenly. Is service included?', 'Equal shares, please — and is the tip added already?'],
        translation_tr: 'Eşit olarak daha kolay. Servis ücreti buna dahil mi?',
        register: 'neutral', ipa: '/ˈiːkwəli ɪz ˈiːziər dʌz ðæt ɪnˈkluːd ðə ˈsɜːrvɪs tʃɑːrdʒ/',
        grammar: [
          { word: 'Equally', role: 'adverb as short answer', note: 'A single adverb can answer a choice question naturally.' },
          { word: 'service charge', role: 'compound noun', note: 'A percentage added automatically to the bill in some countries.' }
        ],
        keyExpressions: [{ phrase: 'service charge', meaning: 'a tip already added to the bill' }],
        exampleSentences: ['Is service included?', 'We shared it equally.'],
        pronunciationTips: ['"equally" has three syllables: EE-kwuh-lee.']
      }
    ]
  }),

  createDialogue({
    id: 'restaurant-booking-table-a2-01',
    locationId: 'restaurant',
    scenarioId: 'booking-table',
    title: 'Booking a Table',
    level: 'A2',
    length: 'short',
    goal: 'Reserve a table for a specific number of people and time.',
    tags: ['booking'],
    sceneType: 'restaurant',
    characters: {
      A: { name: 'Hana', role: 'Restaurant Host', gender: 'female', accent: 'international', avatarPreset: 'agent_f2' },
      B: { name: 'You', role: 'Caller', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Good evening, Bella Vista. How can I help?', translation_tr: 'İyi akşamlar, Bella Vista. Nasıl yardımcı olabilirim?', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'I’d like to book a table for four at eight.',
        altAccepted: ['Could I reserve a table for four people at eight o’clock?', 'A table for four tonight at eight, please.'],
        translation_tr: 'Sekizde dört kişilik bir masa ayırtmak istiyorum.',
        register: 'formal', ipa: '/aɪd laɪk tuː bʊk ə ˈteɪbəl fɔːr fɔːr æt eɪt/',
        grammar: [
          { word: 'a table for four', role: 'fixed pattern', note: '"For" + number of people is the standard restaurant phrase.' },
          { word: 'at eight', role: 'preposition of time', note: 'Use "at" with clock times: at eight, at half past six.' }
        ],
        keyExpressions: [{ phrase: 'a table for four', meaning: 'a reservation for four people' }],
        exampleSentences: ['A table for two, please.', 'We’ll come at nine.'],
        pronunciationTips: ['Note the two different "for/four" sounds — they are identical in speech.']
      },
      { speaker: 'A', text: 'Eight is fully booked. Would half past eight work?', translation_tr: 'Sekiz tamamen dolu. Sekiz buçuk olur mu?', emotion: 'apologetic', register: 'formal' },
      {
        speaker: 'B', expected: 'That’s fine. Could we have a table by the window?',
        altAccepted: ['Half eight is okay. Is a window table possible?', 'That works — and could we sit outside if possible?'],
        translation_tr: 'Olur. Pencere kenarında bir masa alabilir miyiz?',
        register: 'formal', ipa: '/kʊd wiː hæv ə ˈteɪbəl baɪ ðə ˈwɪndoʊ/',
        grammar: [
          { word: 'by the window', role: 'preposition of position', note: '"By" means beside or next to — a table by the window, by the door.' },
          { word: 'Could we have', role: 'polite request, plural', note: 'Use "we" when speaking for your whole group.' }
        ],
        keyExpressions: [{ phrase: 'a table by the window', meaning: 'a common seating request' }],
        exampleSentences: ['We sat by the fire.', 'Could we have a quieter table?'],
        pronunciationTips: ['"half past eight" is often said "half eight" in Britain.']
      }
    ]
  })
];
