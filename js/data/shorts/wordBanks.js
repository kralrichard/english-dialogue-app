// ============================================================================
// Word banks for the Shorts sentence generator.
//
// The "easy way" to reach 10,000+ REAL, natural sentences without a build step
// or any dependency: keep small, hand-checked banks of words/phrases (each with
// its Turkish form already in the right shape) and let sentenceBank.js combine
// them with graded frames. Every Turkish form here is chosen so it drops into
// its frames naturally -- nouns/adjectives stay in the nominative singular,
// which is exactly the form Turkish uses after "bir", in "X nerede?", in
// "X severim", etc. Verbs carry the three forms the verb frames actually need.
// ============================================================================

// --- Nouns: [english, turkish (nominative singular), article: 'a'|'an'] ------
// Grouped by topic so each generated sentence can carry an honest topic tag.
export const NOUN_GROUPS = {
  food: [
    ['apple', 'elma', 'an'], ['banana', 'muz', 'a'], ['orange', 'portakal', 'an'],
    ['egg', 'yumurta', 'an'], ['cookie', 'kurabiye', 'a'], ['sandwich', 'sandviç', 'a'],
    ['carrot', 'havuç', 'a'], ['tomato', 'domates', 'a'], ['potato', 'patates', 'a'],
    ['lemon', 'limon', 'a'], ['peach', 'şeftali', 'a'], ['pear', 'armut', 'a'],
    ['cake', 'pasta', 'a'], ['burger', 'hamburger', 'a'], ['pizza', 'pizza', 'a'],
    ['salad', 'salata', 'a'], ['soup', 'çorba', 'a'], ['grape', 'üzüm', 'a']
  ],
  animals: [
    ['cat', 'kedi', 'a'], ['dog', 'köpek', 'a'], ['bird', 'kuş', 'a'], ['fish', 'balık', 'a'],
    ['horse', 'at', 'a'], ['cow', 'inek', 'a'], ['sheep', 'koyun', 'a'], ['rabbit', 'tavşan', 'a'],
    ['mouse', 'fare', 'a'], ['lion', 'aslan', 'a'], ['bear', 'ayı', 'a'], ['duck', 'ördek', 'a'],
    ['chicken', 'tavuk', 'a'], ['frog', 'kurbağa', 'a'], ['elephant', 'fil', 'an'], ['monkey', 'maymun', 'a'],
    ['tiger', 'kaplan', 'a'], ['wolf', 'kurt', 'a']
  ],
  objects: [
    ['book', 'kitap', 'a'], ['pen', 'kalem', 'a'], ['table', 'masa', 'a'], ['chair', 'sandalye', 'a'],
    ['bed', 'yatak', 'a'], ['door', 'kapı', 'a'], ['window', 'pencere', 'a'], ['key', 'anahtar', 'a'],
    ['cup', 'fincan', 'a'], ['glass', 'bardak', 'a'], ['plate', 'tabak', 'a'], ['spoon', 'kaşık', 'a'],
    ['fork', 'çatal', 'a'], ['knife', 'bıçak', 'a'], ['bag', 'çanta', 'a'], ['box', 'kutu', 'a'],
    ['clock', 'saat', 'a'], ['lamp', 'lamba', 'a'], ['ball', 'top', 'a'], ['toy', 'oyuncak', 'a'],
    ['phone', 'telefon', 'a'], ['computer', 'bilgisayar', 'a'], ['umbrella', 'şemsiye', 'an'],
    ['mirror', 'ayna', 'a'], ['bottle', 'şişe', 'a'], ['towel', 'havlu', 'a'], ['blanket', 'battaniye', 'a'],
    ['basket', 'sepet', 'a'], ['camera', 'kamera', 'a'], ['ticket', 'bilet', 'a'], ['wallet', 'cüzdan', 'a'],
    ['watch', 'kol saati', 'a']
  ],
  people: [
    ['baby', 'bebek', 'a'], ['girl', 'kız', 'a'], ['man', 'adam', 'a'], ['woman', 'kadın', 'a'],
    ['child', 'çocuk', 'a'], ['friend', 'arkadaş', 'a'], ['teacher', 'öğretmen', 'a'], ['doctor', 'doktor', 'a'],
    ['nurse', 'hemşire', 'a'], ['driver', 'şoför', 'a'], ['student', 'öğrenci', 'a'], ['neighbor', 'komşu', 'a'],
    ['waiter', 'garson', 'a'], ['farmer', 'çiftçi', 'a']
  ],
  places: [
    ['house', 'ev', 'a'], ['school', 'okul', 'a'], ['shop', 'dükkan', 'a'], ['store', 'mağaza', 'a'],
    ['park', 'park', 'a'], ['garden', 'bahçe', 'a'], ['room', 'oda', 'a'], ['kitchen', 'mutfak', 'a'],
    ['city', 'şehir', 'a'], ['village', 'köy', 'a'], ['hospital', 'hastane', 'a'], ['station', 'istasyon', 'a'],
    ['market', 'pazar', 'a'], ['library', 'kütüphane', 'a'], ['hotel', 'otel', 'a'], ['restaurant', 'restoran', 'a'],
    ['airport', 'havaalanı', 'an'], ['bank', 'banka', 'a'], ['bridge', 'köprü', 'a'], ['office', 'ofis', 'an']
  ],
  nature: [
    ['tree', 'ağaç', 'a'], ['flower', 'çiçek', 'a'], ['river', 'nehir', 'a'], ['mountain', 'dağ', 'a'],
    ['star', 'yıldız', 'a'], ['cloud', 'bulut', 'a'], ['leaf', 'yaprak', 'a'], ['stone', 'taş', 'a'],
    ['lake', 'göl', 'a'], ['island', 'ada', 'an'], ['forest', 'orman', 'a'], ['beach', 'plaj', 'a']
  ],
  clothes: [
    ['hat', 'şapka', 'a'], ['shirt', 'gömlek', 'a'], ['shoe', 'ayakkabı', 'a'], ['sock', 'çorap', 'a'],
    ['coat', 'palto', 'a'], ['dress', 'elbise', 'a'], ['jacket', 'ceket', 'a'], ['glove', 'eldiven', 'a'],
    ['scarf', 'atkı', 'a'], ['belt', 'kemer', 'a'], ['skirt', 'etek', 'a'], ['ring', 'yüzük', 'a']
  ],
  transport: [
    ['car', 'araba', 'a'], ['bus', 'otobüs', 'a'], ['train', 'tren', 'a'], ['bike', 'bisiklet', 'a'],
    ['plane', 'uçak', 'a'], ['boat', 'tekne', 'a'], ['truck', 'kamyon', 'a'], ['taxi', 'taksi', 'a']
  ],
  body: [
    ['hand', 'el', 'a'], ['foot', 'ayak', 'a'], ['eye', 'göz', 'an'], ['ear', 'kulak', 'an'],
    ['nose', 'burun', 'a'], ['mouth', 'ağız', 'a'], ['head', 'kafa', 'a'], ['arm', 'kol', 'an'],
    ['finger', 'parmak', 'a'], ['tooth', 'diş', 'a']
  ]
};

