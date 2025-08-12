// src/components/Contact.jsx
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    reply_to: "",
    message: "",
  });
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  // Auto-hide success message after a few seconds
  useEffect(() => {
    if (status.ok) {
      const t = setTimeout(() => {
        setStatus((s) => ({ ...s, ok: null, msg: "" }));
      }, 3000); // hide after 3s
      return () => clearTimeout(t);
    }
  }, [status.ok]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.subject || !form.reply_to || !form.message) {
      setStatus({ sending: false, ok: false, msg: "Please fill all fields." });
      return;
    }

    try {
      setStatus({ sending: true, ok: null, msg: "" });

      // Your EmailJS creds
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // uses {{title}}, {{name}}, {{email}}, {{message}} (and {{time}} if you added it)
    const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          title:   form.subject,                 // -> {{title}}
          name:    form.name,                    // -> {{name}}
          email:   form.reply_to,                // -> {{email}}
          message: form.message,                 // -> {{message}}
          time:    new Date().toLocaleString(),  // -> {{time}} (only if used in template)
        },
        PUBLIC_KEY
      );

      setStatus({ sending: false, ok: true, msg: "Message sent " });
      setForm({ name: "", subject: "", reply_to: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus({
        sending: false,
        ok: false,
        msg: "Failed to send. Please try again or email me directly.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-transparent text-white px-6 pt-24 flex flex-col"
    >
      <h2 className="text-center font-gscode text-5xl font-bold mb-8">
        &lt;Contact&gt;
      </h2>

      <div className="flex-1 grid place-items-center">
        <div className="flex flex-col items-center gap-6">
          {/* Heading above the form */}
          <h3 className="text-white font-gscode text-4xl md:text-5xl text-center">
            Hey! Let&apos;s chat
          </h3>

          <form
            onSubmit={onSubmit}
            className="
              w-full max-w-3xl
              rounded-3xl p-8 md:p-10
              bg-white/10 backdrop-blur-xl
              border border-white/20
              shadow-[0_10px_40px_rgba(0,0,0,0.25)]
              space-y-6
            "
          >
            {/* Name */}
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={onChange}
              placeholder="Your Name"
              className="w-full px-6 py-4 rounded-full bg-white/10 placeholder-white/70 text-white outline-none border border-white/20 focus:border-white/50"
            />
            {/* Subject */}
            <input
              name="subject"
              type="text"
              value={form.subject}
              onChange={onChange}
              placeholder="Subject"
              className="w-full px-6 py-4 rounded-full bg-white/10 placeholder-white/70 text-white outline-none border border-white/20 focus:border-white/50"
            />
            {/* Email */}
            <input
              name="reply_to"
              type="email"
              value={form.reply_to}
              onChange={onChange}
              placeholder="Your Email Address"
              className="w-full px-6 py-4 rounded-full bg-white/10 placeholder-white/70 text-white outline-none border border-white/20 focus:border-white/50"
            />
            {/* Message */}
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Write your message…"
              rows={6}
              className="w-full px-6 py-4 rounded-2xl bg-white/10 placeholder-white/70 text-white outline-none border border-white/20 focus:border-white/50 resize-none"
            />

            {/* Submit + transient status */}
            <div className="flex items-center justify-between gap-4">
              <button
                type="submit"
                disabled={status.sending}
                className="
                  inline-flex items-center justify-center
                  px-8 py-3 rounded-full
                  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                  hover:opacity-95 active:scale-[0.99]
                  transition
                  disabled:opacity-60 disabled:cursor-not-allowed
                  font-medium
                "
              >
                {status.sending ? "Sending…" : "Send Message"}
              </button>

              {/* Only show success briefly; errors stay until next action */}
              {status.ok && (
                <span className="text-sm text-emerald-300 transition-opacity">
                  {status.msg}
                </span>
              )}
              {!status.ok && status.ok !== null && (
                <span className="text-sm text-rose-300">{status.msg}</span>
              )}
            </div>

            {/* Social Links + Resume */}
            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://www.linkedin.com/in/tanveer-mahmoodiut19"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
                title="LinkedIn"
                aria-label="Open LinkedIn profile"
              >
                <FaLinkedin className="text-2xl text-white" />
              </a>

              <a
                href="https://github.com/tanveerTFF"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
                title="GitHub"
                aria-label="Open GitHub profile"
              >
                <FaGithub className="text-2xl text-white" />
              </a>

              <a
                href="/Tanveer_Mahmood_Resume.pdf"
                download
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
                title="Download Resume"
                aria-label="Download Resume"
              >
                <HiOutlineDocumentDownload className="text-2xl text-white" />
              </a>
            </div>

            <p className="text-s text-white/70 text-center mt-4">
              Or email me directly :{" "}
              <span className="font-medium">contact.tanveermahmood@gmail.com</span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
