"use client";
import { useState } from "react";
import { User, Cpu, Code2, Award, Mail } from "lucide-react";

import { type Lang, dict } from "@/lib/dict";
import Header from "@/components/Header";
import RadialOrbitalTimeline, {
  type TimelineItem,
} from "@/components/ui/radial-orbital-timeline";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertsSection from "@/components/sections/CertsSection";
import ContactSection from "@/components/sections/ContactSection";

const DEFAULT_ENERGY: Record<number, number> = {
  1: 100,
  2: 85,
  3: 75,
  4: 90,
  5: 100,
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("tr");
  const [energyLevels, setEnergyLevels] = useState<Record<number, number>>(DEFAULT_ENERGY);
  const t = dict[lang];

  const handleEnergyChange = (id: number, delta: number) => {
    setEnergyLevels((prev) => ({
      ...prev,
      [id]: Math.max(0, Math.min(100, (prev[id] ?? 50) + delta)),
    }));
  };

  const timelineData: TimelineItem[] = [
    {
      id: 1,
      title: t.nav_about,
      date: "EEE Müh.",
      content:
        lang === "tr"
          ? "Elektrik-Elektronik Mühendisi. Gömülü sistemler, güç elektroniği ve sistem entegrasyonu alanında uzmanlaşıyorum."
          : "Electrical & Electronics Engineer. Specializing in embedded systems, power electronics and system integration.",
      category: "About",
      icon: User,
      relatedIds: [2],
      status: "completed",
      energy: energyLevels[1],
      href: "#hakkimda",
      navigateLabel: t.view_detail,
    },
    {
      id: 2,
      title: t.nav_skills,
      date: "STM32 · C/C++",
      content:
        lang === "tr"
          ? "Gömülü sistemler, güç elektroniği, C/C++, STM32, Arduino, Python, PLC ve daha fazlası."
          : "Embedded systems, power electronics, C/C++, STM32, Arduino, Python, PLC and more.",
      category: "Skills",
      icon: Cpu,
      relatedIds: [1, 3],
      status: "in-progress",
      energy: energyLevels[2],
      href: "#yetenekler",
      navigateLabel: t.view_detail,
    },
    {
      id: 3,
      title: t.nav_projects,
      date: "3 Proje",
      content:
        lang === "tr"
          ? "Kablosuz enerji transferi, güneş enerjili sulama sistemi, PID kontrolcü tasarımı."
          : "Wireless power transfer, solar irrigation system, PID controller design.",
      category: "Projects",
      icon: Code2,
      relatedIds: [2, 4],
      status: "in-progress",
      energy: energyLevels[3],
      href: "#projeler",
      navigateLabel: t.view_detail,
    },
    {
      id: 4,
      title: t.nav_certs,
      date: "23 Sertifika",
      content:
        lang === "tr"
          ? "STM32, güç sistemleri, gömülü C, YZ, pilot lisansı ve daha fazla sertifika."
          : "STM32, power systems, embedded C, AI, pilot license and more certificates.",
      category: "Certificates",
      icon: Award,
      relatedIds: [3, 5],
      status: "in-progress",
      energy: energyLevels[4],
      href: "#sertifikalar",
      navigateLabel: t.view_detail,
    },
    {
      id: 5,
      title: t.nav_contact,
      date: "Online",
      content:
        lang === "tr"
          ? "LinkedIn, GitHub, YouTube ve e-posta üzerinden ulaşabilirsiniz."
          : "Reach me on LinkedIn, GitHub, YouTube or via email.",
      category: "Contact",
      icon: Mail,
      relatedIds: [4, 1],
      status: "completed",
      energy: energyLevels[5],
      href: "#iletisim",
      navigateLabel: t.view_detail,
    },
  ];

  return (
    <>
      {/* Fixed grid background */}
      <div className="fixed inset-0 bg-grid opacity-15 pointer-events-none z-0" />

      <Header lang={lang} onLangChange={setLang} />

      <main className="relative z-10">
        {/* ── HERO ── */}
        <section id="home" className="relative">

          {/* Hero text panel — desktop only, top-left below header */}
          <div
            className="absolute z-20 hidden lg:flex flex-col"
            style={{
              top: "64px",
              left: "24px",
              width: "min(360px, 28vw)",
              maxHeight: "calc(100vh - 80px)",
            }}
          >
            <div
              className="flex flex-col"
              style={{
                background: "rgba(0, 0, 0, 0.88)",
                backdropFilter: "blur(16px)",
                borderRadius: "18px",
                border: "1px solid rgba(255,255,255,0.07)",
                borderTop: "1px solid rgba(56,189,248,0.2)",
                padding: "24px",
                maxHeight: "calc(100vh - 80px)",
                overflow: "hidden",
              }}
            >
              <h1
                className="font-black text-white leading-tight mb-4"
                style={{ fontSize: "clamp(24px, 2.4vw, 34px)" }}
              >
                {t.hero_title}
              </h1>

              {/* Subtitle */}
              <p
                className="text-slate-200 leading-relaxed"
                style={{ fontSize: "12.5px", overflowY: "auto", flex: 1 }}
              >
                {t.hero_subtitle}
              </p>

              <div className="flex flex-col gap-2 mt-5 flex-shrink-0">
                <a
                  href="mailto:ismailkesmez23@gmail.com"
                  className="inline-flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm text-white transition-transform hover:scale-[1.03]"
                  style={{ background: "linear-gradient(135deg, #38bdf8, #60a5fa)" }}
                >
                  {t.hero_cta}
                </a>
                <a
                  href="/assets/documents/Ismail_Kesmez_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm text-white border border-white/20 bg-white/5 transition-transform hover:scale-[1.03] hover:bg-white/10"
                >
                  {t.hero_cv}
                </a>
              </div>
            </div>
          </div>

          {/* Orbital timeline */}
          <RadialOrbitalTimeline
            timelineData={timelineData}
            onEnergyChange={handleEnergyChange}
            lang={lang}
          />

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/35 text-xs animate-bounce pointer-events-none">
            <span>{lang === "tr" ? "Keşfet" : "Explore"}</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 12L1 5h14L8 12z" />
            </svg>
          </div>
        </section>

        {/* Mobile hero — visible only on small screens */}
        <div className="lg:hidden px-6 py-8 flex flex-col gap-4">
          <h1 className="font-black text-white text-3xl leading-tight">{t.hero_title}</h1>
          <p className="text-slate-300 text-sm leading-relaxed">{t.hero_subtitle}</p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="mailto:ismailkesmez23@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm text-white"
              style={{ background: "linear-gradient(135deg, #38bdf8, #60a5fa)" }}
            >
              {t.hero_cta}
            </a>
            <a
              href="/assets/documents/Ismail_Kesmez_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm text-white border border-white/20 bg-white/5"
            >
              {t.hero_cv}
            </a>
          </div>
        </div>

        {/* ── Content sections ── */}
        <AboutSection lang={lang} />
        <SkillsSection lang={lang} />
        <ProjectsSection lang={lang} />
        <CertsSection lang={lang} />
        <ContactSection lang={lang} />
      </main>

      <footer className="text-center text-white/40 text-xs py-6 border-t border-white/5">
        © {new Date().getFullYear()} {t.footer}
      </footer>
    </>
  );
}
