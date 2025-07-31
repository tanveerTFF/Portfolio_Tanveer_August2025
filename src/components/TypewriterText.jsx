import React, { useState, useEffect } from 'react';

const TypewriterText = ({
  text = '',
  speed = 100,
  pause = 2000,
  loop = true,
}) => {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && index < text.length) {
      // Typing
      timer = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(prev => prev + 1);
      }, speed);
    } else if (!isDeleting && index === text.length) {
      // Pause before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (isDeleting && index > 0) {
      // Deleting
      timer = setTimeout(() => {
        setDisplayed(text.slice(0, index - 1));
        setIndex(prev => prev - 1);
      }, speed / 2);
    } else if (isDeleting && index === 0) {
      // Pause before restarting typing
      if (loop) {
        timer = setTimeout(() => {
          setIsDeleting(false);
        }, pause);
      }
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, text, speed, pause, loop]);

  return (
    <span className="typewriter-cursor ">
      {displayed}
    </span>
  );
};

export default TypewriterText;
