import { createDialogue } from '../dialogueSchema.js';

export const FEELINGS_DIALOGUES = [
  createDialogue({
    id: 'feelings-bad-day-a2-01',
    locationId: 'feelings',
    scenarioId: 'bad-day',
    title: 'Talking About a Bad Day',
    level: 'A2',
    length: 'short',
    goal: 'Describe how a difficult day made you feel.',
    tags: ['feelings'],
    sceneType: 'home',
    characters: {
      A: { name: 'Dan', role: 'Friend', gender: 'male', accent: 'american', avatarPreset: 'guest_m' },
      B: { name: 'You', role: 'Friend', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'You seem quiet tonight. Is everything okay?', translation_tr: 'Bu akşam sessizsin. Her şey yolunda mı?', emotion: 'concerned', register: 'informal' },
      {
        speaker: 'B', expected: 'Not really. I had a terrible day at work.',
        altAccepted: ['Honestly, no — work was awful today.', 'Not great. Today was really stressful.'],
        translation_tr: 'Pek sayılmaz. İşte berbat bir gün geçirdim.',
        register: 'informal', ipa: '/nɒt ˈrɪəli aɪ hæd ə ˈterəbəl deɪ æt wɜːrk/',
        grammar: [
          { word: 'Not really', role: 'soft negative', note: 'Gentler than a flat "no" — it invites the other person to ask more.' },
          { word: 'had a terrible day', role: 'collocation', note: 'English "has" a day: have a good day, have a bad day.' }
        ],
        keyExpressions: [{ phrase: 'Not really', meaning: 'a soft way of saying no, often opening up a conversation' }],
        exampleSentences: ['I had a great day.', 'Not really, I’m a bit tired.'],
        pronunciationTips: ['Let your voice fall on "not really" — it signals you want to talk.']
      },
      { speaker: 'A', text: 'Oh no. What happened?', translation_tr: 'Olamaz. Ne oldu?', emotion: 'concerned', register: 'informal' },
      {
        speaker: 'B', expected: 'My manager criticised my report in front of everyone.',
        altAccepted: ['My boss told me off publicly.', 'I got criticised in the meeting, in front of the whole team.'],
        translation_tr: 'Müdürüm raporumu herkesin önünde eleştirdi.',
        register: 'informal', ipa: '/maɪ ˈmænɪdʒər ˈkrɪtɪsaɪzd maɪ rɪˈpɔːrt ɪn frʌnt əv ˈevriwʌn/',
        grammar: [
          { word: 'criticised', role: 'past simple', note: 'Regular verb. British spelling with -s; American English writes "criticized".' },
          { word: 'in front of', role: 'prepositional phrase', note: 'Three words, always together. Means "before / in the presence of".' }
        ],
        keyExpressions: [{ phrase: 'in front of everyone', meaning: 'publicly, where others could see and hear' }],
        exampleSentences: ['He apologised in front of the class.', 'She criticised the plan.'],
        pronunciationTips: ['"criticised" is stressed on the first syllable: CRIT-i-sised.']
      },
      { speaker: 'A', text: 'That’s really unfair. You must have felt awful.', translation_tr: 'Bu çok haksızca. Berbat hissetmiş olmalısın.', emotion: 'apologetic', register: 'informal' },
      {
        speaker: 'B', expected: 'I did. I felt embarrassed and quite angry, to be honest.',
        altAccepted: ['Yes — I was humiliated and frustrated.', 'It was horrible. I felt small in front of everyone.'],
        translation_tr: 'Öyle hissettim. Utandım ve açıkçası bayağı sinirlendim.',
        register: 'informal', ipa: '/aɪ felt ɪmˈbærəst ænd kwaɪt ˈæŋɡri tuː biː ˈɒnɪst/',
        grammar: [
          { word: 'felt embarrassed', role: 'feel + adjective', note: 'After "feel" we use an adjective, not an adverb: feel bad, not feel badly.' },
          { word: 'to be honest', role: 'discourse marker', note: 'Signals you are about to admit something personal or blunt.' },
          { word: 'I did', role: 'auxiliary echo', note: 'Short for "I did feel awful" — avoids repeating the whole phrase.' }
        ],
        keyExpressions: [{ phrase: 'to be honest', meaning: 'said before a frank or vulnerable admission' }],
        exampleSentences: ['I feel tired.', 'To be honest, I’d rather stay in.'],
        pronunciationTips: ['"embarrassed" has four syllables: em-BAR-ust.']
      }
    ]
  }),

  createDialogue({
    id: 'feelings-emotional-support-b1-01',
    locationId: 'feelings',
    scenarioId: 'emotional-support',
    title: 'Supporting a Friend',
    level: 'B1',
    length: 'short',
    goal: 'Listen well and offer comfort without giving unwanted advice.',
    tags: ['feelings', 'advice'],
    sceneType: 'home',
    characters: {
      A: { name: 'Ayla', role: 'Close Friend', gender: 'female', accent: 'international', avatarPreset: 'colleague_f' },
      B: { name: 'You', role: 'Friend', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'I don’t know why I’m so upset. It’s probably silly.', translation_tr: 'Neden bu kadar üzgün olduğumu bilmiyorum. Muhtemelen saçma.', emotion: 'concerned', register: 'informal' },
      {
        speaker: 'B', expected: 'It’s not silly at all. Do you want to talk about it?',
        altAccepted: ['That doesn’t sound silly to me. Tell me what happened.', 'You’re allowed to feel upset. Want to talk?'],
        translation_tr: 'Hiç de saçma değil. Konuşmak ister misin?',
        register: 'informal', ipa: '/ɪts nɒt ˈsɪli æt ɔːl duː juː wɒnt tuː tɔːk əˈbaʊt ɪt/',
        grammar: [
          { word: 'not ... at all', role: 'emphatic negative', note: 'Strengthens the denial — much warmer than a plain "no".' },
          { word: 'Do you want to talk about it?', role: 'open invitation', note: 'Offers space without pressure — the key move in emotional support.' }
        ],
        keyExpressions: [{ phrase: 'not at all', meaning: 'a strong, reassuring denial' }],
        exampleSentences: ['It’s not a problem at all.', 'Do you want to talk about it?'],
        pronunciationTips: ['Slow down and soften your voice — tone matters more than words here.']
      },
      { speaker: 'A', text: 'I just feel like I’m failing at everything lately.', translation_tr: 'Son zamanlarda her şeyde başarısız oluyormuşum gibi hissediyorum.', emotion: 'concerned', register: 'informal' },
      {
        speaker: 'B', expected: 'That sounds really hard. You’ve had a lot on your plate.',
        altAccepted: ['I’m sorry you’re feeling that way — you’ve been under real pressure.', 'That must be exhausting. You’ve been dealing with so much.'],
        translation_tr: 'Bu gerçekten zor olmalı. Üzerinde çok fazla yük vardı.',
        register: 'informal', ipa: '/ðæt saʊndz ˈrɪəli hɑːrd juːv hæd ə lɒt ɒn jɔːr pleɪt/',
        grammar: [
          { word: 'That sounds', role: 'empathy verb', note: '"Sounds" reflects their feeling back without judging it — a core empathy phrase.' },
          { word: 'a lot on your plate', role: 'idiom', note: 'Means many responsibilities or problems at once.' }
        ],
        keyExpressions: [{ phrase: 'have a lot on your plate', meaning: 'to be dealing with many demands at once' }],
        exampleSentences: ['That sounds exhausting.', 'She’s got a lot on her plate right now.'],
        pronunciationTips: ['Stress "really" gently — over-stressing can sound performative.']
      },
      { speaker: 'A', text: 'Thanks. I didn’t expect you to understand so easily.', translation_tr: 'Teşekkürler. Bu kadar kolay anlayacağını beklemiyordum.', emotion: 'thinking', register: 'informal' },
      {
        speaker: 'B', expected: 'I’m here whenever you need me. You don’t have to go through it alone.',
        altAccepted: ['You can always call me. You’re not alone in this.', 'I’m always here — don’t deal with it by yourself.'],
        translation_tr: 'Bana ihtiyacın olduğunda buradayım. Bunu tek başına atlatmak zorunda değilsin.',
        register: 'informal', ipa: '/aɪm hɪər wenˈevər juː niːd miː/',
        grammar: [
          { word: 'whenever', role: 'conjunction', note: 'Means "at any time that" — open-ended and generous.' },
          { word: 'go through', role: 'phrasal verb', note: 'Means to experience something difficult.' },
          { word: 'don’t have to', role: 'absence of obligation', note: 'Means it is not necessary — different from "mustn’t", which forbids.' }
        ],
        keyExpressions: [{ phrase: 'go through something', meaning: 'to live through a difficult experience' }],
        exampleSentences: ['Call me whenever you like.', 'She’s going through a hard time.'],
        pronunciationTips: ['Keep the sentence unhurried; pauses communicate sincerity.']
      }
    ]
  }),

  createDialogue({
    id: 'feelings-discussing-stress-b2-01',
    locationId: 'feelings',
    scenarioId: 'discussing-stress',
    title: 'Talking Honestly About Stress',
    level: 'B2',
    length: 'medium',
    goal: 'Discuss burnout and set a boundary without sounding defensive.',
    tags: ['feelings', 'advice'],
    sceneType: 'home',
    characters: {
      A: { name: 'Rob', role: 'Colleague and Friend', gender: 'male', accent: 'british', avatarPreset: 'manager_m' },
      B: { name: 'You', role: 'Friend', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'You’ve been staying late every night. Are you coping all right?', translation_tr: 'Her akşam geç saatlere kadar kalıyorsun. İdare edebiliyor musun?', emotion: 'concerned', register: 'informal' },
      {
        speaker: 'B', expected: 'Honestly, I’ve been struggling to switch off after work.',
        altAccepted: ['To be honest, I can’t stop thinking about work in the evenings.', 'Not brilliantly — I find it hard to relax at home.'],
        translation_tr: 'Açıkçası, iş sonrası kafamı boşaltmakta zorlanıyorum.',
        register: 'informal', ipa: '/aɪv bɪn ˈstrʌɡlɪŋ tuː swɪtʃ ɒf ˈɑːftər wɜːrk/',
        grammar: [
          { word: 'I’ve been struggling', role: 'present perfect continuous', note: 'Shows an ongoing difficulty over a period — ideal for describing stress.' },
          { word: 'switch off', role: 'phrasal verb', note: 'Figuratively means to stop thinking about work and relax.' }
        ],
        keyExpressions: [{ phrase: 'switch off', meaning: 'mentally disconnect from work' }],
        exampleSentences: ['I can’t switch off at weekends.', 'She’s been struggling with the workload.'],
        pronunciationTips: ['"struggling" has two syllables in speech: STRUG-ling.']
      },
      { speaker: 'A', text: 'I noticed. You looked exhausted in yesterday’s meeting.', translation_tr: 'Fark ettim. Dünkü toplantıda bitkin görünüyordun.', emotion: 'concerned', register: 'informal' },
      {
        speaker: 'B', expected: 'I think I’ve taken on more than I can realistically handle.',
        altAccepted: ['I’ve probably agreed to too much work.', 'I bit off more than I could chew, if I’m honest.'],
        translation_tr: 'Sanırım gerçekçi olarak kaldırabileceğimden fazlasını üstlendim.',
        register: 'informal', ipa: '/aɪv ˈteɪkən ɒn mɔːr ðæn aɪ kæn ˌriːəˈlɪstɪkli ˈhændəl/',
        grammar: [
          { word: 'taken on', role: 'phrasal verb', note: 'Means to accept responsibility for work or a task.' },
          { word: 'more than I can handle', role: 'comparative clause', note: 'A neutral way to admit overload without blaming anyone.' },
          { word: 'realistically', role: 'adverb', note: 'Signals a sober, practical assessment rather than complaint.' }
        ],
        keyExpressions: [{ phrase: 'take on too much', meaning: 'accept more work or responsibility than you can manage' }],
        exampleSentences: ['He’s taken on a second job.', 'That’s more than I can handle right now.'],
        pronunciationTips: ['"taken on" links smoothly into "tay-kn-on".']
      },
      { speaker: 'A', text: 'So what are you going to do about it?', translation_tr: 'Peki bu konuda ne yapacaksın?', emotion: 'curious', register: 'informal' },
      {
        speaker: 'B', expected: 'I’m going to speak to my manager and ask to hand two projects over.',
        altAccepted: ['I’ll talk to my boss about reducing my workload.', 'I plan to ask for some of my projects to be reassigned.'],
        translation_tr: 'Müdürümle konuşup iki projeyi devretmeyi isteyeceğim.',
        register: 'informal', ipa: '/aɪm ˈɡoʊɪŋ tuː spiːk tuː maɪ ˈmænɪdʒər/',
        grammar: [
          { word: 'I’m going to', role: 'future intention', note: 'Used for a plan you have already decided on — stronger than "I might".' },
          { word: 'hand two projects over', role: 'separable phrasal verb', note: '"Hand over" means transfer to someone else. The object can sit in the middle.' }
        ],
        keyExpressions: [{ phrase: 'hand something over', meaning: 'to transfer responsibility to another person' }],
        exampleSentences: ['I handed the file over to Sara.', 'I’m going to ask for help.'],
        pronunciationTips: ['Stress "speak" and "ask" — they carry the plan.']
      },
      { speaker: 'A', text: 'That’s a sensible move. Better than burning out.', translation_tr: 'Bu mantıklı bir hamle. Tükenmekten iyidir.', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Exactly. I’d rather set a limit now than collapse in a month.',
        altAccepted: ['I agree — better a difficult conversation than burnout.', 'Right. It’s wiser to draw the line early.'],
        translation_tr: 'Aynen. Bir ay sonra çökmektense şimdi sınır koymayı tercih ederim.',
        register: 'informal', ipa: '/aɪd ˈrɑːðər set ə ˈlɪmɪt naʊ ðæn kəˈlæps/',
        grammar: [
          { word: 'I’d rather ... than ...', role: 'preference structure', note: 'Both verbs stay in the base form: I’d rather walk than drive.' },
          { word: 'burning out', role: 'phrasal verb as gerund', note: '"Burn out" means to become exhausted by long-term stress.' }
        ],
        keyExpressions: [{ phrase: 'I’d rather X than Y', meaning: 'stating a clear preference between two options' }],
        exampleSentences: ['I’d rather stay in than go out.', 'He burned out after two years.'],
        pronunciationTips: ['"I’d rather" is often reduced to "I-drather" in fast speech.']
      }
    ]
  })
];
