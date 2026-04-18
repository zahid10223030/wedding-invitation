"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Guestbook() {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/comments?page=${page}`)
      .then(res => res.json())
      .then(res => {
        setComments(res.data || []);
        setTotalPages(res.totalPages || 1);
        setLoading(false);
      });
  }, [page]);

  return (
    <section className="py-20 max-w-2xl mx-auto px-6 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif mb-2">Guestbook</h2>
        <div className="h-1 w-20 bg-wedding-accent mx-auto rounded-full"></div>
      </div>

      <div className="space-y-6 min-h-[400px]">
        {loading ? (
          <p className="text-center text-gray-400 italic">Memuat ucapan...</p>
        ) : (
          <AnimatePresence mode="wait">
            {comments.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-6 border-b border-gray-50 bg-[#FAFAFA] rounded-xl"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-wedding-dark">{item.name}</h4>
                  <span className="text-[10px] px-2 py-1 bg-orange-100 text-wedding-accent rounded-full uppercase">
                    {item.attendance}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">"{item.message}"</p>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
      
      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-12 pt-6 border-t border-gray-100">
        <button 
          disabled={page === 1}
          onClick={() => setPage(p => p - 1)}
          className="text-sm font-medium text-wedding-accent disabled:text-gray-300 hover:underline"
        >
          ← Sebelumnya
        </button>
        <span className="text-xs text-gray-400">Hal. {page} / {totalPages}</span>
        <button 
          disabled={page === totalPages}
          onClick={() => setPage(p => p + 1)}
          className="text-sm font-medium text-wedding-accent disabled:text-gray-300 hover:underline"
        >
          Selanjutnya →
        </button>
      </div>
    </section>
  );
}