// Flat noun list with topic attached: { en, tr, art, topic }
export const NOUNS = Object.entries(NOUN_GROUPS).flatMap(([topic, list]) =>
  list.map(([en, tr, art]) => ({ en, tr, art, topic })));

// --- Adjectives: [english, turkish, article-for-this-adjective] --------------
export const ADJECTIVES = [
  ['big', 'büyük', 'a'], ['small', 'küçük', 'a'], ['new', 'yeni', 'a'], ['old', 'eski', 'an'],
  ['good', 'iyi', 'a'], ['nice', 'güzel', 'a'], ['beautiful', 'güzel', 'a'], ['ugly', 'çirkin', 'an'],
  ['long', 'uzun', 'a'], ['short', 'kısa', 'a'], ['happy', 'mutlu', 'a'], ['sad', 'üzgün', 'a'],
  ['hot', 'sıcak', 'a'], ['cold', 'soğuk', 'a'], ['warm', 'ılık', 'a'], ['clean', 'temiz', 'a'],
  ['dirty', 'kirli', 'a'], ['fast', 'hızlı', 'a'], ['slow', 'yavaş', 'a'], ['easy', 'kolay', 'an'],
  ['heavy', 'ağır', 'a'], ['light', 'hafif', 'a'], ['soft', 'yumuşak', 'a'], ['expensive', 'pahalı', 'an'],
  ['cheap', 'ucuz', 'a'], ['strong', 'güçlü', 'a'], ['young', 'genç', 'a'], ['funny', 'komik', 'a'],
  ['quiet', 'sessiz', 'a'], ['empty', 'boş', 'an'], ['full', 'dolu', 'a'], ['friendly', 'cana yakın', 'a'],
  ['lovely', 'sevimli', 'a'], ['tiny', 'minik', 'a'], ['huge', 'kocaman', 'a'], ['wonderful', 'harika', 'a']
].map(([en, tr, art]) => ({ en, tr, art }));

