// components/Details.js
"use client";
import { motion } from "framer-motion";

export default function Details() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 text-center">
        
        {/* Acara Akad/Pemberkatan */}
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

        {/* Acara Resepsi */}
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

      {/* Google Maps Placeholder */}
      <div className="mt-16 max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-80 bg-gray-100 flex items-center justify-center">
         <p className="text-gray-400 text-sm italic">
           [ Tempatkan Iframe Google Maps di sini ]
         </p>
      </div>
    </section>
  );
}