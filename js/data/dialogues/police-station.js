import { createDialogue } from '../dialogueSchema.js?v=content109';

export const POLICE_STATION_DIALOGUES = [
  createDialogue({
    id: 'police-station-reporting-theft-b1-01',
    locationId: 'police-station',
    scenarioId: 'reporting-theft',
    title: 'Reporting a Stolen Wallet',
    level: 'B1',
    length: 'medium',
    goal: 'Report a theft clearly and give the details an officer needs.',
    tags: ['problem-solving', 'complaint'],
    sceneType: 'formal-office',
    characters: {
      A: { name: 'Officer Reid', role: 'Police Officer', gender: 'male', accent: 'british', avatarPreset: 'officer_m' },
      B: { name: 'You', role: 'Member of the Public', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Good afternoon. How can I help you today?', translation_tr: 'İyi günler. Bugün size nasıl yardımcı olabilirim?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'I’d like to report a theft. My wallet was stolen this morning.',
        altAccepted: ['I want to report a stolen wallet.', 'Someone stole my wallet this morning and I need to report it.'],
        translation_tr: 'Bir hırsızlık bildirmek istiyorum. Cüzdanım bu sabah çalındı.',
        register: 'formal', ipa: '/aɪd laɪk tuː rɪˈpɔːrt ə θeft maɪ ˈwɒlɪt wɒz ˈstoʊlən/',
        grammar: [
          { word: 'I’d like to report', role: 'polite formula', note: 'The standard opening when making an official report.' },
          { word: 'was stolen', role: 'passive voice (past simple)', note: 'We use the passive because the thief is unknown — the focus is the wallet.' }
        ],
        keyExpressions: [{ phrase: 'report a theft', meaning: 'officially tell the police that something was stolen' }],
        exampleSentences: ['My phone was stolen on the bus.', 'I’d like to report a lost passport.'],
        pronunciationTips: ['"stolen" is STOH-lun — the second syllable is very weak.']
      },
      { speaker: 'A', text: 'I’m sorry to hear that. Where exactly did it happen?', translation_tr: 'Bunu duyduğuma üzüldüm. Tam olarak nerede oldu?', emotion: 'concerned', register: 'formal' },
      {
        speaker: 'B', expected: 'I think it happened on the number nine bus, around eight o’clock.',
        altAccepted: ['Probably on the bus, at about eight in the morning.', 'It must have happened on the bus this morning.'],
        translation_tr: 'Sanırım dokuz numaralı otobüste, saat sekiz civarında oldu.',
        register: 'formal', ipa: '/aɪ θɪŋk ɪt ˈhæpənd ɒn ðə ˈnaɪnθ bʌs əˈraʊnd eɪt/',
        grammar: [
          { word: 'I think', role: 'hedging phrase', note: 'Signals that you are not completely certain — important when giving evidence.' },
          { word: 'around eight', role: 'approximation', note: '"Around" or "about" before a time means "more or less".' }
        ],
        keyExpressions: [{ phrase: 'around eight o’clock', meaning: 'approximately at eight' }],
        exampleSentences: ['It happened around midnight.', 'I think I left it at the café.'],
        pronunciationTips: ['"o’clock" is one word in speech: uh-CLOCK.']
      },
      { speaker: 'A', text: 'Was there anything valuable inside besides money?', translation_tr: 'İçinde paranın dışında değerli bir şey var mıydı?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'Yes, my bank card and my driving licence were in it.',
        altAccepted: ['My cards and ID were inside.', 'There was a bank card and my ID in it.'],
        translation_tr: 'Evet, banka kartım ve ehliyetim içindeydi.',
        register: 'formal', ipa: '/maɪ bæŋk kɑːrd ænd maɪ ˈdraɪvɪŋ ˈlaɪsəns wɜːr ɪn ɪt/',
        grammar: [
          { word: 'were', role: 'past of "be", plural', note: 'Two items (card and licence) require the plural form "were".' },
          { word: 'driving licence', role: 'compound noun', note: 'British spelling; American English writes "driver’s license".' }
        ],
        keyExpressions: [{ phrase: 'besides money', meaning: 'in addition to money' }],
        exampleSentences: ['My keys and phone were in the bag.'],
        pronunciationTips: ['"licence" ends in a soft /əns/ — do not stress the last syllable.']
      },
      { speaker: 'A', text: 'Right. I’ll take your details and give you a crime reference number.', translation_tr: 'Peki. Bilgilerinizi alıp size bir dosya numarası vereceğim.', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'Thank you. Will I need that number for my insurance?',
        altAccepted: ['Thanks. Do I need it for the insurance company?', 'Thank you — is that number for my insurance claim?'],
        translation_tr: 'Teşekkürler. Bu numara sigortam için gerekecek mi?',
        register: 'formal', ipa: '/wɪl aɪ niːd ðæt ˈnʌmbər fɔːr maɪ ɪnˈʃʊrəns/',
        grammar: [
          { word: 'Will I need', role: 'future question', note: 'Asking about a future requirement — "will" + subject + base verb.' }
        ],
        keyExpressions: [{ phrase: 'crime reference number', meaning: 'the official case number the police give you' }],
        exampleSentences: ['Will I need an appointment?', 'Will we need our passports?'],
        pronunciationTips: ['"insurance" is in-SHOOR-ance in American English, in-SHOR-ance in British.']
      }
    ]
  }),

  createDialogue({
    id: 'police-station-witness-statement-b2-01',
    locationId: 'police-station',
    scenarioId: 'witness-statement',
    title: 'Giving a Witness Statement',
    level: 'B2',
    length: 'medium',
    goal: 'Describe what you saw precisely, and be honest about what you are unsure of.',
    tags: ['problem-solving'],
    sceneType: 'formal-office',
    characters: {
      A: { name: 'Sergeant Blake', role: 'Police Sergeant', gender: 'female', accent: 'british', avatarPreset: 'manager_f' },
      B: { name: 'You', role: 'Witness', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Thank you for coming in. Could you describe what you saw, in your own words?', translation_tr: 'Geldiğiniz için teşekkürler. Gördüklerinizi kendi cümlelerinizle anlatabilir misiniz?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'I was walking past the shop when I heard glass breaking.',
        altAccepted: ['I happened to be walking by when I heard a window smash.', 'As I was passing the shop, I heard breaking glass.'],
        translation_tr: 'Dükkânın önünden geçiyordum ki cam kırılma sesi duydum.',
        register: 'formal', ipa: '/aɪ wɒz ˈwɔːkɪŋ pɑːst ðə ʃɒp wen aɪ hɜːrd ɡlɑːs ˈbreɪkɪŋ/',
        grammar: [
          { word: 'I was walking', role: 'past continuous', note: 'Sets the longer background action that was in progress.' },
          { word: 'when I heard', role: 'past simple in a "when" clause', note: 'The short, sudden action that interrupted the background action.' },
          { word: 'glass breaking', role: 'noun + -ing (perception verb)', note: 'After "hear/see" we use the -ing form to describe an action in progress.' }
        ],
        keyExpressions: [{ phrase: 'I was ...-ing when ...', meaning: 'the standard structure for describing an interrupted action' }],
        exampleSentences: ['I was cooking when the phone rang.', 'I saw him running towards the exit.'],
        pronunciationTips: ['Pause slightly before "when" — it marks the turning point of the story.']
      },
      { speaker: 'A', text: 'Did you get a look at the person involved?', translation_tr: 'Olaya karışan kişiyi görebildiniz mi?', emotion: 'curious', register: 'formal' },
      {
        speaker: 'B', expected: 'Only briefly. He was tall and wearing a dark hooded jacket.',
        altAccepted: ['Just for a second — a tall man in a dark hoodie.', 'Not clearly, but he was tall and dressed in dark clothes.'],
        translation_tr: 'Sadece kısa bir an. Uzun boyluydu ve koyu renk kapüşonlu bir mont giyiyordu.',
        register: 'formal', ipa: '/ˈoʊnli ˈbriːfli hiː wɒz tɔːl ænd ˈweərɪŋ ə dɑːrk ˈhʊdɪd ˈdʒækɪt/',
        grammar: [
          { word: 'Only briefly', role: 'adverbial fragment', note: 'A natural short answer; the full sentence "I only saw him briefly" is understood.' },
          { word: 'was wearing', role: 'past continuous', note: 'Describes clothing at a specific past moment.' },
          { word: 'tall and wearing', role: 'parallel description', note: 'An adjective and a verb phrase joined by "and" — both describe the same person.' }
        ],
        keyExpressions: [{ phrase: 'get a look at', meaning: 'manage to see someone or something clearly' }],
        exampleSentences: ['I only saw her briefly.', 'She was wearing a red coat.'],
        pronunciationTips: ['"hooded" has two clear syllables: HOOD-id.']
      },
      { speaker: 'A', text: 'Would you be able to identify him if you saw him again?', translation_tr: 'Onu tekrar görseniz teşhis edebilir misiniz?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'Honestly, I doubt it — I never saw his face clearly.',
        altAccepted: ['I’m not confident I could — his face was covered.', 'Probably not, as I only saw him from behind.'],
        translation_tr: 'Açıkçası şüpheliyim — yüzünü net göremedim.',
        register: 'formal', ipa: '/ˈɒnɪstli aɪ daʊt ɪt aɪ ˈnevər sɔː hɪz feɪs ˈklɪərli/',
        grammar: [
          { word: 'Honestly', role: 'sentence adverb', note: 'Signals that you are about to say something frank, possibly unwelcome.' },
          { word: 'I doubt it', role: 'fixed expression', note: 'A polite way of saying "probably not" without a flat refusal.' },
          { word: 'never saw', role: 'past simple + never', note: '"Never" here means "not at any point during the event".' }
        ],
        keyExpressions: [{ phrase: 'I doubt it', meaning: 'I think it is unlikely' }],
        exampleSentences: ['Will they arrive on time? — I doubt it.', 'Honestly, I’m not sure.'],
        pronunciationTips: ['The "h" in "honestly" is silent: ON-ist-lee.']
      },
      { speaker: 'A', text: 'That’s completely fine. An honest account is far more useful than a confident guess.', translation_tr: 'Bu tamamen normal. Dürüst bir ifade, kendinden emin bir tahminden çok daha değerlidir.', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'I appreciate that. I’ve told you everything I remember.',
        altAccepted: ['Thank you — that’s everything I can recall.', 'Good to hear. That’s all I remember clearly.'],
        translation_tr: 'Bunu takdir ediyorum. Hatırladığım her şeyi anlattım.',
        register: 'formal', ipa: '/aɪv toʊld juː ˈevriθɪŋ aɪ rɪˈmembər/',
        grammar: [
          { word: 'I’ve told', role: 'present perfect', note: 'Links a completed past action to the present moment of the interview.' },
          { word: 'everything I remember', role: 'relative clause without "that"', note: '"That" can be dropped when it is the object of the clause.' }
        ],
        keyExpressions: [{ phrase: 'everything I remember', meaning: 'all the details still in your memory' }],
        exampleSentences: ['I’ve said everything I wanted to say.'],
        pronunciationTips: ['"remember" is stressed in the middle: re-MEM-ber.']
      }
    ]
  })
];
