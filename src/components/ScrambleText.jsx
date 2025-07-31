import React, { useEffect, useState } from 'react';

const ScrambleText = ({ text, letterDuration = 500, letterInterval = 30, restDuration = 3000 }) => {
  const [displayed, setDisplayed] = useState(Array(text.length).fill(''));
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-={}[]<>?,.';

  useEffect(() => {
    let letterTimers = [];
    let masterTimeout;

    const scrambleLetter = (index) => {
      let intervalCount = 0;
      const totalCycles = Math.floor(letterDuration / letterInterval);

      const timer = setInterval(() => {
        intervalCount++;
        setDisplayed(prev => {
          const updated = [...prev];
          updated[index] = characters[Math.floor(Math.random() * characters.length)];
          return updated;
        });

        if (intervalCount >= totalCycles) {
          clearInterval(timer);
          setDisplayed(prev => {
            const updated = [...prev];
            updated[index] = text[index];
            return updated;
          });
        }
      }, letterInterval);

      return timer;
    };

    const startScramble = () => {
      const timers = [];
      for (let i = 0; i < text.length; i++) {
        timers.push(scrambleLetter(i));
      }
      letterTimers = timers;

      masterTimeout = setTimeout(() => {
        startScramble(); // Loop again after rest
      }, letterDuration + restDuration);
    };

    startScramble();

    return () => {
      letterTimers.forEach(t => clearInterval(t));
      clearTimeout(masterTimeout);
    };
  }, [text, letterDuration, letterInterval, restDuration]);

  return <span>{displayed.join('')}</span>;
};

export default ScrambleText;
