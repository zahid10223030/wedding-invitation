"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

/* ================================================================
   DAFTAR ASSET GAMBAR — taruh semua di folder /public
   ================================================================
   ORNAMEN ATAS:
     /ornamen-atas.png        → strip dekoratif batik + bunga di bagian paling atas
                                (contoh referensi: border emas + orchid putih)

   BUNGA SUDUT & SAMPING:
     /bunga-kiri-atas.png     → ornamen bunga pojok kiri atas (orchid menggantung)
     /bunga-kanan-atas.png    → ornamen bunga pojok kanan atas
     /bunga-kiri-tengah.png   → pohon / bunga di sisi kiri tengah
     /bunga-kanan-tengah.png  → pohon / bunga di sisi kanan tengah

   AREA BAWAH (rumah adat + taman):
     /rumah-adat.png          → rumah panggung sunda — di center bawah
     /taman-kiri.png          → taman bunga kiri bawah (marigold, orchid, dll)
     /taman-kanan.png         → taman bunga kanan bawah

   ELEMEN TENGAH:
     /siger.png               → mahkota siger sunda
     /divider.png             → ornamen garis pemisah
     /lentera-kiri.png        → lentera gantung sisi kiri (opsional, bisa dikosongin)
     /lentera-kanan.png       → lentera gantung sisi kanan (opsional)
   ================================================================ */

