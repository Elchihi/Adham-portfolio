import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  // Handle input changes
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status) setStatus(null); // reset status on change
  }

  // Basic validation
  function validate() {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return false;
    return true;
  }

  // Form submit
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      setStatus({ type: 'error', msg: 'Please fill all fields with a valid email.' });
      return;
    }

    setStatus({ type: 'loading', msg: 'Sending...' });

    try {
      await emailjs.send(
        'service_5rtk1rh', // Service ID
        'template_4uy298h', // Template ID
        form,
        'S3LMddusQ1PwR-ji6' // Public Key
      );

      setStatus({ type: 'success', msg: 'Message sent — I will contact you soon!' });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', msg: 'Something went wrong. Try again later.' });
    }
  }

  // Auto-hide toast after 2s
  useEffect(() => {
    if (status?.type !== 'loading') {
      const timer = setTimeout(() => setStatus(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section id="contact" className="py-24 px-6 md:px-20 bg-[#061018] text-white relative">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Contact
      </motion.h2>

      {/* Form Container */}
      <div className="max-w-3xl mx-auto bg-[#07121a] p-8 rounded-2xl border border-gray-800 relative">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded-xl bg-transparent border border-gray-700 outline-none"
            placeholder="Your name"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-xl bg-transparent border border-gray-700 outline-none"
            placeholder="Email"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="p-3 rounded-xl bg-transparent border border-gray-700 outline-none h-36"
            placeholder="Message"
          />

          <button
            type="submit"
            disabled={status?.type === 'loading'}
            className={`px-6 py-3 rounded-xl font-semibold transition-transform duration-150 ${
              status?.type === 'loading'
                ? 'opacity-50 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#7f5af0] to-[#00aaff] hover:scale-105'
            }`}
          >
            {status?.type === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Toast Notification */}
        <AnimatePresence>
          {status && status.type !== 'loading' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 mt-[-2.5rem] px-6 py-3 rounded-xl shadow-lg z-50 ${
                status.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
              }`}
            >
              {status.msg}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
