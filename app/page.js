// app/page.js
"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Details from "@/components/Details";
import Hero from "@/components/Hero";
import RSVPForm from "@/components/RSVPForm";
import Guestbook from "@/components/Guestbook";
import Quote from "@/components/Quotesection";
import Gallery from "@/components/Gallery";
import Couple from "@/components/Couple";
import Envelope from "@/components/Envelope";
import LoveStory from "@/components/LoveStory";

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
      <audio ref={audioRef} src="/PerahuKertas.mp3" loop />
      
      {!isOpen ? (
        <Hero onOpen={handleOpen} />
      ) : (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="animate-content"
        >
          {/* Section Dekoratif Tambahan */}
        <section className="relative py-24 text-center px-6 overflow-hidden"
          style={{
            backgroundImage: "url('/assets/prewed8.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.35)" }} />

        <div
          className="relative z-10 max-w-md mx-auto px-8 py-10 rounded-2xl"
          style={{
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "none",
            WebkitBackdropFilter: "none",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          }}
        >
            <h2 className="text-wedding-accent italic text-1xl font-serif mb-4">
            اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
            </h2>
            <p className="leading-relaxed font-serif italic" style={{ color: "#f1eeea" }}>
              Tanpa mengurangi rasa hormat, kami bermaksud mengundang
              Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami.
            </p>
          </div> 
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: "100px",
              background: "linear-gradient(to top, #ffffff, transparent)",
              zIndex: 20,
            }}
          />

        </section>

          <Quote />
          <Couple />
          <LoveStory />
          <Details />
          <Envelope />
          <RSVPForm />
          <Guestbook />
          <Gallery />
          
          <footer className="py-12 text-center text-[10px] tracking-[0.3em] text-gray-300">
            <p className="uppercase">Agnia & Wahid</p>
            <p>Created by Abzatiracodehouse © 2026</p>
          </footer>
          
        </motion.div>
      )}
    </main>
  );
}