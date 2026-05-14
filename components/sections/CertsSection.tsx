"use client";
import { type Lang, dict } from "@/lib/dict";

const certs = [
  { file: "stm32basic.png", alt: "STM32 Basic" },
  { file: "Electric_Power_Systems.png", alt: "Electric Power Systems" },
  { file: "EmbeddedSystemUsingC.png", alt: "Embedded Systems using C" },
  { file: "Google Prompting Essentials_Coursera.png", alt: "Google Prompting" },
  { file: "Güneş_enerji_sistemi_tasarımı_udemy.png", alt: "Güneş Enerji Tasarımı" },
  { file: "Temel_elektrik_elektronik_kursu_udemy.png", alt: "Temel Elektrik Elektronik" },
  { file: "Finansal Okuryazarlık.png", alt: "Finansal Okuryazarlık" },
  { file: "İş_analizi_nedir_linkedin.png", alt: "İş Analizi Nedir" },
  { file: "Üretken_yz_için_istem_mühendisliğine_giriş_Linkedin.png", alt: "İstem Mühendisliği" },
  { file: "Üretken_yz_nedir_Linkedin.png", alt: "Üretken YZ Nedir" },
  { file: "Proje Yönetimi _ BTK.png", alt: "Proje Yönetimi BTK" },
  { file: "Gönüllü Sertifikası.png", alt: "Samsung Boğaziçi Yüzme" },
  { file: "Gönüllü Sertifikası 2.png", alt: "Vestel Manisa Maratonu" },
  { file: "Gönüllü sertifikası 3.png", alt: "Wings for Life" },
  { file: "Modern_yönetim_için_iletişim yetenekleri.png", alt: "Modern Yönetim İletişim" },
  { file: "Yapay_Zekaya_giriş.png", alt: "Yapay Zekaya Giriş" },
  { file: "YZ_ve_sürdürülebilirliğe_giriş.png", alt: "YZ ve Sürdürülebilirlik" },
  { file: "Siber_güvenlik_farkındalığı.png", alt: "Siber Güvenlik Farkındalığı" },
  { file: "Linkedin_EkipleriYönetmek.png", alt: "Ekipleri Yönetmek" },
  { file: "Yz.png", alt: "YZ Üretkenlik İpuçları" },
  { file: "Pilotluk_sertifikası.png", alt: "İHA-1 Pilot Lisansı" },
  { file: "certificate-1771433506720.png", alt: "Elektrik Proje Okuması" },
  { file: "Elektrik Proje Temel Eğitimi_Udemy.png", alt: "Udemy Elektrik Proje" },
];

export default function CertsSection({ lang }: { lang: Lang }) {
  const t = dict[lang];
  return (
    <section id="sertifikalar" className="min-h-screen flex items-start justify-center px-6 py-20 pt-24">
      <div className="max-w-4xl w-full">
        <div className="glass-card p-9 reveal-up">
          <h2 className="text-3xl font-bold mb-2 text-white">{t.certs_title}</h2>
          <p className="text-slate-300 mb-8">{t.certs_desc}</p>
          <div className="cert-grid">
            {certs.map((c) => (
              <a
                key={c.file}
                className="cert-item"
                href={`/assets/certificates/${encodeURIComponent(c.file)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`/assets/certificates/${encodeURIComponent(c.file)}`}
                  alt={c.alt}
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
