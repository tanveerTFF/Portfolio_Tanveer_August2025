import React from "react";

const Box = ({ project, onClick }) => {
  const isPlaceholder =
    !project.image || project.image.includes("placeholder.com");

  return (
    <button
      type="button"
      onClick={onClick}
      className="
        relative w-[400px] min-h-[280px] cursor-pointer text-left
        rounded-xl shadow-lg ring-1 ring-white/20
        bg-white/10 backdrop-blur-sm
        transition-transform duration-300 hover:scale-105
        overflow-visible
      "
    >
      {/* Background (image or gradient) */}
      <div className="absolute inset-0 rounded-xl overflow-hidden -z-10">
        {isPlaceholder ? (
          <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Top “card inside the card” — grows with content */}
      <div
        className="
          relative z-10 mt-4 mx-4 mb-4
          rounded-2xl p-5
          bg-black/45 backdrop-blur-[2px]
          ring-1 ring-white/25 shadow-lg
        "
      >
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-[14px] leading-relaxed text-gray-100">
          {project.shortDescription}
        </p>
      </div>
    </button>
  );
};

export default Box;
