"use client";
import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    scrollTo(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center gap-4 px-5 py-3.5 bg-black/95 backdrop-blur-md border-b border-white/8">
        <strong className="font-black tracking-tight text-[#38bdf8]">
          İsmail Kesmez
        </strong>

        <div className="flex items-center gap-4">
          {/* Desktop nav */}
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
            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Menü"
            >
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>

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

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden fixed top-[52px] left-0 right-0 z-40 bg-black/97 backdrop-blur-md border-b border-white/8 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 py-2" : "max-h-0"
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => handleNavClick(item.href)}
            className="w-full text-left px-6 py-3.5 text-slate-300 font-semibold text-sm hover:text-white hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
          >
            {t[item.key]}
          </button>
        ))}
      </div>

      {/* Backdrop to close menu */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
