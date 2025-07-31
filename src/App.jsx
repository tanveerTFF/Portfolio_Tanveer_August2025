import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';

import backgroundImg from './img/lorenzo-herrera.webp'; // your image

export default function App() {
  return (
    <div
      className=" scroll-smooth min-h-screen w-full bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Your actual app content */}
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
