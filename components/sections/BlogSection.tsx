"use client";
import { type Lang, dict } from "@/lib/dict";

interface BlogPost {
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

const posts: BlogPost[] = [
  // Buraya yazı eklenecek. Örnek format:
  // {
  //   title: "STM32'de GPIO Nasıl Kullanılır?",
  //   date: "2025-06-01",
  //   summary: "STM32 mikrodenetleyicilerde GPIO pinlerini yapılandırmanın temel adımları.",
  //   tags: ["STM32", "Gömülü Sistemler"],
  // },
];

export default function BlogSection({ lang }: { lang: Lang }) {
  const t = dict[lang];

  return (
    <section id="blog" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">
          {t.blog_title}
        </h2>

        <div className="space-y-6">
          {/* YouTube card */}
          <div className="glass-card p-6 reveal-up">
            <div className="flex gap-6 items-center">
              <img
                src="/assets/documents/Youtube.png"
                alt="YouTube"
                className="w-[288px] h-[288px] rounded-lg object-contain flex-shrink-0"
              />
              <div>
                {t.blog_youtube.split("\n\n").map((paragraph, i) => (
                  <p key={i} className={`text-slate-300 leading-relaxed text-sm${i < t.blog_youtube.split("\n\n").length - 1 ? " mb-3" : ""}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {posts.length === 0 ? (
            <div className="glass-card p-12 text-center reveal-up">
              <p className="text-white/40 text-sm">{t.blog_empty}</p>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.title} className="glass-card p-8 reveal-up">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white">{post.title}</h3>
                  <span className="text-xs text-white/40 font-medium">{post.date}</span>
                </div>

                <p className="text-slate-200 leading-relaxed mb-5">{post.summary}</p>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tech-badge text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-xs font-semibold text-[#38bdf8] hover:text-white transition-colors">
                    {t.blog_read_more}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
