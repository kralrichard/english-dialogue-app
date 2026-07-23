import { createDialogue } from '../dialogueSchema.js';

export const DEBATE_TOPICS_DIALOGUES = [
  createDialogue({
    id: 'debate-topics-philosophical-c2-01',
    locationId: 'debate-topics',
    scenarioId: 'philosophical-discussion',
    title: 'Does Technology Make Us Freer or More Trapped?',
    level: 'C2',
    variant: 1,
    length: 'long',
    goal: 'Hold your own in a nuanced philosophical debate, using irony and hedged disagreement.',
    tags: ['abstract-discussion'],
    sceneType: 'cafe',
    characters: {
      A: { name: 'Professor Adeyemi', role: 'Philosophy Professor', gender: 'male', accent: 'international', avatarPreset: 'professor_m' },
      B: { name: 'You', role: 'Dinner Guest', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Here’s a provocation for you: I’d argue technology hasn’t freed us at all — it’s just handed us a more comfortable cage.', translation_tr: 'Sana kışkırtıcı bir şey söyleyeyim: Teknolojinin bizi hiç özgürleştirmediğini, sadece bize daha rahat bir kafes verdiğini iddia ediyorum.', emotion: 'thinking', register: 'formal' },
      {
        speaker: 'B', expected: 'I take your point, but I’d push back a little — surely the freedom to access any book, any conversation, from anywhere, isn’t nothing.',
        altAccepted: ['I see where you’re coming from, though I’d gently disagree — the ability to reach any book or conversation from anywhere has to count for something.', 'That’s a compelling framing, but I’m not entirely convinced — being able to access almost any knowledge instantly does seem like a genuine freedom.'],
        translation_tr: 'Ne demek istediğinizi anlıyorum, ama biraz karşı çıkacağım — her yerden herhangi bir kitaba, herhangi bir sohbete erişebilme özgürlüğü hiç de önemsiz değil kesinlikle.',
        register: 'formal', ipa: '/aɪ teɪk jɔːr pɔɪnt bʌt aɪd pʊʃ bæk ə ˈlɪtəl ˈsɜːrli ðə ˈfriːdəm tuː ˈæksɛs ˈɛni bʊk ˈɛni ˌkɒnvərˈseɪʃən frɒm ˈɛniwɛər ˈɪznt ˈnʌθɪŋ/',
        grammar: [
          { word: 'I take your point, but', role: 'concessive opener', note: 'A sophisticated hedge that validates the other view before disagreeing — softens confrontation.' },
          { word: 'I’d push back a little', role: 'idiomatic hedged disagreement', note: '"Push back" means to resist or challenge an idea; "a little" softens the challenge further.' },
          { word: 'isn’t nothing', role: 'litotes (understatement)', note: 'A rhetorical device: saying "isn’t nothing" is a subtler, more persuasive way of saying "is something significant."' }
        ],
        keyExpressions: [
          { phrase: 'I take your point, but...', meaning: 'a diplomatic way to acknowledge an argument before countering it' },
          { phrase: 'push back on/against something', meaning: 'to respectfully challenge or resist an idea' }
        ],
        exampleSentences: ['I take your point, but I think the data tells a different story.'],
        pronunciationTips: ['Let "isn’t nothing" land with a flat, deliberate rhythm — the understatement works through restraint, not emphasis.']
      },
      { speaker: 'A', text: 'Fair, fair — access, sure. But access without discernment is just noise with better lighting, wouldn’t you say?', translation_tr: 'Doğru, doğru — erişim, tamam. Ama ayırt etme yeteneği olmadan erişim, sadece daha iyi aydınlatılmış bir gürültüdür, sence de öyle değil mi?', emotion: 'thinking', register: 'formal' },
      {
        speaker: 'B', expected: 'That’s a nice turn of phrase, and there’s something to it, but I’d say the discernment problem predates technology entirely — we’ve just made the noise louder, not invented it.',
        altAccepted: ['Beautifully put, and I won’t deny there’s truth in it, but I’d argue we’ve always struggled with discernment — technology just amplified an old problem.', 'That’s elegantly put, though I suspect the lack of discernment came long before the technology did — it simply gave the noise a bigger stage.'],
        translation_tr: 'Bu güzel bir söyleyiş biçimi ve içinde bir şeyler var, ama derim ki ayırt etme sorunu teknolojiden çok önce vardı — biz sadece gürültüyü daha yüksek sesli yaptık, onu icat etmedik.',
        register: 'formal', ipa: '/ðæts ə naɪs tɜːrn ʌv freɪz ænd ðɛərz ˈsʌmθɪŋ tuː ɪt bʌt aɪd seɪ ðə dɪˈsɜːrnmənt ˈprɒbləm ˌpriːdɪˈteɪts tɛkˈnɒlədʒi ɪnˈtaɪərli wiːv dʒʌst meɪd ðə nɔɪz ˈlaʊdər nɒt ɪnˈvɛntɪd ɪt/',
        grammar: [
          { word: 'That’s a nice turn of phrase', role: 'metalinguistic compliment', note: 'A C2-level move: complimenting the other speaker’s rhetoric before engaging with the substance — common in academic/witty registers.' },
          { word: 'there’s something to it', role: 'partial concession idiom', note: 'Grants partial validity without fully agreeing — a nuanced middle position.' },
          { word: 'predates', role: 'precise academic verb', note: 'Means "existed before" — more exact and formal than "came before."' }
        ],
        keyExpressions: [
          { phrase: 'a nice/clever turn of phrase', meaning: 'a compliment on how elegantly something was expressed' },
          { phrase: 'there’s something to it', meaning: 'a partial concession — the idea has some merit' }
        ],
        exampleSentences: ['There’s something to the idea that stress is contagious.'],
        pronunciationTips: ['Vary your pace: speed up slightly through the concession, then slow down and land firmly on "not invented it" for rhetorical weight.']
      }
    ]
  }),

  createDialogue({
    id: 'debate-topics-social-issue-c2-01',
    locationId: 'debate-topics',
    scenarioId: 'social-issue-debate',
    title: 'Should Remote Work Be a Legal Right?',
    level: 'C2',
    variant: 1,
    length: 'long',
    goal: 'Debate a contemporary social/professional issue with tact, wit, and nuance.',
    tags: ['abstract-discussion'],
    sceneType: 'cafe',
    characters: {
      A: { name: 'Naomi', role: 'Journalist', gender: 'female', accent: 'irish', avatarPreset: 'journalist_f' },
      B: { name: 'You', role: 'Panel Guest', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'Some governments are floating the idea of a legal right to remote work. Devil’s advocate for a moment — isn’t that a solution in search of a problem?', translation_tr: 'Bazı hükümetler uzaktan çalışma için yasal bir hak fikrini gündeme getiriyor. Bir an için şeytanın avukatlığını yapayım — bu, sorun arayan bir çözüm değil mi?', emotion: 'curious', register: 'formal' },
      {
        speaker: 'B', expected: 'I’d resist that framing, honestly — for millions of parents and caregivers, the problem is very real; it’s just been invisible to the people setting policy.',
        altAccepted: ['I’d push back on that, actually — the problem is quite real for a lot of people, particularly caregivers, it’s simply gone unnoticed by policymakers.', 'Respectfully, I’d disagree — the problem does exist, especially for caregivers, it’s just been overlooked by those in power.'],
        translation_tr: 'Dürüst olmak gerekirse bu çerçevelemeye direnirdim — milyonlarca ebeveyn ve bakıcı için sorun çok gerçek; sadece politika belirleyenler için görünmez kalmış.',
        register: 'formal', ipa: '/aɪd rɪˈzɪst ðæt ˈfreɪmɪŋ ˈɒnɪstli fɔːr ˈmɪljənz ʌv ˈpɛərənts ænd ˈkɛərgɪvərz ðə ˈprɒbləm ɪz ˈvɛri rɪəl ɪts dʒʌst bɪn ɪnˈvɪzəbəl tuː ðə ˈpiːpəl ˈsɛtɪŋ ˈpɒləsi/',
        grammar: [
          { word: 'I’d resist that framing', role: 'meta-argumentative move', note: 'Challenges how the question itself is set up, not just its content — a hallmark of sophisticated debate.' },
          { word: 'honestly', role: 'stance adverb', note: 'Signals candor and slightly softens an otherwise firm disagreement.' },
          { word: 'it’s just been invisible to', role: 'passive construction', note: 'Shifts focus onto systemic oversight rather than blaming anyone directly.' }
        ],
        keyExpressions: [
          { phrase: 'resist/reject the framing', meaning: 'to challenge the assumptions built into a question, not just answer it' },
          { phrase: 'a solution in search of a problem', meaning: 'idiom: an unnecessary fix for something that isn’t really broken' }
        ],
        exampleSentences: ['I’d resist the framing that this is purely a generational issue.'],
        pronunciationTips: ['Emphasize "resist" with firm but measured stress — confident disagreement, not aggression.']
      },
      { speaker: 'A', text: 'Touché. Though play devil’s advocate with me one more time: does legislating it risk making offices resent the employees who need it most?', translation_tr: 'Haklısın. Ama benimle bir kez daha şeytanın avukatlığını yap: bunu yasalaştırmak, ofislerin buna en çok ihtiyaç duyan çalışanlara kızmasına yol açabilir mi?', emotion: 'thinking', register: 'formal' },
      {
        speaker: 'B', expected: 'That’s a genuinely fair risk to flag, and I won’t pretend resentment couldn’t happen — but I’d rather manage that risk through culture than use it as an excuse to deny the right altogether.',
        altAccepted: ['That’s a legitimate concern, and I won’t deny resentment is possible, but I’d rather address it through workplace culture than let it justify withholding the right entirely.', 'That’s a fair point to raise, and resentment is certainly a risk — still, I’d sooner tackle that culturally than use it as a reason to withhold the right.'],
        translation_tr: 'Bu gerçekten belirtilmesi gereken adil bir risk ve içerlemenin olamayacağını iddia etmeyeceğim — ama bu riski hakkı tamamen reddetmek için bir bahane olarak kullanmaktansa kültür yoluyla yönetmeyi tercih ederim.',
        register: 'formal', ipa: '/ðæts ə ˈdʒɛnjuɪnli fɛər rɪsk tuː flæg ænd aɪ woʊnt prɪˈtɛnd rɪˈzɛntmənt ˈkʊdənt ˈhæpən bʌt aɪd ˈræðər ˈmænɪdʒ ðæt rɪsk θruː ˈkʌltʃər ðæn juːz ɪt æz æn ˈɛkskjuːs tuː dɪˈnaɪ ðə raɪt ˌɔːlgəˈðər/',
        grammar: [
          { word: 'a genuinely fair risk to flag', role: 'nominalized evaluative phrase', note: 'A dense, formal way to acknowledge validity while staying analytical rather than emotional.' },
          { word: 'I won’t pretend', role: 'concession marker', note: 'Grants a point honestly rather than dismissing it — builds credibility in debate.' },
          { word: 'I’d rather ... than ...', role: 'comparative preference structure', note: 'Clearly states a preferred solution over the implied alternative in the question.' }
        ],
        keyExpressions: [
          { phrase: 'a fair risk/point to flag', meaning: 'an acknowledgment that a concern is legitimate and worth noting' },
          { phrase: 'I won’t pretend...', meaning: 'a mark of intellectual honesty — admitting a difficulty without being defeated by it' }
        ],
        exampleSentences: ['I won’t pretend the transition will be painless, but I think it’s worth it.'],
        pronunciationTips: ['Use a falling, settled tone on "than use it as an excuse" — it should sound like a firm conclusion, not a hedge.']
      }
    ]
  }),

  createDialogue({
    id: 'debate-topics-cultural-discussion-c1-01',
    locationId: 'debate-topics',
    scenarioId: 'cultural-discussion',
    title: 'Discussing Cultural Differences',
    level: 'C1',
    length: 'long',
    goal: 'Discuss cultural difference thoughtfully, disagreeing without stereotyping.',
    tags: ['abstract-discussion'],
    sceneType: 'cafe',
    characters: {
      A: { name: 'Ingrid', role: 'Friend', gender: 'female', accent: 'international', avatarPreset: 'journalist_f' },
      B: { name: 'You', role: 'Friend', gender: 'neutral', accent: 'american', avatarPreset: 'guest_neutral' }
    },
    turns: [
      { speaker: 'A', text: 'I find people here quite closed off compared to back home. Is that fair?', translation_tr: 'Buradaki insanları memleketimdekilere kıyasla oldukça kapalı buluyorum. Bu adil bir yorum mu?', emotion: 'curious', register: 'informal' },
      {
        speaker: 'B', expected: 'I’d push back on that slightly — I think it’s more about how quickly warmth is shown.',
        altAccepted: ['I’d frame it differently: the warmth is there, it just takes longer to appear.', 'I’m not sure "closed off" is right — it may be a difference in pace rather than openness.'],
        translation_tr: 'Buna hafifçe itiraz ederim — bence mesele sıcaklığın ne kadar çabuk gösterildiğiyle ilgili.',
        register: 'informal', ipa: '/aɪd pʊʃ bæk ɒn ðæt ˈslaɪtli/',
        grammar: [
          { word: 'I’d push back on that', role: 'idiomatic disagreement', note: 'A confident but non-aggressive way to challenge a claim in discussion.' },
          { word: 'slightly', role: 'softening adverb', note: 'Signals partial rather than total disagreement — keeps the exchange collaborative.' },
          { word: 'it’s more about', role: 'reframing structure', note: 'Redirects the discussion from one explanation to a better one.' }
        ],
        keyExpressions: [{ phrase: 'push back on something', meaning: 'to challenge an idea politely but firmly' }],
        exampleSentences: ['I’d push back on that assumption.', 'It’s more about timing than money.'],
        pronunciationTips: ['Stress "slightly" — it does the diplomatic work of the sentence.']
      },
      { speaker: 'A', text: 'That’s a generous reading. But surely some cultures genuinely are more reserved?', translation_tr: 'Bu cömert bir yorum. Ama bazı kültürler gerçekten daha çekingen değil mi?', emotion: 'thinking', register: 'informal' },
      {
        speaker: 'B', expected: 'Possibly, though I’d be careful about generalising from a few encounters.',
        altAccepted: ['Perhaps, but individual variation within a culture is usually greater than between cultures.', 'Maybe, though small samples can be misleading.'],
        translation_tr: 'Muhtemelen, yine de birkaç karşılaşmadan genelleme yapma konusunda dikkatli olurum.',
        register: 'informal', ipa: '/aɪd biː ˈkeərfəl əˈbaʊt ˈdʒenərəlaɪzɪŋ/',
        grammar: [
          { word: 'Possibly, though', role: 'concession + counterpoint', note: 'Grants the point partially before qualifying it — a hallmark of C1 discussion.' },
          { word: 'I’d be careful about', role: 'hedged caution', note: 'Warns against a conclusion without accusing the other person of prejudice.' },
          { word: 'generalising', role: 'gerund after preposition', note: 'After "about," the verb must take -ing.' }
        ],
        keyExpressions: [{ phrase: 'I’d be careful about...', meaning: 'a diplomatic way to warn against a conclusion' }],
        exampleSentences: ['I’d be careful about drawing conclusions.', 'It’s risky to generalise.'],
        pronunciationTips: ['"generalising" has four syllables: GEN-ral-ize-ing.']
      },
      { speaker: 'A', text: 'Fair. So how would you explain the difference I’m noticing?', translation_tr: 'Haklısın. Peki fark ettiğim bu farkı nasıl açıklarsın?', emotion: 'curious', register: 'informal' },
      {
        speaker: 'B', expected: 'A lot of it comes down to what counts as polite. Silence can mean respect in one place and coldness in another.',
        altAccepted: ['Much of it is about differing norms of politeness rather than feeling.', 'It may be that the same behaviour carries opposite meanings in each culture.'],
        translation_tr: 'Bunun büyük kısmı neyin nezaket sayıldığıyla ilgili. Sessizlik bir yerde saygı, başka bir yerde soğukluk anlamına gelebilir.',
        register: 'informal', ipa: '/ə lɒt əv ɪt kʌmz daʊn tuː wɒt kaʊnts æz pəˈlaɪt/',
        grammar: [
          { word: 'comes down to', role: 'idiom', note: 'Means "the essential explanation is" — used to identify a root cause.' },
          { word: 'can mean', role: 'modal of possibility', note: '"Can" here expresses what is possible in general, not permission.' }
        ],
        keyExpressions: [{ phrase: 'it comes down to', meaning: 'the fundamental issue is' }],
        exampleSentences: ['It comes down to trust.', 'Silence can mean many things.'],
        pronunciationTips: ['Group the sentence into two clear halves with a pause between them.']
      },
      { speaker: 'A', text: 'That reframes it usefully. I hadn’t considered that silence could be read so differently.', translation_tr: 'Bu, konuyu faydalı biçimde yeniden çerçeveliyor. Sessizliğin bu kadar farklı okunabileceğini düşünmemiştim.', emotion: 'surprised', register: 'informal' },
      {
        speaker: 'B', expected: 'It took me a while to see it too — I misread a lot of situations at first.',
        altAccepted: ['I only realised it after living here a few years.', 'I got it wrong plenty of times before it clicked.'],
        translation_tr: 'Benim de görmem zaman aldı — başta birçok durumu yanlış okudum.',
        register: 'informal', ipa: '/ɪt tʊk miː ə waɪl tuː siː ɪt tuː/',
        grammar: [
          { word: 'It took me a while', role: 'time expression', note: 'Means the process required considerable time — modest and relatable.' },
          { word: 'misread', role: 'prefix mis- + verb', note: '"Mis-" means wrongly: misread, misunderstand, misjudge. Past form is also "misread".' }
        ],
        keyExpressions: [{ phrase: 'it took me a while', meaning: 'I needed time to understand' }],
        exampleSentences: ['It took me a while to adjust.', 'I misread the situation.'],
        pronunciationTips: ['Past "misread" is pronounced "mis-RED", present is "mis-REED".']
      }
    ]
  })
];
