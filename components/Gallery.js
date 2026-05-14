// components/Gallery.js
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/assets/prewed1.jpeg", tall: true },
  { src: "/assets/prewed2.jpeg", tall: false },
  { src: "/assets/prewed3.jpeg", tall: false },
  { src: "/assets/prewed4.jpeg", tall: true },
  { src: "/assets/prewed5.jpeg", tall: false },
  { src: "/assets/prewed6.jpeg", tall: true },
  { src: "/assets/prewed7.jpeg", tall: true },
  { src: "/assets/prewed8.jpeg", tall: false },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#fdf8f4" }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p style={{
          fontSize: "10px",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "#aaa",
          fontFamily: "'Jost', sans-serif",
          marginBottom: "10px",
        }}>
          Our Memories
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 8vw, 3rem)",
          fontWeight: 400,
          color: "#E65100",
          fontStyle: "italic",
        }}>
          Our Gallery
        </h2>
        <div className="flex items-center gap-3 max-w-[180px] mx-auto mt-4">
          <span className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #E65100aa)" }} />
          <span style={{ color: "#E65100", fontSize: "14px" }}>✦</span>
          <span className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #E65100aa)" }} />
        </div>
      </motion.div>

      {/* Masonry Grid */}
      <div
        className="max-w-2xl mx-auto"
        style={{
          columns: "2",
          columnGap: "10px",
        }}
      >
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            onClick={() => setSelected(photo.src)}
            className="relative overflow-hidden cursor-pointer group"
            style={{
              marginBottom: "10px",
              breakInside: "avoid",
              borderRadius: "16px",
              height: photo.tall ? "320px" : "200px",
            }}
          >
            <Image
              src={photo.src}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              style={{ backgroundColor: "rgba(230,81,0,0.25)" }}
            >
              <span style={{
                color: "white",
                fontSize: "20px",
                border: "1px solid rgba(255,255,255,0.6)",
                borderRadius: "50%",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>+</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
            style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-lg"
              style={{ height: "70vh" }}
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={selected}
                alt=""
                fill
                className="object-contain"
              />
            </motion.div>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white text-2xl"
              style={{ lineHeight: 1 }}
            >✕</button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}