// --- Verbs: english base + the three Turkish forms the frames use ------------
//   inf  = infinitive        ("koşmak")            -> "... istiyorum", "... önemlidir"
//   pres = 1st-person present ("koşuyorum")        -> "Her gün ..."
//   ger  = accusative gerund  ("koşmayı")          -> "... severim"
export const VERBS = [
  ['run', 'koşmak', 'koşuyorum', 'koşmayı'],
  ['walk', 'yürümek', 'yürüyorum', 'yürümeyi'],
  ['swim', 'yüzmek', 'yüzüyorum', 'yüzmeyi'],
  ['jump', 'zıplamak', 'zıplıyorum', 'zıplamayı'],
  ['sleep', 'uyumak', 'uyuyorum', 'uyumayı'],
  ['dance', 'dans etmek', 'dans ediyorum', 'dans etmeyi'],
  ['read', 'okumak', 'okuyorum', 'okumayı'],
  ['write', 'yazmak', 'yazıyorum', 'yazmayı'],
  ['draw', 'çizmek', 'çiziyorum', 'çizmeyi'],
  ['paint', 'boyamak', 'boyuyorum', 'boyamayı'],
  ['play', 'oynamak', 'oynuyorum', 'oynamayı'],
  ['work', 'çalışmak', 'çalışıyorum', 'çalışmayı'],
  ['cry', 'ağlamak', 'ağlıyorum', 'ağlamayı'],
  ['laugh', 'gülmek', 'gülüyorum', 'gülmeyi'],
  ['talk', 'konuşmak', 'konuşuyorum', 'konuşmayı'],
  ['listen', 'dinlemek', 'dinliyorum', 'dinlemeyi'],
  ['watch', 'izlemek', 'izliyorum', 'izlemeyi'],
  ['wait', 'beklemek', 'bekliyorum', 'beklemeyi'],
  ['think', 'düşünmek', 'düşünüyorum', 'düşünmeyi'],
  ['learn', 'öğrenmek', 'öğreniyorum', 'öğrenmeyi'],
  ['win', 'kazanmak', 'kazanıyorum', 'kazanmayı'],
  ['cook', 'yemek pişirmek', 'yemek pişiriyorum', 'yemek pişirmeyi'],
  ['sing', 'şarkı söylemek', 'şarkı söylüyorum', 'şarkı söylemeyi'],
  ['travel', 'seyahat etmek', 'seyahat ediyorum', 'seyahat etmeyi'],
  ['rest', 'dinlenmek', 'dinleniyorum', 'dinlenmeyi'],
  ['open', 'açmak', 'açıyorum', 'açmayı'],
  ['clean', 'temizlemek', 'temizliyorum', 'temizlemeyi'],
  ['pay', 'ödemek', 'ödüyorum', 'ödemeyi'],
  ['sell', 'satmak', 'satıyorum', 'satmayı'],
  ['smile', 'gülümsemek', 'gülümsüyorum', 'gülümsemeyi'],
  ['drive', 'araba sürmek', 'araba sürüyorum', 'araba sürmeyi'],
  ['study', 'ders çalışmak', 'ders çalışıyorum', 'ders çalışmayı']
].map(([en, inf, pres, ger]) => ({ en, inf, pres, ger }));

