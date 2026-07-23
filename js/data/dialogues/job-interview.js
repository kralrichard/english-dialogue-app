import { createDialogue } from '../dialogueSchema.js';

export const JOB_INTERVIEW_DIALOGUES = [
  createDialogue({
    id: 'job-interview-general-b2-01',
    locationId: 'job-interview',
    scenarioId: 'general-interview',
    title: 'A General Job Interview',
    level: 'B2',
    variant: 1,
    length: 'long',
    goal: 'Present yourself confidently and answer common interview questions.',
    tags: ['interview'],
    sceneType: 'formal-office',
    characters: {
      A: { name: 'Ms. Carter', role: 'Hiring Manager', gender: 'female', accent: 'american', avatarPreset: 'manager_f' },
      B: { name: 'Candidate', role: 'Job Candidate', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Thanks for coming in. Could you start by telling me a bit about yourself?', translation_tr: 'Geldiğiniz için teşekkürler. Kendinizden biraz bahsederek başlayabilir misiniz?', emotion: 'neutral', register: 'formal' },
      {
        speaker: 'B', expected: 'Of course. I’ve spent the last four years working in marketing, mostly focusing on digital campaigns.',
        altAccepted: ['Sure. For the past four years, I’ve worked in marketing, focusing mainly on digital campaigns.', 'Certainly. I’ve been in marketing for four years now, primarily on the digital side.'],
        translation_tr: 'Elbette. Son dört yılı pazarlama alanında, çoğunlukla dijital kampanyalara odaklanarak geçirdim.',
        register: 'formal', ipa: '/aɪv spɛnt ðə læst fɔːr jɪərz ˈwɜːrkɪŋ ɪn ˈmɑːrkɪtɪŋ ˈmoʊstli ˈfoʊkəsɪŋ ɒn ˈdɪdʒɪtəl kæmˈpeɪnz/',
        grammar: [
          { word: 'I’ve spent', role: 'present perfect', note: 'Connects past experience to the present — appropriate for summarizing a career so far.' },
          { word: 'mostly focusing on', role: 'present participle clause', note: 'Adds detail about the nature of the work without starting a new sentence.' }
        ],
        keyExpressions: [{ phrase: 'I’ve spent the last [x] years...', meaning: 'a common, professional way to summarize recent experience' }],
        exampleSentences: ['I’ve spent the last two years leading a small design team.'],
        pronunciationTips: ['Keep a steady, confident pace — avoid rushing through the whole sentence in one breath.']
      },
      { speaker: 'A', text: 'Great. What would you say is your biggest strength, and where do you think you could improve?', translation_tr: 'Harika. En büyük gücünüzün ne olduğunu ve nerede gelişebileceğinizi düşünüyorsunuz?', emotion: 'thinking', register: 'formal' },
      {
        speaker: 'B', expected: 'I’d say my biggest strength is problem-solving under pressure, though I’m still working on delegating more effectively.',
        altAccepted: ['My biggest strength is probably staying calm under pressure, but I’m still learning to delegate better.', 'I think my strongest point is problem-solving, though I could improve at delegating tasks.'],
        translation_tr: 'Sanırım en büyük gücüm baskı altında problem çözmek, ancak hâlâ daha etkili delege etmeyi öğreniyorum.',
        register: 'formal', ipa: '/aɪd seɪ maɪ ˈbɪgɪst strɛŋθ ɪz ˈprɒbləm ˈsɒlvɪŋ ˈʌndər ˈprɛʃər ðoʊ aɪm stɪl ˈwɜːrkɪŋ ɒn ˈdɛlɪɡeɪtɪŋ mɔːr ɪˈfɛktɪvli/',
        grammar: [
          { word: 'I’d say', role: 'hedging phrase', note: 'Softens a confident claim, making it sound thoughtful rather than boastful.' },
          { word: 'though', role: 'contrast conjunction', note: 'Introduces a balancing, honest self-critique after the strength.' },
          { word: 'I’m still working on', role: 'present continuous', note: 'Frames a weakness as an ongoing improvement, not a fixed flaw.' }
        ],
        keyExpressions: [{ phrase: 'I’m still working on...', meaning: 'a diplomatic way to admit an area for improvement' }],
        exampleSentences: ['I’m still working on my public speaking.'],
        pronunciationTips: ['Slightly stress "though" to signal the shift from strength to weakness.']
      },
      { speaker: 'A', text: 'That’s good self-awareness. Do you have any questions for me?', translation_tr: 'Bu iyi bir öz farkındalık. Bana sormak istediğiniz bir sorunuz var mı?', emotion: 'friendly', register: 'formal' },
      {
        speaker: 'B', expected: 'Yes, actually — what does success look like in this role after the first six months?',
        altAccepted: ['Yes, I’d love to know what success would look like in this position after six months.', 'Actually yes — how would you measure success in this role early on?'],
        translation_tr: 'Evet, aslında — ilk altı aydan sonra bu rolde başarı nasıl görünüyor?',
        register: 'formal', ipa: '/jɛs ˈæktʃuəli wʌt dʌz səkˈsɛs lʊk laɪk ɪn ðɪs roʊl ˈæftər ðə fɜːrst sɪks mʌnθs/',
        grammar: [
          { word: 'what does success look like', role: 'indirect-style question', note: 'A thoughtful, open question format often used in interviews.' },
          { word: 'after the first six months', role: 'time phrase', note: 'Anchors the question to a concrete, near-term period.' }
        ],
        keyExpressions: [{ phrase: 'What does success look like in this role?', meaning: 'a strong closing question showing genuine engagement' }],
        exampleSentences: ['What does a typical day look like in this position?'],
        pronunciationTips: ['End on a genuinely curious, rising tone — this is a real question, not a rehearsed line.']
      }
    ]
  }),

  createDialogue({
    id: 'job-interview-behavioral-questions-b2-01',
    locationId: 'job-interview',
    scenarioId: 'behavioral-questions',
    title: 'Answering Behavioural Questions',
    level: 'B2',
    length: 'medium',
    goal: 'Answer "tell me about a time when..." questions with a clear structure.',
    tags: ['interview'],
    sceneType: 'formal-office',
    characters: {
      A: { name: 'Ms Bennett', role: 'Hiring Manager', gender: 'female', accent: 'british', avatarPreset: 'exec_f' },
      B: { name: 'You', role: 'Candidate', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Tell me about a time when you had to deal with a difficult colleague.', translation_tr: 'Zor bir iş arkadaşıyla başa çıkmak zorunda kaldığınız bir zamanı anlatın.', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'In my last role, a colleague repeatedly missed our shared deadlines.',
        altAccepted: ['At my previous company, a teammate kept delivering work late.', 'I worked with someone who consistently missed our joint deadlines.'],
        translation_tr: 'Önceki işimde bir iş arkadaşım ortak teslim tarihlerimizi sürekli kaçırıyordu.',
        register: 'formal', ipa: '/ɪn maɪ lɑːst roʊl ə ˈkɒliːɡ rɪˈpiːtɪdli mɪst ˈaʊər deɪdlaɪnz/',
        grammar: [
          { word: 'In my last role', role: 'setting the scene', note: 'Behavioural answers should start by establishing the context briefly.' },
          { word: 'repeatedly', role: 'adverb of frequency', note: 'Signals a pattern rather than a one-off event — makes the story credible.' }
        ],
        keyExpressions: [{ phrase: 'Tell me about a time when...', meaning: 'the classic behavioural interview prompt' }],
        exampleSentences: ['In my previous job, I managed a small team.'],
        pronunciationTips: ['"colleague" is COL-eeg — stress the first syllable.']
      },
      { speaker: 'A', text: 'And how did you handle it?', translation_tr: 'Peki bunu nasıl ele aldınız?', emotion: 'curious', register: 'formal' },
      {
        speaker: 'B', expected: 'I spoke to him privately and we agreed on earlier internal deadlines.',
        altAccepted: ['I raised it with him one-to-one and we set interim checkpoints.', 'Rather than escalate, I talked to him directly and we restructured the schedule.'],
        translation_tr: 'Onunla özel olarak konuştum ve daha erken iç teslim tarihleri üzerinde anlaştık.',
        register: 'formal', ipa: '/aɪ spoʊk tuː hɪm ˈpraɪvətli ænd wiː əˈɡriːd ɒn/',
        grammar: [
          { word: 'spoke to him privately', role: 'action step', note: 'Interviewers want the specific action YOU took — use "I", not "we", here.' },
          { word: 'agreed on', role: 'verb + preposition', note: 'You agree ON a plan, agree WITH a person, agree TO a request.' }
        ],
        keyExpressions: [{ phrase: 'agree on something', meaning: 'reach a shared decision about it' }],
        exampleSentences: ['We agreed on a new deadline.', 'I spoke to her privately.'],
        pronunciationTips: ['"privately" is often two-and-a-half syllables: PRIVE-it-ly.']
      },
      { speaker: 'A', text: 'What was the outcome?', translation_tr: 'Sonuç ne oldu?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'We delivered the next two projects on time, and our working relationship improved.',
        altAccepted: ['The following projects were all on schedule and we worked well after that.', 'It resolved the issue — no further delays, and a better relationship.'],
        translation_tr: 'Sonraki iki projeyi zamanında teslim ettik ve çalışma ilişkimiz düzeldi.',
        register: 'formal', ipa: '/wiː dɪˈlɪvərd ðə nekst tuː ˈprɒdʒekts ɒn taɪm/',
        grammar: [
          { word: 'on time', role: 'fixed phrase', note: 'Means punctually. "In time" means with enough time to spare — different meanings.' },
          { word: 'improved', role: 'past simple', note: 'A measurable result — always end a behavioural answer with the outcome.' }
        ],
        keyExpressions: [{ phrase: 'on time', meaning: 'punctual, at the scheduled moment' }],
        exampleSentences: ['The train arrived on time.', 'We finished the project on schedule.'],
        pronunciationTips: ['Stress "on TIME" — it is the key positive result.']
      }
    ]
  }),

  createDialogue({
    id: 'job-interview-salary-negotiation-c1-01',
    locationId: 'job-interview',
    scenarioId: 'salary-negotiation',
    title: 'Negotiating Your Salary',
    level: 'C1',
    length: 'medium',
    goal: 'Discuss compensation confidently without damaging the relationship.',
    tags: ['negotiation', 'interview'],
    sceneType: 'formal-office',
    characters: {
      A: { name: 'Ms Bennett', role: 'Hiring Manager', gender: 'female', accent: 'british', avatarPreset: 'exec_f' },
      B: { name: 'You', role: 'Candidate', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'We’re prepared to offer fifty-two thousand. How does that sound?', translation_tr: 'Elli iki bin teklif etmeye hazırız. Nasıl geldi?', emotion: 'formal', register: 'formal' },
      {
        speaker: 'B', expected: 'I appreciate the offer. Based on my experience, I was hoping for something closer to sixty.',
        altAccepted: ['Thank you. Given my background, I had sixty in mind.', 'That’s a fair start, though my expectation was nearer sixty thousand.'],
        translation_tr: 'Teklif için teşekkürler. Deneyimime dayanarak altmışa daha yakın bir rakam umuyordum.',
        register: 'formal', ipa: '/aɪ wɒz ˈhoʊpɪŋ fɔːr ˈsʌmθɪŋ ˈkloʊsər tuː ˈsɪksti/',
        grammar: [
          { word: 'I was hoping for', role: 'past continuous as softener', note: 'The past form makes a request less direct and easier to negotiate with.' },
          { word: 'Based on my experience', role: 'justification phrase', note: 'Anchors your number in evidence rather than desire.' }
        ],
        keyExpressions: [{ phrase: 'I was hoping for', meaning: 'a softened way to state a higher expectation' }],
        exampleSentences: ['I was hoping for an earlier start date.', 'Based on the data, I recommend waiting.'],
        pronunciationTips: ['Say the number calmly and then stop talking — silence is powerful here.']
      },
      { speaker: 'A', text: 'Sixty is above our band for this level, I’m afraid.', translation_tr: 'Korkarım altmış, bu seviye için bandımızın üzerinde.', emotion: 'concerned', register: 'formal' },
      {
        speaker: 'B', expected: 'I understand. Would there be flexibility on a signing bonus or an earlier review?',
        altAccepted: ['That’s fair. Could we look at other elements, such as a review after six months?', 'Understood — is there room to move on bonus or holiday instead?'],
        translation_tr: 'Anlıyorum. İşe giriş primi veya daha erken bir değerlendirme konusunda esneklik olur mu?',
        register: 'formal', ipa: '/wʊd ðeər biː ˌfleksəˈbɪləti ɒn ə ˈsaɪnɪŋ ˈboʊnəs/',
        grammar: [
          { word: 'Would there be flexibility on', role: 'indirect negotiation frame', note: 'Impersonal and non-confrontational — it invites options rather than demanding.' },
          { word: 'or', role: 'alternatives', note: 'Offering two options makes it easier for the other side to say yes to one.' }
        ],
        keyExpressions: [{ phrase: 'Is there any flexibility on...?', meaning: 'the standard polite negotiation question' }],
        exampleSentences: ['Is there flexibility on the start date?'],
        pronunciationTips: ['"flexibility" is stressed on the third syllable: flex-i-BIL-i-ty.']
      },
      { speaker: 'A', text: 'A review at six months is certainly possible. Let me confirm the bonus.', translation_tr: 'Altı ayda bir değerlendirme kesinlikle mümkün. Primi teyit edeyim.', emotion: 'thinking', register: 'formal' },
      {
        speaker: 'B', expected: 'That would work well for me. Could you put the details in writing?',
        altAccepted: ['That sounds like a good compromise — may I have it in writing?', 'I’d be happy with that. Please send the revised offer by email.'],
        translation_tr: 'Bu benim için iyi olur. Ayrıntıları yazılı olarak iletebilir misiniz?',
        register: 'formal', ipa: '/kʊd juː pʊt ðə ˈdiːteɪlz ɪn ˈraɪtɪŋ/',
        grammar: [
          { word: 'in writing', role: 'fixed phrase', note: 'Means in a written, documented form — essential for any agreement.' },
          { word: 'That would work well', role: 'conditional acceptance', note: '"Would" keeps a slight distance until the terms are confirmed.' }
        ],
        keyExpressions: [{ phrase: 'put it in writing', meaning: 'provide a written record of an agreement' }],
        exampleSentences: ['Could I have that in writing?', 'They confirmed the offer in writing.'],
        pronunciationTips: ['End warmly — you want the relationship intact after the negotiation.']
      }
    ]
  })
];
