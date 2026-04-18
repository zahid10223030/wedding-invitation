// app/page.js
"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Details from "@/components/Details";
import Hero from "@/components/Hero";
import RSVPForm from "@/components/RSVPForm";
import Guestbook from "@/components/Guestbook";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setIsOpen(true);
    // Putar musik saat tombol diklik
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio play blocked"));
    }
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Audio File: Simpan file musik di /public/music.mp3 */}
      <audio ref={audioRef} src="/RiskItAll.mp3" loop />
      
      {!isOpen ? (
        <Hero onOpen={handleOpen} />
      ) : (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="animate-content"
        >
          {/* Section Dekoratif Tambahan */}
          <section className="py-24 text-center px-6">
            <h2 className="text-wedding-accent italic text-2xl font-serif mb-4">Om Swastiastu / Assalamu'alaikum</h2>
            <p className="max-w-md mx-auto text-gray-500 leading-relaxed font-light">
              Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami.
            </p>
          </section>

          <Details />
          <RSVPForm />
          <Guestbook />
          
          <footer className="py-12 text-center text-[10px] tracking-[0.3em] text-gray-300 uppercase">
            Romeo & Juliet © 2026
          </footer>
        </motion.div>
      )}
    </main>
  );
}