// --- Standalone opinion sentences (for the B2+ opinion frames) ---------------
// Each is a full, natural clause in both languages; the frame just wraps it,
// so the Turkish stays correct no matter which frame picks it.
export const OPINION_SENTENCES = [
  ['this decision was a mistake', 'bu karar bir hataydı'],
  ['the meeting could have been an email', 'bu toplantı bir e-posta olabilirdi'],
  ['we should focus on quality, not speed', 'hız yerine kaliteye odaklanmalıyız'],
  ['remote work is here to stay', 'uzaktan çalışma kalıcı'],
  ['the price is far too high', 'fiyat çok fazla yüksek'],
  ['their service has really improved', 'hizmetleri gerçekten iyileşti'],
  ['we need a clearer plan', 'daha net bir plana ihtiyacımız var'],
  ['the results speak for themselves', 'sonuçlar kendini gösteriyor'],
  ['this approach simply will not work', 'bu yaklaşım kesinlikle işe yaramayacak'],
  ['everyone deserves a second chance', 'herkes ikinci bir şansı hak eder'],
  ['honesty matters more than being right', 'dürüstlük haklı olmaktan daha önemli'],
  ['the project is behind schedule', 'proje programın gerisinde'],
  ['we are asking the wrong question', 'yanlış soruyu soruyoruz'],
  ['the evidence is not convincing', 'kanıtlar ikna edici değil'],
  ['small changes can make a big difference', 'küçük değişiklikler büyük fark yaratabilir'],
  ['the deadline is unrealistic', 'teslim tarihi gerçekçi değil'],
  ['we have to be honest with ourselves', 'kendimize karşı dürüst olmalıyız'],
  ['their argument has a serious flaw', 'onların argümanında ciddi bir kusur var'],
  ['the customer is not always right', 'müşteri her zaman haklı değildir'],
  ['this is a risk worth taking', 'bu, alınmaya değer bir risk'],
  ['we learn more from failure than success', 'başarıdan çok başarısızlıktan öğreniriz'],
  ['the design needs a complete rethink', 'tasarımın baştan düşünülmesi gerekiyor'],
  ['time is the one thing we cannot buy back', 'zaman, geri satın alamayacağımız tek şey'],
  ['the numbers do not add up', 'rakamlar tutmuyor'],
  ['change is uncomfortable but necessary', 'değişim rahatsız edici ama gerekli'],
  ['we are spreading ourselves too thin', 'kendimizi fazla yıpratıyoruz'],
  ['the best solution is often the simplest one', 'en iyi çözüm çoğu zaman en basit olanıdır'],
  ['this feedback is actually a gift', 'bu geri bildirim aslında bir armağan'],
  ['we cannot please everyone', 'herkesi memnun edemeyiz'],
  ['the team is stronger than any one person', 'takım, herhangi bir kişiden daha güçlüdür'],
  ['patience is an underrated skill', 'sabır, hafife alınan bir beceridir'],
  ['this trend will not last', 'bu trend sürmeyecek'],
  ['we should listen more than we speak', 'konuştuğumuzdan çok dinlemeliyiz'],
  ['the market is changing faster than ever', 'piyasa her zamankinden hızlı değişiyor'],
  ['a good reputation takes years to build', 'iyi bir itibar yıllar alır'],
  ['perfect is the enemy of good', 'mükemmel, iyinin düşmanıdır'],
  ['we are underestimating the competition', 'rekabeti hafife alıyoruz'],
  ['this problem has been ignored for too long', 'bu sorun çok uzun süredir görmezden gelindi'],
  ['first impressions are hard to change', 'ilk izlenimleri değiştirmek zordur'],
  ['the truth is rarely simple', 'gerçek nadiren basittir']
].map(([en, tr]) => ({ en, tr }));

