export type Lang = "tr" | "en";

export const dict = {
  tr: {
    nav_home: "Ana Sayfa",
    nav_about: "Hakkımda",
    nav_skills: "Yetenekler",
    nav_projects: "Projeler",
    nav_certs: "Sertifikalar",
    nav_contact: "İletişim",
    hero_title: "Elektrik‑Elektronik Mühendisi",
    hero_subtitle:
      "Elektrik-Elektronik Mühendisliği bölümünden yeni mezun oldum ve mühendislik alanında kendimi geliştirebileceğim, üretken bir ekip içinde yer alabileceğim bir pozisyon arıyorum. Üniversite sürecinde kablosuz enerji transferi, otomasyon ve güç elektroniği alanlarında projeler ve simülasyon çalışmaları yaptım. Öğrenmeye açık, disiplinli ve sorumluluk sahibi biriyim.",
    hero_cta: "İletişime Geç",
    hero_cv: "CV Görüntüle",
    orbit_explore: "Keşfet",
    view_detail: "Detayları Gör →",
    about_title: "Hakkımda",
    about_p1:
      "Elektrik-Elektronik Mühendisiyim ve kariyerimi belirli bir alanla sınırlamak yerine, ilerlemek istediğim yolu bilinçli şekilde inşa etmeyi hedefleyen bir mühendislik anlayışına sahibim. Gömülü sistemler, elektronik donanım ve sistem entegrasyonu başta olmak üzere; bir ürünün veya teknolojinin yalnızca tek bir parçasını değil, bütününü anlayabilen bir mühendis olmayı önemsiyorum.",
    about_p2:
      "Mühendislik benim için durağan bir meslek değil, sürekli gelişim gerektiren dinamik bir süreçtir. Bu bakış açısıyla, her gün kendime yeni bir şey katmayı, teknik bilgimi güncel tutmayı ve öğrendiklerimi pratiğe dökmeyi temel prensip haline getirdim.",
    about_p3:
      "Farklı sektörlerde ve projelerde karşılaşılabilecek değişken gereksinimlere hızlı adaptasyon sağlayabilmek, benim için teknik yetkinlik kadar değerlidir. Yeni bir teknolojiye, araca veya probleme yaklaşırken öğrenmeye açık olmak ve çözüm odaklı düşünmek, çalışma disiplinimin temelini oluşturur.",
    about_p4:
      "Uzun vadede hedefim; sürekli gelişen, değişen teknolojilere uyum sağlayabilen, farklı disiplinleri bir araya getirerek katma değer üreten ve ilerlediği yolu bilinçli şekilde şekillendiren bir mühendis olarak kariyerimi sürdürmektir.",
    skills_title: "Yetenekler",
    s1_t: "Gömülü Sistemler",
    s1_d:
      "Gömülü sistemler alanında, mikrodenetleyici tabanlı sistemlerin temel çalışma prensipleri üzerinde bilgi birikimimi geliştiriyorum. MCU mimarisi, çevresel birimler (peripheral), clock yapısı ve bellek organizasyonu gibi konularda teorik altyapıya sahibim. STM32 ekosistemi üzerinde; GPIO, timer, interrupt, ADC, UART ve I2C gibi temel modüllerin nasıl yapılandırıldığını biliyorum.",
    s2_t: "Elektronik ve Devre Bilgisi",
    s2_d:
      "Analog ve dijital elektronik temel prensiplerine hâkimim. Elektronik devrelerin çalışma mantığını yalnızca şema seviyesinde değil, sistem davranışı açısından da değerlendirebiliyorum. Güç besleme, inverter yapıları ve sinyal davranışı konularında temel bilgiye sahibim.",
    s3_t: "Güç Elektroniği ve Sistem Davranışı",
    s3_d:
      "Bitirme projem kapsamında inverter sistemleri, frekans–gerilim ilişkisi ve bu parametrelerin sistem davranışı üzerindeki etkileri üzerine çalıştım. Güç elektroniği uygulamalarında verim, ısınma ve kontrolün öneminin farkındayım.",
    s4_t: "Öğrenme ve Adaptasyon Yeteneği",
    s4_d:
      "Yeni teknolojilere ve araçlara hızlı adapte olabilen bir yapıya sahibim. Her gün kendimi geliştirmeyi, öğrendiğim bilgileri pekiştirmeyi ve güncel kalmayı bir alışkanlık haline getirdim.",
    s5_t: "Program Dilleri",
    s5_c:
      "C Dili: Arduino UNO ve Mega platformlarında gömülü sistem uygulamaları geliştirdim. Sensör okuma, motor kontrolü, röle tetikleme ve zamanlama tabanlı kontrol algoritmaları yazdım.",
    s5_cpp:
      "C++ Dili: Arduino projelerinde modüler ve okunabilir kod yapıları oluşturdum. Kütüphane kullanımı ve temel nesne tabanlı yapı ile mikrodenetleyici uygulamaları geliştirdim.",
    s5_py:
      "Python: OpenCV kütüphanesini kullanarak görüntü işleme uygulamalarında görev aldım. Drone görüntüsü üzerinden araç plakası tespit sistemi üzerinde çalıştım.",
    s5_plc:
      "PLC: Siemens TIA Portal ortamında Ladder Diagram kullanarak temel seviye PLC uygulamaları geliştirdim.",
    projects_title: "Projeler",
    p1_title: "Kablosuz Enerji Aktarımlı Elektrikli Araç Şarj Yolu",
    p1_subtitle: "Bitirme Projesi",
    p1_desc:
      "Güneş enerjisi ile beslenen, kablosuz güç transferi kullanarak hareketli bir aracı şarj edebilen modüler bir yol sistemi tasarlanmış ve prototipi oluşturulmuştur. Sistem; 20W 12V güneş paneli, 12V akü, 12V DC → 220V AC kare dalga inverter ve Arduino Uno kontrol ünitesinden oluşmaktadır. 16 adet U tipi ferrit çekirdekli verici bobin, IR sensörler yardımıyla aracın konumuna göre kontrol edilmektedir.",
    p1_gains: ["Güç elektroniği", "Yüksek frekanslı inverter tasarımı", "Kablosuz enerji transferi", "Arduino ile gerçek zamanlı kontrol", "Sensör tabanlı otomasyon"],
    p2_title: "Güneş Enerjili Tarımsal Sulama Sistemi Tasarımı",
    p2_subtitle: "Sistem Tasarımı",
    p2_desc:
      "4 kW gücünde dalgıç pompayı besleyebilecek güneş enerjili bir sulama sisteminin boyutlandırması ve sistem tasarımı yapılmıştır. 1 dönümlük tarım arazisi için günlük 5000–8000 litre su sağlayabilecek, şebekeden bağımsız (off-grid) bir sistem oluşturulmuştur.",
    p2_gains: ["Yenilenebilir enerji sistemleri", "Yük analizi", "İnverter ve akü kapasitesi hesaplama", "Tarımsal enerji planlama"],
    p3_title: "Optimizasyon Tabanlı PID Kontrolcü Tasarımı",
    p3_subtitle: "Akademik Çalışma",
    p3_desc:
      "Klasik PID ayarlama yöntemleri yerine optimizasyon algoritmaları kullanılarak PID parametrelerinin belirlenmesi konusu incelenmiştir. Sistemin aşım, yerleşme süresi ve kararlı hal hatası gibi performans kriterlerini iyileştiren PID parametreleri hesaplamalı yöntemlerle elde edilmiştir.",
    p3_gains: ["Kontrol sistemleri", "PID optimizasyonu", "Sayısal yöntemler", "Sistem performans analizi"],
    certs_title: "Sertifikalar",
    certs_desc: "Aldığım eğitimler ve kazandığım yetkinlik sertifikaları:",
    contact_title: "İletişim",
    footer: "İsmail Kesmez",
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_certs: "Certificates",
    nav_contact: "Contact",
    hero_title: "Electrical & Electronics Engineer",
    hero_subtitle:
      "I am a recent Electrical-Electronics Engineering graduate looking for a position where I can develop myself and be part of a productive team. During university, I worked on projects in wireless power transfer, automation, and power electronics. I am open to learning, disciplined, and responsible.",
    hero_cta: "Contact Me",
    hero_cv: "View CV",
    orbit_explore: "Explore",
    view_detail: "View Details →",
    about_title: "About",
    about_p1:
      "I am an Electrical & Electronics Engineer with an engineering mindset that aims to consciously build the path I want to advance in, rather than limiting my career to a specific field. I care about being an engineer who understands not just a single part of a product or technology, but the whole, especially in embedded systems, electronic hardware, and system integration.",
    about_p2:
      "For me, engineering is not a static profession, but a dynamic process that requires continuous improvement. I have made it a fundamental principle to add something new to myself every day, to keep my technical knowledge up to date, and to put what I have learned into practice.",
    about_p3:
      "Being able to adapt quickly to variable requirements that may be encountered in different sectors and projects is as valuable to me as technical competence. Being open to learning and thinking solution-oriented forms the basis of my work discipline.",
    about_p4:
      "My long-term goal is to continue my career as an engineer who constantly develops, adapts to changing technologies, and consciously shapes the path he advances.",
    skills_title: "Skills",
    s1_t: "Embedded Systems",
    s1_d:
      "I am developing my knowledge on the basic working principles of microcontroller-based systems. I have theoretical background in MCU architecture, peripherals, clock structure, and memory organization. On the STM32 ecosystem, I know how basic modules such as GPIO, timer, interrupt, ADC, UART, and I2C are configured.",
    s2_t: "Electronics and Circuit Knowledge",
    s2_d:
      "I am proficient in the basic principles of analog and digital electronics. I can evaluate the working logic of electronic circuits not only at the schematic level but also in terms of system behavior. I have basic knowledge of power supply, inverter structures, and signal behavior.",
    s3_t: "Power Electronics and System Behavior",
    s3_d:
      "Within the scope of my graduation project, I worked on inverter systems, frequency-voltage relationship, and the effects of these parameters on system behavior. I am aware of the importance of efficiency, heating, and control in power electronics applications.",
    s4_t: "Learning and Adaptability",
    s4_d:
      "I have a structure that can adapt quickly to new technologies and tools. I have made it a habit to improve myself every day, reinforce my knowledge, and stay up to date.",
    s5_t: "Programming Languages",
    s5_c:
      "C Language: Developed embedded system applications on Arduino UNO and Mega platforms. Wrote sensor reading, motor control, relay triggering, and timing-based control algorithms.",
    s5_cpp:
      "C++ Language: Created modular and readable code structures in Arduino projects. Developed microcontroller applications with library usage and basic object-oriented structure.",
    s5_py:
      "Python: Took part in image processing applications using OpenCV. Examined a vehicle license plate detection system via drone imagery.",
    s5_plc:
      "PLC: Developed basic level PLC applications using Ladder Diagram in Siemens TIA Portal environment.",
    projects_title: "Projects",
    p1_title: "Wireless Power Transfer EV Charging Lane",
    p1_subtitle: "Capstone Project",
    p1_desc:
      "A modular road system powered by solar energy, capable of charging a moving vehicle using wireless power transfer, was designed and prototyped. The system consists of a 20W 12V solar panel, 12V battery, 12V DC → 220V AC square wave inverter, and an Arduino Uno control unit. 16 U-type ferrite core transmitter coils are controlled based on vehicle position using IR sensors.",
    p1_gains: ["Power electronics", "High-frequency inverter design", "Wireless energy transfer", "Real-time control with Arduino", "Sensor-based automation"],
    p2_title: "Solar Powered Agricultural Irrigation System",
    p2_subtitle: "System Design",
    p2_desc:
      "The sizing and system design of a solar-powered irrigation system capable of feeding a 4 kW submersible pump was carried out. An off-grid system providing 5000–8000 liters per day for 1 acre of agricultural land was designed.",
    p2_gains: ["Renewable energy systems", "Load analysis", "Inverter and battery sizing", "Agricultural energy planning"],
    p3_title: "Optimization-Based PID Controller Design",
    p3_subtitle: "Academic Study",
    p3_desc:
      "PID parameters were determined using optimization algorithms instead of classical tuning methods. PID parameters improving performance criteria such as overshoot, settling time, and steady-state error were obtained using computational methods.",
    p3_gains: ["Control systems", "PID optimization", "Numerical methods", "System performance analysis"],
    certs_title: "Certificates",
    certs_desc: "Trainings I received and competency certificates I earned:",
    contact_title: "Contact",
    footer: "İsmail Kesmez",
  },
} as const;

export type DictKey = keyof typeof dict.tr;
