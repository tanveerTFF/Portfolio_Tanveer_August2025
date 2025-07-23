import React, { useState } from 'react';

const projects = [
  { id: 1, title: "Sign Language Detection using OpenCV And Mediapipe Library ", description: "Description of project one." },
  { id: 2, title: " Braille Detection using Deep CNN ", description: "Description of project two." },
  { id: 3, title: "Bangla Sentiment Analysis Comparison for N-gram tokenization ", description: "Description of project three." },
  { id: 4, title: "Project Four", description: "Description of project four." },
  { id: 5, title: "Project Five", description: "Description of project five." },
  { id: 6, title: "Project Six", description: "Description of project six." },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on background or close button click
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-20 bg-white relative">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      {/* Cards Grid */}
      <div className={`max-w-6xl mx-auto grid grid-cols-3 gap-8 ${selectedProject ? 'filter blur-sm pointer-events-none' : ''}`}>
        {projects.map(({ id, title }) => (
          <div
            key={id}
            onClick={() => setSelectedProject(projects.find(p => p.id === id))}
            className="h-[30rem] bg-gradient-to-br from-white/80 to-gray-100/80 rounded-xl shadow-lg shadow-gray-300 p-6 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
          >
            <h3 className="text-5xl text-center font-poppins leading-tight">{title}</h3>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl shadow-xl max-w-3xl w-full p-8 relative"
            onClick={e => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>
            <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="text-gray-700 text-lg">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
