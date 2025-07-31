import React from 'react';

export default function Navbar() {
  return (
    <nav className="  fixed top-0 left-0 w-screen z-50 bg-transparent px-12 py-4">
      <div className="flex justify-evenly items-center w-full text-white">
        <a href="#hero" className="hover-glow hover:text-white font-gscode text-xl">&lt;Home&gt;</a>
        <a href="#projects" className="hover-glow hover:text-white font-gscode text-xl">&lt;Projects&gt;</a>
        <a href="#education" className="hover-glow hover:text-white font-gscode text-xl">&lt;Education&gt;</a>
        <a href="#contact" className="hover-glow hover:text-white font-gscode text-xl">&lt;Contact&gt;</a>
        <a
          href="https://github.com/tanveerTFF"  // 👈 Replace with your actual GitHub link
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover-glow font-gscode text-xl"

        >
          &lt;GitHub&gt;
        </a>
        <a
          href="/resume.pdf"  // 👈 Make sure this file exists in your `public/` folder
          download
          className=" font-gscode text-xl hover:text-white hover-glow transition"
        >
          &lt;Get My Resume&gt;
        </a>
      </div>
    </nav>
  );
}
