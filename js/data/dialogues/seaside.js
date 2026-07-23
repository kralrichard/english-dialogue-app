import { createDialogue } from '../dialogueSchema.js?v=content107';

export const SEASIDE_DIALOGUES = [
  createDialogue({
    id: 'seaside-beach-walk-a1-01',
    locationId: 'seaside',
    scenarioId: 'beach-walk',
    title: 'A Walk Along the Beach',
    level: 'A1',
    length: 'short',
    goal: 'Make simple small talk with someone while walking on the beach.',
    tags: ['small-talk'],
    sceneType: 'seaside',
    characters: {
      A: { name: 'Elena', role: 'Fellow Walker', gender: 'female', accent: 'american', avatarPreset: 'assistant_f' },
      B: { name: 'You', role: 'Visitor', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'What a beautiful morning, isn’t it?', translation_tr: 'Ne güzel bir sabah, değil mi?', emotion: 'happy', register: 'informal' },
      {
        speaker: 'B', expected: 'Yes, it’s really nice today.',
        altAccepted: ['Yes, the weather is lovely.', 'It really is beautiful.'],
        translation_tr: 'Evet, bugün gerçekten güzel.',
        register: 'informal', ipa: '/jes ɪts ˈrɪəli naɪs təˈdeɪ/',
        grammar: [
          { word: 'it’s', role: 'contraction of "it is"', note: '"It" refers to the weather — English needs a subject even when talking about weather.' },
          { word: 'really', role: 'intensifier', note: 'Makes "nice" stronger, like "çok" in Turkish.' },
          { word: 'today', role: 'time expression', note: 'Usually goes at the end of the sentence in English.' }
        ],
        keyExpressions: [{ phrase: 'isn’t it?', meaning: 'a tag question inviting the other person to agree' }],
        exampleSentences: ['It’s really cold today.', 'Yes, it’s very quiet here.'],
        pronunciationTips: ['"it’s" is one syllable — don’t say "it is" unless you want emphasis.']
      },
      { speaker: 'A', text: 'Are you staying near here?', translation_tr: 'Buralarda mı kalıyorsunuz?', emotion: 'curious', register: 'informal' },
      {
        speaker: 'B', expected: 'Yes, I’m staying at a hotel nearby.',
        altAccepted: ['I’m at a hotel just up the road.', 'Yes, my hotel is very close.'],
        translation_tr: 'Evet, yakındaki bir otelde kalıyorum.',
        register: 'informal', ipa: '/jes aɪm ˈsteɪɪŋ æt ə hoʊˈtel ˈnɪrbaɪ/',
        grammar: [
          { word: 'I’m staying', role: 'present continuous', note: 'Used for a temporary situation happening around now — not a permanent home.' },
          { word: 'at a hotel', role: 'preposition + place', note: 'We say "at a hotel," not "in a hotel," when we mean staying there.' },
          { word: 'nearby', role: 'adverb', note: 'Means "close to here." It comes after the noun.' }
        ],
        keyExpressions: [{ phrase: 'staying at', meaning: 'temporarily living somewhere, e.g. as a tourist' }],
        exampleSentences: ['I’m staying at my friend’s house.', 'We’re staying here for three nights.'],
        pronunciationTips: ['Link "at a" together so it sounds like "a-ta".']
      },
      { speaker: 'A', text: 'Lovely. Enjoy your walk!', translation_tr: 'Ne güzel. İyi yürüyüşler!', emotion: 'friendly', register: 'informal' },
      {
        speaker: 'B', expected: 'Thank you, you too!',
        altAccepted: ['Thanks, you too!', 'Thank you, have a nice day!'],
        translation_tr: 'Teşekkürler, size de!',
        register: 'informal', ipa: '/θæŋk juː juː tuː/',
        grammar: [
          { word: 'you too', role: 'fixed reply', note: 'Short way of saying "I wish the same for you."' }
        ],
        keyExpressions: [{ phrase: 'you too', meaning: 'the same to you — a warm, natural reply to a good wish' }],
        exampleSentences: ['Have a good evening! — Thanks, you too!'],
        pronunciationTips: ['Say "you too" with rising warmth, not flat — it sounds friendlier.']
      }
    ]
  }),

  createDialogue({
    id: 'seaside-renting-equipment-a2-01',
    locationId: 'seaside',
    scenarioId: 'renting-equipment',
    title: 'Renting an Umbrella and Two Loungers',
    level: 'A2',
    length: 'short',
    goal: 'Rent beach equipment and ask how much it costs.',
    tags: ['booking', 'ordering'],
    sceneType: 'seaside',
    characters: {
      A: { name: 'Deniz', role: 'Beach Attendant', gender: 'male', accent: 'international', avatarPreset: 'clerk_m' },
      B: { name: 'You', role: 'Beach Visitor', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Good morning! Do you need an umbrella today?', translation_tr: 'Günaydın! Bugün şemsiye ister misiniz?', emotion: 'friendly', register: 'neutral' },
      {
        speaker: 'B', expected: 'Yes, I’d like an umbrella and two loungers, please.',
        altAccepted: ['Can I rent an umbrella and two loungers?', 'I’d like to rent an umbrella and two sunbeds, please.'],
        translation_tr: 'Evet, bir şemsiye ve iki şezlong istiyorum, lütfen.',
        register: 'neutral', ipa: '/aɪd laɪk ən ʌmˈbrelə ænd tuː ˈlaʊndʒərz pliːz/',
        grammar: [
          { word: 'I’d like', role: 'polite request (would like)', note: 'More polite than "I want" — the standard way to ask for something in a shop.' },
          { word: 'an', role: 'indefinite article', note: 'Becomes "an" before a vowel sound: an umbrella.' },
          { word: 'two loungers', role: 'plural noun', note: 'After a number greater than one, the noun takes -s.' }
        ],
        keyExpressions: [{ phrase: 'I’d like...', meaning: 'a polite way to order or request something' }],
        exampleSentences: ['I’d like a table for two, please.', 'I’d like two tickets, please.'],
        pronunciationTips: ['"I’d" is one quick sound /aɪd/ — don’t separate it into "I would".']
      },
      { speaker: 'A', text: 'Of course. That’s twenty euros for the whole day.', translation_tr: 'Tabii ki. Tüm gün için yirmi euro.', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'Does that include the loungers?',
        altAccepted: ['Is that for everything?', 'Does the price include both loungers?'],
        translation_tr: 'Buna şezlonglar dahil mi?',
        register: 'neutral', ipa: '/dʌz ðæt ɪnˈkluːd ðə ˈlaʊndʒərz/',
        grammar: [
          { word: 'Does', role: 'question auxiliary', note: 'Present simple questions with "that/it/he/she" start with "Does".' },
          { word: 'include', role: 'base verb', note: 'After "does," the verb stays in its base form — not "includes".' }
        ],
        keyExpressions: [{ phrase: 'Does that include...?', meaning: 'asking whether something is already part of the price' }],
        exampleSentences: ['Does that include breakfast?', 'Does the price include tax?'],
        pronunciationTips: ['Stress "include" on the second syllable: in-CLUDE.']
      },
      { speaker: 'A', text: 'Yes, everything is included. Pay at the end of the day.', translation_tr: 'Evet, her şey dahil. Ödemeyi gün sonunda yaparsınız.', emotion: 'friendly', register: 'neutral' },
      {
        speaker: 'B', expected: 'Great, that works for me. Thank you.',
        altAccepted: ['Perfect, thanks a lot.', 'That’s fine, thank you.'],
        translation_tr: 'Harika, benim için uygun. Teşekkürler.',
        register: 'informal', ipa: '/ɡreɪt ðæt wɜːrks fɔːr miː/',
        grammar: [
          { word: 'that works for me', role: 'fixed expression', note: 'Means "that is convenient / acceptable for me."' }
        ],
        keyExpressions: [{ phrase: 'that works for me', meaning: 'that suits me, I agree to that arrangement' }],
        exampleSentences: ['Friday at six? That works for me.'],
        pronunciationTips: ['Keep "works for" smooth — the "s" links into "for".']
      }
    ]
  }),

  createDialogue({
    id: 'seaside-lifeguard-safety-a2-01',
    locationId: 'seaside',
    scenarioId: 'lifeguard-safety',
    title: 'Asking the Lifeguard About Swimming',
    level: 'A2',
    length: 'short',
    goal: 'Ask a lifeguard whether it is safe to swim and understand the answer.',
    tags: ['advice', 'problem-solving'],
    sceneType: 'seaside',
    characters: {
      A: { name: 'Ryan', role: 'Lifeguard', gender: 'male', accent: 'australian', avatarPreset: 'guest_m' },
      B: { name: 'You', role: 'Swimmer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Morning! Just so you know, the red flag is up today.', translation_tr: 'Günaydın! Bilginiz olsun, bugün kırmızı bayrak çekili.', emotion: 'concerned', register: 'informal' },
      {
        speaker: 'B', expected: 'What does the red flag mean?',
        altAccepted: ['Sorry, what does that mean?', 'Could you explain what the red flag means?'],
        translation_tr: 'Kırmızı bayrak ne anlama geliyor?',
        register: 'neutral', ipa: '/wɒt dʌz ðə red flæɡ miːn/',
        grammar: [
          { word: 'What does ... mean?', role: 'question pattern', note: 'The standard way to ask for the meaning of something. The verb stays as "mean".' }
        ],
        keyExpressions: [{ phrase: 'What does ... mean?', meaning: 'asking someone to explain a word, sign or symbol' }],
        exampleSentences: ['What does this sign mean?', 'What does "delayed" mean?'],
        pronunciationTips: ['"does the" often blends into "duh-thuh" in fast speech.']
      },
      { speaker: 'A', text: 'It means the water is dangerous — strong currents today.', translation_tr: 'Suyun tehlikeli olduğu anlamına geliyor — bugün akıntı çok güçlü.', emotion: 'formal', register: 'neutral' },
      {
        speaker: 'B', expected: 'So I shouldn’t swim here today?',
        altAccepted: ['Does that mean I can’t swim?', 'So swimming isn’t allowed right now?'],
        translation_tr: 'Yani bugün burada yüzmemeliyim, öyle mi?',
        register: 'neutral', ipa: '/soʊ aɪ ˈʃʊdənt swɪm hɪər təˈdeɪ/',
        grammar: [
          { word: 'shouldn’t', role: 'modal (should not)', note: 'Used for advice and warnings — softer than "can’t," which means it is forbidden.' },
          { word: 'So', role: 'discourse marker', note: 'Starts a sentence where you check that you understood correctly.' }
        ],
        keyExpressions: [{ phrase: 'So ...?', meaning: 'checking your understanding of what someone just said' }],
        exampleSentences: ['So the shop is closed tomorrow?', 'So I should wait here?'],
        pronunciationTips: ['Let your voice rise at the end — that turns the statement into a question.']
      },
      { speaker: 'A', text: 'That’s right. Stay in the shallow area near the flags.', translation_tr: 'Doğru. Bayrakların yanındaki sığ alanda kalın.', emotion: 'friendly', register: 'neutral' },
      {
        speaker: 'B', expected: 'Okay, thanks for letting me know.',
        altAccepted: ['Thanks for the warning.', 'Understood, thank you.'],
        translation_tr: 'Tamam, haber verdiğiniz için teşekkürler.',
        register: 'informal', ipa: '/oʊˈkeɪ θæŋks fɔːr ˈletɪŋ miː noʊ/',
        grammar: [
          { word: 'for letting me know', role: 'preposition + gerund', note: 'After "thanks for," the verb takes -ing.' }
        ],
        keyExpressions: [{ phrase: 'thanks for letting me know', meaning: 'thank you for telling me / warning me' }],
        exampleSentences: ['Thanks for letting me know about the delay.'],
        pronunciationTips: ['"letting me" sounds like "let-ting-me" — keep it light and quick.']
      }
    ]
  }),

  createDialogue({
    id: 'seaside-ice-cream-stand-a1-01',
    locationId: 'seaside',
    scenarioId: 'ice-cream-stand',
    title: 'Buying an Ice Cream',
    level: 'A1',
    length: 'short',
    goal: 'Buy an ice cream and pay for it.',
    tags: ['ordering'],
    sceneType: 'seaside',
    characters: {
      A: { name: 'Sofia', role: 'Ice Cream Vendor', gender: 'female', accent: 'international', avatarPreset: 'waiter_f' },
      B: { name: 'You', role: 'Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Hi! What flavour would you like?', translation_tr: 'Merhaba! Hangi aromayı istersiniz?', emotion: 'happy', register: 'informal' },
      {
        speaker: 'B', expected: 'Can I have one chocolate, please?',
        altAccepted: ['I’d like a chocolate one, please.', 'One chocolate, please.'],
        translation_tr: 'Bir çikolatalı alabilir miyim, lütfen?',
        register: 'informal', ipa: '/kæn aɪ hæv wʌn ˈtʃɔːklət pliːz/',
        grammar: [
          { word: 'Can I have', role: 'polite request', note: 'The simplest, most common way to order in a shop or stand.' },
          { word: 'one', role: 'number as pronoun', note: 'Here "one" replaces "one ice cream" — the noun is understood.' }
        ],
        keyExpressions: [{ phrase: 'Can I have...', meaning: 'a friendly, everyday way to order' }],
        exampleSentences: ['Can I have one coffee, please?', 'Can I have two, please?'],
        pronunciationTips: ['"chocolate" has two syllables in natural speech: CHOC-lit.']
      },
      { speaker: 'A', text: 'Cone or cup?', translation_tr: 'Külah mı, kâse mi?', emotion: 'neutral', register: 'informal' },
      {
        speaker: 'B', expected: 'A cone, please.',
        altAccepted: ['In a cone, please.', 'A cup, please.'],
        translation_tr: 'Külah, lütfen.',
        register: 'informal', ipa: '/ə koʊn pliːz/',
        grammar: [
          { word: 'A cone', role: 'short answer', note: 'English often answers a choice question with just the chosen item — a full sentence is not needed.' }
        ],
        keyExpressions: [{ phrase: 'Cone or cup?', meaning: 'a common either/or question at an ice cream stand' }],
        exampleSentences: ['For here or to go? — To go, please.'],
        pronunciationTips: ['"cone" rhymes with "phone" — a long /oʊ/ sound.']
      },
      { speaker: 'A', text: 'That’s three euros fifty.', translation_tr: 'Üç euro elli sent.', emotion: 'neutral', register: 'informal' },
      {
        speaker: 'B', expected: 'Here you are. Thank you!',
        altAccepted: ['Here you go, thanks!', 'Here’s five euros.'],
        translation_tr: 'Buyurun. Teşekkürler!',
        register: 'informal', ipa: '/hɪər juː ɑːr θæŋk juː/',
        grammar: [
          { word: 'Here you are', role: 'fixed expression', note: 'Said while handing something to someone — same use as "Here you go."' }
        ],
        keyExpressions: [{ phrase: 'Here you are', meaning: 'said when giving money or an object to someone' }],
        exampleSentences: ['Here you are — keep the change.'],
        pronunciationTips: ['Say it as one smooth phrase, stressing "here".']
      }
    ]
  })
];
