"use client";
import { useState } from "react";
import { type Lang, dict } from "@/lib/dict";

type Tab = "eee" | "prompt";

export default function ProjectsSection({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const [activeTab, setActiveTab] = useState<Tab>("eee");

  const eeeProjects = [
    {
      title: t.p1_title,
      subtitle: t.p1_subtitle,
      desc: t.p1_desc,
      gains: t.p1_gains,
      tags: ["Arduino", "Kablosuz Enerji", "Güç Elektroniği", "IR Sensör"],
    },
    {
      title: t.p2_title,
      subtitle: t.p2_subtitle,
      desc: t.p2_desc,
      gains: t.p2_gains,
      tags: ["Güneş Enerjisi", "Off-Grid", "İnverter", "Pompa"],
    },
    {
      title: t.p3_title,
      subtitle: t.p3_subtitle,
      desc: t.p3_desc,
      gains: t.p3_gains,
      tags: ["PID", "Kontrol Sistemleri", "Optimizasyon"],
    },
  ];

  const promptProjects = [
    {
      title: t.pp4_title,
      desc: t.pp4_desc,
      image: "/assets/documents/DevreAnaliz.png",
      downloadUrl: "https://github.com/ismailkesmez/DevreAnalizi/releases/download/V0.1/Devre-Analizi-v0.1-win64.zip",
    },
    {
      title: t.pp1_title,
      desc: t.pp1_desc,
      image: "/assets/documents/TikTik.png",
      downloadUrl: "https://github.com/ismailkesmez/T-k/releases/download/V0.4/TikTik.V0.4.apk",
    },
    {
      title: t.pp2_title,
      desc: t.pp2_desc,
      image: "/assets/documents/MedGrowth.png",
      downloadUrl: "https://github.com/ismailkesmez/MedGrowth/releases/download/V0.2/MedGrowth.V0.2.apk",
    },
    {
      title: t.pp3_title,
      desc: t.pp3_desc,
      image: "/assets/documents/RealLifeRPG.png",
      downloadUrl: "https://github.com/ismailkesmez/RealLifeRPG/releases/download/V0.1/LifeRPG.apk",
    },
  ];

  const tabs: { id: Tab; label: string }[] = [
    { id: "eee", label: "Elektrik-Elektronik Mühendisliği" },
    { id: "prompt", label: lang === "tr" ? "Sufle Mühendisliği" : "Prompt Engineering" },
  ];

  return (
    <section id="projeler" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">
          {t.projects_title}
        </h2>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 p-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm w-fit mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{
                color: activeTab === tab.id ? "#0f172a" : "rgba(255,255,255,0.55)",
                background:
                  activeTab === tab.id
                    ? "linear-gradient(135deg, #38bdf8, #60a5fa)"
                    : "transparent",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* EEE Projects */}
        {activeTab === "eee" && (
          <div className="space-y-6">
            {eeeProjects.map((p) => (
              <div key={p.title} className="glass-card p-8 reveal-up">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30 font-medium">
                    {p.subtitle}
                  </span>
                </div>

                <p className="text-slate-200 leading-relaxed mb-5">{p.desc}</p>

                <div className="mb-5">
                  <p className="text-xs uppercase tracking-wider text-white/60 mb-2 font-semibold">
                    {lang === "tr" ? "Kazanımlar" : "Gains"}
                  </p>
                  <ul className="space-y-1">
                    {p.gains.map((g) => (
                      <li key={g} className="text-sm text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] flex-shrink-0" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tech-badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Prompt Engineering Projects */}
        {activeTab === "prompt" && (
          <div className="space-y-6">
            {/* Bio card */}
            <div className="glass-card p-8 reveal-up border-l-2 border-[#38bdf8]/50">
              {t.prompt_bio.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-slate-200 leading-relaxed${i < t.prompt_bio.split("\n\n").length - 1 ? " mb-4" : ""}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {promptProjects.map((p) => (
              <div key={p.title} className="glass-card p-6 reveal-up">
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-48 h-48 sm:w-[288px] sm:h-[288px] rounded-lg object-contain flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                    <p className="text-slate-300 leading-relaxed text-sm mb-3">{p.desc}</p>
                    <p className="text-[#38bdf8] text-xs mb-4">{t.pp_github_note}</p>
                    <a
                      href={p.downloadUrl}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-[#0f172a] transition-all duration-300"
                      style={{ background: "linear-gradient(135deg, #38bdf8, #60a5fa)" }}
                    >
                      ↓ {t.pp_download}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
