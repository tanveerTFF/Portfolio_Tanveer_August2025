import React, { useEffect, useState } from "react";
import Box from "./Box";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
  const [expandedTile, setExpandedTile] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Eloquence Bot",
      image: "https://via.placeholder.com/300",
      shortDescription:
        "Eloquence bot : A LLM powered full stack agentic AI Chatbot for quotes. Used React+Vercel for frontend, MongoDB+Express+Railway for backend. Implemented State management, REST API, Agentic AI workflow.",
      fullDescription:
        "Eloquence Bot is an AI-powered quote recommendation website that provides users with inspirational quotes based on various moods or categories like motivational, romantic, funny, epic, stoic, and gamery. The bot uses natural language processing to understand user inputs and provide contextually relevant quotes. This repository contains the frontend codes. \nLink to the backend repository : https://github.com/tanveerTFF/eloquence-bot-backend.git. \nYou can visit the live version of the site here: https://eloquence-bot.example.com",
      techStack: "MERN stack, Groq api, Vercel & Railway",
    },
    {
      id: 2,
      title: "The Cloud BookCafe — Full Stack Project",
      image: "https://via.placeholder.com/300",
      shortDescription:
        "The Cloud BookCafe is a book review platform that enables users to submit and view book reviews & authenticated admins can manage, and display them. The site showcases featured monthly reads and wishlist books, styled with TailwindCSS, and stores all reviews in a MongoDB database. Admin authentication is handled via Firebase.",
      fullDescription:
        "The Cloud BookCafe is a book review platform that enables users to submit and view book reviews & authenticated admins can manage, and display them. The site showcases featured monthly reads and wishlist books, styled with TailwindCSS, and stores all reviews in a MongoDB database. Admin authentication is handled via Firebase.\nLive Site: https://thecloudbookcafe.vercel.app\nFrontend: https://github.com/tanveerTFF/bookCafe-frontend.git",
      techStack: "MERN stack, Firebase, Vercel",
    },
    { id: 3, 
      title: "Bangla Literature RAG Assistant", 
      image: "https://via.placeholder.com/300", 
      shortDescription: "A multilingual Retrieval-Augmented Generation (RAG) system that understands Bangla and English queries, retrieves relevant passages from a Bangla literature PDF (HSC 1st Paper), and generates precise answers using a local LLM.", 
      fullDescription: "A multilingual Retrieval-Augmented Generation (RAG) system that understands Bangla and English queries, retrieves relevant passages from a Bangla literature PDF (HSC 1st Paper), and generates precise answers using a local LLM ( llama 3 ). \nLink to GitHub Repository : https://github.com/tanveerTFF/BanglaRag_10ms_Tanveer.git", 
      techStack: "pytessaract,sentence-transformer,Ollama,FastApi,chromaDB,Streamlit" },
    { id: 4, 
      title: "Bangla Double Sided Braille Dataset", 
      image: "https://via.placeholder.com/300", 
      shortDescription: "This is a novel dataset of Bangla braille books on a letter level. We used roboflow bounding box annotator and sourced the books with the help of Sporsho foundation.", 
      fullDescription: "Data Source: We contacted Sporsho Foundation, a non-profit organization that publishes Braille books for visually impaired individuals. They provided us with various double-sided Bangla Braille books. They print these books with the help of sponsors which then they use to teach blind students. Their generous help really meant a lot and contributed highly in the progress and success of our research.\nData Acquisition: We captured high-resolution images of Braille pages using our mobile camera. The quality of images was crucial to ensure the Braille dots were clearly visible for accurate annotation. We tried to use different angles and lighting conditions to introduce variety in the images. These variations helped to capture the real life scenario and will help to make the model more robust.\nAnnotation: Given the limitations of using Bangla characters in AI models, we employed transliteration for labeling the Braille data. This involved converting Bangla letters to their phonetic equivalents in English, facilitating the model’s training process. We hand labeled every image manually to their corresponding labels using the roboflow annotator.\nGithub repository : https://github.com/tanveerTFF/Bangla-Double-Sided-Braille-Dataset-annotated-for-YOLOv8.git", 
      techStack: "Python,Robolflow,Tensorflow" },
    { id: 5, 
      title: "Dog Grooming Website", 
      image: "https://via.placeholder.com/300", 
      shortDescription: "A basic dog grooming website using tailwind css and react.", 
      fullDescription: "Originally created by Cristian Mihai as a tutorial project.I followed the tutorial to learn React + Tailwind, made my own edits, and deployed it live.\nLive Site : https://dog-grooming-website-tanveer.vercel.app", 
      techStack: "React.js, Tailwind,Email.js,Vercel" },
    { id: 6, 
      title: "Bangla Sign Language Detection", 
      image: "https://via.placeholder.com/300", 
      shortDescription: "Bangla Sign Language Detection using OpenCV And Mediapipe Library.", 
      fullDescription: "Implemented dataset generation by taking live feed input from webcam leveraging mediapipe holistics.Real time generation of mediapipe holistics of various actions were recorded as co-ordinate values in json format. After that we trained custom LSTM model for real-time detection", 
      techStack: "Vue.js, Firebase" },
    { id: 7, 
      title: "Synthetic MRI image generation with GAN ", 
      image: "https://via.placeholder.com/300", 
      shortDescription: "We attempted to generate synthetic MRI images of alzheimer's patients using GAN model. We used pytorch libraries to build the model and matplotlib to visualize.", 
      fullDescription: "We attempted to generate synthetic MRI images of alzheimer's patients using GAN model. We used pytorch libraries to build the model and matplotlib to visualize.\n GitHub repository : https://github.com/tanveerTFF/SyntheticMRI_ImageGeneration_WithGAN.git", 
      techStack: "Python,Pytorch,matplotlib" },
    { id: 8, title: "Project 8", image: "https://via.placeholder.com/300", shortDescription: "A brief description of project 8.", fullDescription: "Here is a detailed description of project 8.", techStack: "Next.js, MongoDB" },
  ];

  const openModal = (projectId) => {
    const proj = projects.find((p) => p.id === projectId);
    setExpandedTile(proj ?? null);
  };
  const closeModal = () => setExpandedTile(null);

  // Make URLs clickable in the long description
  const renderWithLinks = (text) => {
    const parts = text.split(/(https?:\/\/\S+)/g);
    return parts.map((part, i) =>
      /^https?:\/\/\S+$/.test(part) ? (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 underline hover:text-indigo-500"
        >
          {part}
        </a>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  // Close on ESC + lock scroll when modal is open
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeModal();
    if (expandedTile) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [expandedTile]);

  return (
    <section id="projects" className="min-h-screen px-6 py-16 text-white relative">
      <h2 className="text-center font-gscode text-5xl font-bold mb-12 mt-10">
        &lt;Projects&gt;
      </h2>

      {/* Grid */}
      <div className="flex justify-center mt-48">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {projects.map((project) => (
            <Box key={project.id} project={project} onClick={() => openModal(project.id)} />
          ))}
        </div>
      </div>

      {/* Modal + Backdrop blur */}
      <AnimatePresence>
        {expandedTile && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close"
              onClick={closeModal}
              className="absolute inset-0 w-full h-full cursor-default bg-black/20 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Dialog */}
            <motion.div
              role="dialog"
              aria-modal="true"
              className="
                relative z-10
                w-[min(92vw,1000px)]
                max-h-[85vh] overflow-y-auto
                rounded-3xl bg-white text-black
                shadow-[0_20px_80px_rgba(0,0,0,0.35)]
              "
              initial={{ y: 16, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 16, scale: 0.98, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              {expandedTile.image && (
                <div className="w-full h-64 md:h-80 bg-gray-100 overflow-hidden">
                  <img
                    src={expandedTile.image}
                    alt={expandedTile.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    {expandedTile.title}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-3xl leading-none text-black/70 hover:text-black"
                    aria-label="Close"
                  >
                    &times;
                  </button>
                </div>

                <p className="mt-4 text-[15px] md:text-base text-black/80 whitespace-pre-wrap">
                  {renderWithLinks(expandedTile.fullDescription)}
                </p>

                <div className="mt-6 text-sm text-black/60">
                  <span className="font-semibold text-black/80">Tech Stack:</span>{" "}
                  {expandedTile.techStack}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
