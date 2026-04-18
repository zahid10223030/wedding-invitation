"use client";
import { motion } from "framer-motion";

export default function Hero({ onOpen }) {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-wedding-bg text-wedding-dark text-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <span className="uppercase tracking-[0.4em] text-xs mb-6 block text-gray-400">
          The Wedding Celebration of
        </span>
        
        <h1 className="text-6xl md:text-8xl font-serif italic mb-6 text-wedding-dark">
          Romeo <span className="text-wedding-accent">&</span> Juliet
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mb-10 tracking-[0.2em] font-light text-sm"
        >
          SABTU, 12 DESEMBER 2026
        </motion.p>
        
        <button 
          onClick={onOpen}
          className="group relative bg-wedding-accent text-white px-10 py-4 rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-200"
        >
          <span className="relative z-10 font-medium tracking-wide">Buka Undangan</span>
          <div className="absolute inset-0 bg-orange-700 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </motion.div>
    </section>
  );
}