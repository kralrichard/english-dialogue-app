import { createDialogue } from '../dialogueSchema.js?v=content108';

export const COMPLAINT_DIALOGUES = [
  createDialogue({
    id: 'complaint-returning-product-a2-01',
    locationId: 'complaint',
    scenarioId: 'returning-product',
    title: 'Returning a Faulty Product',
    level: 'A2',
    length: 'short',
    goal: 'Return something that does not work and ask for a refund.',
    tags: ['complaint', 'problem-solving'],
    sceneType: 'retail',
    characters: {
      A: { name: 'Ben', role: 'Customer Service Assistant', gender: 'male', accent: 'american', avatarPreset: 'assistant_m' },
      B: { name: 'You', role: 'Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Hi, how can I help you today?', translation_tr: 'Merhaba, bugün nasıl yardımcı olabilirim?', emotion: 'friendly', register: 'neutral' },
      {
        speaker: 'B', expected: 'I bought these headphones last week and they don’t work.',
        altAccepted: ['I’d like to return these headphones — they’re faulty.', 'These headphones stopped working after two days.'],
        translation_tr: 'Bu kulaklıkları geçen hafta aldım ve çalışmıyorlar.',
        register: 'neutral', ipa: '/aɪ bɔːt ðiːz ˈhedfoʊnz lɑːst wiːk ænd ðeɪ doʊnt wɜːrk/',
        grammar: [
          { word: 'bought', role: 'past simple of "buy"', note: 'Irregular verb: buy → bought.' },
          { word: 'they don’t work', role: 'present simple negative', note: '"Headphones" is plural, so the verb takes "don’t", not "doesn’t".' },
          { word: 'these', role: 'demonstrative, plural', note: 'Use "these" for plural items near you; "this" is singular.' }
        ],
        keyExpressions: [{ phrase: 'it doesn’t work', meaning: 'the standard way to report a fault' }],
        exampleSentences: ['I bought this yesterday.', 'The remote doesn’t work.'],
        pronunciationTips: ['"bought" rhymes with "thought" — /bɔːt/.']
      },
      { speaker: 'A', text: 'I’m sorry about that. Do you have the receipt?', translation_tr: 'Bunun için üzgünüm. Fişiniz var mı?', emotion: 'apologetic', register: 'neutral' },
      {
        speaker: 'B', expected: 'Yes, here it is. Could I get a refund, please?',
        altAccepted: ['Here you are. I’d like my money back.', 'Yes — can I have a refund or an exchange?'],
        translation_tr: 'Evet, buyurun. Para iadesi alabilir miyim, lütfen?',
        register: 'neutral', ipa: '/kʊd aɪ ɡet ə ˈriːfʌnd pliːz/',
        grammar: [
          { word: 'refund', role: 'noun', note: 'Money returned to you. As a noun the stress is on the first syllable: RE-fund.' },
          { word: 'Could I get', role: 'polite request', note: 'A soft, non-aggressive way to state what you want — effective in complaints.' }
        ],
        keyExpressions: [{ phrase: 'get a refund', meaning: 'to have your money returned' }],
        exampleSentences: ['Can I get a refund?', 'I’d prefer an exchange.'],
        pronunciationTips: ['Noun REfund vs verb reFUND — the stress moves.']
      },
      { speaker: 'A', text: 'Of course. It’ll go back on your card within three days.', translation_tr: 'Tabii ki. Üç gün içinde kartınıza geri yatacak.', emotion: 'neutral', register: 'neutral' },
      {
        speaker: 'B', expected: 'That’s fine. Thanks for dealing with it so quickly.',
        altAccepted: ['Great, thank you for your help.', 'Perfect — I appreciate it.'],
        translation_tr: 'Bu iyi. Bu kadar çabuk hallettiğiniz için teşekkürler.',
        register: 'neutral', ipa: '/θæŋks fɔːr ˈdiːlɪŋ wɪð ɪt soʊ ˈkwɪkli/',
        grammar: [
          { word: 'dealing with', role: 'phrasal verb + gerund', note: '"Deal with" means to handle a problem. After "for", use the -ing form.' }
        ],
        keyExpressions: [{ phrase: 'deal with something', meaning: 'to handle or take care of a problem' }],
        exampleSentences: ['I’ll deal with it tomorrow.', 'Thanks for dealing with the booking.'],
        pronunciationTips: ['Ending politely keeps goodwill even after a complaint.']
      }
    ]
  }),

  createDialogue({
    id: 'complaint-service-complaint-b2-01',
    locationId: 'complaint',
    scenarioId: 'service-complaint',
    title: 'Complaining About Poor Service',
    level: 'B2',
    length: 'medium',
    goal: 'Make a firm but professional complaint and ask for a concrete remedy.',
    tags: ['complaint', 'negotiation'],
    sceneType: 'retail',
    characters: {
      A: { name: 'Ms Okoro', role: 'Duty Manager', gender: 'female', accent: 'british', avatarPreset: 'manager_f' },
      B: { name: 'You', role: 'Customer', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'I understand you asked to speak to a manager. What seems to be the problem?', translation_tr: 'Bir müdürle görüşmek istediğinizi anlıyorum. Sorun nedir?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'I’ve been waiting for an hour, and nobody has explained the delay.',
        altAccepted: ['I have waited an hour without any explanation.', 'Nobody has told me anything, and it’s been an hour.'],
        translation_tr: 'Bir saattir bekliyorum ve kimse gecikmeyi açıklamadı.',
        register: 'formal', ipa: '/aɪv bɪn ˈweɪtɪŋ fɔːr ən ˈaʊər ænd ˈnoʊbədi hæz ɪkˈspleɪnd ðə dɪˈleɪ/',
        grammar: [
          { word: 'I’ve been waiting', role: 'present perfect continuous', note: 'Stresses the ongoing duration — much stronger in a complaint than "I waited".' },
          { word: 'nobody has explained', role: 'present perfect with negative subject', note: '"Nobody" is singular, so the verb is "has", not "have".' }
        ],
        keyExpressions: [{ phrase: 'nobody has explained', meaning: 'stating a failure without attacking one person' }],
        exampleSentences: ['I’ve been trying to call all morning.', 'Nobody has answered my email.'],
        pronunciationTips: ['Stay calm and even-toned; a steady voice sounds more serious than a raised one.']
      },
      { speaker: 'A', text: 'I do apologise. We’re short-staffed this afternoon.', translation_tr: 'Gerçekten özür dilerim. Bu öğleden sonra personelimiz eksik.', emotion: 'apologetic', register: 'formal' },
      {
        speaker: 'B', expected: 'I appreciate the apology, but that doesn’t solve my problem.',
        altAccepted: ['Thank you, though I still need this resolved today.', 'I understand, but I’d like a practical solution.'],
        translation_tr: 'Özrünüz için teşekkürler ama bu sorunumu çözmüyor.',
        register: 'formal', ipa: '/aɪ əˈpriːʃieɪt ðə əˈpɒlədʒi bʌt ðæt ˈdʌzənt sɒlv maɪ ˈprɒbləm/',
        grammar: [
          { word: 'I appreciate ..., but ...', role: 'concession structure', note: 'Acknowledge the other side first, then press your point — the core of professional complaining.' },
          { word: 'doesn’t solve', role: 'present simple negative', note: 'States a plain fact about the current situation, not an emotion.' }
        ],
        keyExpressions: [{ phrase: 'that doesn’t solve my problem', meaning: 'politely refusing an apology that changes nothing' }],
        exampleSentences: ['I appreciate the offer, but it’s not enough.', 'That doesn’t answer my question.'],
        pronunciationTips: ['Pause after "but" — it gives the second half real weight.']
      },
      { speaker: 'A', text: 'You’re right. What would you like us to do?', translation_tr: 'Haklısınız. Ne yapmamızı istersiniz?', emotion: 'concerned', register: 'formal' },
      {
        speaker: 'B', expected: 'I’d like the delivery fee refunded and the item sent by express post.',
        altAccepted: ['Please refund the shipping and send it express.', 'A refund of the delivery charge and faster shipping would resolve it.'],
        translation_tr: 'Kargo ücretinin iade edilmesini ve ürünün hızlı postayla gönderilmesini istiyorum.',
        register: 'formal', ipa: '/aɪd laɪk ðə dɪˈlɪvəri fiː rɪˈfʌndɪd/',
        grammar: [
          { word: 'the fee refunded', role: 'causative structure', note: '"I’d like + object + past participle" means you want something done — without naming who does it.' },
          { word: 'sent by express post', role: 'passive with "by"', note: 'The passive keeps the focus on the item and the method, not the worker.' }
        ],
        keyExpressions: [{ phrase: 'I’d like X refunded', meaning: 'a precise, actionable request — far stronger than vague dissatisfaction' }],
        exampleSentences: ['I’d like the charge removed.', 'I want this replaced, not repaired.'],
        pronunciationTips: ['Say your two requests clearly and separately, with a pause between them.']
      },
      { speaker: 'A', text: 'That’s entirely reasonable. I’ll arrange both now.', translation_tr: 'Bu tamamen makul. İkisini de şimdi ayarlayacağım.', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Thank you. Could you email me confirmation once it’s done?',
        altAccepted: ['Thanks — please send written confirmation.', 'I appreciate it. May I have that in writing?'],
        translation_tr: 'Teşekkürler. Tamamlanınca bana e-posta ile onay gönderebilir misiniz?',
        register: 'formal', ipa: '/kʊd juː ˈiːmeɪl miː ˌkɒnfərˈmeɪʃən wʌns ɪts dʌn/',
        grammar: [
          { word: 'once it’s done', role: 'time clause', note: '"Once" means "as soon as". Present tense is used even though it refers to the future.' },
          { word: 'email me confirmation', role: 'verb + two objects', note: 'English allows "email someone something" without "to".' }
        ],
        keyExpressions: [{ phrase: 'get it in writing', meaning: 'obtain written proof of an agreement' }],
        exampleSentences: ['Could you send me confirmation?', 'Call me once you arrive.'],
        pronunciationTips: ['"confirmation" is stressed on the third syllable: con-fer-MAY-shun.']
      }
    ]
  })
];
