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
        background: "#fff",
        border: "1px solid rgba(230,81,0,0.15)",
        borderRadius: "20px",
        padding: "24px",
        marginBottom: "12px",
      }}
    >
      <p style={{
        fontSize: "10px",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        color: "#E65100",
        fontFamily: "'Jost', sans-serif",
        marginBottom: "8px",
        opacity: 0.7,
      }}>
        {item.bank}
      </p>
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.6rem",
        fontWeight: 600,
        color: "#2d2d2d",
        letterSpacing: "0.08em",
        marginBottom: "4px",
      }}>
        {item.noRek}
      </p>
      <p style={{
        fontSize: "12px",
        color: "#aaa",
        fontFamily: "'Jost', sans-serif",
        marginBottom: "16px",
      }}>
        a.n. {item.atasNama}
      </p>

      <button
        onClick={handleCopy}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "8px 20px",
          borderRadius: "999px",
          border: "1px solid rgba(230,81,0,0.3)",
          background: copied ? "#E65100" : "transparent",
          color: copied ? "#fff" : "#E65100",
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          fontFamily: "'Jost', sans-serif",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        {copied ? "✓ Tersalin!" : "Salin Nomor"}
      </button>
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