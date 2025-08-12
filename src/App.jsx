// src/App.jsx
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';

import backgroundImg from './img/lorenzo-herrera.webp';

export default function App() {
  return (
    <div
      className="relative overflow-hidden scroll-smooth min-h-screen w-full bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/*
        🔧 Blur overlay (no tint):
        - --blur: adjust blur amount (e.g., "4px", "6px", "10px")
        - --opacity: 0.0 → 1.0 (think 0% → 100% intensity of the overlay/blur)
        Tip: If you want the blur to be weaker, lower --opacity or --blur.
      */}
      <div
        className="
          pointer-events-none absolute inset-0 z-0
          bg-transparent
          backdrop-blur-[var(--blur)]
          opacity-[var(--opacity)]
        "
        style={{
          // change these two values only
          '--blur': '10px',      // blur strength
          '--opacity': 0.8,     // 0.0–1.0 (i.e., 60% effect)
        }}
      />

      {/* App content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
}
