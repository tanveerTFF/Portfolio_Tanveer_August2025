// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const ids = ["hero", "projects", "education", "contact"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const linkBase =
    "px-4 py-2 rounded-full font-gscode text-lg transition hover:text-white hover-glow";
  const linkActive =
    "text-black bg-white/90 shadow-[0_4px_24px_rgba(255,255,255,0.35)]";
  const linkIdle = "text-white/90";

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96vw,1200px)]">
      {/* 3 columns: left spacer | centered pill | RIGHT area filling remaining width */}
      <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-4 w-full">
        <div aria-hidden /> {/* spacer keeps pill truly centered */}

        {/* Glassy pill with section links */}
        <div
          className="
            mx-auto flex items-center justify-evenly gap-2
            rounded-full px-6 py-3
            bg-white/10 backdrop-blur-xl border border-white/20
            shadow-[0_10px_40px_rgba(0,0,0,0.25)]
          "
          role="navigation"
          aria-label="Primary"
        >
          <a
            href="#hero"
            className={`${linkBase} ${active === "hero" ? linkActive : linkIdle}`}
            aria-current={active === "hero" ? "page" : undefined}
          >
            &lt;Home&gt;
          </a>
          <a
            href="#projects"
            className={`${linkBase} ${active === "projects" ? linkActive : linkIdle}`}
            aria-current={active === "projects" ? "page" : undefined}
          >
            &lt;Projects&gt;
          </a>
          <a
            href="#education"
            className={`${linkBase} ${active === "education" ? linkActive : linkIdle}`}
            aria-current={active === "education" ? "page" : undefined}
          >
            &lt;Education&gt;
          </a>
          <a
            href="#contact"
            className={`${linkBase} ${active === "contact" ? linkActive : linkIdle}`}
            aria-current={active === "contact" ? "page" : undefined}
          >
            &lt;Contact&gt;
          </a>
        </div>

        {/* Right-side icons: bigger and pushed fully right */}
        <div className="flex items-center justify-end gap-4">
          <a
            href="https://www.linkedin.com/in/tanveer-mahmoodiut19"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
            className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 focus:ring-2 focus:ring-white/40 transition"
            title="LinkedIn"
          >
            <FaLinkedin className="text-white text-2xl md:text-3xl" />
          </a>

          <a
            href="https://github.com/tanveerTFF"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
            className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 focus:ring-2 focus:ring-white/40 transition"
            title="GitHub"
          >
            <FaGithub className="text-white text-2xl md:text-3xl" />
          </a>

          {/* Resume download — file at public/Tanveer_Mahmood_Resume.pdf */}
          <a
            href="/Tanveer_Mahmood_Resume.pdf"
            download
            aria-label="Download resume"
            className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 focus:ring-2 focus:ring-white/40 transition"
            title="Download Resume"
          >
            <HiOutlineDocumentDownload className="text-white text-2xl md:text-3xl" />
          </a>
        </div>
      </div>
    </nav>
  );
}
