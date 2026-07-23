import { createDialogue } from '../dialogueSchema.js?v=content109';

export const AIRPLANE_DIALOGUES = [
  createDialogue({
    id: 'airplane-finding-seat-a1-01',
    locationId: 'airplane',
    scenarioId: 'finding-seat',
    title: 'Finding Your Seat',
    level: 'A1',
    length: 'short',
    goal: 'Find your seat on the plane and ask someone to let you through.',
    tags: ['problem-solving'],
    sceneType: 'airplane-cabin',
    characters: {
      A: { name: 'Claire', role: 'Flight Attendant', gender: 'female', accent: 'british', avatarPreset: 'agent_f' },
      B: { name: 'You', role: 'Passenger', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Good evening. May I see your boarding pass?', translation_tr: 'İyi akşamlar. Biniş kartınızı görebilir miyim?', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'Here it is. Where is seat 14C?',
        altAccepted: ['Here you are. Could you tell me where 14C is?', 'Here it is. I’m looking for seat 14C.'],
        translation_tr: 'Buyurun. 14C koltuğu nerede?',
        register: 'neutral', ipa: '/hɪər ɪt ɪz weər ɪz siːt ˈfɔːrtiːn siː/',
        grammar: [
          { word: 'Here it is', role: 'fixed expression', note: 'Used when handing over one specific item the other person asked for.' },
          { word: 'Where is', role: 'question word + verb', note: 'In questions, "is" comes before the noun: Where is the seat?' }
        ],
        keyExpressions: [{ phrase: 'Here it is', meaning: 'said while giving the specific thing that was requested' }],
        exampleSentences: ['Where is the toilet?', 'Where is gate 22?'],
        pronunciationTips: ['Say seat numbers as "fourteen C", not "one four C".']
      },
      { speaker: 'A', text: 'It’s halfway down on the right, by the window.', translation_tr: 'Koridorun ortasında sağda, pencere kenarında.', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Excuse me, could I get past?',
        altAccepted: ['Sorry, may I get through?', 'Excuse me, can I squeeze past?'],
        translation_tr: 'Affedersiniz, geçebilir miyim?',
        register: 'formal', ipa: '/ɪkˈskjuːz miː kʊd aɪ ɡet pɑːst/',
        grammar: [
          { word: 'Excuse me', role: 'attention getter', note: 'Used before asking a stranger for something — not an apology.' },
          { word: 'could I', role: 'polite modal question', note: '"Could" is more polite than "can" when asking a stranger for a favour.' }
        ],
        keyExpressions: [{ phrase: 'get past', meaning: 'move by someone who is blocking the way' }],
        exampleSentences: ['Excuse me, could I get past, please?'],
        pronunciationTips: ['"Excuse me" is stressed on the second syllable: ex-CUSE me.']
      },
      { speaker: 'A', text: 'Of course. Please put your bag in the overhead locker.', translation_tr: 'Tabii ki. Lütfen çantanızı üst dolaba koyun.', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'Sure, I’ll do that now.',
        altAccepted: ['Of course, right away.', 'No problem, I’ll put it up there.'],
        translation_tr: 'Tabii, hemen yapıyorum.',
        register: 'neutral', ipa: '/ʃʊr aɪl duː ðæt naʊ/',
        grammar: [
          { word: 'I’ll', role: 'contraction of "I will"', note: 'Used for a decision made at the moment of speaking.' }
        ],
        keyExpressions: [{ phrase: 'I’ll do that now', meaning: 'agreeing to do something immediately' }],
        exampleSentences: ['I’ll call you later.', 'I’ll check right away.'],
        pronunciationTips: ['"I’ll" is short — /aɪl/, one syllable, like "aisle".']
      }
    ]
  }),

  createDialogue({
    id: 'airplane-inflight-order-a2-01',
    locationId: 'airplane',
    scenarioId: 'inflight-order',
    title: 'Ordering a Drink and a Meal',
    level: 'A2',
    length: 'short',
    goal: 'Order food and a drink from the cabin crew and ask about options.',
    tags: ['ordering'],
    sceneType: 'airplane-cabin',
    characters: {
      A: { name: 'Marcus', role: 'Flight Attendant', gender: 'male', accent: 'canadian', avatarPreset: 'assistant_m' },
      B: { name: 'You', role: 'Passenger', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Chicken or pasta, sir/madam?', translation_tr: 'Tavuk mu makarna mı, efendim?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'The pasta, please. Is it vegetarian?',
        altAccepted: ['I’ll have the pasta. Does it have meat in it?', 'Pasta, please. Is there meat in it?'],
        translation_tr: 'Makarna, lütfen. Vejetaryen mi?',
        register: 'neutral', ipa: '/ðə ˈpɑːstə pliːz ɪz ɪt ˌvedʒəˈteəriən/',
        grammar: [
          { word: 'The pasta', role: 'definite article', note: 'We use "the" because the attendant just named these two specific options.' },
          { word: 'Is it', role: 'yes/no question', note: 'To ask a yes/no question with "be," put the verb before the subject.' }
        ],
        keyExpressions: [{ phrase: 'Is it vegetarian?', meaning: 'asking whether a dish contains no meat' }],
        exampleSentences: ['Is it spicy?', 'Is it gluten-free?'],
        pronunciationTips: ['"vegetarian" has five syllables: ve-ge-TAR-i-an, stress on "tar".']
      },
      { speaker: 'A', text: 'Yes, the pasta is fully vegetarian. Anything to drink?', translation_tr: 'Evet, makarna tamamen vejetaryen. İçecek bir şey?', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'Could I have some water, please?',
        altAccepted: ['Water, please.', 'May I have a glass of water?'],
        translation_tr: 'Biraz su alabilir miyim, lütfen?',
        register: 'formal', ipa: '/kʊd aɪ hæv sʌm ˈwɔːtər pliːz/',
        grammar: [
          { word: 'some', role: 'quantifier', note: 'Used with uncountable nouns like water when we do not say an exact amount.' },
          { word: 'Could I have', role: 'polite request', note: 'Slightly more formal and softer than "Can I have."' }
        ],
        keyExpressions: [{ phrase: 'Could I have some...', meaning: 'a polite request for an uncountable item' }],
        exampleSentences: ['Could I have some tea, please?', 'Could I have some ice?'],
        pronunciationTips: ['The "l" in "could" is silent: /kʊd/.']
      },
      { speaker: 'A', text: 'Still or sparkling?', translation_tr: 'Sade mi maden suyu mu?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Still, please. Thank you very much.',
        altAccepted: ['Still water, thanks.', 'Sparkling, please. Thank you.'],
        translation_tr: 'Sade, lütfen. Çok teşekkür ederim.',
        register: 'formal', ipa: '/stɪl pliːz θæŋk juː ˈveri mʌtʃ/',
        grammar: [
          { word: 'Still', role: 'adjective (short answer)', note: 'Here "still" means water without gas — the opposite of "sparkling".' }
        ],
        keyExpressions: [{ phrase: 'still or sparkling', meaning: 'flat water or fizzy/mineral water' }],
        exampleSentences: ['A bottle of still water, please.'],
        pronunciationTips: ['Keep "thank you very much" smooth — do not stress every word equally.']
      }
    ]
  }),

  createDialogue({
    id: 'airplane-seatmate-chat-b1-01',
    locationId: 'airplane',
    scenarioId: 'seatmate-chat',
    title: 'Chatting with the Passenger Next to You',
    level: 'B1',
    length: 'medium',
    goal: 'Have a friendly conversation with a stranger on a long flight.',
    tags: ['small-talk', 'meeting-someone'],
    sceneType: 'airplane-cabin',
    characters: {
      A: { name: 'Hannah', role: 'Fellow Passenger', gender: 'female', accent: 'american', avatarPreset: 'journalist_f' },
      B: { name: 'You', role: 'Passenger', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Long flight, isn’t it? Are you heading home or travelling for work?', translation_tr: 'Uzun bir uçuş, değil mi? Eve mi dönüyorsunuz yoksa iş için mi seyahat ediyorsunuz?', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Actually, I’m going on holiday for the first time in years.',
        altAccepted: ['I’m travelling for work, unfortunately.', 'Actually, I’m visiting family for a couple of weeks.'],
        translation_tr: 'Aslında yıllar sonra ilk kez tatile gidiyorum.',
        register: 'informal', ipa: '/ˈæktʃuəli aɪm ˈɡoʊɪŋ ɒn ˈhɒlədeɪ fɔːr ðə fɜːrst taɪm ɪn jɪərz/',
        grammar: [
          { word: 'Actually', role: 'discourse marker', note: 'Introduces information that may surprise the listener — it does not mean "currently".' },
          { word: 'I’m going', role: 'present continuous for future', note: 'Used for plans already arranged — very common when talking about trips.' },
          { word: 'for the first time in years', role: 'time phrase', note: 'Emphasises that a long period passed since the last time.' }
        ],
        keyExpressions: [{ phrase: 'for the first time in years', meaning: 'after a very long gap' }],
        exampleSentences: ['I saw her for the first time in years.', 'We’re eating out for the first time in months.'],
        pronunciationTips: ['"Actually" is often reduced to three syllables: AK-chu-lee.']
      },
      { speaker: 'A', text: 'That sounds wonderful. Where are you off to?', translation_tr: 'Kulağa harika geliyor. Nereye gidiyorsunuz?', emotion: 'curious', register: 'informal' },
      {
        speaker: 'B', expected: 'I’m spending two weeks in Portugal, mostly along the coast.',
        altAccepted: ['Portugal — two weeks along the coast.', 'I’ll be in Portugal for a couple of weeks, mainly by the sea.'],
        translation_tr: 'İki haftamı Portekiz’de, çoğunlukla sahil boyunca geçireceğim.',
        register: 'informal', ipa: '/aɪm ˈspendɪŋ tuː wiːks ɪn ˈpɔːrtʃəɡəl ˈmoʊstli əˈlɔːŋ ðə koʊst/',
        grammar: [
          { word: 'spending two weeks', role: 'verb + duration', note: 'We "spend" time in a place, not "pass" it — a common Turkish-speaker slip.' },
          { word: 'mostly', role: 'adverb of degree', note: 'Softens the statement: not entirely, but for the greater part.' },
          { word: 'along the coast', role: 'preposition of place', note: '"Along" suggests movement following the line of the coast.' }
        ],
        keyExpressions: [{ phrase: 'Where are you off to?', meaning: 'informal way of asking "Where are you going?"' }],
        exampleSentences: ['We spent three days in Rome.', 'I’m spending the summer with my grandparents.'],
        pronunciationTips: ['Link "weeks in" so it sounds like "week-sin".']
      },
      { speaker: 'A', text: 'You’ll love it. Just be ready for the heat in August.', translation_tr: 'Bayılacaksınız. Sadece ağustos sıcağına hazır olun.', emotion: 'happy', register: 'informal' },
      {
        speaker: 'B', expected: 'Thanks for the tip — I’ll pack plenty of sunscreen.',
        altAccepted: ['Good to know, I’ll bring lots of sunscreen.', 'Thanks, I’ll make sure to pack for hot weather.'],
        translation_tr: 'Tavsiye için teşekkürler — bol bol güneş kremi alacağım.',
        register: 'informal', ipa: '/θæŋks fɔːr ðə tɪp aɪl pæk ˈplenti əv ˈsʌnskriːn/',
        grammar: [
          { word: 'Thanks for the tip', role: 'fixed expression', note: '"Tip" here means a piece of useful advice, not money left in a restaurant.' },
          { word: 'plenty of', role: 'quantifier', note: 'Means "a lot of / more than enough" and works with uncountable nouns.' }
        ],
        keyExpressions: [{ phrase: 'Thanks for the tip', meaning: 'thank you for the useful advice' }],
        exampleSentences: ['Thanks for the tip about the shortcut.', 'We have plenty of time.'],
        pronunciationTips: ['"plenty of" is usually said "plen-y-of" with a soft t in casual speech.']
      }
    ]
  }),

  createDialogue({
    id: 'airplane-turbulence-b1-01',
    locationId: 'airplane',
    scenarioId: 'turbulence',
    title: 'Staying Calm During Turbulence',
    level: 'B1',
    length: 'short',
    goal: 'Ask the crew about turbulence and express mild worry politely.',
    tags: ['feelings', 'problem-solving'],
    sceneType: 'airplane-cabin',
    characters: {
      A: { name: 'Marcus', role: 'Flight Attendant', gender: 'male', accent: 'canadian', avatarPreset: 'assistant_m' },
      B: { name: 'You', role: 'Passenger', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Please fasten your seatbelt — we’re expecting some rough air.', translation_tr: 'Lütfen emniyet kemerinizi bağlayın — biraz türbülans bekliyoruz.', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'Is it going to be serious? I’m a nervous flyer.',
        altAccepted: ['Should I be worried? Flying makes me anxious.', 'Is this normal turbulence? I get quite nervous.'],
        translation_tr: 'Ciddi olacak mı? Uçaktan korkarım.',
        register: 'neutral', ipa: '/ɪz ɪt ˈɡoʊɪŋ tuː biː ˈsɪriəs aɪm ə ˈnɜːrvəs ˈflaɪər/',
        grammar: [
          { word: 'Is it going to be', role: 'future with "going to"', note: 'Used for predictions based on present evidence — here, the announcement.' },
          { word: 'a nervous flyer', role: 'noun phrase', note: 'A "flyer" is a person who flies; English often labels people this way.' }
        ],
        keyExpressions: [{ phrase: 'a nervous flyer', meaning: 'someone who feels anxious about flying' }],
        exampleSentences: ['Is it going to rain?', 'She’s a confident speaker.'],
        pronunciationTips: ['"going to" is often reduced to "gonna" in relaxed speech.']
      },
      { speaker: 'A', text: 'It should only last ten minutes. The aircraft handles this easily.', translation_tr: 'Sadece on dakika sürmeli. Uçak bunu rahatlıkla kaldırır.', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'That’s reassuring. Could I have some water when it settles?',
        altAccepted: ['That helps, thank you. May I have water once it calms down?', 'Good to know. Could you bring me water afterwards?'],
        translation_tr: 'Bu içimi rahatlattı. Sakinleşince biraz su alabilir miyim?',
        register: 'formal', ipa: '/ðæts ˌriːəˈʃʊrɪŋ kʊd aɪ hæv sʌm ˈwɔːtər wen ɪt ˈsetəlz/',
        grammar: [
          { word: 'reassuring', role: 'adjective', note: 'Describes something that reduces your worry. From the verb "reassure".' },
          { word: 'when it settles', role: 'time clause', note: 'After "when" about the future, English uses the present tense, not "will".' }
        ],
        keyExpressions: [{ phrase: 'That’s reassuring', meaning: 'what you said makes me feel calmer' }],
        exampleSentences: ['I’ll call you when I arrive.', 'That’s reassuring to hear.'],
        pronunciationTips: ['Stress "reassuring" on the third syllable: ree-uh-SHOOR-ing.']
      },
      { speaker: 'A', text: 'Of course. I’ll bring it as soon as the sign goes off.', translation_tr: 'Tabii ki. İşaret söner sönmez getireceğim.', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'I really appreciate it. Thank you.',
        altAccepted: ['That’s very kind, thank you.', 'Thanks a lot, I appreciate it.'],
        translation_tr: 'Gerçekten minnettarım. Teşekkür ederim.',
        register: 'formal', ipa: '/aɪ ˈrɪəli əˈpriːʃieɪt ɪt θæŋk juː/',
        grammar: [
          { word: 'appreciate', role: 'verb', note: 'Stronger and warmer than "thanks" — used when someone does you a real favour.' }
        ],
        keyExpressions: [{ phrase: 'I appreciate it', meaning: 'a sincere, slightly formal way of saying thank you' }],
        exampleSentences: ['I really appreciate your help.'],
        pronunciationTips: ['"appreciate" is a-PREE-shee-ate — four syllables, stress on the second.']
      }
    ]
  })
];
