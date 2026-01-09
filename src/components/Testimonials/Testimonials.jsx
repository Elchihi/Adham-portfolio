import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Sara K.', role: 'Product Manager', text: 'Adham delivered a clean, fast landing page — very happy with the result.' },
  { name: 'Mhamed R.', role: 'Founder', text: 'Great communication and fast turnaround. Highly recommended.' },
  { name: 'Lina A.', role: 'Designer', text: 'Smooth collaboration — Adham understood the design vision and implemented it perfectly.' }
];

export  function Testimonials(){
  return (
    <section id="team" className="py-24 px-6 md:px-20 bg-[#071018] text-white">
      <motion.h2 initial={{opacity:0,y:-12}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}} className="text-4xl font-bold text-center mb-12">Testimonials</motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.7,delay:i*0.15}} className="p-6 bg-[#0e1720] rounded-2xl border border-gray-800">
            <p className="text-gray-300 mb-4">“{t.text}”</p>
            <div className="font-semibold">{t.name}</div>
            <div className="text-sm text-gray-500">{t.role}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
