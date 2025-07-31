import React from 'react';

export default function Contact() {
  return (
<section
  id="contact"
  className=" h-screen bg-transparent text-white h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-6"
>
  <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
  <p className="mb-2">📧 Email: tanveer@example.com</p>
  <p>
    🔗 LinkedIn:{" "}
    <a
      href="https://linkedin.com/in/tanveer"
      className="text-blue-500 underline"
    >
      linkedin.com/in/tanveer
    </a>
  </p>
</section>

  );
}
