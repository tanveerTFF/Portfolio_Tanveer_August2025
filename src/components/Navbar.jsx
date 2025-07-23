import React from 'react'; // Optional, for older versions

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Tanveer's Portfolio</h1>
        <div className="space-x-6">
          <a href="#hero" className="hover:text-blue-500">Home</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#education" className="hover:text-blue-500">Education</a>
        </div>
      </div>
    </nav>
  );
}
