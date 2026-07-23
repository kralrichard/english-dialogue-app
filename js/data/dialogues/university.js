import { createDialogue } from '../dialogueSchema.js?v=content109';

export const UNIVERSITY_DIALOGUES = [
  createDialogue({
    id: 'university-course-registration-b1-01',
    locationId: 'university',
    scenarioId: 'course-registration',
    title: 'Registering for a Course',
    level: 'B1',
    length: 'medium',
    goal: 'Register for a course and solve a timetable clash with the office.',
    tags: ['problem-solving', 'booking'],
    sceneType: 'school',
    characters: {
      A: { name: 'Fiona', role: 'Registry Officer', gender: 'female', accent: 'scottish', avatarPreset: 'agent_f2' },
      B: { name: 'You', role: 'Student', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Hello. Are you here to register for this semester?', translation_tr: 'Merhaba. Bu dönem için kayıt yaptırmaya mı geldiniz?', emotion: 'friendly', register: 'neutral' },
      {
        speaker: 'B', expected: 'Yes, I’d like to sign up for the economics module.',
        altAccepted: ['Yes, I want to register for the economics course.', 'That’s right — I’m hoping to take economics.'],
        translation_tr: 'Evet, ekonomi dersine kaydolmak istiyorum.',
        register: 'neutral', ipa: '/aɪd laɪk tuː saɪn ʌp fɔːr ðə ˌiːkəˈnɒmɪks ˈmɒdʒuːl/',
        grammar: [
          { word: 'sign up for', role: 'phrasal verb', note: 'Means "register for" — always followed by "for" before the course name.' },
          { word: 'module', role: 'noun', note: 'In British universities a "module" is one course unit within a degree.' }
        ],
        keyExpressions: [{ phrase: 'sign up for', meaning: 'to put your name down for a course, class or event' }],
        exampleSentences: ['I signed up for a Spanish class.', 'She signed up for the marathon.'],
        pronunciationTips: ['"economics" can be EE-co-nomics or EH-co-nomics — both are correct.']
      },
      { speaker: 'A', text: 'Let me check… I’m afraid that clashes with your statistics seminar.', translation_tr: 'Bir bakayım… Maalesef bu, istatistik seminerinizle çakışıyor.', emotion: 'concerned', register: 'neutral' },
      {
        speaker: 'B', expected: 'Is there another group I could join instead?',
        altAccepted: ['Are there any other time slots available?', 'Could I take a different session?'],
        translation_tr: 'Onun yerine katılabileceğim başka bir grup var mı?',
        register: 'neutral', ipa: '/ɪz ðeər əˈnʌðər ɡruːp aɪ kʊd dʒɔɪn ɪnˈsted/',
        grammar: [
          { word: 'Is there', role: 'existential question', note: 'Used to ask whether something exists or is available.' },
          { word: 'I could join', role: 'relative clause with modal', note: 'The word "that/which" is dropped: another group (that) I could join.' },
          { word: 'instead', role: 'adverb', note: 'At the end of the sentence it means "in place of the first option".' }
        ],
        keyExpressions: [{ phrase: 'clash with', meaning: 'to happen at the same time as something else, causing a conflict' }],
        exampleSentences: ['Is there another flight I could take?', 'The meeting clashes with my class.'],
        pronunciationTips: ['"instead" is stressed on the second syllable: in-STED.']
      },
      { speaker: 'A', text: 'There’s a Thursday group at four. Would that suit you better?', translation_tr: 'Perşembe saat dörtte bir grup var. Bu size daha uygun olur mu?', emotion: 'friendly', register: 'neutral' },
      {
        speaker: 'B', expected: 'That works perfectly. Could you put me down for that one?',
        altAccepted: ['Thursday is fine — please register me for it.', 'Yes, that suits me. Could you add me to that group?'],
        translation_tr: 'Bu tam olarak uyuyor. Beni ona kaydedebilir misiniz?',
        register: 'neutral', ipa: '/ðæt wɜːrks ˈpɜːrfɪktli kʊd juː pʊt miː daʊn fɔːr ðæt wʌn/',
        grammar: [
          { word: 'put me down for', role: 'phrasal verb', note: 'Means "add my name to a list" — very common in administrative contexts.' },
          { word: 'that one', role: 'pronoun', note: '"One" avoids repeating "group" — natural English avoids repetition.' }
        ],
        keyExpressions: [{ phrase: 'put me down for', meaning: 'register or reserve a place for me' }],
        exampleSentences: ['Put me down for two tickets.', 'Can you put us down for Saturday?'],
        pronunciationTips: ['Link "put me" so the t is barely heard: "puh-mee".']
      },
      { speaker: 'A', text: 'Done. You’ll get a confirmation email within an hour.', translation_tr: 'Tamamdır. Bir saat içinde onay e-postası alacaksınız.', emotion: 'happy', register: 'neutral' },
      {
        speaker: 'B', expected: 'Brilliant, thanks for sorting that out so quickly.',
        altAccepted: ['Great, thank you for your help.', 'Perfect — thanks for fixing it so fast.'],
        translation_tr: 'Harika, bu kadar çabuk hallettiğiniz için teşekkürler.',
        register: 'informal', ipa: '/ˈbrɪliənt θæŋks fɔːr ˈsɔːrtɪŋ ðæt aʊt/',
        grammar: [
          { word: 'sorting that out', role: 'phrasal verb + gerund', note: '"Sort out" means to solve or organise a problem. After "for," use the -ing form.' },
          { word: 'Brilliant', role: 'exclamation (British)', note: 'In British English it simply means "great" — nothing to do with intelligence here.' }
        ],
        keyExpressions: [{ phrase: 'sort something out', meaning: 'to deal with a problem and fix it' }],
        exampleSentences: ['Thanks for sorting out the booking.', 'We need to sort this out today.'],
        pronunciationTips: ['"Brilliant" is often reduced to two syllables: BRIL-yunt.']
      }
    ]
  }),

  createDialogue({
    id: 'university-professor-chat-b2-01',
    locationId: 'university',
    scenarioId: 'professor-chat',
    title: 'Discussing an Essay with a Professor',
    level: 'B2',
    length: 'medium',
    goal: 'Discuss feedback on your work and ask for an extension politely.',
    tags: ['advice', 'negotiation'],
    sceneType: 'school',
    characters: {
      A: { name: 'Prof. Ellis', role: 'Professor', gender: 'male', accent: 'british', avatarPreset: 'professor_m' },
      B: { name: 'You', role: 'Student', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Your argument is strong, but the second section lacks evidence.', translation_tr: 'Argümanınız güçlü, ancak ikinci bölümde kanıt eksik.', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'I see what you mean. Should I add more case studies?',
        altAccepted: ['That makes sense. Would more examples help?', 'I understand. Do you think I need additional sources?'],
        translation_tr: 'Ne demek istediğinizi anlıyorum. Daha fazla vaka çalışması eklemeli miyim?',
        register: 'formal', ipa: '/aɪ siː wɒt juː miːn ʃʊd aɪ æd mɔːr keɪs ˈstʌdiz/',
        grammar: [
          { word: 'I see what you mean', role: 'fixed expression', note: 'Shows you have understood and accepted criticism gracefully.' },
          { word: 'Should I', role: 'modal question for advice', note: 'Asks for a recommendation, not permission.' }
        ],
        keyExpressions: [{ phrase: 'I see what you mean', meaning: 'I understand your point — a respectful way to receive feedback' }],
        exampleSentences: ['I see what you mean about the ending.', 'Should I rewrite the introduction?'],
        pronunciationTips: ['Keep "what you" linked — it sounds like "wa-chu" in natural speech.']
      },
      { speaker: 'A', text: 'Two or three well-chosen ones would be far better than a long list.', translation_tr: 'İyi seçilmiş iki üç tanesi, uzun bir listeden çok daha iyi olur.', emotion: 'thinking', register: 'formal' },
      {
        speaker: 'B', expected: 'Would it be possible to have a few extra days to revise it?',
        altAccepted: ['Could I possibly get an extension?', 'Would you consider giving me a short extension?'],
        translation_tr: 'Düzeltmek için birkaç ek gün almam mümkün olur mu?',
        register: 'formal', ipa: '/wʊd ɪt biː ˈpɒsəbəl tuː hæv ə fjuː ˈekstrə deɪz/',
        grammar: [
          { word: 'Would it be possible to', role: 'very polite request frame', note: 'Distances the request from the person, making it easy to refuse — highly appropriate with a professor.' },
          { word: 'a few extra days', role: 'quantifier + noun', note: '"A few" means a small but sufficient number, with a positive tone.' }
        ],
        keyExpressions: [{ phrase: 'Would it be possible to...?', meaning: 'the most polite way to make a request in formal English' }],
        exampleSentences: ['Would it be possible to reschedule?', 'Would it be possible to see the notes?'],
        pronunciationTips: ['Keep your intonation gentle and rising — a flat tone can sound demanding.']
      },
      { speaker: 'A', text: 'I can give you until Monday, but no later — the marks are due that week.', translation_tr: 'Size pazartesiye kadar süre verebilirim ama daha fazlası olmaz — notlar o hafta teslim edilecek.', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'That’s more than enough. I’ll have it with you by Monday morning.',
        altAccepted: ['Monday works — I’ll send it before then.', 'That’s perfect. You’ll have it Monday at the latest.'],
        translation_tr: 'Bu fazlasıyla yeterli. Pazartesi sabahına kadar size ulaştıracağım.',
        register: 'formal', ipa: '/aɪl hæv ɪt wɪð juː baɪ ˈmʌndeɪ ˈmɔːrnɪŋ/',
        grammar: [
          { word: 'I’ll have it with you', role: 'idiomatic future', note: 'A professional way to say "I will deliver it to you".' },
          { word: 'by Monday morning', role: 'deadline preposition', note: '"By" means "at or before" that time — different from "until", which means continuously up to it.' }
        ],
        keyExpressions: [{ phrase: 'by Monday', meaning: 'no later than Monday' }],
        exampleSentences: ['I’ll have the report with you by Friday.', 'Please reply by noon.'],
        pronunciationTips: ['Stress "Monday" clearly — the deadline is the key information.']
      }
    ]
  }),

  createDialogue({
    id: 'university-campus-life-b1-01',
    locationId: 'university',
    scenarioId: 'campus-life',
    title: 'Finding Your Way Around Campus',
    level: 'B1',
    length: 'short',
    goal: 'Ask another student about campus facilities and student life.',
    tags: ['small-talk', 'directions'],
    sceneType: 'school',
    characters: {
      A: { name: 'Leo', role: 'Second-year Student', gender: 'male', accent: 'american', avatarPreset: 'assistant_m' },
      B: { name: 'You', role: 'New Student', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'You look a bit lost — first week?', translation_tr: 'Biraz kaybolmuş görünüyorsun — ilk haftan mı?', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Is it that obvious? I’m still figuring out where everything is.',
        altAccepted: ['Yes, I started on Monday and I’m still lost.', 'It shows, doesn’t it? I can’t find anything yet.'],
        translation_tr: 'O kadar belli mi? Hâlâ her şeyin nerede olduğunu çözmeye çalışıyorum.',
        register: 'informal', ipa: '/aɪm stɪl ˈfɪɡərɪŋ aʊt weər ˈevriθɪŋ ɪz/',
        grammar: [
          { word: 'figuring out', role: 'phrasal verb, continuous', note: '"Figure out" means to work something out gradually — the -ing shows it is still in progress.' },
          { word: 'where everything is', role: 'indirect question', note: 'In indirect questions the word order stays normal: "where everything IS", not "where is everything".' }
        ],
        keyExpressions: [{ phrase: 'figure out', meaning: 'to understand or discover something after some effort' }],
        exampleSentences: ['I’m still figuring out how it works.', 'I can’t figure out this password.'],
        pronunciationTips: ['"figuring out" links into "figuring-gout" in relaxed speech.']
      },
      { speaker: 'A', text: 'It gets easier fast. The library’s behind the science block, by the way.', translation_tr: 'Çabuk alışırsın. Bu arada kütüphane fen bloğunun arkasında.', emotion: 'happy', register: 'informal' },
      {
        speaker: 'B', expected: 'Good to know. Is there anywhere cheap to eat on campus?',
        altAccepted: ['Thanks. Where do students usually eat around here?', 'That helps. Any decent cheap food nearby?'],
        translation_tr: 'Bilmek güzel. Kampüste ucuz yemek yenecek bir yer var mı?',
        register: 'informal', ipa: '/ɪz ðeər ˈeniweər tʃiːp tuː iːt ɒn ˈkæmpəs/',
        grammar: [
          { word: 'anywhere cheap', role: 'pronoun + adjective', note: 'With words like anywhere/something, the adjective comes AFTER: somewhere quiet, anything new.' },
          { word: 'to eat', role: 'infinitive of purpose', note: 'Explains what the place is for: a place to eat, a book to read.' }
        ],
        keyExpressions: [{ phrase: 'Good to know', meaning: 'a short, natural way to acknowledge useful information' }],
        exampleSentences: ['Is there anywhere quiet to study?', 'I need something warm to wear.'],
        pronunciationTips: ['"campus" has a clear first syllable: CAM-pus.']
      },
      { speaker: 'A', text: 'The union café does a decent lunch for four pounds.', translation_tr: 'Öğrenci birliği kafesi dört sterline gayet iyi bir öğle yemeği veriyor.', emotion: 'neutral', register: 'informal' },
      {
        speaker: 'B', expected: 'I’ll check it out. Thanks for taking the time.',
        altAccepted: ['Sounds good — I’ll give it a try.', 'Great, thanks a lot for the help.'],
        translation_tr: 'Bir bakacağım. Vakit ayırdığın için teşekkürler.',
        register: 'informal', ipa: '/aɪl tʃek ɪt aʊt θæŋks fɔːr ˈteɪkɪŋ ðə taɪm/',
        grammar: [
          { word: 'check it out', role: 'phrasal verb', note: 'Informal: to go and look at something to see if it is good.' },
          { word: 'for taking the time', role: 'preposition + gerund', note: 'Thanks for + -ing is the standard structure for thanking someone for an action.' }
        ],
        keyExpressions: [{ phrase: 'check it out', meaning: 'go and see it for yourself' }],
        exampleSentences: ['You should check out that new café.', 'Thanks for taking the time to explain.'],
        pronunciationTips: ['"check it out" runs together: "che-ki-dout".']
      }
    ]
  })
];
