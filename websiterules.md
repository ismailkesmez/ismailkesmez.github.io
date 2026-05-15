# Proje Bağlamı ve Genel Hedef
Bu proje, bir Elektrik-Elektronik Mühendisi için hazırlanmış profesyonel bir kişisel CV ve portfolyo web sitesinin yeniden tasarlanmasıdır.
Mevcut bir web sitesi zaten bulunmaktadır. **Mevcut sitedeki hiçbir bilgi, metin veya içerik (projeler, eğitimler, video linkleri) değiştirilmeyecektir.** 
Ana hedef; siteyi modern, profesyonel, güven veren ve teknolojik bir UI/UX tasarımına kavuşturmak, yeni temalar ve modern bileşenler (components) eklemektir.

# Tasarım ve Tema İlkeleri (UI/UX)
- **Profesyonellik ve Ciddiyet:** Mühendislik disiplinini yansıtan temiz, minimalist ve modern bir görünüm. Karmaşadan uzak durulmalıdır.
- **Renk Paleti:** Kurumsal ve güven veren tonlar tercih edilmelidir. Derin lacivert (Navy Blue), çelik grisi (Steel Grey) ana renkler; elektrik mavisi (Electric Blue) veya devre kartı yeşili (Circuit Green) gibi teknik çağrışımlar yapan renkler yalnızca "vurgu" (butonlar, hover efektleri, ikonlar) amacıyla kullanılmalıdır.
- **Karanlık Mod (Dark Mode):** Mühendislik ve yazılım dünyasında sıkça tercih edildiği için, sitenin kusursuz bir "Dark Mode" desteği olmalıdır.
- **Tipografi:** Okunabilirliği yüksek, modern sans-serif fontlar (örneğin: Inter, Roboto, veya SF Pro) kullanılmalıdır.
- **Görsel Çizgi:** Elektrik/Elektronik temasına uygun ince çizgiler, ızgara (grid) arka planlar veya çok hafif devre desenleri (background pattern) estetik bir şekilde, içeriği boğmadan kullanılabilir.

# İçerik Yapısı ve Gösterim Kuralları
Aşağıdaki içeriklerin sitede bulunduğu varsayılarak, bu bölümlerin tasarımsal olarak en iyi şekilde sergilenmesi sağlanmalıdır:
1. **Hakkımda / Profil:** Yetkinliklerin ve mühendislik vizyonunun net okunduğu, şık bir profil kartı veya kahraman (hero) alanı.
2. **Projeler ve Eğitim İçerikleri (Kritik Alan):**
   - Transformatörler, AC/DC motorlar ve RCD (Kaçak Akım Rölesi) çalışma prensipleri gibi teknik konular.
   - Arduino tabanlı motor kontrol projeleri ve donanım uygulamaları.
   - Elektrik faturası hesaplama araçları gibi pratik mühendislik çözümleri.
   *Tasarım Kuralı:* Bu projeler modern kart yapıları (card UI) ile sergilenmeli, teknik terimler şık etiketler (badge) ile vurgulanmalıdır.
3. **Medya / YouTube Entegrasyonu:** Eğitici teknik "YouTube Shorts" videolarının sitede dikey formata uygun, duyarlı (responsive) ve şık bir grid yapısı içinde listelenmesi sağlanmalıdır.
4. **İletişim:** Minimal ve fonksiyonel bir iletişim formu ve sosyal medya/GitHub/YouTube bağlantıları.

# Geliştirme ve Kodlama Standartları
- **İçerik Bütünlüğü:** `lorem ipsum` gibi sahte metinler üretilmeyecek, mevcut içerikler korunacaktır. Yeni bir bileşen tasarlandığında, mevcut veri yapısına uygun yer tutucular (placeholder) bırakılacaktır.
- **Responsive Tasarım:** Site, mobil cihazlardan (özellikle YouTube Shorts içeriklerinin mobilden izlenme oranı düşünülerek) geniş masaüstü ekranlara kadar her cihazda kusursuz görünmelidir. (Mobile-first yaklaşımı)
- **Animasyonlar:** CSS veya JS tabanlı animasyonlar (örn. sayfa geçişleri, kart hover efektleri) yumuşak ve abartısız olmalıdır. Sitenin hızını ve profesyonelliğini etkilememelidir.
- **Modülerlik:** Kodlar tekrar kullanılabilir bileşenler (components) halinde yazılmalı ve temiz kod (clean code) prensiplerine uyulmalıdır.

# Kesin Yasaklar
- Eğlence veya oyun sitelerini andıran çocuksu renkler ve aşırı hareketli, dikkat dağıtıcı animasyonlar kullanmak YASAKTIR.
- Mevcut kişisel bilgileri, proje detaylarını veya teknik açıklamaları yapay zeka inisiyatifiyle "iyileştirmek" veya değiştirmek YASAKTIR. Sadece kod ve tasarım iyileştirilecektir.


Siteyi project klasörünün içine kurdun. Artık verilen talimatlara göre düzenleyeceksin. 