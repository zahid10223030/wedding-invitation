// components/Details.js
"use client";
import { motion } from "framer-motion";

export default function Details() {
  return (
    <section className="py-24 px-6 text-center" style={{ backgroundColor: "#fff" }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-14"
      >
        <p style={{
          fontSize: "10px",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "#aaa",
          fontFamily: "'Jost', sans-serif",
          marginBottom: "10px",
        }}>
          Waktu & Tempat
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 8vw, 3rem)",
          fontWeight: 400,
          color: "#E65100",
          fontStyle: "italic",
        }}>
          Detail Acara
        </h2>
        <div className="flex items-center gap-3 max-w-[180px] mx-auto mt-4">
          <span className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #E65100aa)" }} />
          <span style={{ color: "#E65100", fontSize: "14px" }}>✦</span>
          <span className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #E65100aa)" }} />
        </div>
      </motion.div>

      {/* Card Acara */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-16">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            padding: "36px 28px",
            borderRadius: "24px",
            border: "1px solid rgba(230,81,0,0.12)",
            background: "#fff",
            boxShadow: "0 4px 24px rgba(230,81,0,0.06)",
          }}
        >
          {/* Icon */}
          <div style={{ marginBottom: "16px" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E65100" strokeWidth="1.2" strokeOpacity="0.6" style={{ margin: "0 auto" }}>
              <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
          </div>
          <p style={{
            fontSize: "10px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#E65100",
            fontFamily: "'Jost', sans-serif",
            opacity: 0.7,
            marginBottom: "10px",
          }}>
            Akad Nikah
          </p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#2d2d2d",
            marginBottom: "10px",
          }}>
            09:00 - 10:30 WIB
          </p>
          <p style={{
            fontSize: "13px",
            color: "#aaa",
            lineHeight: 1.8,
            fontFamily: "'Jost', sans-serif",
          }}>
            Pondok Pesantren Al Amin Bongkor<br />
            Kp Bongkor No.108, Cintarakyat, Kec. Samarang, Kabupaten Garut, Jawa Barat.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            padding: "36px 28px",
            borderRadius: "24px",
            border: "1px solid rgba(230,81,0,0.12)",
            background: "#fdf8f4",
            boxShadow: "0 4px 24px rgba(230,81,0,0.06)",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E65100" strokeWidth="1.2" strokeOpacity="0.6" style={{ margin: "0 auto" }}>
              <rect x="3" y="4" width="18" height="17" rx="3"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          </div>
          <p style={{
            fontSize: "10px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#E65100",
            fontFamily: "'Jost', sans-serif",
            opacity: 0.7,
            marginBottom: "10px",
          }}>
            Resepsi
          </p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#2d2d2d",
            marginBottom: "10px",
          }}>
            11:00 - Selesai
          </p>
          <p style={{
            fontSize: "13px",
            color: "#aaa",
            lineHeight: 1.8,
            fontFamily: "'Jost', sans-serif",
          }}>
            Pondok Pesantren Al Amin Bongkor<br />
            Kp Bongkor No.108, Cintarakyat, Kec. Samarang, Kabupaten Garut, Jawa Barat.
          </p>
        </motion.div>

      </div>

      {/* Google Maps */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto"
        style={{
          borderRadius: "24px",
          overflow: "hidden",
          border: "1px solid rgba(230,81,0,0.12)",
          boxShadow: "0 4px 24px rgba(230,81,0,0.06)",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3958.2115825303754!2d107.8547324749993!3d-7.2166895927891135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTMnMDAuMSJTIDEwN8KwNTEnMjYuMyJF!5e0!3m2!1sen!2sid!4v1778753442174!5m2!1sen!2sid"
          width="100%"
          height="320"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
        />
        <button
          onClick={() => window.open("https://www.google.com/maps/place/7%C2%B013'00.1%22S+107%C2%B051'26.3%22E/@-7.2166896,107.8547325,17z", "_blank")}
          className="flex items-center justify-center gap-2 py-4 w-full hover:bg-orange-50 transition-colors"
          style={{
            background: "#fff",
            borderTop: "1px solid rgba(230,81,0,0.1)",
            color: "#E65100",
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontFamily: "'Jost', sans-serif",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Buka di Google Maps
        </button>
      </motion.div>

    </section>
  );
}