"use client";
import { type Lang, dict } from "@/lib/dict";

export default function ProjectsSection({ lang }: { lang: Lang }) {
  const t = dict[lang];

  const projects = [
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

  return (
    <section id="projeler" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">
          {t.projects_title}
        </h2>
        <div className="space-y-6">
          {projects.map((p) => (
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
      </div>
    </section>
  );
}
