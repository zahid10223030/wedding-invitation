"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate) - new Date();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};

function saveToCalendar() {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    "DTSTART:20260613T090000Z",
    "DTEND:20260613T170000Z",
    "SUMMARY:Pernikahan Agnia & Wahid",
    "DESCRIPTION:Akad Nikah & Resepsi Pernikahan Agnia Amalia dan Wahid Hasyim",
    "LOCATION:Pondok Pesantren Al Amin Bongkor, Kp. Bongkor, Desa Cintarakyat, Kec. Samarang, Kabupaten Garut, Jawa Barat",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n");

  const blob = new Blob([ics], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "pernikahan-wahid-agnia.ics";
  a.click();
  URL.revokeObjectURL(url);
}

export default function Details() {
  const { days, hours, minutes, seconds } = useCountdown("2026-06-13T09:00:00");

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

      <div className="max-w-sm mx-auto">

        {/* Card Acara — satu card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderRadius: "24px",
            border: "1px solid rgba(230,81,0,0.12)",
            background: "#fff",
            boxShadow: "0 4px 24px rgba(230,81,0,0.06)",
            overflow: "hidden",
            marginBottom: "16px",
          }}
        >
          {/* Akad Nikah */}
          <div style={{ padding: "28px 28px 20px" }}>
            <p style={{
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#E65100",
              fontFamily: "'Jost', sans-serif",
              opacity: 0.7,
              marginBottom: "8px",
            }}>
              Akad Nikah
            </p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.4rem",
              fontWeight: 600,
              color: "#2d2d2d",
              marginBottom: "6px",
            }}>
              09:00 – 10:30 WIB
            </p>
            <p style={{
              fontSize: "15px",
              color: "#aaa",
              lineHeight: 1.8,
              fontFamily: "'Playfair Display', serif",
            }}>
              Selasa, 13 Juni 2026
            </p>
          </div>

          {/* Divider */}
          <div style={{
            margin: "0 28px",
            height: "1px",
            background: "rgba(230,81,0,0.1)",
          }} />

          {/* Resepsi */}
          <div style={{ padding: "20px 28px 28px" }}>
            <p style={{
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#E65100",
              fontFamily: "'Jost', sans-serif",
              opacity: 0.7,
              marginBottom: "8px",
            }}>
              Resepsi
            </p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.4rem",
              fontWeight: 600,
              color: "#2d2d2d",
              marginBottom: "6px",
            }}>
              11:00 – Selesai
            </p>
            <p style={{
              fontSize: "13px",
              color: "#aaa",
              lineHeight: 1.8,
              fontFamily: "'Playfair Display', serif",
            }}>
              Pondok Pesantren Al Amin Bongkor<br />
              Kp. Bongkor, Desa Cintarakyat,<br />
              Kec. Samarang, Kabupaten Garut, Jawa Barat.
            </p>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderRadius: "24px",
            border: "1px solid rgba(230,81,0,0.12)",
            background: "#fdf8f4",
            boxShadow: "0 4px 24px rgba(230,81,0,0.06)",
            padding: "28px",
            marginBottom: "16px",
          }}
        >
          <p style={{
            fontSize: "10px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#aaa",
            fontFamily: "'Jost', sans-serif",
            marginBottom: "20px",
          }}>
            Menuju Hari Bahagia
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "8px",
          }}>
            {[
              { value: days, label: "Hari" },
              { value: hours, label: "Jam" },
              { value: minutes, label: "Menit" },
              { value: seconds, label: "Detik" },
            ].map(({ value, label }) => (
              <div key={label} style={{
                background: "#fff",
                borderRadius: "14px",
                padding: "14px 8px",
                border: "1px solid rgba(230,81,0,0.1)",
              }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.4rem, 6vw, 2rem)",
                  fontWeight: 600,
                  color: "#E65100",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}>
                  {String(value).padStart(2, "0")}
                </p>
                <p style={{
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#bbb",
                  fontFamily: "'Jost', sans-serif",
                }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Save the Date */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            onClick={saveToCalendar}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "16px",
              borderRadius: "999px",
              border: "1px solid rgba(230,81,0,0.3)",
              background: "transparent",
              color: "#E65100",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "'Jost', sans-serif",
              fontWeight: 500,
              cursor: "pointer",
              marginBottom: "24px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#E65100";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#E65100";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="17" rx="3"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
              <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
            </svg>
            Save the Date
          </button>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
            height="280"
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
              border: "none",
              width: "100%",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Buka di Google Maps
          </button>
        </motion.div>

      </div>

     
    </section>
  );
}