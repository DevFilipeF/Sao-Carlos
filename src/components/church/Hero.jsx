import { motion } from "framer-motion";
import { createPageUrl } from "@/utils";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 navy-gradient opacity-85" />

      {/* Decorative cross */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
        <svg width="600" height="600" viewBox="0 0 100 100" fill="white">
          <rect x="40" y="10" width="20" height="80" />
          <rect x="10" y="35" width="80" height="20" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <div className="h-px w-12 bg-yellow-400 opacity-60" />
          <span className="text-yellow-400 text-sm font-medium tracking-widest uppercase">
            Bem-vindo à
          </span>
          <div className="h-px w-12 bg-yellow-400 opacity-60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4"
        >
          Igreja Pentecostal
          <br />
          <span className="text-yellow-400">Chama Viva</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed"
        >
          "O Espírito do Senhor está sobre mim." — Lucas 4:18
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to={createPageUrl("Eventos")}
            className="px-8 py-4 gold-gradient text-navy font-bold rounded-full text-sm tracking-wide uppercase hover:opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            Ver Programação
          </Link>
          <Link
            to={createPageUrl("Contato")}
            className="px-8 py-4 border border-white/30 text-white font-medium rounded-full text-sm tracking-wide uppercase hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Falar Conosco
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-3 gap-8 mt-20 border-t border-white/10 pt-10"
        >
          {[
            { number: "25+", label: "Anos de história" },
            { number: "1.200+", label: "Membros ativos" },
            { number: "8", label: "Ministérios" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">{stat.number}</div>
              <div className="text-white/60 text-xs md:text-sm mt-1 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}