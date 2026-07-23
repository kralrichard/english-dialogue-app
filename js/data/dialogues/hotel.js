import { createDialogue } from '../dialogueSchema.js?v=content108';

export const HOTEL_DIALOGUES = [
  createDialogue({
    id: 'hotel-check-in-a1-01',
    locationId: 'hotel',
    scenarioId: 'check-in',
    title: 'Checking Into a Hotel',
    level: 'A1',
    variant: 1,
    length: 'short',
    goal: 'Check into the hotel and get your room key.',
    tags: ['booking', 'travel'],
    sceneType: 'hotel-lobby',
    characters: {
      A: { name: 'Grace', role: 'Hotel Receptionist', gender: 'female', accent: 'british', avatarPreset: 'receptionist_f' },
      B: { name: 'Guest', role: 'Hotel Guest', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      {
        speaker: 'A', text: 'Good evening. Do you have a reservation?',
        translation_tr: 'İyi akşamlar. Rezervasyonunuz var mı?', emotion: 'friendly', register: 'formal'
      },
      {
        speaker: 'B', expected: 'Yes, I booked a room for three nights.',
        altAccepted: ['Yes, I have a reservation for three nights.', 'Yes, I have a booking for three nights.'],
        translation_tr: 'Evet, üç gecelik bir oda ayırttım.',
        register: 'neutral', ipa: '/jɛs aɪ bʊkt ə ruːm fɔːr θriː naɪts/',
        grammar: [
          { word: 'Yes', role: 'response word', note: 'Confirms the receptionist’s question.' },
          { word: 'I', role: 'subject', note: 'The person speaking (the guest).' },
          { word: 'booked', role: 'main verb (past simple)', note: '"Book" here means "to reserve in advance." Past tense because the action already happened.' },
          { word: 'a room', role: 'object', note: 'The thing that was booked.' },
          { word: 'for', role: 'preposition', note: 'Shows duration — "for + amount of time."' },
          { word: 'three nights', role: 'time expression', note: 'How long the stay will be.' }
        ],
        keyExpressions: [{ phrase: 'book a room', meaning: 'to reserve a room in advance' }],
        exampleSentences: ['I booked a table for two.', 'She booked a flight for next week.'],
        pronunciationTips: ['Say the "b" in "booked" clearly, then a short, crisp "t" at the end.']
      },
      {
        speaker: 'A', text: 'Perfect. Could I have your name and passport, please?',
        translation_tr: 'Harika. Adınızı ve pasaportunuzu alabilir miyim, lütfen?', emotion: 'friendly', register: 'formal'
      },
      {
        speaker: 'B', expected: 'Sure, here you are.',
        altAccepted: ['Sure, here it is.', 'Of course, here you are.'],
        translation_tr: 'Tabii, buyurun.',
        register: 'informal', ipa: '/ʃʊər hɪər juː ɑːr/',
        grammar: [
          { word: 'Sure', role: 'response word', note: 'A friendly way to say "yes, of course."' },
          { word: 'here', role: 'adverb of place', note: 'Points to something close to the speaker.' },
          { word: 'you are', role: 'subject + verb', note: 'Short form of "here it is for you" — used when handing something over.' }
        ],
        keyExpressions: [{ phrase: 'here you are', meaning: 'said when giving something to someone' }],
        exampleSentences: ['Here you are, one coffee.', 'Here you are, sir.'],
        pronunciationTips: ['Link "here" and "you" smoothly — don’t pause between them.']
      },
      {
        speaker: 'A', text: 'Thank you. Your room is 214, on the second floor. Breakfast is from seven to ten.',
        translation_tr: 'Teşekkür ederim. Odanız 214, ikinci katta. Kahvaltı yediden ona kadar.', emotion: 'friendly', register: 'formal'
      },
      {
        speaker: 'B', expected: 'Great, thank you very much.',
        altAccepted: ['Great, thanks a lot.', 'Thank you very much.'],
        translation_tr: 'Harika, çok teşekkür ederim.',
        register: 'neutral', ipa: '/greɪt θæŋk juː ˈvɛri mʌtʃ/',
        grammar: [
          { word: 'Great', role: 'interjection', note: 'Shows you are happy about the information.' },
          { word: 'thank you', role: 'fixed phrase', note: 'The standard way to express thanks in English.' },
          { word: 'very much', role: 'intensifier', note: 'Makes the thanks stronger.' }
        ],
        keyExpressions: [{ phrase: 'thank you very much', meaning: 'a stronger, more grateful way of saying thanks' }],
        exampleSentences: ['Thank you very much for your help.'],
        pronunciationTips: ['Stress the word "very" slightly more than the others.']
      }
    ]
  }),

  createDialogue({
    id: 'hotel-complaint-b2-01',
    locationId: 'hotel',
    scenarioId: 'complaint',
    title: 'Reporting a Noisy Room',
    level: 'B2',
    variant: 1,
    length: 'medium',
    goal: 'Report a problem with your room and get it resolved.',
    tags: ['complaint', 'problem-solving'],
    sceneType: 'hotel-lobby',
    characters: {
      A: { name: 'Daniel', role: 'Front Desk Manager', gender: 'male', accent: 'irish', avatarPreset: 'manager_m' },
      B: { name: 'Guest', role: 'Hotel Guest', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Good evening, how can I help you?', translation_tr: 'İyi akşamlar, size nasıl yardımcı olabilirim?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'I’m afraid there’s a problem with my room — it’s extremely noisy.',
        altAccepted: ['I’m sorry to bother you, but my room is really noisy.', 'I need to report a problem — my room is very noisy.'],
        translation_tr: 'Korkarım odamda bir sorun var — çok gürültülü.',
        register: 'formal', ipa: '/aɪm əˈfreɪd ðɛrz ə ˈprɒbləm wɪð maɪ ruːm ɪts ɪkˈstriːmli ˈnɔɪzi/',
        grammar: [
          { word: 'I’m afraid', role: 'softening phrase', note: 'Used to introduce bad news politely, not literal fear.' },
          { word: 'there’s', role: 'existential structure', note: '"There is" — introduces a new problem into the conversation.' },
          { word: 'extremely', role: 'adverb of degree', note: 'Stronger than "very"; adds emphasis to "noisy."' }
        ],
        keyExpressions: [{ phrase: 'I’m afraid there’s a problem with...', meaning: 'a polite, formal way to raise a complaint' }],
        exampleSentences: ['I’m afraid there’s a problem with the air conditioning.'],
        pronunciationTips: ['Don’t pause between "I’m" and "afraid" — it should sound like one soft opener before the real complaint.']
      },
      { speaker: 'A', text: 'I’m sorry to hear that. What exactly is the issue?', translation_tr: 'Bunu duyduğuma üzüldüm. Tam olarak sorun nedir?', emotion: 'apologetic', register: 'formal' },
      {
        speaker: 'B', expected: 'There’s construction work right outside my window, and it started at six this morning.',
        altAccepted: ['There’s some construction going on outside my window since six this morning.'],
        translation_tr: 'Penceremin hemen dışında inşaat çalışması var ve bu sabah saat altıda başladı.',
        register: 'neutral', ipa: '/ðɛrz kənˈstrʌkʃən wɜːrk raɪt ˌaʊtˈsaɪd maɪ ˈwɪndoʊ ænd ɪt ˈstɑːrtɪd æt sɪks ðɪs ˈmɔːrnɪŋ/',
        grammar: [
          { word: 'right outside', role: 'adverbial phrase', note: '"Right" here means "directly/exactly," emphasizing closeness.' },
          { word: 'it started at', role: 'past simple', note: 'States when the noise began as a specific fact.' }
        ],
        keyExpressions: [{ phrase: 'right outside', meaning: 'directly next to / immediately outside' }],
        exampleSentences: ['The bus stop is right outside my house.'],
        pronunciationTips: ['Keep a steady rhythm through the long sentence; take a small breath after "window."']
      },
      { speaker: 'A', text: 'I completely understand — I apologize for the inconvenience. Would you like me to move you to a quieter room?', translation_tr: 'Tamamen anlıyorum — rahatsızlık için özür dilerim. Sizi daha sessiz bir odaya taşımamı ister misiniz?', emotion: 'apologetic', register: 'formal' },
      {
        speaker: 'B', expected: 'Yes, that would be great, as long as it’s ready soon.',
        altAccepted: ['Yes, that would be great, if it’s not too much trouble.', 'Yes please, that would be perfect.'],
        translation_tr: 'Evet, harika olur, yeter ki yakında hazır olsun.',
        register: 'neutral', ipa: '/jɛs ðæt wʊd biː greɪt æz lɔːŋ æz ɪts ˈrɛdi suːn/',
        grammar: [
          { word: 'that would be great', role: 'conditional / polite acceptance', note: '"Would" softens the acceptance, making it sound polite rather than demanding.' },
          { word: 'as long as', role: 'conjunction', note: 'Introduces a condition — means "on the condition that."' }
        ],
        keyExpressions: [{ phrase: 'as long as', meaning: 'on the condition that / provided that' }],
        exampleSentences: ['I’m happy to wait, as long as it doesn’t take too long.'],
        pronunciationTips: ['Link "as long as" together smoothly — it’s said almost as one word in natural speech.']
      }
    ]
  }),

  createDialogue({
    id: 'hotel-booking-room-a2-01',
    locationId: 'hotel',
    scenarioId: 'booking-room',
    title: 'Booking a Room by Phone',
    level: 'A2',
    length: 'short',
    goal: 'Reserve a room for specific dates and confirm the price.',
    tags: ['booking'],
    sceneType: 'hotel-lobby',
    characters: {
      A: { name: 'Ivan', role: 'Reservations Agent', gender: 'male', accent: 'international', avatarPreset: 'clerk_m' },
      B: { name: 'You', role: 'Caller', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Good afternoon, Hotel Marina. How may I help you?', translation_tr: 'İyi günler, Hotel Marina. Nasıl yardımcı olabilirim?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'I’d like to book a double room for two nights, please.',
        altAccepted: ['I want to reserve a double room for two nights.', 'Could I book a double room for a couple of nights?'],
        translation_tr: 'İki geceliğine çift kişilik bir oda ayırtmak istiyorum, lütfen.',
        register: 'formal', ipa: '/aɪd laɪk tuː bʊk ə ˈdʌbəl ruːm fɔːr tuː naɪts/',
        grammar: [
          { word: 'I’d like to book', role: 'polite request + infinitive', note: 'The standard formula for making any reservation.' },
          { word: 'for two nights', role: 'duration', note: 'Hotels count nights, not days — always say "nights".' }
        ],
        keyExpressions: [{ phrase: 'book a room', meaning: 'to reserve accommodation' }],
        exampleSentences: ['I’d like to book a table for four.', 'We stayed for three nights.'],
        pronunciationTips: ['"double" is DUB-ul — the ou sounds like "u" in "cup".']
      },
      { speaker: 'A', text: 'Certainly. Which dates were you thinking of?', translation_tr: 'Elbette. Hangi tarihleri düşünüyordunuz?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'The fourteenth and fifteenth of June.',
        altAccepted: ['June the fourteenth to the sixteenth.', 'From the 14th of June, checking out on the 16th.'],
        translation_tr: 'On dört ve on beş Haziran.',
        register: 'formal', ipa: '/ðə ˌfɔːrˈtiːnθ ænd ˈfɪfˈtiːnθ əv dʒuːn/',
        grammar: [
          { word: 'the fourteenth', role: 'ordinal number', note: 'Dates use ordinals in speech: the first, the second, the fourteenth.' },
          { word: 'of June', role: 'preposition with months', note: 'British style: the 14th of June. American style: June 14th.' }
        ],
        keyExpressions: [{ phrase: 'the fourteenth of June', meaning: 'how to say a date aloud in British English' }],
        exampleSentences: ['My flight is on the third of May.'],
        pronunciationTips: ['Ordinals ending in -th need a clear tongue-between-teeth sound.']
      },
      { speaker: 'A', text: 'That’s available at ninety euros per night, breakfast included.', translation_tr: 'Müsait, gecelik doksan euro, kahvaltı dahil.', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'That sounds good. Could I pay on arrival?',
        altAccepted: ['Perfect. Can I pay when I check in?', 'That works. Do I need to pay now?'],
        translation_tr: 'Kulağa iyi geliyor. Varışta ödeyebilir miyim?',
        register: 'formal', ipa: '/kʊd aɪ peɪ ɒn əˈraɪvəl/',
        grammar: [
          { word: 'on arrival', role: 'fixed phrase', note: 'Means "when you get there" — common in travel and hotel contexts.' }
        ],
        keyExpressions: [{ phrase: 'pay on arrival', meaning: 'settle the bill when you get to the hotel' }],
        exampleSentences: ['Payment is due on arrival.', 'Can I pay later?'],
        pronunciationTips: ['"arrival" is stressed on the second syllable: a-RIVE-al.']
      }
    ]
  }),

  createDialogue({
    id: 'hotel-breakfast-info-a1-01',
    locationId: 'hotel',
    scenarioId: 'breakfast-info',
    title: 'Asking About Breakfast',
    level: 'A1',
    length: 'short',
    goal: 'Find out when and where breakfast is served.',
    tags: ['small-talk'],
    sceneType: 'hotel-lobby',
    characters: {
      A: { name: 'Lara', role: 'Receptionist', gender: 'female', accent: 'international', avatarPreset: 'receptionist_f' },
      B: { name: 'You', role: 'Hotel Guest', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Good evening. Is there anything you need?', translation_tr: 'İyi akşamlar. İhtiyacınız olan bir şey var mı?', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'Yes, what time is breakfast?',
        altAccepted: ['When is breakfast served?', 'What time does breakfast start?'],
        translation_tr: 'Evet, kahvaltı saat kaçta?',
        register: 'neutral', ipa: '/wɒt taɪm ɪz ˈbrekfəst/',
        grammar: [
          { word: 'What time is', role: 'time question', note: 'The simplest way to ask when a regular event happens.' },
          { word: 'breakfast', role: 'uncountable noun', note: 'Meals take no article: have breakfast, not "have a breakfast".' }
        ],
        keyExpressions: [{ phrase: 'What time is breakfast?', meaning: 'asking the serving time of a meal' }],
        exampleSentences: ['What time is dinner?', 'Breakfast is at eight.'],
        pronunciationTips: ['"breakfast" is BREK-fust — the ea sounds like "e" in "bed".']
      },
      { speaker: 'A', text: 'From seven to ten in the restaurant on the ground floor.', translation_tr: 'Yediden ona kadar, zemin kattaki restoranda.', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Is it included in the room price?',
        altAccepted: ['Do I have to pay extra for it?', 'Is breakfast included?'],
        translation_tr: 'Oda fiyatına dahil mi?',
        register: 'neutral', ipa: '/ɪz ɪt ɪnˈkluːdɪd ɪn ðə ruːm praɪs/',
        grammar: [
          { word: 'included', role: 'past participle as adjective', note: 'Describes what is already covered by the price.' },
          { word: 'in the room price', role: 'preposition of inclusion', note: 'Something is included IN a price, never "to" a price.' }
        ],
        keyExpressions: [{ phrase: 'Is it included?', meaning: 'checking whether you must pay extra' }],
        exampleSentences: ['Is tax included?', 'Breakfast is not included.'],
        pronunciationTips: ['Stress "in-CLUD-ed" on the middle syllable.']
      }
    ]
  }),

  createDialogue({
    id: 'hotel-reporting-problem-a2-01',
    locationId: 'hotel',
    scenarioId: 'reporting-problem',
    title: 'The Air Conditioning Is Broken',
    level: 'A2',
    length: 'short',
    goal: 'Report a problem in your room and ask for it to be fixed.',
    tags: ['problem-solving', 'complaint'],
    sceneType: 'hotel-lobby',
    characters: {
      A: { name: 'Lara', role: 'Receptionist', gender: 'female', accent: 'international', avatarPreset: 'receptionist_f' },
      B: { name: 'You', role: 'Hotel Guest', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Reception, good evening. How can I help?', translation_tr: 'Resepsiyon, iyi akşamlar. Nasıl yardımcı olabilirim?', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'The air conditioning in my room isn’t working.',
        altAccepted: ['My air conditioner has stopped working.', 'There’s a problem with the AC in room 305.'],
        translation_tr: 'Odamdaki klima çalışmıyor.',
        register: 'neutral', ipa: '/ðə eər kənˈdɪʃənɪŋ ɪn maɪ ruːm ˈɪzənt ˈwɜːrkɪŋ/',
        grammar: [
          { word: 'isn’t working', role: 'present continuous negative', note: 'For a machine that is broken right now, English prefers the continuous form.' },
          { word: 'in my room', role: 'prepositional phrase', note: 'Specifies location — always place it after the noun it describes.' }
        ],
        keyExpressions: [{ phrase: 'isn’t working', meaning: 'the standard way to report a broken device' }],
        exampleSentences: ['The lift isn’t working.', 'The shower isn’t working properly.'],
        pronunciationTips: ['"air conditioning" is often shortened to "AC" in speech.']
      },
      { speaker: 'A', text: 'I’m very sorry. I’ll send someone up right away.', translation_tr: 'Çok üzgünüm. Hemen birini yukarı göndereceğim.', emotion: 'apologetic', register: 'formal' },
      {
        speaker: 'B', expected: 'Thank you. How long will it take?',
        altAccepted: ['Great — when will they come?', 'Thanks. Any idea how long?'],
        translation_tr: 'Teşekkürler. Ne kadar sürer?',
        register: 'neutral', ipa: '/haʊ lɒŋ wɪl ɪt teɪk/',
        grammar: [
          { word: 'How long will it take', role: 'future duration question', note: '"Take" is the verb English uses for how much time something needs.' }
        ],
        keyExpressions: [{ phrase: 'send someone up', meaning: 'have a staff member come to your room' }],
        exampleSentences: ['How long will the repair take?'],
        pronunciationTips: ['"will it" contracts in speech to "wil-it" — barely two beats.']
      }
    ]
  }),

  createDialogue({
    id: 'hotel-room-change-b1-01',
    locationId: 'hotel',
    scenarioId: 'room-change',
    title: 'Requesting a Different Room',
    level: 'B1',
    length: 'short',
    goal: 'Explain why your room is unsuitable and request a change.',
    tags: ['complaint', 'negotiation'],
    sceneType: 'hotel-lobby',
    characters: {
      A: { name: 'Mr Novak', role: 'Duty Manager', gender: 'male', accent: 'international', avatarPreset: 'manager_m' },
      B: { name: 'You', role: 'Hotel Guest', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'You wanted to speak to me about your room?', translation_tr: 'Odanızla ilgili benimle konuşmak mı istediniz?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'Yes. My room faces the main road and it’s extremely noisy.',
        altAccepted: ['My room overlooks the road and I can’t sleep.', 'The traffic noise from my room is unbearable.'],
        translation_tr: 'Evet. Odam ana yola bakıyor ve aşırı gürültülü.',
        register: 'formal', ipa: '/maɪ ruːm ˈfeɪsɪz ðə meɪn roʊd ænd ɪts ɪkˈstriːmli ˈnɔɪzi/',
        grammar: [
          { word: 'faces', role: 'verb of orientation', note: '"Face" means to look towards. A room faces the sea, the road, the garden.' },
          { word: 'extremely', role: 'strong intensifier', note: 'Stronger than "very" — signals a serious complaint.' }
        ],
        keyExpressions: [{ phrase: 'my room faces...', meaning: 'describing the direction a room looks out on' }],
        exampleSentences: ['The window faces north.', 'It’s extremely cold today.'],
        pronunciationTips: ['"extremely" is ex-TREEM-lee, four syllables reduced to three in speech.']
      },
      { speaker: 'A', text: 'I understand. We do have a quieter room at the back.', translation_tr: 'Anlıyorum. Arka tarafta daha sessiz bir odamız var.', emotion: 'concerned', register: 'formal' },
      {
        speaker: 'B', expected: 'Would it be possible to move there tonight?',
        altAccepted: ['Could I change rooms this evening?', 'May I move to that one straight away?'],
        translation_tr: 'Bu gece oraya taşınmam mümkün olur mu?',
        register: 'formal', ipa: '/wʊd ɪt biː ˈpɒsəbəl tuː muːv ðeər təˈnaɪt/',
        grammar: [
          { word: 'Would it be possible to', role: 'very polite request', note: 'The softest way to ask for a favour — ideal when you need cooperation.' },
          { word: 'tonight', role: 'time adverb', note: 'Goes at the end of the sentence in English.' }
        ],
        keyExpressions: [{ phrase: 'Would it be possible to...?', meaning: 'a highly polite request formula' }],
        exampleSentences: ['Would it be possible to check in early?'],
        pronunciationTips: ['Use a gentle rising tone; a flat tone can sound like a demand.']
      },
      { speaker: 'A', text: 'Of course. I’ll have your things moved within the hour.', translation_tr: 'Elbette. Eşyalarınızı bir saat içinde taşıttıracağım.', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'That’s very kind of you. Thank you for sorting it out.',
        altAccepted: ['I really appreciate that, thank you.', 'Thank you — that solves the problem.'],
        translation_tr: 'Çok naziksiniz. Hallettiğiniz için teşekkürler.',
        register: 'formal', ipa: '/ðæts ˈveri kaɪnd əv juː/',
        grammar: [
          { word: 'That’s very kind of you', role: 'fixed expression', note: 'Warm, slightly formal thanks — perfect when someone goes out of their way.' }
        ],
        keyExpressions: [{ phrase: 'That’s very kind of you', meaning: 'a gracious thank-you for a favour' }],
        exampleSentences: ['That’s very kind of you to offer.'],
        pronunciationTips: ['Stress "kind" — it carries the warmth of the phrase.']
      }
    ]
  }),

  createDialogue({
    id: 'hotel-late-checkout-a2-01',
    locationId: 'hotel',
    scenarioId: 'late-checkout',
    title: 'Asking for a Late Checkout',
    level: 'A2',
    length: 'short',
    goal: 'Request a later checkout time and find out if it costs extra.',
    tags: ['negotiation'],
    sceneType: 'hotel-lobby',
    characters: {
      A: { name: 'Lara', role: 'Receptionist', gender: 'female', accent: 'international', avatarPreset: 'receptionist_f' },
      B: { name: 'You', role: 'Hotel Guest', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Checkout is at eleven, just so you know.', translation_tr: 'Bilginiz olsun, çıkış saati on birde.', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Could I check out a bit later, around two?',
        altAccepted: ['Is a late checkout possible?', 'Would you allow me to leave at two instead?'],
        translation_tr: 'Biraz daha geç, iki gibi çıkabilir miyim?',
        register: 'formal', ipa: '/kʊd aɪ tʃek aʊt ə bɪt ˈleɪtər əˈraʊnd tuː/',
        grammar: [
          { word: 'check out', role: 'phrasal verb', note: 'As a verb it is two words; as a noun it is written "checkout".' },
          { word: 'a bit later', role: 'softening comparative', note: '"A bit" makes the request sound small and easy to accept.' }
        ],
        keyExpressions: [{ phrase: 'a late checkout', meaning: 'leaving the hotel after the standard time' }],
        exampleSentences: ['Could we start a bit later?', 'I checked out at noon.'],
        pronunciationTips: ['"a bit" is quick and unstressed — it softens the whole sentence.']
      },
      { speaker: 'A', text: 'Two o’clock is possible for twenty euros extra.', translation_tr: 'Saat iki, yirmi euro ek ücretle mümkün.', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'That’s fine, I’ll take it. Could you add it to my bill?',
        altAccepted: ['No problem — please charge it to my room.', 'That works. Just put it on my bill.'],
        translation_tr: 'Sorun değil, alıyorum. Faturama ekleyebilir misiniz?',
        register: 'formal', ipa: '/kʊd juː æd ɪt tuː maɪ bɪl/',
        grammar: [
          { word: 'add it to my bill', role: 'verb + preposition', note: 'We add something TO a bill — the preposition is fixed.' },
          { word: 'I’ll take it', role: 'decision', note: 'Confirms acceptance of an offer, common in shops and hotels alike.' }
        ],
        keyExpressions: [{ phrase: 'put it on my bill', meaning: 'charge it to my room account' }],
        exampleSentences: ['Could you add it to my bill?', 'Charge it to room 210, please.'],
        pronunciationTips: ['"add it to" links into "add-it-tuh".']
      }
    ]
  }),

  createDialogue({
    id: 'hotel-lost-key-a2-01',
    locationId: 'hotel',
    scenarioId: 'lost-key',
    title: 'Losing Your Room Key',
    level: 'A2',
    length: 'short',
    goal: 'Report a lost key card and get a replacement.',
    tags: ['problem-solving'],
    sceneType: 'hotel-lobby',
    characters: {
      A: { name: 'Lara', role: 'Receptionist', gender: 'female', accent: 'international', avatarPreset: 'receptionist_f' },
      B: { name: 'You', role: 'Hotel Guest', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Good evening. Is everything all right?', translation_tr: 'İyi akşamlar. Her şey yolunda mı?', emotion: 'curious', register: 'formal' },
      {
        speaker: 'B', expected: 'I’m afraid I’ve lost my key card.',
        altAccepted: ['I can’t find my room key.', 'Sorry — I think I’ve lost my key card.'],
        translation_tr: 'Korkarım oda kartımı kaybettim.',
        register: 'formal', ipa: '/aɪm əˈfreɪd aɪv lɒst maɪ kiː kɑːrd/',
        grammar: [
          { word: 'I’m afraid', role: 'softener', note: 'Introduces bad news politely. Nothing to do with fear.' },
          { word: 'I’ve lost', role: 'present perfect', note: 'The loss happened in the past but the result — no key — matters now.' }
        ],
        keyExpressions: [{ phrase: 'I’m afraid...', meaning: 'a polite way to introduce a problem or refusal' }],
        exampleSentences: ['I’m afraid I’m late.', 'I’ve lost my passport.'],
        pronunciationTips: ['"I’ve lost" — the v links into the l: "ayv-lost".']
      },
      { speaker: 'A', text: 'No problem at all. May I see some ID, please?', translation_tr: 'Hiç sorun değil. Bir kimlik görebilir miyim, lütfen?', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'Of course, here’s my passport. Room 412.',
        altAccepted: ['Certainly — my passport, and I’m in room 412.', 'Here you are. It’s room four-one-two.'],
        translation_tr: 'Tabii, işte pasaportum. Oda 412.',
        register: 'formal', ipa: '/hɪərz maɪ ˈpɑːspɔːrt ruːm fɔːr wʌn tuː/',
        grammar: [
          { word: 'Here’s', role: 'contraction of "here is"', note: 'Used when handing over one item.' },
          { word: 'Room 412', role: 'number reading', note: 'Room numbers are usually read digit by digit: four-one-two.' }
        ],
        keyExpressions: [{ phrase: 'Here’s my passport', meaning: 'presenting identification' }],
        exampleSentences: ['Here’s my booking confirmation.'],
        pronunciationTips: ['Read room numbers slowly and clearly — mistakes are costly.']
      }
    ]
  }),

  createDialogue({
    id: 'hotel-facilities-a2-01',
    locationId: 'hotel',
    scenarioId: 'facilities',
    title: 'Asking About Hotel Facilities',
    level: 'A2',
    length: 'short',
    goal: 'Ask what facilities the hotel has and when they are open.',
    tags: ['small-talk'],
    sceneType: 'hotel-lobby',
    characters: {
      A: { name: 'Lara', role: 'Receptionist', gender: 'female', accent: 'international', avatarPreset: 'receptionist_f' },
      B: { name: 'You', role: 'Hotel Guest', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Welcome. Let me know if you need anything during your stay.', translation_tr: 'Hoş geldiniz. Konaklamanız sırasında bir şeye ihtiyacınız olursa söyleyin.', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'Thanks. Does the hotel have a swimming pool?',
        altAccepted: ['Is there a pool here?', 'Do you have a gym or a pool?'],
        translation_tr: 'Teşekkürler. Otelde yüzme havuzu var mı?',
        register: 'neutral', ipa: '/dʌz ðə hoʊˈtel hæv ə ˈswɪmɪŋ puːl/',
        grammar: [
          { word: 'Does the hotel have', role: 'present simple question', note: 'After "does," the verb stays in base form: have, not has.' }
        ],
        keyExpressions: [{ phrase: 'Does it have...?', meaning: 'asking whether a place offers a particular facility' }],
        exampleSentences: ['Does the room have a balcony?', 'Is there a gym?'],
        pronunciationTips: ['"swimming pool" is stressed on the first word: SWIMMING pool.']
      },
      { speaker: 'A', text: 'Yes, on the top floor. It’s open from six until ten.', translation_tr: 'Evet, en üst katta. Altıdan ona kadar açık.', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Do I need to book a time, or can I just go?',
        altAccepted: ['Is a reservation necessary?', 'Can I use it any time, or do I need to book?'],
        translation_tr: 'Saat ayırtmam gerekiyor mu, yoksa öylece gidebilir miyim?',
        register: 'neutral', ipa: '/duː aɪ niːd tuː bʊk ə taɪm ɔːr kæn aɪ dʒʌst ɡoʊ/',
        grammar: [
          { word: 'Do I need to', role: 'necessity question', note: 'Asks whether something is required — very useful in any service context.' },
          { word: 'just', role: 'adverb', note: 'Here it means "simply, without extra steps".' }
        ],
        keyExpressions: [{ phrase: 'Do I need to...?', meaning: 'checking whether something is obligatory' }],
        exampleSentences: ['Do I need to bring a towel?', 'Do we need to reserve?'],
        pronunciationTips: ['"need to" often becomes "nee-duh" in relaxed speech.']
      }
    ]
  }),

  createDialogue({
    id: 'hotel-housekeeping-a2-01',
    locationId: 'hotel',
    scenarioId: 'housekeeping',
    title: 'Talking to Housekeeping',
    level: 'A2',
    length: 'short',
    goal: 'Ask housekeeping for extra items and arrange a convenient time.',
    tags: ['problem-solving'],
    sceneType: 'hotel-lobby',
    characters: {
      A: { name: 'Rosa', role: 'Housekeeping Staff', gender: 'female', accent: 'international', avatarPreset: 'waiter_f' },
      B: { name: 'You', role: 'Hotel Guest', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Housekeeping! Would you like your room cleaned now?', translation_tr: 'Kat hizmetleri! Odanızın şimdi temizlenmesini ister misiniz?', emotion: 'friendly', register: 'neutral' },
      {
        speaker: 'B', expected: 'Could you come back in an hour, please?',
        altAccepted: ['Would you mind coming back later?', 'Not right now — maybe in an hour?'],
        translation_tr: 'Bir saat sonra gelebilir misiniz, lütfen?',
        register: 'neutral', ipa: '/kʊd juː kʌm bæk ɪn ən ˈaʊər pliːz/',
        grammar: [
          { word: 'come back', role: 'phrasal verb', note: 'Means to return to a place.' },
          { word: 'in an hour', role: 'future time preposition', note: '"In" + period means "after that amount of time from now".' }
        ],
        keyExpressions: [{ phrase: 'come back in an hour', meaning: 'return after sixty minutes' }],
        exampleSentences: ['I’ll be back in ten minutes.', 'Can you come back later?'],
        pronunciationTips: ['"an hour" — the h is silent, so it takes "an": /ən ˈaʊər/.']
      },
      { speaker: 'A', text: 'Of course. Anything else you need?', translation_tr: 'Elbette. Başka bir ihtiyacınız var mı?', emotion: 'friendly', register: 'neutral' },
      {
        speaker: 'B', expected: 'Could I have two extra towels and a pillow?',
        altAccepted: ['Some more towels and another pillow, please.', 'Yes — extra towels and one more pillow would be great.'],
        translation_tr: 'İki fazladan havlu ve bir yastık alabilir miyim?',
        register: 'neutral', ipa: '/kʊd aɪ hæv tuː ˈekstrə ˈtaʊəlz ænd ə ˈpɪloʊ/',
        grammar: [
          { word: 'extra', role: 'adjective', note: 'Means "additional" — placed before the noun: extra towels.' },
          { word: 'two ... and a ...', role: 'listing structure', note: 'Note the plural for two towels but singular "a pillow" for one.' }
        ],
        keyExpressions: [{ phrase: 'extra towels', meaning: 'additional towels beyond what is provided' }],
        exampleSentences: ['Could I have an extra blanket?', 'We need two more chairs.'],
        pronunciationTips: ['"towels" is one syllable in fast speech: /taʊlz/.']
      }
    ]
  }),

  createDialogue({
    id: 'hotel-check-out-a2-01',
    locationId: 'hotel',
    scenarioId: 'check-out',
    title: 'Checking Out',
    level: 'A2',
    length: 'short',
    goal: 'Check out, query the bill and arrange to leave your luggage.',
    tags: ['problem-solving'],
    sceneType: 'hotel-lobby',
    characters: {
      A: { name: 'Lara', role: 'Receptionist', gender: 'female', accent: 'international', avatarPreset: 'receptionist_f' },
      B: { name: 'You', role: 'Hotel Guest', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Good morning. Checking out today?', translation_tr: 'Günaydın. Bugün çıkış mı yapıyorsunuz?', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'Yes, room 412. Could I see the bill, please?',
        altAccepted: ['Yes please, room 412. May I have the invoice?', 'Checking out from 412 — can I check the bill first?'],
        translation_tr: 'Evet, oda 412. Faturayı görebilir miyim, lütfen?',
        register: 'formal', ipa: '/kʊd aɪ siː ðə bɪl pliːz/',
        grammar: [
          { word: 'Could I see', role: 'polite request', note: 'Asking to look at something before agreeing to it.' }
        ],
        keyExpressions: [{ phrase: 'Could I see the bill?', meaning: 'asking to review charges before paying' }],
        exampleSentences: ['Could I see the menu?', 'May I see your ID?'],
        pronunciationTips: ['"bill" has a short, clear i — do not stretch it.']
      },
      { speaker: 'A', text: 'Here you are. The total is three hundred and twenty euros.', translation_tr: 'Buyurun. Toplam üç yüz yirmi euro.', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'What is this charge for, exactly?',
        altAccepted: ['Sorry, what’s this item on the bill?', 'Could you explain this last charge?'],
        translation_tr: 'Bu ücret tam olarak ne için?',
        register: 'formal', ipa: '/wɒt ɪz ðɪs tʃɑːrdʒ fɔːr ɪɡˈzæktli/',
        grammar: [
          { word: 'What is this for?', role: 'question with final preposition', note: 'In English the preposition often ends the question — completely correct.' },
          { word: 'charge', role: 'noun', note: 'An amount of money you must pay for a specific service.' }
        ],
        keyExpressions: [{ phrase: 'What is this charge for?', meaning: 'querying an item on a bill' }],
        exampleSentences: ['What’s this button for?', 'There’s an extra charge for parking.'],
        pronunciationTips: ['Keep your tone neutral and curious, not accusing.']
      },
      { speaker: 'A', text: 'That’s the minibar. Would you like to pay by card?', translation_tr: 'Bu minibar. Kartla mı ödemek istersiniz?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Yes, please. Could I leave my luggage here until three?',
        altAccepted: ['By card, thanks. Can I store my bags until the afternoon?', 'Card, please. Is there somewhere to leave my suitcase?'],
        translation_tr: 'Evet, lütfen. Bagajımı üçe kadar burada bırakabilir miyim?',
        register: 'formal', ipa: '/kʊd aɪ liːv maɪ ˈlʌɡɪdʒ hɪər ənˈtɪl θriː/',
        grammar: [
          { word: 'leave my luggage', role: 'verb + object', note: '"Leave" here means to deposit something temporarily.' },
          { word: 'until three', role: 'preposition of time', note: '"Until" means continuously up to that moment — different from "by".' },
          { word: 'luggage', role: 'uncountable noun', note: 'Never "luggages". For one item say "a piece of luggage" or "a suitcase".' }
        ],
        keyExpressions: [{ phrase: 'leave your luggage', meaning: 'store your bags at the hotel after checkout' }],
        exampleSentences: ['Can I leave my bags here?', 'I’ll be back until five.'],
        pronunciationTips: ['"luggage" is LUG-ij — the second syllable is very weak.']
      }
    ]
  })
];
