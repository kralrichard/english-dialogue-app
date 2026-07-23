import { createDialogue } from '../dialogueSchema.js?v=content109';

export const TRAIN_STATION_DIALOGUES = [
  createDialogue({
    id: 'train-station-buying-ticket-a2-01',
    locationId: 'train-station',
    scenarioId: 'buying-ticket',
    title: 'Buying a Train Ticket',
    level: 'A2',
    variant: 1,
    length: 'medium',
    goal: 'Buy the right ticket for your journey.',
    tags: ['booking', 'directions'],
    sceneType: 'transit',
    characters: {
      A: { name: 'Tom', role: 'Ticket Clerk', gender: 'male', accent: 'british', avatarPreset: 'clerk_m' },
      B: { name: 'Traveler', role: 'Traveler', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Good afternoon. Where would you like to go?', translation_tr: 'İyi günler. Nereye gitmek istersiniz?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'One ticket to Manchester, please.',
        altAccepted: ['A ticket to Manchester, please.', 'One ticket to Manchester.'],
        translation_tr: 'Manchester’a bir bilet, lütfen.',
        register: 'neutral', ipa: '/wʌn ˈtɪkɪt tuː ˈmæntʃɪstər pliːz/',
        grammar: [
          { word: 'One ticket', role: 'object', note: 'States the quantity before the item.' },
          { word: 'to Manchester', role: 'prepositional phrase', note: 'Shows the destination of the ticket.' }
        ],
        keyExpressions: [{ phrase: 'One ticket to..., please', meaning: 'a standard way to request a ticket' }],
        exampleSentences: ['Two tickets to Boston, please.'],
        pronunciationTips: ['Say "ticket" with a crisp "t" at the start and end.']
      },
      { speaker: 'A', text: 'Single or return?', translation_tr: 'Tek yön mü gidiş-dönüş mü?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Return, please. I’m coming back tomorrow.',
        altAccepted: ['A return ticket, please.', 'Return, I’ll be back tomorrow.'],
        translation_tr: 'Gidiş-dönüş, lütfen. Yarın geri döneceğim.',
        register: 'neutral', ipa: '/rɪˈtɜːrn pliːz aɪm ˈkʌmɪŋ bæk təˈmɒroʊ/',
        grammar: [
          { word: 'Return', role: 'noun (ticket type)', note: 'British English term for a round-trip ticket.' },
          { word: 'I’m coming back', role: 'present continuous (future plan)', note: 'Explains the reason for choosing "return."' }
        ],
        keyExpressions: [{ phrase: 'single vs. return', meaning: 'one-way ticket vs. round-trip ticket (British English)' }],
        exampleSentences: ['I’ll take a single, thanks — I’m not coming back this way.'],
        pronunciationTips: ['Stress the second syllable: re-TURN.']
      },
      { speaker: 'A', text: 'That’ll be eighteen pounds. Which platform, you ask? Platform four.', translation_tr: 'On sekiz sterlin olacak. Hangi peron mu diyorsunuz? Dördüncü peron.', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'Thank you. Which platform did you say again?',
        altAccepted: ['Thanks, sorry, which platform was that?', 'Thank you, could you repeat the platform number?'],
        translation_tr: 'Teşekkürler. Hangi peron demiştiniz?',
        register: 'neutral', ipa: '/θæŋk juː wɪtʃ ˈplætfɔːrm dɪd juː seɪ əˈgɛn/',
        grammar: [
          { word: 'Which platform', role: 'question phrase', note: 'Asks for a specific choice among several platforms.' },
          { word: 'did you say', role: 'past simple question', note: 'Politely asks someone to repeat information already given.' },
          { word: 'again', role: 'adverb', note: 'Signals you are asking for a repeat, not new information.' }
        ],
        keyExpressions: [{ phrase: '...did you say again?', meaning: 'a polite way to ask someone to repeat something' }],
        exampleSentences: ['Sorry, what time did you say again?'],
        pronunciationTips: ['Slightly stress "platform" — that’s the key word you need repeated.']
      }
    ]
  }),

  createDialogue({
    id: 'train-station-platform-delay-a2-01',
    locationId: 'train-station',
    scenarioId: 'platform-delay',
    title: 'Asking About a Delay',
    level: 'A2',
    length: 'short',
    goal: 'Find out why a train is delayed and what your options are.',
    tags: ['problem-solving'],
    sceneType: 'transit',
    characters: {
      A: { name: 'Ken', role: 'Station Staff', gender: 'male', accent: 'british', avatarPreset: 'officer_m' },
      B: { name: 'You', role: 'Passenger', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Sorry, the ten-fifteen is running late this morning.', translation_tr: 'Üzgünüm, on on beş treni bu sabah gecikmeli.', emotion: 'apologetic', register: 'neutral' },
      {
        speaker: 'B', expected: 'Do you know how long the delay will be?',
        altAccepted: ['Any idea how late it is?', 'How long is it delayed by?'],
        translation_tr: 'Gecikmenin ne kadar süreceğini biliyor musunuz?',
        register: 'neutral', ipa: '/duː juː noʊ haʊ lɒŋ ðə dɪˈleɪ wɪl biː/',
        grammar: [
          { word: 'Do you know how long', role: 'indirect question', note: 'After "Do you know", normal word order follows: how long the delay WILL BE.' },
          { word: 'delay', role: 'noun', note: 'As a noun the stress is on the second syllable: de-LAY.' }
        ],
        keyExpressions: [{ phrase: 'running late', meaning: 'behind schedule' }],
        exampleSentences: ['Do you know where the exit is?', 'The flight was delayed by an hour.'],
        pronunciationTips: ['Indirect questions sound softer — very useful with busy staff.']
      },
      { speaker: 'A', text: 'About twenty-five minutes. There’s a signal fault down the line.', translation_tr: 'Yaklaşık yirmi beş dakika. Hatta bir sinyal arızası var.', emotion: 'concerned', register: 'neutral' },
      {
        speaker: 'B', expected: 'Is there an earlier train I could take instead?',
        altAccepted: ['Are there other trains going that way?', 'Could I use a different service?'],
        translation_tr: 'Onun yerine binebileceğim daha erken bir tren var mı?',
        register: 'neutral', ipa: '/ɪz ðeər ən ˈɜːrliər treɪn aɪ kʊd teɪk ɪnˈsted/',
        grammar: [
          { word: 'earlier', role: 'comparative adjective', note: 'From "early" → "earlier". The y changes to i before -er.' },
          { word: 'I could take', role: 'reduced relative clause', note: '"That" is dropped: a train (that) I could take.' }
        ],
        keyExpressions: [{ phrase: 'Is there an earlier...?', meaning: 'asking for an alternative that leaves sooner' }],
        exampleSentences: ['Is there a later flight?', 'Could I take a different route?'],
        pronunciationTips: ['"earlier" has three syllables: ER-lee-er.']
      }
    ]
  }),

  createDialogue({
    id: 'train-station-lost-item-b1-01',
    locationId: 'train-station',
    scenarioId: 'lost-item',
    title: 'Reporting a Lost Item',
    level: 'B1',
    length: 'short',
    goal: 'Describe something you left on a train and arrange to get it back.',
    tags: ['problem-solving'],
    sceneType: 'transit',
    characters: {
      A: { name: 'Priya', role: 'Lost Property Officer', gender: 'female', accent: 'indian', avatarPreset: 'agent_f' },
      B: { name: 'You', role: 'Passenger', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Lost property. What have you lost?', translation_tr: 'Kayıp eşya. Ne kaybettiniz?', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'I left my laptop bag on the train from Manchester.',
        altAccepted: ['I think I left a laptop bag on the Manchester train.', 'My bag with a laptop in it is still on the train.'],
        translation_tr: 'Dizüstü bilgisayar çantamı Manchester treninde unuttum.',
        register: 'neutral', ipa: '/aɪ left maɪ ˈlæptɒp bæɡ ɒn ðə treɪn/',
        grammar: [
          { word: 'left', role: 'past simple of "leave"', note: 'Here "leave" means to forget something somewhere, not to depart.' },
          { word: 'on the train', role: 'preposition', note: 'You are ON a train, bus or plane; IN a car or taxi.' }
        ],
        keyExpressions: [{ phrase: 'I left it on the train', meaning: 'the standard sentence for a forgotten item' }],
        exampleSentences: ['I left my keys at home.', 'She left her coat in the café.'],
        pronunciationTips: ['"left" and "lift" sound different — keep the e short and open.']
      },
      { speaker: 'A', text: 'Can you describe it, and where you were sitting?', translation_tr: 'Tarif edebilir misiniz, nerede oturuyordunuz?', emotion: 'curious', register: 'neutral' },
      {
        speaker: 'B', expected: 'It’s a grey rucksack, and I was in coach C near the door.',
        altAccepted: ['A grey backpack — I sat in carriage C by the doors.', 'Grey rucksack with a laptop. Coach C, close to the exit.'],
        translation_tr: 'Gri bir sırt çantası, C vagonunda kapıya yakın oturuyordum.',
        register: 'neutral', ipa: '/ɪts ə ɡreɪ ˈrʌksæk ænd aɪ wɒz ɪn koʊtʃ siː/',
        grammar: [
          { word: 'I was sitting / I was in', role: 'past continuous or past simple', note: 'Both describe your position during the journey.' },
          { word: 'coach C', role: 'train vocabulary', note: 'British trains use "coach" or "carriage"; American trains use "car".' }
        ],
        keyExpressions: [{ phrase: 'Can you describe it?', meaning: 'the key question when reporting a lost item' }],
        exampleSentences: ['It’s a small black case.', 'I was sitting near the window.'],
        pronunciationTips: ['"rucksack" is British; Americans say "backpack".']
      }
    ]
  })
];
