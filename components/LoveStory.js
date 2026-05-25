"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const phases = [
  {
    fase: "01",
    judul: "Pertemuan Pertama",
    tanggal: "2024",
    cerita:
      "Semua bermula pada tahun 2024, di sebuah pesantren tempat kami belajar ilmu, menundukkan ego, serta menata hati. Di tempat itulah takdir diam-diam mempertemukan kami. Saat itu, kami hanyalah seorang santri dan santriwati yang saling mengenal seperlunya—tanpa janji, tanpa rasa yang berani diungkapkan. Hanya tatapan singkat yang segera dialihkan, dan sapaan sederhana yang lalu tenggelam di antara hiruk pikuk perjuangan menuntut ilmu.",
    foto: "/assets/AwalPertemuan.jpeg",
  },
  {
    fase: "02",
    judul: "Awal Hubungan",
    tanggal: "2025",
    cerita:
      "Hari demi hari berlalu, hingga tanpa kami sadari, komunikasi yang sederhana itu mulai tumbuh menjadi perhatian yang tak lagi biasa, pada tahun 2025, kami melangkah lebih serius. Bukan sekedar hubungan biasa, tetapi sebuah komitmen yang kami jaga dengan do'a, kesabaran dan keyakinan, bahwa niat baik akan Allah mudahkan jalannya.",
    foto: "/assets/AwalHubungan.jpeg",
  },
  {
    fase: "03",
    judul: "Pertunangan",
    tanggal: "2026",
    cerita:
      "Tahun 2026 menjadi saksi dari keberanian yang lahir setelah panjangnya penantian dan doa-doa yang tak pernah lelah dipanjatkan. Dengan penuh keyakinan, dia datang membawa kesungguhan, mempertemukan dua keluarga besar dalam satu ruang yang dipenuhi harap dan restu. Hari itu bukan sekadar tentang dua insan yang saling mencintai, melainkan tentang dua hati yang dipersatukan oleh takdir, dua keluarga yang saling menerima, serta dua doa yang sejak lama diam-diam mengetuk langit hingga akhirnya Allah mempertemukannya dalam satu tujuan yang sama.",
    foto: "/assets/pertunangan.jpeg",
  },
  {
    fase: "04",
    judul: "Pernikahan",
    tanggal: "13 Juni 2026",
    cerita:
      "Kini, dengan penuh rasa syukur, kami merencanakan hari suci pada 13 Juni 2026. Sebuah langkah besar untuk menyempurnakan agama dan membangun bahtera rumah tangga dalam ridla-Nya. Semoga perjalanan yang berawal dari pesantren ini menjadi kisah cinta yang tak hanya indah di dunia, tetapi juga kekal hingga surga.",
    foto: "/assets/Pernikahan.jpeg",
  },
];

function PhaseCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center w-full max-w-xl mx-auto"
    >
      {/* Tanggal */}
      <div className="mb-6 flex flex-col items-center gap-2">
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#E65100",
            fontFamily: "'Jost', sans-serif",
            opacity: 0.8,
          }}
        >
          {item.tanggal}
        </span>
      </div>

      {/* Foto Utama */}
      <div
        className="relative w-full overflow-hidden mb-8"
        style={{
          aspectRatio: "4/3",
          borderRadius: "16px",
          boxShadow: "0 16px 40px rgba(230,81,0,0.15)",
          border: "4px solid #fdf0e8",
          // FIX UNTUK iOS / SAFARI
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
        }}
      >
        <Image
          src={item.foto}
          alt={item.judul}
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Judul Cerita */}
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
          fontWeight: 600,
          color: "#2d2d2d",
          marginBottom: "16px",
          lineHeight: 1.2,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {item.judul}
      </h3>

      {/* Garis Pembatas Kecil */}
      <div
        className="w-12 h-px mb-6"
        style={{ backgroundColor: "rgba(230,81,0,0.4)" }}
      />

      {/* Isi Cerita Rata Tengah */}
      <p
        style={{
          fontSize: "clamp(12px, 3vw, 15px)",
          color: "#5a5a5a",
          fontFamily: "'Jost', sans-serif",
          lineHeight: 2,
          textAlign: "center",
          padding: "0 10px",
        }}
      >
        {item.cerita}
      </p>
    </motion.div>
  );
}

export default function LoveStory() {
  return (
    <section className="py-24 px-6 overflow-hidden" style={{ backgroundColor: "#fdf8f4" }}>
      {/* Header Utama Section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#aaa",
            fontFamily: "'Jost', sans-serif",
            marginBottom: "10px",
          }}
        >
          Perjalanan Kami
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.5rem, 10vw, 4rem)",
            fontWeight: 400,
            color: "#E65100",
            fontStyle: "italic",
          }}
        >
          Love Story
        </h2>
        <div className="flex items-center gap-3 max-w-[180px] mx-auto mt-4">
          <span
            className="flex-1 h-px"
            style={{
              background: "linear-gradient(to right, transparent, #E65100aa)",
            }}
          />
          <span style={{ color: "#E65100", fontSize: "14px" }}>✦</span>
          <span
            className="flex-1 h-px"
            style={{
              background: "linear-gradient(to left, transparent, #E65100aa)",
            }}
          />
        </div>
      </motion.div>

      {/* Container List Cerita Vertikal */}
      <div className="max-w-4xl mx-auto relative flex flex-col gap-24">
        {phases.map((item, i) => (
          <PhaseCard key={i} item={item} index={i} />
        ))}
      </div>

      {/* Icon Hati di Paling Bawah */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "80px",
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#E65100"
            fillOpacity="0.4"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}