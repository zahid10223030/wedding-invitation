// components/RSVPForm.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function RSVPForm() {
  const [status, setStatus] = useState("idle");
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("loading");

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  const res = await fetch("/api/rsvp", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    setStatus("success");
    setShowSuccess(true);  // ← popup muncul
    e.target.reset();
    window.dispatchEvent(new CustomEvent("rsvp-submitted"));
  } else {
    setStatus("error");
    setErrorMsg("Gagal mengirim. Coba lagi ya.");
    setTimeout(() => setErrorMsg(""), 4000);
  }
};

  const labelStyle = {
    fontSize: "10px",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#aaa",
    fontFamily: "'Playfair Display', serif",
    display: "block",
    marginBottom: "10px",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 0",
    borderBottom: "1px solid rgba(230,81,0,0.2)",
    outline: "none",
    fontFamily: "'Playfair Display', serif",
    fontSize: "14px",
    color: "#2d2d2d",
    background: "transparent",
    transition: "border-color 0.3s ease",
  };

  return (
    <section className="py-24 px-6 text-center" style={{ backgroundColor: "#fff" }}>

      {/* Popup Sukses */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSuccess(false)}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
              style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "40px 32px",
                maxWidth: "320px",
                width: "100%",
                textAlign: "center",
                border: "1px solid rgba(230,81,0,0.15)",
              }}
            >
              {/* Icon centang */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgba(230,81,0,0.08)",
                  display: "flex",
                  fontFamily: "'Playfair Display', serif",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E65100" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </motion.div>

              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.6rem",
                fontWeight: 600,
                color: "#2d2d2d",
                marginBottom: "10px",
              }}>
                Terima Kasih!
              </p>
              <p style={{
                fontSize: "13px",
                color: "#aaa",
                fontFamily: "'Jost', sans-serif",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}>
                Konfirmasi kehadiran kamu sudah kami terima.
                Sampai jumpa di hari bahagia kami! 🤍
              </p>
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setShowSuccess(false)}
                style={{
                  padding: "10px 32px",
                  borderRadius: "999px",
                  border: "1px solid rgba(230,81,0,0.3)",
                  background: "#E65100",
                  color: "#fff",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontFamily: "'Jost', sans-serif",
                  cursor: "pointer",
                }}
              >
                Tutup
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
          Konfirmasi
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 8vw, 3rem)",
          fontWeight: 400,
          color: "#E65100",
          fontStyle: "italic",
        }}>
          Konfirmasi Kehadiran
        </h2>
        <div className="flex items-center gap-3 max-w-[180px] mx-auto mt-4">
          <span className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #E65100aa)" }} />
          <span style={{ color: "#E65100", fontSize: "14px" }}>✦</span>
          <span className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #E65100aa)" }} />
        </div>
      </motion.div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-lg mx-auto text-left"
        style={{
          background: "#fdf8f4",
          border: "1px solid rgba(230,81,0,0.12)",
          borderRadius: "24px",
          padding: "40px 32px",
          boxShadow: "0 4px 24px rgba(230,81,0,0.06)",
        }}
      >
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Nama */}
          <div>
            <label style={labelStyle}>Nama Lengkap</label>
            <input
              name="name"
              type="text"
              required
              placeholder="Masukkan nama lengkap"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = "#E65100"}
              onBlur={e => e.target.style.borderColor = "rgba(230,81,0,0.2)"}
            />
          </div>

          {/* Kehadiran — ✅ radio custom warna orange */}
          <div>
            <label style={labelStyle}>Kehadiran</label>
            <div className="flex gap-6">
              {["Hadir", "Tidak Hadir"].map((val) => (
                <label
                  key={val}
                  className="flex items-center gap-2 cursor-pointer"
                  style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", color: "#2d2d2d" }}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value={val}
                    defaultChecked={val === "Hadir"}
                    style={{ accentColor: "#E65100", width: "16px", height: "16px" }}
                  />
                  {val}
                </label>
              ))}
            </div>
          </div>

          {/* Jumlah Tamu — ✅ sampai 4 + lebih dari 4 */}
          <div>
            <label style={labelStyle}>Jumlah Tamu</label>
            <select
              name="guestCount"
              style={{ ...inputStyle, cursor: "pointer" }}
            >
              <option value="1">1 Orang</option>
              <option value="2">2 Orang</option>
              <option value="3">3 Orang</option>
              <option value="4">4 Orang</option>
              <option value="5+">Lebih dari 4 Orang</option>
            </select>
          </div>

          {/* Pesan */}
          <div>
            <label style={labelStyle}>Pesan & Doa</label>
            <textarea
              name="message"
              required
              placeholder="Tuliskan doa dan ucapan terbaik kamu..."
              style={{ ...inputStyle, height: "120px", resize: "none", paddingTop: "8px" }}
              onFocus={e => e.target.style.borderColor = "#E65100"}
              onBlur={e => e.target.style.borderColor = "rgba(230,81,0,0.2)"}
            />
          </div>

          {/* Tombol */}
          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            style={{
              width: "100%",
              padding: "14px",
              background: status === "loading" ? "#ccc" : "#E65100",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              fontSize: "11px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontFamily: "'Jost', sans-serif",
              fontWeight: 500,
              cursor: status === "loading" ? "not-allowed" : "pointer",
              transition: "background 0.3s ease",
            }}
          >
            {status === "loading" ? "Mengirim..." : "Kirim Ucapan"}
          </motion.button>

        </form>
      </motion.div>
    </section>
  );
}