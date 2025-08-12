// src/components/Hero.jsx
import React from 'react';
import ScrambleText from './ScrambleText';
import TypewriterText from './TypewriterText';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineDocumentDownload } from 'react-icons/hi';

export default function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-24 h-screen w-screen relative flex flex-col justify-center items-start text-white text-left px-48"
    >
      {/* Left content */}
      <div className="w-full max-w-7xl">
        <h2 className="text-8xl font-gscode leading-tight mb-4">
          <span className="relative -top-24">
            <ScrambleText
              text="Hello!"
              letterDuration={800}
              letterInterval={90}
              restDuration={2000}
            />
          </span>
          <br />
          <span className="relative -top-24">
            <ScrambleText
              text="I'm Tanveer"
              letterDuration={800}
              letterInterval={90}
              restDuration={2000}
            />
          </span>
        </h2>

        <p className="text-4xl font-gscode leading-relaxed whitespace-nowrap">
          <TypewriterText
            text="I'm an aspiring AI/ML engineer & full stack web developer!"
            speed={80}
            delay={2000}
          />
        </p>
      </div>

      {/* Right-side vertical toolbar */}
      <div className="absolute right-8 top-[45%] -translate-y-1/2 flex flex-col gap-12 px-48">
        {/* GitHub */}
        <div className="flex items-center gap-3 justify-end">
          <span className="hidden md:block font-gscode text-xl select-none">
            Checkout my projects!
          </span>
          <a
            href="https://github.com/tanveerTFF"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
            title="GitHub"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 focus:ring-2 focus:ring-white/40 transition"
          >
            <FaGithub className="text-white text-2xl" />
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-3 justify-end">
          <span className="hidden md:block font-gscode text-xl select-none">
            Let’s connect!
          </span>
          <a
            href="https://www.linkedin.com/in/tanveer-mahmoodiut19"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
            title="LinkedIn"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 focus:ring-2 focus:ring-white/40 transition"
          >
            <FaLinkedin className="text-white text-2xl" />
          </a>
        </div>

        {/* Mail → Contact section */}
        <div className="flex items-center gap-3 justify-end">
          <span className="hidden md:block font-gscode text-xl select-none">
            Let’s chat!
          </span>
          <a
            href="#contact"
            aria-label="Go to contact section"
            title="Contact"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 focus:ring-2 focus:ring-white/40 transition"
          >
            <HiOutlineMail className="text-white text-2xl" />
          </a>
        </div>

        {/* Resume download */}
        <div className="flex items-center gap-3 justify-end">
          <span className="hidden md:block font-gscode text-xl select-none whitespace-nowrap">
            Get my resume!
          </span>
          <a
            href="/Tanveer_Mahmood_Resume.pdf" // ensure this exists in /public
            download
            aria-label="Download resume"
            title="Download Resume"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 focus:ring-2 focus:ring-white/40 transition"
          >
            <HiOutlineDocumentDownload className="text-white text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
