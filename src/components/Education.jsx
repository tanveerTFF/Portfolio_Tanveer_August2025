import React from 'react'; // Optional, for older versions

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Education</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="p-4 border-l-4 border-blue-500 bg-white shadow">
          <h3 className="text-xl font-semibold">Notre Dame College</h3>
          <p>Science | 2017–2019</p>
        </div>
        <div className="p-4 border-l-4 border-indigo-500 bg-white shadow">
          <h3 className="text-xl font-semibold">iTest Internship</h3>
          <p>Design Verification | Nov 2024 – Present</p>
        </div>
      </div>
    </section>
  );
}
