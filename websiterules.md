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


Güncel Sitenin kodları:

<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>İsmail Kesmez | Electrical & Electronics Engineer</title>
  <meta name="description" content="İsmail Kesmez - Electrical & Electronics Engineer. Projects, skills and contact." />
  
  <link rel="icon" href="assets/images/profile-pic (1).png" type="image/png">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    /* Platform-specific font tuning */
    @supports (-webkit-touch-callout: none) {
      body{margin:0;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--text);background:#0b0f14;min-height:100dvh;overflow:hidden;}
    }
    @supports not (-webkit-touch-callout: none) {
      body{font-family:Inter,Roboto,'Noto Sans',system-ui,Arial,sans-serif;}
    }

    :root{
      --bg:#0b0f14; --card:#111826; --muted:#f1f5f9; --text:#ffffff; --accent:#38bdf8; --glass: rgba(17,24,38,.85);
    }
    *{box-sizing:border-box}
    html,body{height:100%;width:100%;margin:0;padding:0;overscroll-behavior:none;background:#0b0f14; color: #ffffff;}

    /* Sticky glass header */
    header{position:fixed;top:0;left:0;right:0;z-index:50;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:calc(14px + env(safe-area-inset-top)) 20px 14px;background:#0b0f14;backdrop-filter: blur(12px);border-bottom:1px solid rgba(255,255,255,.08)}
    
    header strong{font-weight:900;letter-spacing:.3px; color: var(--accent);}
    
    nav a{margin:0 10px;color:#cbd5e1;cursor:pointer;font-weight:600}
    nav a.active{color:#ffffff}
    nav a:hover{color:#ffffff}

    .lang{display:flex;align-items:center;gap:10px}
    .flag{width:24px;height:16px;object-fit:cover;border-radius:4px;cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,.4);transition:transform .25s ease, box-shadow .25s ease, opacity .25s ease}
    .flag:hover{transform:translateY(-2px) scale(1.08); box-shadow:0 10px 24px rgba(0,0,0,.5)}
    .flag:active{transform:scale(0.96); opacity:.9}

    /* Presentation container */
    .deck{position:fixed;left:0;right:0;top:calc(64px + env(safe-area-inset-top));bottom:env(safe-area-inset-bottom);height:auto;background:#0b0f14;}
    .slides{height:100%; transition: transform 900ms cubic-bezier(.2,.8,.2,1);}
    
    .slide{height:100%; display:flex; align-items:center; justify-content:center; padding:24px; position: relative;}

    /* Cards / sections */
    .card{max-width:1000px; width:100%; background:var(--glass); backdrop-filter: blur(10px);
      border:1px solid rgba(255,255,255,.08); border-radius:28px; padding:36px; box-shadow:0 20px 60px rgba(0,0,0,.45);
      color: #ffffff;
      /* İçerik taşarsa scroll olsun */
      max-height: 80vh; 
      overflow-y: auto;
      display: flex; flex-direction: column;
      /* Scroll davranışı için yumuşaklık */
      -webkit-overflow-scrolling: touch;
    }

    /* Kartın scrollbar tasarımı */
    .card::-webkit-scrollbar { width: 6px; }
    .card::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); border-radius: 4px; }
    .card::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.3); border-radius: 4px; }
    .card::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.5); }

    h1, h2, h3, h4, h5, h6 { color: #ffffff !important; margin-top: 0;}
    p, li, span, div { color: #ffffff; }

    /* Paragraflar arası boşluk */
    .card p { margin-bottom: 16px; line-height: 1.6; }
    .card p:last-child { margin-bottom: 0; }

    h1{font-size: clamp(32px, 7vw, 72px); line-height:1.1; margin-bottom:12px; font-weight:900; letter-spacing:-.02em}
    h2{font-size: clamp(26px, 3.2vw, 44px); margin-bottom:20px}
    h3{margin:24px 0 8px; font-size:22px; color:var(--accent) !important;}
    
    .muted{color: #f1f5f9 !important;}
    
    .badges{margin:18px 0 6px}
    .badge{display:inline-block;padding:10px 14px;border-radius:999px;background:#0b1220;border:1px solid rgba(255,255,255,.12);color:#c7d2fe;margin-right:10px;margin-bottom:10px}

    .btn{display:inline-flex;align-items:center;gap:8px;padding:16px 20px;border-radius:18px;
      background:linear-gradient(135deg,#38bdf8,#60a5fa); color:#ffffff !important; font-weight:900; text-decoration: none; transition: transform 0.2s ease;}
    .btn:hover{ transform: scale(1.02); }

    .grid-2{display:grid;grid-template-columns:1fr 1fr; gap:24px}
    @media (max-width:900px){.grid-2{grid-template-columns:1fr}}

    /* --- SERTİFİKA GRID SİSTEMİ --- */
    .cert-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr); 
      gap: 16px;
      margin-top: 24px;
      padding-right: 8px; 
    }

    @media (min-width: 900px) {
      .cert-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 24px; 
      }
    }

    .cert-item {
      display: block;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.1);
      background: rgba(0,0,0,0.3);
      transition: transform 0.3s ease, border-color 0.3s ease;
      position: relative;
    }
    
    .cert-item:hover {
      transform: translateY(-4px);
      border-color: var(--accent);
      z-index: 2;
    }

    .cert-item img {
      width: 100%;
      height: 100%; 
      object-fit: cover; 
      display: block;
      aspect-ratio: 4/3; 
    }
    /* ----------------------------------- */

    .reveal{opacity:0; transform: translateY(24px) scale(.98); transition: 900ms cubic-bezier(.2,.8,.2,1)}
    .reveal.show{opacity:1; transform:none}

    .bg-grid{position:fixed; inset:0; pointer-events:none; background:
      linear-gradient(transparent 95%, rgba(255,255,255,.03) 95%),
      linear-gradient(90deg, transparent 95%, rgba(255,255,255,.03) 95%);
      background-size: 40px 40px, 40px 40px; opacity:.15}

    footer{position:fixed;left:0;right:0;bottom:env(safe-area-inset-bottom);background:#0b0f14;text-align:center;opacity:.6;font-size:12px;padding-bottom:6px; color: #ffffff;}

    /* SKILLS SLIDE */
    .skills-slide {
        align-items: flex-start !important; 
        padding-top: 80px !important;
        overflow: hidden;
    }
    
    @media (max-width: 600px) {
        .skills-slide {
            padding-top: 60px !important;
        }
    }

    .bg-rotate {
        position: absolute;
        inset: -50%;
        background: url('assets/images/stm32.png') center/contain no-repeat;
        transform: rotate(90deg);
        z-index: -2;
        opacity: 0.8;
        pointer-events: none;
    }

    .skills-overlay {
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at top, rgba(11,15,20,0.4), rgba(11,15,20,0.95));
        z-index: -1;
        pointer-events: none;
    }

    .skills-card { position: relative; z-index: 1; }

    /* Contact icons */
    .contact-list{display:flex;flex-direction:column;gap:16px;margin-top:20px}
    .contact-item{display:flex;align-items:center;gap:14px;padding:14px 18px;border-radius:16px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);transition:transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s ease, background .35s ease;position:relative;max-width:100%;overflow:hidden;word-break:break-word;}
    .contact-item:hover{transform:translateY(-4px);box-shadow:0 18px 40px rgba(0,0,0,.45);background:rgba(255,255,255,.07)}
    
    .contact-icon{width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#38bdf8,#60a5fa);color:#ffffff;font-size:20px;flex-shrink:0}
    
    .contact-text{display:flex;flex-direction:column}
    .contact-text span{font-size:13px;color:#cbd5e1 !important;}
    .contact-text strong{font-size:16px;color:#ffffff !important;}

    @keyframes press{ 0%{transform:scale(1)} 50%{transform:scale(.96)} 100%{transform:scale(1)} }
    .contact-item:active{ animation:press .18s ease-out; box-shadow:0 8px 20px rgba(0,0,0,.35); }
  </style>
</head>
<body>
  <div class="bg-grid"></div>

  <header>
    <strong>İsmail Kesmez</strong>
    <div style="display:flex;align-items:center;gap:16px">
      <nav>
        <a data-index="0" class="active" data-i18n="nav_home">Ana Sayfa</a>
        <a data-index="1" data-i18n="nav_about">Hakkımda</a>
        <a data-index="2" data-i18n="nav_skills">Yetenekler</a>
        <a data-index="3" data-i18n="nav_projects">Projeler</a>
        <a data-index="4" data-i18n="nav_certs">Sertifikalar</a>
        <a data-index="5" data-i18n="nav_contact">İletişim</a>
      </nav>
      <div class="lang">
        <img class="flag" id="tr" title="Türkçe" alt="TR" src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" onerror="this.onerror=null;this.src='https://flagcdn.com/w20/tr.png';">
        <img class="flag" id="en" title="English" alt="EN" src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" onerror="this.onerror=null;this.src='https://flagcdn.com/w20/gb.png';">
      </div>
    </div>
  </header>

  <div class="deck">
    <div class="slides" id="slides">

      <section class="slide">
        <div class="card reveal show">
          <h1 data-i18n="title">Elektrik‑Elektronik Mühendisi</h1>
          <p class="muted" data-i18n="subtitle">Elektrik-Elektronik Mühendisliği bölümünden yeni mezun oldum ve mühendislik alanında kendimi geliştirebileceğim, üretken bir ekip içinde yer alabileceğim bir pozisyon arıyorum. Üniversite sürecinde kablosuz enerji transferi, otomasyon ve güç elektroniği alanlarında projeler ve simülasyon çalışmaları yaptım. Öğrenmeye açık, disiplinli ve sorumluluk sahibi biriyim. Sahada ve ofis ortamında tecrübe kazanarak, teknik bilgi birikimimi gerçek projelere yansıtmayı ve çalıştığım kuruma değer katmayı hedefliyorum.</p>
          <div class="badges">
            <span class="badge">STM32</span>
            <span class="badge">Arduino</span>
            <span class="badge" data-i18n="badge_power">Güç Elektroniği</span>
            <span class="badge" data-i18n="badge_control">Kontrol</span>
            <span class="badge">C/C++</span>
          </div>
          <div style="margin-top:24px; display:flex; gap:12px; flex-wrap:wrap;">
            <a class="btn" href="mailto:ismailkesmez23@gmail.com" data-i18n="cta">İletişime Geç</a>
            <a class="btn" href="assets/documents/Ismail_Kesmez_CV.pdf" target="_blank" data-i18n="cta_cv">CV Görüntüle</a>
          </div>
        </div>
      </section>

      <section class="slide">
        <div class="card reveal">
          <h2 data-i18n="about_title">Hakkımda</h2>
          <p class="muted" data-i18n="about_p1">Elektrik-Elektronik Mühendisiyim ve kariyerimi belirli bir alanla sınırlamak yerine, ilerlemek istediğim yolu bilinçli şekilde inşa etmeyi hedefleyen bir mühendislik anlayışına sahibim. Gömülü sistemler, elektronik donanım ve sistem entegrasyonu başta olmak üzere; bir ürünün veya teknolojinin yalnızca tek bir parçasını değil, bütününü anlayabilen bir mühendis olmayı önemsiyorum. Bu nedenle, her alanda yüzeysel bilgi yerine; farklı disiplinlerde anlamlı ve birbiriyle bağlantılı bilgi birikimi oluşturmaya odaklanıyorum.</p>
          <p class="muted" data-i18n="about_p2">Mühendislik benim için durağan bir meslek değil, sürekli gelişim gerektiren dinamik bir süreçtir. Bu bakış açısıyla, her gün kendime yeni bir şey katmayı, teknik bilgimi güncel tutmayı ve öğrendiklerimi pratiğe dökmeyi temel prensip haline getirdim. Teknolojinin hızlı değiştiği günümüzde, yenilikleri kaçırmamak, yalnızca takip etmekle değil; bu yeniliklerin sistemler üzerindeki etkisini anlayabilmekle mümkündür. Bu yüzden hem teorik altyapımı güçlendirmeye hem de uygulamalı çalışmalarla bilgimi pekiştirmeye önem veriyorum.</p>
          <p class="muted" data-i18n="about_p3">Farklı sektörlerde ve projelerde karşılaşılabilecek değişken gereksinimlere hızlı adaptasyon sağlayabilmek, benim için teknik yetkinlik kadar değerlidir. Yeni bir teknolojiye, araca veya probleme yaklaşırken öğrenmeye açık olmak ve çözüm odaklı düşünmek, çalışma disiplinimin temelini oluşturur. Bilginin tek başına yeterli olmadığı; doğru yerde, doğru şekilde kullanılmasının fark yarattığına inanıyorum.</p>
          <p class="muted" data-i18n="about_p4">Uzun vadede hedefim; sürekli gelişen, değişen teknolojilere uyum sağlayabilen, farklı disiplinleri bir araya getirerek katma değer üreten ve ilerlediği yolu bilinçli şekilde şekillendiren bir mühendis olarak kariyerimi sürdürmektir.</p>
        </div>
      </section>

      <section class="slide skills-slide">
        <div class="bg-rotate"></div>
        <div class="skills-overlay"></div>
        
        <div class="card reveal skills-card">
          <h2 data-i18n="skills_title">Yetenekler</h2>
          
          <h3 data-i18n="s1_t">Gömülü Sistemler (Embedded Systems)</h3>
          <p class="muted" data-i18n="s1_d">Gömülü sistemler alanında, mikrodenetleyici tabanlı sistemlerin temel çalışma prensipleri üzerinde bilgi birikimimi geliştiriyorum. MCU mimarisi, çevresel birimler (peripheral), clock yapısı ve bellek organizasyonu gibi konularda teorik altyapıya sahibim. STM32 ekosistemi üzerinde; GPIO, timer, interrupt, ADC, UART ve I2C gibi temel modüllerin nasıl yapılandırıldığını ve sistem davranışını nasıl etkilediğini biliyorum. Gömülü yazılımın, donanımdan bağımsız düşünülemeyeceğinin farkındayım ve bu nedenle konfigürasyon, zamanlama ve deterministik davranış konularına özellikle önem veriyorum.</p>

          <h3 data-i18n="s2_t">Elektronik ve Devre Bilgisi</h3>
          <p class="muted" data-i18n="s2_d">Analog ve dijital elektronik temel prensiplerine hâkimim. Elektronik devrelerin çalışma mantığını yalnızca şema seviyesinde değil, sistem davranışı açısından da değerlendirebiliyorum. Güç besleme, inverter yapıları ve sinyal davranışı konularında temel bilgiye sahibim. Elektronik tasarımın; kararlılık, verim ve güvenilirlik kriterleriyle birlikte ele alınması gerektiğini biliyor, bu doğrultuda sistem seviyesinde düşünmeye çalışıyorum.</p>

          <h3 data-i18n="s3_t">Güç Elektroniği ve Sistem Davranışı</h3>
          <p class="muted" data-i18n="s3_d">Bitirme projem kapsamında inverter sistemleri, frekans–gerilim ilişkisi ve bu parametrelerin sistem davranışı üzerindeki etkileri üzerine çalıştım. Güç elektroniği uygulamalarında verim, ısınma ve kontrolün öneminin farkındayım. Bu alanda edindiğim bilgi, bana yalnızca devreyi değil, devrenin sistemi nasıl etkilediğini analiz etme yeteneği kazandırdı.</p>

          <h3 data-i18n="s4_t">Öğrenme ve Adaptasyon Yeteneği</h3>
          <p class="muted" data-i18n="s4_d">Yeni teknolojilere ve araçlara hızlı adapte olabilen bir yapıya sahibim. Her gün kendimi geliştirmeyi, öğrendiğim bilgileri pekiştirmeyi ve güncel kalmayı bir alışkanlık haline getirdim. Farklı disiplinlerde bilgi sahibi olmanın, mühendislikte daha doğru ve bütüncül kararlar almayı sağladığına inanıyorum.</p>

          <h3 data-i18n="s5_t">Program Dilleri</h3>
          <p class="muted" data-i18n="s5_d_c"><strong>C Dili:</strong> Arduino UNO ve Mega platformlarında gömülü sistem uygulamaları geliştirdim. Sensör okuma, motor kontrolü, röle tetikleme ve zamanlama tabanlı kontrol algoritmaları yazdım. Donanım-yazılım etkileşimi gerektiren projelerde aktif olarak kullandım.</p>
          <p class="muted" data-i18n="s5_d_cpp"><strong>C++ Dili:</strong> Arduino projelerinde modüler ve okunabilir kod yapıları oluşturdum. Kütüphane kullanımı, fonksiyonel ayrıştırma ve temel nesne tabanlı yapı ile mikrodenetleyici uygulamaları geliştirdim.</p>
          <p class="muted" data-i18n="s5_d_py"><strong>Python:</strong> OpenCV kütüphanesini kullanarak görüntü işleme uygulamalarında görev aldım. Bir projede hareket halindeki bir aracın plakasının drone görüntüsü üzerinden tespit ve takibini gerçekleştiren sistemin yazılımını inceledim.</p>
          <p class="muted" data-i18n="s5_d_plc"><strong>PLC:</strong> Siemens TIA Portal ortamında Ladder Diagram kullanarak temel seviye PLC uygulamaları geliştirdim. Giriş-çıkış kontrolü, zamanlayıcılar ve basit otomasyon senaryoları üzerine çalışmalar yaptım.</p>
        </div>
      </section>

      <section class="slide">
        <div class="card reveal">
          <h2 data-i18n="projects_title">Projeler</h2>
          
          <h3 data-i18n="p1_title">Kablosuz Enerji Aktarımlı Elektrikli Araç Şarj Yolu (Bitirme Projesi)</h3>
          <p class="muted" data-i18n="p1_desc">Bu projede, güneş enerjisi ile beslenen, kablosuz güç transferi kullanarak hareketli bir aracı şarj edebilen modüler bir yol sistemi tasarlanmış ve prototipi oluşturulmuştur.<br><br>Sistem; 20W 12V güneş paneli, 12V akü, 12V DC → 220V AC kare dalga inverter ve Arduino Uno kontrol ünitesinden oluşmaktadır. Yol boyunca yerleştirilmiş 16 adet U tipi ferrit çekirdekli verici bobin, IR sensörler yardımıyla aracın konumuna göre sadece aracın altında bulunan bobin aktif olacak şekilde kontrol edilmektedir. Bu sayede enerji israfı önlenmiş ve sistem verimliliği artırılmıştır.<br><br>Araç üzerinde ise iki adet alıcı bobin, doğrultma ve regülasyon devresi ile 8V 1.8Ah bataryanın şarj edilmesi sağlanmıştır. Araç, bu batarya ile çalışan Arduino, motor sürücü ve 4 adet 6V DC motor içermektedir.<br><br>Projede ayrıca 100 kHz çalışma frekansına uygun, UU6015 ferrit çekirdek üzerinde 20 tur verici bobin tasarımı yapılmış ve güç aktarımı deneysel olarak test edilmiştir.<br><br><strong>Kazanımlar:</strong><br>• Güç elektroniği<br>• Yüksek frekanslı inverter tasarımı<br>• Kablosuz enerji transferi<br>• Arduino ile gerçek zamanlı kontrol<br>• Sensör tabanlı otomasyon</p>

          <h3 data-i18n="p2_title">Güneş Enerjili Tarımsal Sulama Sistemi Tasarımı</h3>
          <p class="muted" data-i18n="p2_desc">Bu projede, 4 kW gücünde (İmpo SK 408/23) dalgıç pompayı besleyebilecek güneş enerjili bir sulama sisteminin boyutlandırması ve sistem tasarımı yapılmıştır. Hedef; 1 dönümlük tarım arazisi için günlük 5000–8000 litre su sağlayabilecek, günde 5–8 saat çalışabilen, şebekeden bağımsız (off-grid) bir sistem oluşturmaktır.<br><br><strong>Sistem Kapsamı:</strong><br>• 6 kW güneş paneli gücü<br>• Akü destekli enerji depolama yapısı<br>• Uygun inverter seçimi<br>• Günlük enerji tüketimi ve üretim hesabı<br>• Pompa kalkış akımı ve sürekli çalışma gücü analizleri<br><br><strong>Kazanımlar:</strong><br>• Yenilenebilir enerji sistemleri boyutlandırma<br>• Yük analizi<br>• İnverter ve akü kapasitesi hesaplama<br>• Tarımsal enerji sistemleri planlama</p>

          <h3 data-i18n="p3_title">Optimizasyon Tabanlı PID Kontrolcü Tasarımı (Akademik Çalışma)</h3>
          <p class="muted" data-i18n="p3_desc">Bu çalışmada, “Design of PID Controllers with Computational Optimization Approach” başlığı altında, klasik PID ayarlama yöntemleri yerine optimizasyon algoritmaları kullanılarak PID parametrelerinin belirlenmesi konusu incelenmiştir. Kontrol teorisi dersi kapsamında yapılan bu projede; PID kontrolcülerin çalışma prensipleri, manuel ayarlama yöntemlerinin dezavantajları ve optimizasyon tabanlı yaklaşımın performans iyileştirmesi teorik ve uygulamalı olarak ele alınmıştır.<br><br>Amaç; sistemin aşım (overshoot), yerleşme süresi (settling time) ve kararlı hal hatası (steady-state error) gibi performans kriterlerini iyileştiren PID parametrelerini hesaplamalı yöntemlerle elde etmektir.<br><br><strong>Kazanımlar:</strong><br>• Kontrol sistemleri<br>• PID optimizasyonu<br>• Mühendislikte sayısal yöntemlerin kullanımı<br>• Sistem performans analizi</p>
          
        </div>
      </section>

      <section class="slide">
        <div class="card reveal">
          <h2 data-i18n="cert_title">Sertifikalar</h2>
          <p class="muted" data-i18n="cert_desc">Aldığım eğitimler ve kazandığım yetkinlik sertifikaları:</p>
          
          <div class="cert-grid">
            
            <a class="cert-item" href="assets/certificates/stm32basic.png" target="_blank">
              <img src="assets/certificates/stm32basic.png" alt="STM32 Basic" loading="lazy">
            </a>

            <a class="cert-item" href="assets/certificates/Electric_Power_Systems.png" target="_blank">
              <img src="assets/certificates/Electric_Power_Systems.png" alt="Electric Power Systems" loading="lazy">
            </a>

            <a class="cert-item" href="assets/certificates/EmbeddedSystemUsingC.png" target="_blank">
              <img src="assets/certificates/EmbeddedSystemUsingC.png" alt="Embedded Systems using C" loading="lazy">
            </a>

            <a class="cert-item" href="assets/certificates/Google Prompting Essentials_Coursera.png" target="_blank">
              <img src="assets/certificates/Google Prompting Essentials_Coursera.png" alt="Google Prompting" loading="lazy">
            </a>
            <a class="cert-item" href="assets/certificates/Güneş_enerji_sistemi_tasarımı_udemy.png" target="_blank">
              <img src="assets/certificates/Güneş_enerji_sistemi_tasarımı_udemy.png" alt="Güneş Enerji Tasarımı" loading="lazy">
            </a>
            <a class="cert-item" href="assets/certificates/Temel_elektrik_elektronik_kursu_udemy.png" target="_blank">
              <img src="assets/certificates/Temel_elektrik_elektronik_kursu_udemy.png" alt="Temel Elektrik Elektronik" loading="lazy">
            </a>
            <a class="cert-item" href="assets/certificates/Finansal Okuryazarlık.png" target="_blank">
              <img src="assets/certificates/Finansal Okuryazarlık.png" alt="Finansal Okuryazarlık" loading="lazy">
            </a>
            <a class="cert-item" href="assets/certificates/İş_analizi_nedir_linkedin.png" target="_blank">
              <img src="assets/certificates/İş_analizi_nedir_linkedin.png" alt="İş Analizi Nedir" loading="lazy">
            </a>
            <a class="cert-item" href="assets/certificates/Üretken_yz_için_istem_mühendisliğine_giriş_Linkedin.png" target="_blank">
              <img src="assets/certificates/Üretken_yz_için_istem_mühendisliğine_giriş_Linkedin.png" alt="İstem Mühendisliği" loading="lazy">
            </a>
            <a class="cert-item" href="assets/certificates/Üretken_yz_nedir_Linkedin.png" target="_blank">
              <img src="assets/certificates/Üretken_yz_nedir_Linkedin.png" alt="Üretken YZ Nedir" loading="lazy">
            </a>
            <a class="cert-item" href="assets/certificates/Proje Yönetimi _ BTK.png" target="_blank">
              <img src="assets/certificates/Proje Yönetimi _ BTK.png" alt="Proje Yönetimi BTK" loading="lazy">
            </a>
            <a class="cert-item" href="assets/certificates/Gönüllü Sertifikası.png" target="_blank">
              <img src="assets/certificates/Gönüllü Sertifikası.png" alt="Samsung Boğaziçi Yüzme" loading="lazy">
            </a>
            <a class="cert-item" href="assets/certificates/Gönüllü Sertifikası 2.png" target="_blank">
              <img src="assets/certificates/Gönüllü Sertifikası 2.png" alt="Vestel Manisa Maratonu" loading="lazy">
            </a>
            <a class="cert-item" href="assets/certificates/Gönüllü sertifikası 3.png" target="_blank">
              <img src="assets/certificates/Gönüllü sertifikası 3.png" alt="Wings for Life" loading="lazy">
            </a>
            <a class="cert-item" href="assets/certificates/Modern_yönetim_için_iletişim yetenekleri.png" target="_blank">
              <img src="assets/certificates/Modern_yönetim_için_iletişim yetenekleri.png" alt="Modern Yönetim İletişim" loading="lazy">
            </a>
            <a class="cert-item" href="assets/certificates/Yapay_Zekaya_giriş.png" target="_blank">
              <img src="assets/certificates/Yapay_Zekaya_giriş.png" alt="Yapay Zekaya Giriş" loading="lazy">
            </a>
            <a class="cert-item" href="assets/certificates/YZ_ve_sürdürülebilirliğe_giriş.png" target="_blank">
              <img src="assets/certificates/YZ_ve_sürdürülebilirliğe_giriş.png" alt="YZ ve Sürdürülebilirlik" loading="lazy">
            </a>
            <a class="cert-item" href="assets/certificates/Siber_güvenlik_farkındalığı.png" target="_blank">
              <img src="assets/certificates/Siber_güvenlik_farkındalığı.png" alt="Siber Güvenlik Farkındalığı" loading="lazy">
            </a>
            <a class="cert-item" href="assets/certificates/Linkedin_EkipleriYönetmek.png" target="_blank">
              <img src="assets/certificates/Linkedin_EkipleriYönetmek.png" alt="Ekipleri Yönetmek" loading="lazy">
            </a>
            <a class="cert-item" href="assets/certificates/Yz.png" target="_blank">
              <img src="assets/certificates/Yz.png" alt="YZ Üretkenlik İpuçları" loading="lazy">
            </a>
            <a class="cert-item" href="assets/certificates/Pilotluk_sertifikası.png" target="_blank">
              <img src="assets/certificates/Pilotluk_sertifikası.png" alt="İHA-1 Pilot Lisansı" loading="lazy">
            </a>

            <a class="cert-item" href="assets/certificates/certificate-1771433506720.png" target="_blank">
              <img src="assets/certificates/certificate-1771433506720.png" alt="Elektrik proje okuması" loading="lazy">
            </a>

            <a class="cert-item" href="assets/certificates/Elektrik Proje Temel Eğitimi_Udemy.png" target="_blank">
              <img src="assets/certificates/Elektrik Proje Temel Eğitimi_Udemy.png" alt="Udemy Elektrik Proje" loading="lazy">
            </a>

          </div>
        </div>
      </section>

      <section class="slide">
        <div class="card reveal">
          <h2 data-i18n="contact_title">İletişim</h2>

          <div class="contact-list">
            <a class="contact-item" href="mailto:ismailkesmez23@gmail.com">
              <div class="contact-icon">✉️</div>
              <div class="contact-text">
                <span data-i18n="email">E‑posta</span>
                <strong>ismailkesmez23@gmail.com</strong>
              </div>
            </a>

            <a class="contact-item" href="https://github.com/ismailkesmez" target="_blank">
              <div class="contact-icon">🐙</div>
              <div class="contact-text">
                <span>GitHub</span>
                <strong>github.com/ismailkesmez</strong>
              </div>
            </a>

            <a class="contact-item" href="https://www.linkedin.com/in/ismail-kesmez-4266a8234/" target="_blank">
              <div class="contact-icon">💼</div>
              <div class="contact-text">
                <span>LinkedIn</span>
                <strong>linkedin.com/in/ismailkesmez</strong>
              </div>
            </a>

            <a class="contact-item" href="https://www.youtube.com/@IsmailKesmez23" target="_blank">
              <div class="contact-icon">📺</div>
              <div class="contact-text">
                <span>YouTube</span>
                <strong>youtube.com/@IsmailKesmez23</strong>
              </div>
            </a>

          </div>
        </div>
      </section>

    </div>
  </div>

  <footer>© <span id="y"></span> İsmail Kesmez</footer>

  <script>
    const dict = {
      tr: {
        nav_home:"Ana Sayfa", nav_about:"Hakkımda", nav_skills:"Yetenekler", nav_projects:"Projeler", nav_contact:"İletişim", nav_certs:"Sertifikalar",
        title:"Elektrik‑Elektronik Mühendisi",
        subtitle:"Elektrik-Elektronik Mühendisliği bölümünden yeni mezun oldum ve mühendislik alanında kendimi geliştirebileceğim, üretken bir ekip içinde yer alabileceğim bir pozisyon arıyorum. Üniversite sürecinde kablosuz enerji transferi, otomasyon ve güç elektroniği alanlarında projeler ve simülasyon çalışmaları yaptım. Öğrenmeye açık, disiplinli ve sorumluluk sahibi biriyim. Sahada ve ofis ortamında tecrübe kazanarak, teknik bilgi birikimimi gerçek projelere yansıtmayı ve çalıştığım kuruma değer katmayı hedefliyorum.",
        badge_power:"Güç Elektroniği", badge_control:"Kontrol", cta:"İletişime Geç", cta_cv:"CV Görüntüle",
        about_title:"Hakkımda",
        about_p1:"Elektrik-Elektronik Mühendisiyim ve kariyerimi belirli bir alanla sınırlamak yerine, ilerlemek istediğim yolu bilinçli şekilde inşa etmeyi hedefleyen bir mühendislik anlayışına sahibim. Gömülü sistemler, elektronik donanım ve sistem entegrasyonu başta olmak üzere; bir ürünün veya teknolojinin yalnızca tek bir parçasını değil, bütününü anlayabilen bir mühendis olmayı önemsiyorum. Bu nedenle, her alanda yüzeysel bilgi yerine; farklı disiplinlerde anlamlı ve birbiriyle bağlantılı bilgi birikimi oluşturmaya odaklanıyorum.",
        about_p2:"Mühendislik benim için durağan bir meslek değil, sürekli gelişim gerektiren dinamik bir süreçtir. Bu bakış açısıyla, her gün kendime yeni bir şey katmayı, teknik bilgimi güncel tutmayı ve öğrendiklerimi pratiğe dökmeyi temel prensip haline getirdim. Teknolojinin hızlı değiştiği günümüzde, yenilikleri kaçırmamak, yalnızca takip etmekle değil; bu yeniliklerin sistemler üzerindeki etkisini anlayabilmekle mümkündür. Bu yüzden hem teorik altyapımı güçlendirmeye hem de uygulamalı çalışmalarla bilgimi pekiştirmeye önem veriyorum.",
        about_p3:"Farklı sektörlerde ve projelerde karşılaşılabilecek değişken gereksinimlere hızlı adaptasyon sağlayabilmek, benim için teknik yetkinlik kadar değerlidir. Yeni bir teknolojiye, araca veya probleme yaklaşırken öğrenmeye açık olmak ve çözüm odaklı düşünmek, çalışma disiplinimin temelini oluşturur. Bilginin tek başına yeterli olmadığı; doğru yerde, doğru şekilde kullanılmasının fark yarattığına inanıyorum.",
        about_p4:"Uzun vadede hedefim; sürekli gelişen, değişen teknolojilere uyum sağlayabilen, farklı disiplinleri bir araya getirerek katma değer üreten ve ilerlediği yolu bilinçli şekilde şekillendiren bir mühendis olarak kariyerimi sürdürmektir.",
        
        skills_title:"Yetenekler",
        s1_t: "Gömülü Sistemler (Embedded Systems)",
        s1_d: "Gömülü sistemler alanında, mikrodenetleyici tabanlı sistemlerin temel çalışma prensipleri üzerinde bilgi birikimimi geliştiriyorum. MCU mimarisi, çevresel birimler (peripheral), clock yapısı ve bellek organizasyonu gibi konularda teorik altyapıya sahibim. STM32 ekosistemi üzerinde; GPIO, timer, interrupt, ADC, UART ve I2C gibi temel modüllerin nasıl yapılandırıldığını ve sistem davranışını nasıl etkilediğini biliyorum. Gömülü yazılımın, donanımdan bağımsız düşünülemeyeceğinin farkındayım ve bu nedenle konfigürasyon, zamanlama ve deterministik davranış konularına özellikle önem veriyorum.",
        s2_t: "Elektronik ve Devre Bilgisi",
        s2_d: "Analog ve dijital elektronik temel prensiplerine hâkimim. Elektronik devrelerin çalışma mantığını yalnızca şema seviyesinde değil, sistem davranışı açısından da değerlendirebiliyorum. Güç besleme, inverter yapıları ve sinyal davranışı konularında temel bilgiye sahibim. Elektronik tasarımın; kararlılık, verim ve güvenilirlik kriterleriyle birlikte ele alınması gerektiğini biliyor, bu doğrultuda sistem seviyesinde düşünmeye çalışıyorum.",
        s3_t: "Güç Elektroniği ve Sistem Davranışı",
        s3_d: "Bitirme projem kapsamında inverter sistemleri, frekans–gerilim ilişkisi ve bu parametrelerin sistem davranışı üzerindeki etkileri üzerine çalıştım. Güç elektroniği uygulamalarında verim, ısınma ve kontrolün öneminin farkındayım. Bu alanda edindiğim bilgi, bana yalnızca devreyi değil, devrenin sistemi nasıl etkilediğini analiz etme yeteneği kazandırdı.",
        s4_t: "Öğrenme ve Adaptasyon Yeteneği",
        s4_d: "Yeni teknolojilere ve araçlara hızlı adapte olabilen bir yapıya sahibim. Her gün kendimi geliştirmeyi, öğrendiğim bilgileri pekiştirmeyi ve güncel kalmayı bir alışkanlık haline getirdim. Farklı disiplinlerde bilgi sahibi olmanın, mühendislikte daha doğru ve bütüncül kararlar almayı sağladığına inanıyorum.",
        s5_t: "Program Dilleri",
        s5_d_c: "<strong>C Dili:</strong> Arduino UNO ve Mega platformlarında gömülü sistem uygulamaları geliştirdim. Sensör okuma, motor kontrolü, röle tetikleme ve zamanlama tabanlı kontrol algoritmaları yazdım. Donanım-yazılım etkileşimi gerektiren projelerde aktif olarak kullandım.",
        s5_d_cpp: "<strong>C++ Dili:</strong> Arduino projelerinde modüler ve okunabilir kod yapıları oluşturdum. Kütüphane kullanımı, fonksiyonel ayrıştırma ve temel nesne tabanlı yapı ile mikrodenetleyici uygulamaları geliştirdim.",
        s5_d_py: "<strong>Python:</strong> OpenCV kütüphanesini kullanarak görüntü işleme uygulamalarında görev aldım. Bir projede hareket halindeki bir aracın plakasının drone görüntüsü üzerinden tespit ve takibini gerçekleştiren sistemin yazılımını inceledim.",
        s5_d_plc: "<strong>PLC:</strong> Siemens TIA Portal ortamında Ladder Diagram kullanarak temel seviye PLC uygulamaları geliştirdim. Giriş-çıkış kontrolü, zamanlayıcılar ve basit otomasyon senaryoları üzerine çalışmalar yaptım.",

        projects_title:"Projeler",
        p1_title:"Kablosuz Enerji Aktarımlı Elektrikli Araç Şarj Yolu (Bitirme Projesi)",
        p1_desc:"Bu projede, güneş enerjisi ile beslenen, kablosuz güç transferi kullanarak hareketli bir aracı şarj edebilen modüler bir yol sistemi tasarlanmış ve prototipi oluşturulmuştur.<br><br>Sistem; 20W 12V güneş paneli, 12V akü, 12V DC → 220V AC kare dalga inverter ve Arduino Uno kontrol ünitesinden oluşmaktadır. Yol boyunca yerleştirilmiş 16 adet U tipi ferrit çekirdekli verici bobin, IR sensörler yardımıyla aracın konumuna göre sadece aracın altında bulunan bobin aktif olacak şekilde kontrol edilmektedir. Bu sayede enerji israfı önlenmiş ve sistem verimliliği artırılmıştır.<br><br>Araç üzerinde ise iki adet alıcı bobin, doğrultma ve regülasyon devresi ile 8V 1.8Ah bataryanın şarj edilmesi sağlanmıştır. Araç, bu batarya ile çalışan Arduino, motor sürücü ve 4 adet 6V DC motor içermektedir.<br><br>Projede ayrıca 100 kHz çalışma frekansına uygun, UU6015 ferrit çekirdek üzerinde 20 tur verici bobin tasarımı yapılmış ve güç aktarımı deneysel olarak test edilmiştir.<br><br><strong>Kazanımlar:</strong><br>• Güç elektroniği<br>• Yüksek frekanslı inverter tasarımı<br>• Kablosuz enerji transferi<br>• Arduino ile gerçek zamanlı kontrol<br>• Sensör tabanlı otomasyon",

        p2_title:"Güneş Enerjili Tarımsal Sulama Sistemi Tasarımı",
        p2_desc:"Bu projede, 4 kW gücünde (İmpo SK 408/23) dalgıç pompayı besleyebilecek güneş enerjili bir sulama sisteminin boyutlandırması ve sistem tasarımı yapılmıştır. Hedef; 1 dönümlük tarım arazisi için günlük 5000–8000 litre su sağlayabilecek, günde 5–8 saat çalışabilen, şebekeden bağımsız (off-grid) bir sistem oluşturmaktır.<br><br><strong>Sistem Kapsamı:</strong><br>• 6 kW güneş paneli gücü<br>• Akü destekli enerji depolama yapısı<br>• Uygun inverter seçimi<br>• Günlük enerji tüketimi ve üretim hesabı<br>• Pompa kalkış akımı ve sürekli çalışma gücü analizleri<br><br><strong>Kazanımlar:</strong><br>• Yenilenebilir enerji sistemleri boyutlandırma<br>• Yük analizi<br>• İnverter ve akü kapasitesi hesaplama<br>• Tarımsal enerji sistemleri planlama",

        p3_title:"Optimizasyon Tabanlı PID Kontrolcü Tasarımı (Akademik Çalışma)",
        p3_desc:"Bu çalışmada, “Design of PID Controllers with Computational Optimization Approach” başlığı altında, klasik PID ayarlama yöntemleri yerine optimizasyon algoritmaları kullanılarak PID parametrelerinin belirlenmesi konusu incelenmiştir. Kontrol teorisi dersi kapsamında yapılan bu projede; PID kontrolcülerin çalışma prensipleri, manuel ayarlama yöntemlerinin dezavantajları ve optimizasyon tabanlı yaklaşımın performans iyileştirmesi teorik ve uygulamalı olarak ele alınmıştır.<br><br>Amaç; sistemin aşım (overshoot), yerleşme süresi (settling time) ve kararlı hal hatası (steady-state error) gibi performans kriterlerini iyileştiren PID parametrelerini hesaplamalı yöntemlerle elde etmektir.<br><br><strong>Kazanımlar:</strong><br>• Kontrol sistemleri<br>• PID optimizasyonu<br>• Mühendislikte sayısal yöntemlerin kullanımı<br>• Sistem performans analizi",

        contact_title:"İletişim",
        email:"E‑posta:",
        cert_title: "Sertifikalar",
        cert_desc: "Aldığım eğitimler ve kazandığım yetkinlik sertifikaları:",
        replace_note:"(Bilgileri kendinle değiştir)"
      },
      en: {
        nav_home:"Home", nav_about:"About", nav_skills:"Skills", nav_projects:"Projects", nav_contact:"Contact", nav_certs:"Certificates",
        title:"Electrical & Electronics Engineer",
        subtitle:"I am a recent Electrical-Electronics Engineering graduate looking for a position where I can develop myself in the engineering field and be part of a productive team. During university, I worked on projects and simulations in wireless power transfer, automation, and power electronics. I am open to learning, disciplined, and responsible. I aim to reflect my technical knowledge on real projects and add value to the institution I work for by gaining experience in the field and office environment.",
        badge_power:"Power Electronics", badge_control:"Control", cta:"Contact Me", cta_cv:"View CV",
        about_title:"About",
        about_p1:"I am an Electrical & Electronics Engineer with an engineering mindset that aims to consciously build the path I want to advance in, rather than limiting my career to a specific field. I care about being an engineer who understands not just a single part of a product or technology, but the whole, especially in embedded systems, electronic hardware, and system integration. Therefore, instead of superficial knowledge in every field, I focus on creating meaningful and interconnected knowledge in different disciplines.",
        about_p2:"For me, engineering is not a static profession, but a dynamic process that requires continuous improvement. With this perspective, I have made it a fundamental principle to add something new to myself every day, to keep my technical knowledge up to date, and to put what I have learned into practice. In today's rapidly changing technology, not missing innovations is possible not only by following them but by understanding their impact on systems. That is why I attach importance to both strengthening my theoretical infrastructure and reinforcing my knowledge with practical studies.",
        about_p3:"Being able to adapt quickly to variable requirements that may be encountered in different sectors and projects is as valuable to me as technical competence. Being open to learning and thinking solution-oriented when approaching a new technology, tool, or problem forms the basis of my work discipline. I believe that knowledge alone is not enough; using it in the right place and in the right way makes the difference.",
        about_p4:"My long-term goal is to continue my career as an engineer who constantly develops, adapts to changing technologies, produces added value by bringing different disciplines together, and consciously shapes the path he advances.",

        skills_title:"Skills",
        s1_t: "Embedded Systems",
        s1_d: "I am developing my knowledge on the basic working principles of microcontroller-based systems. I have a theoretical background in subjects such as MCU architecture, peripherals, clock structure, and memory organization. On the STM32 ecosystem; I know how basic modules such as GPIO, timer, interrupt, ADC, UART, and I2C are configured and how they affect system behavior. I realize that embedded software cannot be considered independently of hardware, so I attach particular importance to configuration, timing, and deterministic behavior.",
        s2_t: "Electronics and Circuit Knowledge",
        s2_d: "I am proficient in the basic principles of analog and digital electronics. I can evaluate the working logic of electronic circuits not only at the schematic level but also in terms of system behavior. I have basic knowledge of power supply, inverter structures, and signal behavior. I know that electronic design should be handled with stability, efficiency, and reliability criteria, and I try to think at the system level in this direction.",
        s3_t: "Power Electronics and System Behavior",
        s3_d: "Within the scope of my graduation project, I worked on inverter systems, frequency-voltage relationship, and the effects of these parameters on system behavior. I am aware of the importance of efficiency, heating, and control in power electronics applications. The knowledge I gained in this field gave me the ability to analyze not only the circuit but also how the circuit affects the system.",
        s4_t: "Learning and Adaptability",
        s4_d: "I have a structure that can adapt quickly to new technologies and tools. I have made it a habit to improve myself every day, reinforce the knowledge I have learned, and stay up to date. I believe that having knowledge in different disciplines enables making more accurate and holistic decisions in engineering.",
        s5_t: "Programming Languages",
        s5_d_c: "<strong>C Language:</strong> Developed embedded system applications on Arduino UNO and Mega platforms. Wrote sensor reading, motor control, relay triggering, and timing-based control algorithms. Used actively in projects requiring hardware-software interaction.",
        s5_d_cpp: "<strong>C++ Language:</strong> Created modular and readable code structures in Arduino projects. Developed microcontroller applications with library usage, functional decomposition, and basic object-oriented structure.",
        s5_d_py: "<strong>Python:</strong> Took part in image processing applications using OpenCV. Examined the software of a system that detects and tracks the license plate of a moving vehicle via drone image.",
        s5_d_plc: "<strong>PLC:</strong> Developed basic level PLC applications using Ladder Diagram in Siemens TIA Portal environment. Worked on I/O control, timers, and simple automation scenarios.",

        projects_title:"Projects",
        p1_title:"Wireless Power Transfer Electric Vehicle Charging Lane (Capstone Project)",
        p1_desc:"In this project, a modular road system powered by solar energy, capable of charging a moving vehicle using wireless power transfer, was designed and prototyped.<br><br>The system consists of a 20W 12V solar panel, 12V battery, 12V DC → 220V AC square wave inverter, and an Arduino Uno control unit. 16 U-type ferrite core transmitter coils placed along the road are controlled so that only the coil under the vehicle is active with the help of IR sensors. In this way, energy waste is prevented and system efficiency is increased.<br><br>On the vehicle, an 8V 1.8Ah battery is charged with two receiver coils, rectification, and regulation circuit. The vehicle contains an Arduino, motor driver, and 4 6V DC motors powered by this battery.<br><br>Also in the project, a 20-turn transmitter coil design was made on a UU6015 ferrite core suitable for 100 kHz operating frequency, and power transfer was experimentally tested.<br><br><strong>Gains:</strong><br>• Power electronics<br>• High-frequency inverter design<br>• Wireless energy transfer<br>• Real-time control with Arduino<br>• Sensor-based automation",

        p2_title:"Solar Powered Agricultural Irrigation System Design",
        p2_desc:"In this project, the sizing and system design of a solar-powered irrigation system capable of feeding a 4 kW (İmpo SK 408/23) submersible pump was carried out. The goal is to create an off-grid system that can provide 5000–8000 liters of water per day for 1 acre of agricultural land, running for 5–8 hours a day.<br><br><strong>System Scope:</strong><br>• 6 kW solar panel power<br>• Battery-supported energy storage structure<br>• Suitable inverter selection<br>• Daily energy consumption and production calculation<br>• Pump starting current and continuous operating power analysis<br><br><strong>Gains:</strong><br>• Renewable energy systems sizing<br>• Load analysis<br>• Inverter and battery capacity calculation<br>• Agricultural energy systems planning",

        p3_title:"Optimization-Based PID Controller Design (Academic Study)",
        p3_desc:"In this study, under the title “Design of PID Controllers with Computational Optimization Approach”, the subject of determining PID parameters using optimization algorithms instead of classical PID tuning methods was examined. In this project carried out within the scope of the control theory course; the working principles of PID controllers, the disadvantages of manual tuning methods, and the performance improvement of the optimization-based approach were discussed theoretically and practically.<br><br>The aim is to obtain PID parameters that improve performance criteria such as overshoot, settling time, and steady-state error of the system using computational methods.<br><br><strong>Gains:</strong><br>• Control systems<br>• PID optimization<br>• Use of numerical methods in engineering<br>• System performance analysis",

        contact_title:"Contact",
        email:"Email:",
        cert_title: "Certificates",
        cert_desc: "Trainings I received and competency certificates I earned:",
        replace_note:"(Replace with your own information)"
      }
    };

    function setLang(l){
      document.documentElement.lang = l;
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const k = el.getAttribute('data-i18n');
        if(dict[l][k]) {
           el.innerHTML = dict[l][k];
        }
      });
      localStorage.setItem('lang', l);
    }

    const slidesEl = document.getElementById('slides');
    const slides = Array.from(document.querySelectorAll('.slide'));
    let index = 0;
    let locked = false;

    function update(){
      const h = document.querySelector('.deck').clientHeight;
      slidesEl.style.transform = `translateY(${-index * h}px)`;
      document.querySelectorAll('.reveal').forEach((el,i)=>{
        const parent = el.closest('.slide');
        const idx = slides.indexOf(parent);
        if(idx === index) requestAnimationFrame(()=> el.classList.add('show'));
        else el.classList.remove('show');
      });
      document.querySelectorAll('nav a').forEach(a=>a.classList.remove('active'));
      const nav = document.querySelector(`nav a[data-index="${index}"]`);
      if(nav) nav.classList.add('active');
    }

    function go(d){
      if(locked) return;
      const next = index + d;
      if(next < 0 || next >= slides.length) return;
      locked = true;
      index = next;
      update();
      setTimeout(()=> locked = false, 900);
    }

    // Scrollable alan kontrolü
    function isInsideScrollable(target) {
      const el = target.closest('.card');
      if (!el) return false;
      return el.scrollHeight > el.clientHeight;
    }

    window.addEventListener('wheel', (e)=>{
      if (isInsideScrollable(e.target)) return;

      if(Math.abs(e.deltaY) < 20) return;
      if(e.deltaY > 0) go(1); else go(-1);
    }, {passive:true});

    // Touch support
    let sy = 0;
    window.addEventListener('touchstart', e=>{ sy = e.touches[0].clientY; }, {passive:true});
    window.addEventListener('touchend', e=>{
      if (isInsideScrollable(e.target)) return;

      const ey = e.changedTouches[0].clientY;
      const dy = sy - ey;
      if(Math.abs(dy) > 40){ if(dy > 0) go(1); else go(-1); }
    }, {passive:true});

    document.querySelectorAll('nav a').forEach(a=>{
      a.addEventListener('click', ()=>{
        const i = parseInt(a.getAttribute('data-index'),10);
        if(!Number.isNaN(i)){ index = i; update(); }
      });
    });

    document.getElementById('tr').onclick = ()=>setLang('tr');
    document.getElementById('en').onclick = ()=>setLang('en');

    const saved = localStorage.getItem('lang') || 'tr';
    setLang(saved);

    document.getElementById('y').textContent = new Date().getFullYear();

    // initial
    update();
  </script>
</body>
</html>