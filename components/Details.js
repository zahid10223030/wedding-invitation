// components/Details.js
"use client";
import { motion } from "framer-motion";

export default function Details() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 text-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="p-8 border border-gray-100 rounded-3xl"
        >
          <h3 className="text-wedding-accent font-serif text-2xl mb-4">Akad Nikah</h3>
          <p className="font-bold text-lg mb-2">09:00 - 10:30 WIB</p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Kediaman Mempelai Wanita<br />
            Jl. Mawar No. 123, Bandung
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="p-8 bg-gray-50 rounded-3xl"
        >
          <h3 className="text-wedding-accent font-serif text-2xl mb-4">Resepsi</h3>
          <p className="font-bold text-lg mb-2">11:00 - Selesai</p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Grand Ballroom Hotel Mulia<br />
            Bandung, Jawa Barat
          </p>
        </motion.div>
      </div>

      {/* Google Maps */}
      <div className="mt-16 max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-sm border border-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3958.2115825303754!2d107.8547324749993!3d-7.2166895927891135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTMnMDAuMSJTIDEwN8KwNTEnMjYuMyJF!5e0!3m2!1sen!2sid!4v1778753442174!5m2!1sen!2sid"
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
        <button
          onClick={() => window.open("https://www.google.com/maps/place/7%C2%B013'00.1%22S+107%C2%B051'26.3%22E/@-7.2166896,107.8547325,17z", "_blank")}
          className="flex items-center justify-center gap-2 py-3 w-full bg-white border-t border-gray-100 text-wedding-accent hover:bg-orange-50 transition-colors"
          style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Buka di Google Maps
        </button>
      </div>
    </section>
  );
}