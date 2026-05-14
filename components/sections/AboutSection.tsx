"use client";
import { type Lang, dict } from "@/lib/dict";

export default function AboutSection({ lang }: { lang: Lang }) {
  const t = dict[lang];
  return (
    <section
      id="hakkimda"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="glass-card max-w-4xl w-full p-9">
        <h2 className="text-3xl font-bold mb-6 text-white">{t.about_title}</h2>
        <div className="space-y-4">
          {[t.about_p1, t.about_p2, t.about_p3, t.about_p4].map((p, i) => (
            <p key={i} className="text-slate-200 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
