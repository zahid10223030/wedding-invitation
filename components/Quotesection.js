"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Quote() {
  return (
<section className="relative py-20 px-6 text-center overflow-hidden"
  style={{ backgroundColor: "#fdf8f4" }} // ← krem hangat, blend sama tema
>
  {/* Icon bunga */}
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="flex justify-center mb-6"
  >
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="18" r="5" stroke="#E65100" strokeWidth="1.2" strokeOpacity="0.6" />
      <ellipse cx="14" cy="14" rx="4" ry="7" stroke="#E65100" strokeWidth="1.2" strokeOpacity="0.5" transform="rotate(-30 14 14)" />
      <ellipse cx="34" cy="14" rx="4" ry="7" stroke="#E65100" strokeWidth="1.2" strokeOpacity="0.5" transform="rotate(30 34 14)" />
      <ellipse cx="10" cy="22" rx="4" ry="7" stroke="#E65100" strokeWidth="1.2" strokeOpacity="0.4" transform="rotate(-60 10 22)" />
      <ellipse cx="38" cy="22" rx="4" ry="7" stroke="#E65100" strokeWidth="1.2" strokeOpacity="0.4" transform="rotate(60 38 22)" />
      <line x1="24" y1="23" x2="24" y2="46" stroke="#E65100" strokeWidth="1.2" strokeOpacity="0.5" />
      <path d="M24 34 C20 30, 16 32, 16 36" stroke="#E65100" strokeWidth="1" strokeOpacity="0.4" fill="none" />
    </svg>
  </motion.div>

  {/* Ayat AR-RUM */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.1 }}
    viewport={{ once: true }}
    className="max-w-sm mx-auto mb-10"
  >
    <p
      className="leading-relaxed mb-3"
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(0.95rem, 3.5vw, 1.1rem)",
        color: "#5a4a3a",
        fontStyle: "italic",
      }}
    >
      "Dan di antara ayat-ayat-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri,
      supaya kamu merasa nyaman kepadanya, dan dijadikan-Nya di antaramu mawadah dan rahmah.
      Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir"
    </p>
    <p
      style={{
        fontSize: "11px",
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        color: "#E65100",
        fontFamily: "'Jost', sans-serif",
        fontWeight: 500,
      }}
    >
      QS. AR-RUM : 21
    </p>
  </motion.div>

  {/* Divider tipis */}
  <div className="flex items-center gap-3 max-w-[200px] mx-auto mb-10">
    <span className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #E65100aa)" }} />
    <span style={{ color: "#E65100", fontSize: "16px" }}>✦</span>
    <span className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #E65100aa)" }} />
  </div>

  {/* Foto + Quote */}
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.2 }}
    viewport={{ once: true }}
    className="relative max-w-sm mx-auto rounded-2xl overflow-hidden"
    style={{
      boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
      border: "1px solid rgba(230,81,0,0.15)",
    }}
  >
    {/* Quote di atas foto */}
    <div
      className="px-8 py-6"
      style={{ backgroundColor: "#fff" }}
    >
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1rem, 3.8vw, 1.15rem)",
          fontStyle: "italic",
          color: "#3d2e20",
          lineHeight: 1.7,
        }}
      >
        "Aku ingin mencintaimu dengan sederhana;<br />
        dengan kata yang tak sempat diucapkan kayu<br />
        kepada api yang menjadikannya abu"
      </p>
    </div>

    {/* Foto mempelai */}
    <div className="relative w-full" style={{ height: "clamp(220px, 60vw, 320px)" }}>
      <Image
        src="/assets/prewed3.jpeg" 
        alt="Foto Mempelai"
        fill
        className="object-cover"
        style={{ objectPosition: "center" }}
      />
    </div>
  </motion.div>
</section>
  );
}