/* ----------------------------------------------------------------
   SVG FRAME TAMU — dekoratif, bukan kotak polos
   Sudut punya ornamen sulur, sisi ada garis tipis dengan aksen
---------------------------------------------------------------- */
function FrameTamu({ children }) {
  const W = 300;
  const H = 160;
  const pad = 14;
  const r = 6; // corner ornament reach

  return (
    <div className="relative w-full max-w-[300px] mx-auto">
      {/* SVG frame di belakang */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Garis kotak utama */}
        <rect
          x={pad}
          y={pad}
          width={W - pad * 2}
          height={H - pad * 2}
          stroke="#E65100"
          strokeWidth="0.6"
          strokeOpacity="0.35"
          rx="2"
        />
        {/* Garis kotak dalam (double border) */}
        <rect
          x={pad + 5}
          y={pad + 5}
          width={W - (pad + 5) * 2}
          height={H - (pad + 5) * 2}
          stroke="#E65100"
          strokeWidth="0.4"
          strokeOpacity="0.2"
          rx="1"
        />

        {/* ---- Ornamen 4 sudut: sulur / floral ---- */}
        {/* Pojok Kiri Atas */}
        <g transform={`translate(${pad}, ${pad})`}>
          <circle cx="0" cy="0" r="3" fill="#E65100" fillOpacity="0.5" />
          <path
            d="M0 0 C6 -2, 14 0, 16 0"
            stroke="#E65100"
            strokeWidth="0.7"
            strokeOpacity="0.5"
            fill="none"
          />
          <path
            d="M0 0 C-2 6, 0 14, 0 16"
            stroke="#E65100"
            strokeWidth="0.7"
            strokeOpacity="0.5"
            fill="none"
          />
          <path
            d="M4 -1 C6 3, 8 5, 6 8"
            stroke="#E65100"
            strokeWidth="0.5"
            strokeOpacity="0.35"
            fill="none"
          />
          <circle cx="8" cy="3" r="1.2" fill="#E65100" fillOpacity="0.3" />
          <circle cx="3" cy="8" r="1.2" fill="#E65100" fillOpacity="0.3" />
        </g>

        {/* Pojok Kanan Atas */}
        <g transform={`translate(${W - pad}, ${pad}) scale(-1,1)`}>
          <circle cx="0" cy="0" r="3" fill="#E65100" fillOpacity="0.5" />
          <path
            d="M0 0 C6 -2, 14 0, 16 0"
            stroke="#E65100"
            strokeWidth="0.7"
            strokeOpacity="0.5"
            fill="none"
          />
          <path
            d="M0 0 C-2 6, 0 14, 0 16"
            stroke="#E65100"
            strokeWidth="0.7"
            strokeOpacity="0.5"
            fill="none"
          />
          <path
            d="M4 -1 C6 3, 8 5, 6 8"
            stroke="#E65100"
            strokeWidth="0.5"
            strokeOpacity="0.35"
            fill="none"
          />
          <circle cx="8" cy="3" r="1.2" fill="#E65100" fillOpacity="0.3" />
          <circle cx="3" cy="8" r="1.2" fill="#E65100" fillOpacity="0.3" />
        </g>

        {/* Pojok Kiri Bawah */}
        <g transform={`translate(${pad}, ${H - pad}) scale(1,-1)`}>
          <circle cx="0" cy="0" r="3" fill="#E65100" fillOpacity="0.5" />
          <path
            d="M0 0 C6 -2, 14 0, 16 0"
            stroke="#E65100"
            strokeWidth="0.7"
            strokeOpacity="0.5"
            fill="none"
          />
          <path
            d="M0 0 C-2 6, 0 14, 0 16"
            stroke="#E65100"
            strokeWidth="0.7"
            strokeOpacity="0.5"
            fill="none"
          />
          <path
            d="M4 -1 C6 3, 8 5, 6 8"
            stroke="#E65100"
            strokeWidth="0.5"
            strokeOpacity="0.35"
            fill="none"
          />
          <circle cx="8" cy="3" r="1.2" fill="#E65100" fillOpacity="0.3" />
          <circle cx="3" cy="8" r="1.2" fill="#E65100" fillOpacity="0.3" />
        </g>

        {/* Pojok Kanan Bawah */}
        <g transform={`translate(${W - pad}, ${H - pad}) scale(-1,-1)`}>
          <circle cx="0" cy="0" r="3" fill="#E65100" fillOpacity="0.5" />
          <path
            d="M0 0 C6 -2, 14 0, 16 0"
            stroke="#E65100"
            strokeWidth="0.7"
            strokeOpacity="0.5"
            fill="none"
          />
          <path
            d="M0 0 C-2 6, 0 14, 0 16"
            stroke="#E65100"
            strokeWidth="0.7"
            strokeOpacity="0.5"
            fill="none"
          />
          <path
            d="M4 -1 C6 3, 8 5, 6 8"
            stroke="#E65100"
            strokeWidth="0.5"
            strokeOpacity="0.35"
            fill="none"
          />
          <circle cx="8" cy="3" r="1.2" fill="#E65100" fillOpacity="0.3" />
          <circle cx="3" cy="8" r="1.2" fill="#E65100" fillOpacity="0.3" />
        </g>

        {/* Aksen garis tengah atas & bawah (diamond kecil) */}
        <polygon
          points={`${W / 2},${pad - 3} ${W / 2 + 4},${pad} ${W / 2},${pad + 3} ${W / 2 - 4},${pad}`}
          fill="#E65100"
          fillOpacity="0.4"
        />
        <polygon
          points={`${W / 2},${H - pad - 3} ${W / 2 + 4},${H - pad} ${W / 2},${H - pad + 3} ${W / 2 - 4},${H - pad}`}
          fill="#E65100"
          fillOpacity="0.4"
        />

        {/* Aksen garis tengah kiri & kanan */}
        <polygon
          points={`${pad - 3},${H / 2} ${pad},${H / 2 - 4} ${pad + 3},${H / 2} ${pad},${H / 2 + 4}`}
          fill="#E65100"
          fillOpacity="0.4"
        />
        <polygon
          points={`${W - pad - 3},${H / 2} ${W - pad},${H / 2 - 4} ${W - pad + 3},${H / 2} ${W - pad},${H / 2 + 4}`}
          fill="#E65100"
          fillOpacity="0.4"
        />
      </svg>

      {/* Konten tamu di atas frame */}
      <div className="relative z-10" style={{ padding: "28px 32px 24px" }}>
        {children}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------
   HERO COMPONENT UTAMA
---------------------------------------------------------------- */
export default function Hero({ onOpen, guestName = "Di Tempat" }) {
  /* Variasi animasi */
  const stagger = (i = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.9,
      delay: 0.3 + i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  const slideIn = (dir = "left", delay = 0) => ({
    initial: { opacity: 0, x: dir === "left" ? -40 : 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] },
  });

  const floatAnim = {
    animate: { y: [0, -10, 0] },
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  };

  const floatSlow = {
    animate: { y: [0, -7, 0] },
    transition: {
      duration: 5.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.8,
    },
  };

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center overflow-hidden"
    >
       {/* ---- Background Foto ---- */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/assets/prewed2.jpeg"  // ← ganti dengan nama file foto kamu
      alt=""
      fill
      className="object-cover"
      style={{ objectPosition: "72% 50%" }}
      priority
    />
    {/* Overlay gelap/terang biar teks tetap kebaca */}
    <div
      className="absolute inset-0"
      style={{ backgroundColor: "rgba(43, 37, 37, 0.55)" }} // ← putih semi-transparan
    />
  </div>
      {/* =======================================================
          2. AREA TENGAH — bunga samping + konten utama
      ======================================================= */}
      <div className="relative flex-1 w-full flex items-center justify-center">
        {/* ---- Bunga Kiri Atas (pojok, menggantung dari atas) ---- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute pointer-events-none z-10"
          style={{
            top: "0",
            left: "0",
            width: "clamp(90px, 22vw, 200px)",
            height: "clamp(120px, 30vw, 280px)",
          }}
        >
          <Image
            src="/assets/bunga_kiri_atas_merah.png"
            alt=""
            fill
            className="object-contain object-top object-left"
          />
        </motion.div>

        {/* ---- Bunga Kanan Atas (pojok, menggantung dari atas) ---- */}
        <motion.div
          initial={{ opacity: 0, x: 40, scaleX: -1 }}
          animate={{ opacity: 1, x: 0, scaleX: -1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute pointer-events-none z-10"
          style={{
            top: "0",
            right: "0",
            width: "clamp(90px, 22vw, 200px)",
            height: "clamp(120px, 30vw, 280px)",
          }}
        >
          <Image
            src="/assets/bunga_kiri_atas_merah.png"
            alt=""
            fill
            className="object-contain object-top object-left"
          />
        </motion.div>

        {/* ---- Janur kiri ---- */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scaleX: -1 }}   // ✅ scaleX di sini
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute pointer-events-none z-10"
          style={{
            position: "absolute",
            left: "0",
            top: "65%",
            translateY: "-50%",                   // ✅ Framer Motion ngerti ini
            width: "clamp(180px, 48vw, 380px)",
            height: "clamp(500px, 130vw, 800px)",
          }}
        >
          <Image src="/janur.png" alt="" fill className="object-contain object-left" />
        </motion.div> */}

        {/* ---- Janur Kanan ---- */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute pointer-events-none z-10"
        style={{
          position: "absolute",
          right: "0",
          top: "65%",
          transform: "translateY(-50%)",
          width: "clamp(180px, 48vw, 380px)",
          height: "clamp(500px, 130vw, 800px)",
        }}
      >
        <Image
          src="/janur.png"
          alt=""
          fill
          className="object-contain object-right"
        />
      </motion.div>    */}

        {/* =======================================================
            KONTEN UTAMA — center
        ======================================================= */}
        <div
          className="relative z-20 flex flex-col items-center text-center w-full max-w-md px-6 py-8"
          style={{ fontFamily: "'Jost', sans-serif" }}
        >
          {/* SIGER — floating perlahan */}
          <motion.div {...stagger(0)} className="mb-3">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <div
                className="relative mx-auto"
                style={{
                  width: "clamp(128px, 16vw, 200px)",
                  height: "clamp(76px, 10vw, 116px)",
                }}
              >
                <Image
                  src="/assets/siger.png"
                  alt="Siger Sunda"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* LABEL "PERNIKAHAN" */}
          <motion.div
            {...stagger(1)}
            className="flex items-center gap-3 w-full max-w-[240px] mx-auto mb-4"
          >
            <span
              className="flex-1 h-px"
              style={{
                background: "linear-gradient(to right, transparent, #E0E0E0)",
              }}
            />
            <span
              style={{
                fontSize: "9px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#aaa",
                fontWeight: 500,
              }}
            >
              Pernikahan
            </span>
            <span
              className="flex-1 h-px"
              style={{
                background: "linear-gradient(to left, transparent, #E0E0E0)",
              }}
            />
          </motion.div>

          {/* NAMA MEMPELAI — muncul dengan scale in */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="leading-none mb-2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3.5rem, 14vw, 6rem)",
              fontWeight: 400,
              color: "#D4AF37",
            }}
          >
            <span className="block"
            style={{
              fontSize: "0.70em",
              fontStyle: "italic",
              color: "#D4AF37",
              lineHeight: "1.8",
            }}>Wahid</span>
            <span
              className="block"
              style={{
                fontSize: "0.50em",
                fontStyle: "italic",
                color: "#D4AF37",
                lineHeight: "1.8",
              }}
            >
              &amp;
            </span>
            <span className="block"
            style={{
              fontSize: "0.70em",
              fontStyle: "italic",
              color: "#D4AF37",
              lineHeight: "1.8",
            }}>Agnia</span>
          </motion.h1>

          {/* DIVIDER
          <motion.div
            {...stagger(3)}
            className="w-full max-w-[220px] sm:max-w-[280px] my-4 mx-auto"
          >
            <div
              className="relative w-full"
              style={{ height: "clamp(20px, 5vw, 28px)" }}
            >
              <Image
                src="/divider.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </motion.div> */}

          {/* FRAME TAMU DEKORATIF */}
          <motion.div {...stagger(4)} className="w-full mb-6">
          <div className="bg-white/1 border border-white/2 rounded-xl overflow-hidden p-1">
            <FrameTamu>
              <p
                style={{
                  fontSize: "9px",
                  // fontWeight: 700,
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  color: "#aaa",
                  marginBottom: "8px",
                }}
              >
                Kepada Yth. Bapak/Ibu/Saudara/i
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.15rem, 4.5vw, 1.5rem)",
                  fontWeight: 600,
                  color: "#D4AF37",
                  lineHeight: 1.25,
                  marginBottom: "6px",
                }}
              >
                {guestName}
              </p>
              <p
                style={{ fontSize: "10px", color: "#bbb", fontStyle: "italic" }}
              >
                Dengan penuh sukacita, kami mengundang anda untuk hadir dalam momen bahagia kami.
              </p>
            </FrameTamu>
            </div>
          </motion.div>

          {/* TOMBOL BUKA UNDANGAN */}
          <motion.div {...stagger(5)}>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(240, 144, 0, 0.88)",
              }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpen}
              className="flex items-center gap-2.5"
              style={{
                background: "#D4AF37",
                color: "#261F08",
                padding: "13px 36px",
                fontSize: "10px",
                fontWeight: 750,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontFamily: "'Jost', sans-serif",
                border: "none",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                borderRadius: "10px",
              }}
            >
              {/* Shimmer effect saat hover */}
              <motion.span
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                }}
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ opacity: 0.85, position: "relative" }}
              >
                <path d="M4 4h16v12H4z" />
                <path d="M4 4l8 9 8-9" />
              </svg>
              <span style={{ position: "relative" }}>Buka Undangan</span>
            </motion.button>
          </motion.div>
        </div>
        {/* /konten utama */}
      </div>
      {/* /area tengah */}

      {/* =======================================================
          3. AREA BAWAH — Rumah Adat + Taman Bunga
          Layout: bunga kiri | rumah | bunga kanan
          Semua nempel ke bagian bawah section
      ======================================================= */}
      <div
        className="relative w-full pointer-events-none z-10 flex items-end justify-center"
        style={{ height: "clamp(140px, 35vw, 300px)" }}
      >
        {/* Taman Bunga Kiri */}
        <motion.div
          {...slideIn("left", 0.6)}
          className="absolute bottom-0 left-0 z-10"
          style={{ width: "clamp(85px, 24vw, 220px)", height: "100%" }}
        >
          <Image
            src="/assets/bunga_kiri_bawah_merah.png"
            alt=""
            fill
            className="object-contain object-bottom"
          />
        </motion.div>

        {/* Rumah Adat — tengah, paling besar */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20"
          style={{ width: "clamp(160px, 48vw, 380px)", height: "100%" }}
        >
          <Image
            src="/assets/rumahadat1.png"
            alt="Rumah Adat Sunda"
            fill
            className="object-contain object-bottom"
          />
        </motion.div>

        {/* Taman Bunga Kanan */}
        <motion.div
          initial={{ opacity: 0, x: 40, scaleX: -1 }}
          animate={{ opacity: 1, x: 0, scaleX: -1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 right-0 z-10"
          style={{ width: "clamp(85px, 24vw, 220px)", height: "100%" }}
        >
          <Image
            src="/assets/bunga_kiri_bawah_merah.png"
            alt=""
            fill
            className="object-contain object-bottom"
          />
        </motion.div>
      </div>
      {/* /area bawah */}
    </section>
  );
}
