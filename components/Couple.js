"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const mempelai = [
  {
    foto: "/assets/prewed9.jpeg",        
    nama: "Agnia Amalia",
    ig: "@Imaghniya", // Ganti sama username IG asli
    igLink: "https://www.instagram.com/imaghniya_?igsh=dXFhbXFucHBscGg=", // Ganti sama link IG asli
    peran: "Mempelai Wanita",
    gender: "putri",
    anakKe: "keempat",
    ayah: "Bapak Usep Jumhur, S.I.P",
    ibu: "Ibu Iis Nursaadah",
  },
  {
    foto: "/assets/prewed10.jpeg",       
    nama: "Wahid Hasyim, S.Pd., M.Pd. ",
    ig: "@w1hasyim", // Ganti sama username IG asli
    igLink: "https://www.instagram.com/w1hasyim?igsh=YmJqNzc5bW1ibXhp", // Ganti sama link IG asli
    peran: "Mempelai Pria",
    gender: "putra",
    anakKe: "pertama",
    ayah: "Bapak Asep Saepudin",
    ibu: "Ibu Lilis Rohayani",
  },
];

export default function Couple() {
  return (
    <section className="py-24 px-6 text-center" style={{ backgroundColor: "#fff" }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p style={{
          fontSize: "10px",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "#aaa",
          fontFamily: "'Jost', sans-serif",
          marginBottom: "10px",
        }}>
          Yang Berbahagia
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 8vw, 3rem)",
          fontWeight: 400,
          color: "#E65100",
          fontStyle: "italic",
        }}>
          Mempelai
        </h2>
        <div className="flex items-center gap-3 max-w-[180px] mx-auto mt-4">
          <span className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #E65100aa)" }} />
          <span style={{ color: "#E65100", fontSize: "14px" }}>✦</span>
          <span className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #E65100aa)" }} />
        </div>
      </motion.div>

      {/* Card Mempelai */}
      <div className="flex flex-col items-center gap-6 max-w-sm mx-auto">
        {mempelai.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="w-full"
          >
            {/* Foto */}
            <div
              className="relative mx-auto mb-6 overflow-hidden"
              style={{
                width: "200px",
                height: "240px",
                borderRadius: "999px 999px 32px 32px",
                border: "4px solid #fdf0e8",
                boxShadow: "0 8px 32px rgba(230,81,0,0.1)",
              }}
            >
              <Image
                src={m.foto}
                alt={m.nama}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Info */}
            <p style={{
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#E65100",
              fontFamily: "'Jost', sans-serif",
              marginBottom: "6px",
              opacity: 0.9,
            }}>
              {m.peran}
            </p>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.5rem, 6vw, 2rem)",
              fontWeight: 600,
              color: "#2d2d2d",
              marginBottom: "4px", // Diperkecil biar IG nya deketan sama nama
            }}>
              {m.nama}
            </h3>

            {/* Tambahan Instagram */}
            {m.ig && (
              <a 
                href={m.igLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 mx-auto mb-5 hover:opacity-70 transition-opacity"
                style={{
                  fontSize: "12px",
                  color: "#aaa", // Warna soft biar ga nabrak sama nama
                  fontFamily: "'Jost', sans-serif",
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                }}
              >
                {/* Icon IG SVG Simple */}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                {m.ig}
              </a>
            )}

            <p style={{
              fontSize: "13px",
              color: "#5a3825",
              lineHeight: 1.8,
              fontFamily: "'Jost', sans-serif",
            }}>
              {`${m.gender.charAt(0).toUpperCase() + m.gender.slice(1)} ${m.anakKe} dari : `}
              <br/>
              {m.ayah}<br />
              &amp;<br />
              {m.ibu}
            </p>

            {/* Divider antar mempelai */}
            {i === 0 && (
              <div className="my-10">
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.5rem, 10vw, 4rem)",
                  color: "#E65100",
                  opacity: 0.9,
                  lineHeight: 1,
                }}>
                  &amp;
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

    </section>
  );
}