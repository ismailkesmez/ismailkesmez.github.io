"use client";
import { type Lang, dict } from "@/lib/dict";

const contacts = [
  {
    icon: "✉️",
    label: { tr: "E‑posta", en: "Email" },
    value: "ismailkesmez23@gmail.com",
    href: "mailto:ismailkesmez23@gmail.com",
  },
  {
    icon: "🐙",
    label: { tr: "GitHub", en: "GitHub" },
    value: "github.com/ismailkesmez",
    href: "https://github.com/ismailkesmez",
  },
  {
    icon: "💼",
    label: { tr: "LinkedIn", en: "LinkedIn" },
    value: "linkedin.com/in/ismailkesmez",
    href: "https://www.linkedin.com/in/ismail-kesmez-4266a8234/",
  },
  {
    icon: "📺",
    label: { tr: "YouTube", en: "YouTube" },
    value: "youtube.com/@IsmailKesmez23",
    href: "https://www.youtube.com/@IsmailKesmez23",
  },
];

export default function ContactSection({ lang }: { lang: Lang }) {
  const t = dict[lang];
  return (
    <section id="iletisim" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="glass-card max-w-2xl w-full p-9 reveal-up">
        <h2 className="text-3xl font-bold mb-8 text-white">{t.contact_title}</h2>
        <div className="flex flex-col gap-4">
          {contacts.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">{c.icon}</div>
              <div className="flex flex-col">
                <span className="text-sm text-slate-300">{c.label[lang]}</span>
                <strong className="text-base text-white font-semibold">
                  {c.value}
                </strong>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
