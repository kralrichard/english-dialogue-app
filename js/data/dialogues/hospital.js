import { createDialogue } from '../dialogueSchema.js?v=content108';

export const HOSPITAL_DIALOGUES = [
  createDialogue({
    id: 'hospital-doctor-consult-a2-01',
    locationId: 'hospital',
    scenarioId: 'doctor-consult',
    title: 'Talking to a Doctor',
    level: 'A2',
    variant: 1,
    length: 'medium',
    goal: 'Describe how you feel and understand the doctor’s advice.',
    tags: ['problem-solving', 'advice'],
    sceneType: 'hospital',
    characters: {
      A: { name: 'Dr. Bennett', role: 'Doctor', gender: 'female', accent: 'british', avatarPreset: 'doctor_f' },
      B: { name: 'Patient', role: 'Patient', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Hello, please have a seat. What seems to be the problem?', translation_tr: 'Merhaba, lütfen oturun. Sorun ne görünüyor?', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'I’ve had a sore throat and a fever since yesterday.',
        altAccepted: ['I have a sore throat and a fever since yesterday.', 'Since yesterday I’ve had a fever and a sore throat.'],
        translation_tr: 'Dünden beri boğazım ağrıyor ve ateşim var.',
        register: 'neutral', ipa: '/aɪv hæd ə sɔːr θroʊt ænd ə ˈfiːvər sɪns ˈjɛstərdeɪ/',
        grammar: [
          { word: 'I’ve had', role: 'present perfect', note: 'Describes a symptom that started in the past and continues now.' },
          { word: 'a sore throat', role: 'object', note: 'A common symptom expression — "sore" means painful.' },
          { word: 'since', role: 'preposition of time', note: 'Marks the starting point of a continuing situation.' }
        ],
        keyExpressions: [{ phrase: 'I’ve had ... since ...', meaning: 'describes a symptom that began at a point in the past and continues' }],
        exampleSentences: ['I’ve had a headache since this morning.'],
        pronunciationTips: ['Don’t drop the "v" sound in "I’ve" — it should be clearly heard, not "I had."']
      },
      { speaker: 'A', text: 'I see. Do you have any other symptoms, like a cough?', translation_tr: 'Anlıyorum. Öksürük gibi başka belirtileriniz var mı?', emotion: 'thinking', register: 'formal' },
      {
        speaker: 'B', expected: 'Yes, a little bit, especially at night.',
        altAccepted: ['Yes, a slight cough, mostly at night.'],
        translation_tr: 'Evet, biraz, özellikle geceleri.',
        register: 'informal', ipa: '/jɛs ə ˈlɪtəl bɪt ɪˈspɛʃəli æt naɪt/',
        grammar: [
          { word: 'a little bit', role: 'adverbial phrase', note: 'Softens the degree of the symptom — "a small amount."' },
          { word: 'especially', role: 'adverb', note: 'Highlights when the symptom is worst.' }
        ],
        keyExpressions: [{ phrase: 'a little bit', meaning: 'a small amount' }],
        exampleSentences: ['I’m a little bit tired today.'],
        pronunciationTips: ['Link "a little bit" together smoothly, almost like one word.']
      },
      { speaker: 'A', text: 'Okay. It looks like a common cold. Rest, drink plenty of water, and take paracetamol if needed.', translation_tr: 'Tamam. Bu sıradan bir soğuk algınlığı gibi görünüyor. Dinlenin, bol su için ve gerekirse parasetamol alın.', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'Okay, thank you very much, doctor.',
        altAccepted: ['Thank you very much, doctor.', 'Alright, thanks a lot, doctor.'],
        translation_tr: 'Tamam, çok teşekkür ederim, doktor.',
        register: 'formal', ipa: '/oʊˈkeɪ θæŋk juː ˈvɛri mʌtʃ ˈdɒktər/',
        grammar: [{ word: 'thank you very much', role: 'fixed phrase', note: 'A stronger, more grateful way to say thanks.' }],
        keyExpressions: [{ phrase: 'thank you very much, doctor', meaning: 'a respectful way to close a medical consultation' }],
        exampleSentences: ['Thank you very much for your time, doctor.'],
        pronunciationTips: ['Stress "very" slightly to sound sincere.']
      }
    ]
  }),

  createDialogue({
    id: 'hospital-describing-symptoms-a2-01',
    locationId: 'hospital',
    scenarioId: 'describing-symptoms',
    title: 'Describing Your Symptoms',
    level: 'A2',
    length: 'short',
    goal: 'Explain what hurts, for how long, and how bad it is.',
    tags: ['problem-solving'],
    sceneType: 'hospital',
    characters: {
      A: { name: 'Dr Weber', role: 'Doctor', gender: 'female', accent: 'international', avatarPreset: 'doctor_f' },
      B: { name: 'You', role: 'Patient', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'What seems to be the problem today?', translation_tr: 'Bugün şikâyetiniz nedir?', emotion: 'concerned', register: 'formal' },
      {
        speaker: 'B', expected: 'I’ve had a sore throat and a headache since Monday.',
        altAccepted: ['My throat hurts and I’ve had a headache for three days.', 'I’ve been feeling ill since Monday — sore throat, headache.'],
        translation_tr: 'Pazartesiden beri boğaz ağrım ve baş ağrım var.',
        register: 'formal', ipa: '/aɪv hæd ə sɔːr θroʊt ænd ə ˈhedeɪk sɪns ˈmʌndeɪ/',
        grammar: [
          { word: 'I’ve had', role: 'present perfect', note: 'The symptom started in the past and continues now — essential for medical descriptions.' },
          { word: 'since Monday', role: 'starting point', note: 'Use "since" with a point in time; use "for" with a length of time.' },
          { word: 'a sore throat', role: 'fixed medical phrase', note: 'English says "a sore throat", not "my throat is painful".' }
        ],
        keyExpressions: [{ phrase: 'I’ve had ... since ...', meaning: 'the core structure for describing ongoing symptoms' }],
        exampleSentences: ['I’ve had a cough for a week.', 'She’s had a fever since yesterday.'],
        pronunciationTips: ['"headache" is HED-ake — the ch is a hard /k/ sound.']
      },
      { speaker: 'A', text: 'Any fever? And how would you rate the pain, one to ten?', translation_tr: 'Ateşiniz var mı? Ağrıyı birden ona kadar nasıl derecelendirirsiniz?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'A slight fever, and the pain is about a six.',
        altAccepted: ['Yes, a mild fever. I’d say six out of ten.', 'A little fever — the pain is around six.'],
        translation_tr: 'Hafif ateş var, ağrı da altı civarında.',
        register: 'formal', ipa: '/ə slaɪt ˈfiːvər ænd ðə peɪn ɪz əˈbaʊt ə sɪks/',
        grammar: [
          { word: 'slight', role: 'adjective of degree', note: 'Means small or mild — common with fever, pain, delay.' },
          { word: 'about a six', role: 'approximation', note: 'The article "a" before a number on a scale is natural English.' }
        ],
        keyExpressions: [{ phrase: 'rate the pain one to ten', meaning: 'the standard clinical way to measure pain' }],
        exampleSentences: ['There’s a slight delay.', 'It’s about a four.'],
        pronunciationTips: ['"fever" is FEE-ver — a long first vowel.']
      },
      { speaker: 'A', text: 'I’ll examine your throat. Have you taken anything for it?', translation_tr: 'Boğazınıza bakacağım. Bunun için bir şey aldınız mı?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Only paracetamol, but it hasn’t helped much.',
        altAccepted: ['Just painkillers, which didn’t really work.', 'I took some paracetamol, without much effect.'],
        translation_tr: 'Sadece parasetamol ama pek işe yaramadı.',
        register: 'formal', ipa: '/ˈoʊnli ˌpærəˈsiːtəmɒl bʌt ɪt ˈhæzənt helpt mʌtʃ/',
        grammar: [
          { word: 'hasn’t helped', role: 'present perfect negative', note: 'The lack of improvement is still relevant now.' },
          { word: 'much', role: 'quantifier in negatives', note: '"Much" is used mainly in negative sentences and questions.' }
        ],
        keyExpressions: [{ phrase: 'it hasn’t helped', meaning: 'the treatment did not improve the situation' }],
        exampleSentences: ['The medicine hasn’t helped.', 'I haven’t slept much.'],
        pronunciationTips: ['"paracetamol" is British; Americans say "acetaminophen" or "Tylenol".']
      }
    ]
  }),

  createDialogue({
    id: 'hospital-emergency-room-b1-01',
    locationId: 'hospital',
    scenarioId: 'emergency-room',
    title: 'At the Emergency Room',
    level: 'B1',
    length: 'short',
    goal: 'Explain an urgent injury clearly and answer triage questions.',
    tags: ['problem-solving'],
    sceneType: 'hospital',
    characters: {
      A: { name: 'Nurse Adeyemi', role: 'Triage Nurse', gender: 'female', accent: 'international', avatarPreset: 'pharmacist_f' },
      B: { name: 'You', role: 'Patient', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Tell me what happened.', translation_tr: 'Ne olduğunu anlatın.', emotion: 'concerned', register: 'formal' },
      {
        speaker: 'B', expected: 'I fell down the stairs and I can’t move my wrist.',
        altAccepted: ['I slipped on the stairs and hurt my wrist badly.', 'I had a fall — my wrist is very painful and swollen.'],
        translation_tr: 'Merdivenlerden düştüm ve bileğimi hareket ettiremiyorum.',
        register: 'formal', ipa: '/aɪ fel daʊn ðə steərz ænd aɪ kɑːnt muːv maɪ rɪst/',
        grammar: [
          { word: 'fell', role: 'past simple of "fall"', note: 'Irregular: fall → fell → fallen.' },
          { word: 'can’t move', role: 'modal of ability, negative', note: 'States a current physical limitation — vital medical information.' }
        ],
        keyExpressions: [{ phrase: 'I fell down the stairs', meaning: 'a clear, standard description of this accident' }],
        exampleSentences: ['I fell off my bike.', 'I can’t lift my arm.'],
        pronunciationTips: ['The w in "wrist" is silent: /rɪst/.']
      },
      { speaker: 'A', text: 'When did it happen, and are you on any medication?', translation_tr: 'Ne zaman oldu ve düzenli kullandığınız ilaç var mı?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'About an hour ago. I’m not taking any medication.',
        altAccepted: ['An hour ago, and no, I take nothing regularly.', 'Roughly one hour ago. No medication at all.'],
        translation_tr: 'Yaklaşık bir saat önce. Hiçbir ilaç kullanmıyorum.',
        register: 'formal', ipa: '/əˈbaʊt ən ˈaʊər əˈɡoʊ aɪm nɒt ˈteɪkɪŋ ˈeni ˌmedɪˈkeɪʃən/',
        grammar: [
          { word: 'ago', role: 'past time marker', note: 'Always follows the time period: an hour ago, two days ago.' },
          { word: 'any medication', role: 'quantifier in negative', note: 'Use "any" after a negative verb.' }
        ],
        keyExpressions: [{ phrase: 'on medication', meaning: 'regularly taking prescribed medicine' }],
        exampleSentences: ['It happened two days ago.', 'I’m not on any medication.'],
        pronunciationTips: ['"medication" is stressed on the third syllable: med-i-KAY-shun.']
      },
      { speaker: 'A', text: 'Take a seat. We’ll get you an X-ray shortly.', translation_tr: 'Oturun lütfen. Kısa süre içinde röntgeninizi çekeceğiz.', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'Thank you. Roughly how long will I have to wait?',
        altAccepted: ['Thanks — any idea of the waiting time?', 'Understood. Is the wait likely to be long?'],
        translation_tr: 'Teşekkürler. Yaklaşık ne kadar beklemem gerekecek?',
        register: 'formal', ipa: '/ˈrʌfli haʊ lɒŋ wɪl aɪ hæv tuː weɪt/',
        grammar: [
          { word: 'Roughly', role: 'approximation adverb', note: 'Signals you accept an estimate — polite in a busy hospital.' },
          { word: 'will I have to', role: 'future obligation question', note: 'Combines future "will" with obligation "have to".' }
        ],
        keyExpressions: [{ phrase: 'Roughly how long...?', meaning: 'asking for an approximate waiting time' }],
        exampleSentences: ['Roughly how much does it cost?'],
        pronunciationTips: ['"roughly" is RUFF-lee — the gh sounds like f.']
      }
    ]
  })
];