// --- Everyday activities (gerund) for the "I've been ..." B1 frame -----------
export const ACTIVITIES = [
  ['waiting in line', 'sırada beklemekle'],
  ['studying for the exam', 'sınava çalışmakla'],
  ['looking for my keys', 'anahtarlarımı aramakla'],
  ['working on this report', 'bu rapor üzerinde çalışmakla'],
  ['learning to cook', 'yemek yapmayı öğrenmekle'],
  ['saving up for a trip', 'bir gezi için para biriktirmekle'],
  ['trying to fix my phone', 'telefonumu tamir etmeye çalışmakla'],
  ['practising my English', 'İngilizcemi geliştirmekle'],
  ['cleaning the house', 'evi temizlemekle'],
  ['planning the wedding', 'düğünü planlamakla'],
  ['reading that book', 'o kitabı okumakla'],
  ['training at the gym', 'spor salonunda çalışmakla'],
  ['searching for a new job', 'yeni bir iş aramakla'],
  ['fixing up the garden', 'bahçeyi düzenlemekle'],
  ['writing my thesis', 'tezimi yazmakla'],
  ['taking care of my parents', 'anne babama bakmakla'],
  ['building this app', 'bu uygulamayı geliştirmekle'],
  ['organising the event', 'etkinliği düzenlemekle']
];

export const DURATIONS = [
  ['ten minutes', 'on dakikadır'],
  ['half an hour', 'yarım saattir'],
  ['two hours', 'iki saattir'],
  ['the whole morning', 'bütün sabahtır'],
  ['three days', 'üç gündür'],
  ['a week', 'bir haftadır'],
  ['two weeks', 'iki haftadır'],
  ['a month', 'bir aydır'],
  ['ages', 'uzun zamandır'],
  ['as long as I can remember', 'hatırlayabildiğim kadar uzun süredir']
];

// --- Polite requests (for the "Could you ...?" B1/B2 frames) -----------------
export const REQUESTS = [
  ['open the window', 'pencereyi açar mısın'],
  ['pass me the salt', 'tuzu uzatır mısın'],
  ['speak a little slower', 'biraz daha yavaş konuşur musun'],
  ['send me the details', 'bana ayrıntıları gönderir misin'],
  ['hold the door for me', 'kapıyı benim için tutar mısın'],
  ['turn down the music', 'müziği kısar mısın'],
  ['give me a hand with this', 'bu konuda bana yardım eder misin'],
  ['wait for me outside', 'beni dışarıda bekler misin'],
  ['call me back later', 'beni sonra arar mısın'],
  ['check these figures again', 'bu rakamları tekrar kontrol eder misin'],
  ['keep this between us', 'bunu aramızda tutar mısın'],
  ['let me know when you arrive', 'vardığında haber verir misin'],
  ['move your car', 'arabanı çeker misin'],
  ['explain that one more time', 'bunu bir kez daha açıklar mısın'],
  ['take a look at this', 'buna bir bakar mısın'],
  ['lower your voice a little', 'sesini biraz alçaltır mısın'],
  ['sign here for me', 'benim için buraya imza atar mısın'],
  ['save me a seat', 'bana bir yer ayırır mısın'],
  ['double-check the address', 'adresi bir daha kontrol eder misin'],
  ['bring me a glass of water', 'bana bir bardak su getirir misin']
];

// --- "Where is ...?" destinations for B1 indirect questions ------------------
export const DIRECTIONS_PLACES = [
  ['the nearest station', 'en yakın istasyon'],
  ['the city centre', 'şehir merkezi'],
  ['the main entrance', 'ana giriş'],
  ['the bus stop', 'otobüs durağı'],
  ['the ticket office', 'bilet gişesi'],
  ['the nearest pharmacy', 'en yakın eczane'],
  ['the check-in desk', 'check-in bankosu'],
  ['the meeting room', 'toplantı odası'],
  ['the changing rooms', 'giyinme kabinleri'],
  ['the parking lot', 'otopark'],
  ['the reception', 'resepsiyon'],
  ['the elevator', 'asansör'],
  ['the restroom', 'tuvalet'],
  ['the exit', 'çıkış'],
  ['the information desk', 'danışma'],
  ['gate twelve', 'on ikinci kapı']
];
