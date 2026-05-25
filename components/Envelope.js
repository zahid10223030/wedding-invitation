// components/Envelope.js
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rekening = [
  {
    bank: "BRI",
    noRek: "016101020409531",
    atasNama: "Agnia Amalia",
  },
  {
    bank: "BSI",
    noRek: " 7187966258",
    atasNama: "Wahid Hasyim",
  },

];

function KartuRekening({ item }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.noRek);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "linear-gradient(135deg, #e8e8e8 0%, #f5f5f5 40%, #d8d8d8 100%)",
        borderRadius: "20px",
        padding: "24px",
        marginBottom: "12px",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        minHeight: "160px",
      }}
    >
      {/* Motif diagonal kanan */}
      <div style={{
        position: "absolute",
        right: "-20px",
        top: "0",
        bottom: "0",
        width: "180px",
        background: "rgba(255,255,255,0.25)",
        transform: "skewX(-15deg)",
      }} />
      <div style={{
        position: "absolute",
        right: "30px",
        top: "0",
        bottom: "0",
        width: "80px",
        background: "rgba(255,255,255,0.15)",
        transform: "skewX(-15deg)",
      }} />

      {/* Baris atas: chip + nama bank */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: "20px",
        position: "relative",
        zIndex: 1,
      }}>
        {/* Chip ATM */}
        <svg width="44" height="34" viewBox="0 0 44 34" fill="none">
          <rect x="1" y="1" width="42" height="32" rx="5" fill="#d4a843" stroke="#b8902a" strokeWidth="0.5"/>
          <rect x="8" y="1" width="1.5" height="32" fill="#b8902a" opacity="0.5"/>
          <rect x="34.5" y="1" width="1.5" height="32" fill="#b8902a" opacity="0.5"/>
          <rect x="1" y="10" width="42" height="1.5" fill="#b8902a" opacity="0.5"/>
          <rect x="1" y="22.5" width="42" height="1.5" fill="#b8902a" opacity="0.5"/>
          <rect x="14" y="8" width="16" height="18" rx="2" fill="#c49a30" stroke="#b8902a" strokeWidth="0.5"/>
          <line x1="22" y1="8" x2="22" y2="26" stroke="#b8902a" strokeWidth="0.5" opacity="0.7"/>
          <line x1="14" y1="17" x2="30" y2="17" stroke="#b8902a" strokeWidth="0.5" opacity="0.7"/>
        </svg>

        {/* Nama Bank */}
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.4rem",
          fontWeight: 600,
          color: "#3a3a3a",
        }}>
          {item.bank}
        </p>
      </div>

      {/* Baris bawah: nomor+nama kiri, tombol kanan */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        position: "relative",
        zIndex: 1,
      }}>
        {/* Kiri: nomor & nama */}
        <div style={{ textAlign: "left" }}>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "1rem",
            fontWeight: 500,
            color: "#2d2d2d",
            letterSpacing: "0.08em",
            marginBottom: "4px",
          }}>
            {item.noRek}
          </p>
          <p style={{
            fontSize: "13px",
            color: "#555",
            fontFamily: "'Jost', sans-serif",
          }}>
            {item.atasNama}
          </p>
        </div>

        {/* Kanan bawah: tombol copy */}
        
        <button
          onClick={handleCopy}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 16px",
            borderRadius: "999px",
            border: "none",
            background: copied ? "#555" : "#3a3a3a",
            color: "#fff",
            fontSize: "12px",
            letterSpacing: "0.05em",
            fontFamily: "'Jost', sans-serif",
            cursor: "pointer",
            transition: "all 0.3s ease",
            whiteSpace: "nowrap",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2"/>
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
          </svg>
          {copied ? "Tersalin!" : "Copy"}
        </button>
      </div>
    </motion.div>
  );
}

export default function Envelope() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 px-6 text-center" style={{ backgroundColor: "#fdf8f4" }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <p style={{
          fontSize: "10px",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "#aaa",
          fontFamily: "'Jost', sans-serif",
          marginBottom: "10px",
        }}>
          Hadiah & Doa
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 8vw, 3rem)",
          fontWeight: 400,
          color: "#E65100",
          fontStyle: "italic",
          marginBottom: "12px",
        }}>
          Hadiah Pernikahan
        </h2>
        <p style={{
          fontSize: "13px",
          color: "#bbb",
          fontFamily: "'Jost', sans-serif",
          maxWidth: "280px",
          margin: "0 auto",
          lineHeight: 1.8,
        }}>
          Doa dan restu kalian adalah hadiah terbaik untuk kami.
          Namun jika ingin memberi lebih, kami dengan rendah hati menerimanya.
        </p>
      </motion.div>

      {/* Amplop */}
      <div className="max-w-sm mx-auto">
        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ position: "relative", marginBottom: "24px" }}
        >
          {/* Amplop visual */}
          <motion.div
            animate={isOpen ? { y: -8 } : { y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "#fff",
              border: "1px solid rgba(230,81,0,0.2)",
              borderRadius: "20px",
              padding: "40px 32px",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              boxShadow: isOpen
                ? "0 20px 60px rgba(230,81,0,0.12)"
                : "0 4px 20px rgba(230,81,0,0.06)",
              transition: "box-shadow 0.4s ease",
            }}
          >
            {/* Flap atas amplop */}
            <motion.div
              animate={isOpen ? { rotateX: 180, y: -10 } : { rotateX: 0, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "50%",
                background: "linear-gradient(to bottom, #fdf0e8, #fff)",
                borderBottom: "1px dashed rgba(230,81,0,0.15)",
                transformOrigin: "top",
                transformStyle: "preserve-3d",
              }}
            />

            {/* Icon amplop */}
            <motion.div
              animate={isOpen ? { scale: 0.9, opacity: 0.6 } : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{ position: "relative", zIndex: 1 }}
            >
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none"
                stroke="#E65100" strokeWidth="1" strokeOpacity="0.6"
                style={{ margin: "0 auto 16px" }}
              >
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="M2 7l10 7 10-7" />
              </svg>

              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem",
                fontStyle: "italic",
                color: "#c4956a",
                marginBottom: "4px",
              }}>
                {isOpen ? "Tutup Amplop" : "Buka Amplop"}
              </p>
              <p style={{
                fontSize: "11px",
                color: "#ccc",
                fontFamily: "'Jost', sans-serif",
                letterSpacing: "0.1em",
              }}>
                {isOpen ? "klik untuk menutup" : "klik untuk melihat rekening"}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Rekening — muncul setelah buka */}
        <AnimatePresence>
          {isOpen && rekening.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <KartuRekening item={item} />
            </motion.div>
          ))}
</AnimatePresence>

      </div>
    </section>
  );
}