// components/RSVPForm.js
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RSVPForm() {
  const [status, setStatus] = useState("idle");

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
      e.target.reset();
      alert("Terima kasih! RSVP Anda telah tersimpan.");
      window.location.reload(); // Refresh untuk update guestbook
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 bg-white px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-lg mx-auto border border-gray-100 p-8 rounded-2xl shadow-sm"
      >
        <h2 className="text-3xl font-serif text-center mb-8 text-wedding-accent">Konfirmasi Kehadiran</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
            <input name="name" type="text" required className="w-full p-3 border-b border-gray-200 focus:border-wedding-accent outline-none transition-all" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Kehadiran</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="attendance" value="Hadir" defaultChecked className="accent-wedding-accent" /> Hadir
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="attendance" value="Tidak Hadir" className="accent-wedding-accent" /> Absen
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Jumlah Tamu</label>
            <select name="guestCount" className="w-full p-3 border-b border-gray-200 outline-none">
              <option value="1">1 Orang</option>
              <option value="2">2 Orang</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Pesan Singkat</label>
            <textarea name="message" required className="w-full p-3 border-b border-gray-200 focus:border-wedding-accent outline-none h-32 resize-none"></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status === "loading"}
            className="w-full bg-wedding-accent text-white py-4 rounded-xl font-semibold hover:bg-orange-700 transition-colors"
          >
            {status === "loading" ? "Mengirim..." : "Kirim Ucapan"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}