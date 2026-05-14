"use client";
import { type Lang, dict } from "@/lib/dict";

export default function SkillsSection({ lang }: { lang: Lang }) {
  const t = dict[lang];

  const skills = [
    { title: t.s1_t, desc: t.s1_d },
    { title: t.s2_t, desc: t.s2_d },
    { title: t.s3_t, desc: t.s3_d },
    { title: t.s4_t, desc: t.s4_d },
  ];

  const langs = [t.s5_c, t.s5_cpp, t.s5_py, t.s5_plc];

  return (
    <section id="yetenekler" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="glass-card max-w-4xl w-full p-9 reveal-up">
        <h2 className="text-3xl font-bold mb-8 text-white">{t.skills_title}</h2>

        <div className="space-y-6">
          {skills.map((s) => (
            <div key={s.title}>
              <h3 className="text-lg font-semibold text-[#38bdf8] mb-2">
                {s.title}
              </h3>
              <p className="text-slate-200 leading-relaxed">{s.desc}</p>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-semibold text-[#38bdf8] mb-3">
              {t.s5_t}
            </h3>
            <div className="space-y-2">
              {langs.map((l, i) => (
                <p key={i} className="text-slate-200 leading-relaxed">
                  <span className="font-semibold text-white">
                    {l.split(":")[0]}:
                  </span>
                  {l.split(":").slice(1).join(":")}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {["STM32", "Arduino", "C/C++", "Python", "PLC", "Siemens TIA Portal", "OpenCV"].map(
            (tag) => (
              <span key={tag} className="tech-badge">
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
