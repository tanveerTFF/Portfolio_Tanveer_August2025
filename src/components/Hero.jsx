import React from 'react';
import ScrambleText from './ScrambleText';
import TypewriterText from './TypewriterText';


export default function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-24 h-screen w-screen flex flex-col justify-center items-start text-white text-left px-12"
    >
      <div className="w-full max-w-7xl">
        <h2 className="text-8xl font-gscode leading-tight mb-4">
          <span className="relative -top-24">
            
           <ScrambleText
            text="Hello!"
            letterDuration={800}     // how long each letter scrambles
            letterInterval={90}      // how fast it scrambles characters
            restDuration={2000}      // how long the full word stays before scrambling again
            />

            
          </span><br />
          <span className="relative -top-24">
            
            <ScrambleText

            text="I'm Tanveer"
            letterDuration={800}
            letterInterval={90}
            restDuration={2000}

            />


          </span>
        </h2>
        <p className="text-4xl font-gscode leading-relaxed">
          
          <TypewriterText 
          text="I'm a AI/ML engineer & full stack web developer!" 
          speed={80} delay={2000} />
        
        </p>
      </div>
    </section>
  );
}
