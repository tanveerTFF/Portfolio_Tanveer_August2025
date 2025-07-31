// src/components/Projects.jsx
import React, { useState } from 'react';
import BentoGrid from './BentoGrid';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [expandedTile, setExpandedTile] = useState(null);

  const handleTileClick = (id) => {
    setExpandedTile(id);
  };

  const handleClose = () => {
    setExpandedTile(null);
  };

  return (
    <section id="projects" className="min-h-screen px-6 py-16 text-white relative">
      <h2 className="text-center font-gscode text-5xl font-bold mb-12 mt-10">&lt;Projects&gt;</h2>
      <BentoGrid onTileClick={handleTileClick} />

      {/* Expanded modal */}
      <AnimatePresence>
        {expandedTile && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black text-white p-8 rounded-xl shadow-2xl w-[80vw] max-w-5xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
              >
                &times;
              </button>
              <h3 className="text-3xl font-bold mb-4">Project {expandedTile}</h3>
              <p className="text-lg leading-relaxed">
                This is a placeholder description for Project {expandedTile}. Replace this with actual project details like technologies used, challenges solved, or links.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
