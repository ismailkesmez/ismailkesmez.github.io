"use client";
import { type Lang, dict } from "@/lib/dict";

interface HeaderProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
}

const navItems = [
  { key: "nav_home" as const, href: "#home" },
  { key: "nav_about" as const, href: "#hakkimda" },
  { key: "nav_skills" as const, href: "#yetenekler" },
  { key: "nav_projects" as const, href: "#projeler" },
  { key: "nav_certs" as const, href: "#sertifikalar" },
  { key: "nav_contact" as const, href: "#iletisim" },
];

export default function Header({ lang, onLangChange }: HeaderProps) {
  const t = dict[lang];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center gap-4 px-5 py-3.5 bg-black/95 backdrop-blur-md border-b border-white/8">
      <strong className="font-black tracking-tight text-[#38bdf8]">
        İsmail Kesmez
      </strong>

      <div className="flex items-center gap-4">
        <nav className="hidden md:flex">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollTo(item.href)}
              className="mx-2.5 text-slate-300 font-semibold hover:text-white transition-colors text-sm"
            >
              {t[item.key]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onLangChange("tr")}
            className={`text-xs font-bold px-2 py-1 rounded transition-colors ${
              lang === "tr"
                ? "text-white bg-white/10"
                : "text-white/50 hover:text-white"
            }`}
          >
            TR
          </button>
          <button
            onClick={() => onLangChange("en")}
            className={`text-xs font-bold px-2 py-1 rounded transition-colors ${
              lang === "en"
                ? "text-white bg-white/10"
                : "text-white/50 hover:text-white"
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
