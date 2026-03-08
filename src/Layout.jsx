import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BackToTop from "@/components/shared/BackToTop";

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6997061fe701824b15311d54/b1fa5e570_325855322_3281150415479821_6288694906918816209_n.jpg";

const navLinks = [
  { label: "Início", page: "Home" },
  { label: "A Igreja", page: "Igreja" },
  { label: "Cultos & Eventos", page: "Eventos" },
  { label: "Ministérios", page: "Ministerios" },
  { label: "Sermões", page: "Sermoes" },
  { label: "Oração", page: "Oracao" },
  { label: "Contato", page: "Contato" },
];

export default function Layout({ children, currentPageName }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = currentPageName === "Home";
  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F6F0", color: "#0D1B2A" }}>
      {/* Top bar institucional */}
      <div className="hidden md:flex items-center justify-between px-8 py-2 text-xs" style={{ backgroundColor: "#0D1B2A", color: "rgba(255,255,255,0.5)" }}>
        <div className="flex items-center gap-2">
          <MapPin size={11} style={{ color: "#D4AF37" }} />
          <span style={{ fontFamily: "Inter, sans-serif" }}>Jardim São Carlos — Setor 08, São Carlos, SP</span>
        </div>
        <div className="flex items-center gap-6" style={{ fontFamily: "Inter, sans-serif" }}>
          <span>Dom: 9h · 18h30 &nbsp;|&nbsp; Qua e Sex: 19h30</span>
          <a href="https://wa.me/5516999999999" style={{ color: "#86efac" }} className="font-medium hover:opacity-80 transition-opacity">
            WhatsApp →
          </a>
        </div>
      </div>

      {/* NAVBAR */}
      <nav
        className="fixed inset-x-0 z-50 transition-all duration-500"
        style={{
          top: 0,
          backgroundColor: transparent ? "transparent" : "rgba(13,27,42,0.97)",
          backdropFilter: transparent ? "none" : "blur(12px)",
          boxShadow: transparent ? "none" : "0 2px 20px rgba(0,0,0,0.4)",
          borderBottom: transparent ? "none" : "1px solid rgba(212,175,55,0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to={createPageUrl("Home")} className="flex items-center gap-4 group">
            <img
              src={LOGO_URL}
              alt="Jardim São Carlos Setor 08"
              className="w-14 h-14 rounded-full object-cover border-2 group-hover:scale-105 transition-transform"
              style={{ borderColor: "#D4AF37" }}
            />
            <div className="leading-tight">
              <div className="text-white font-bold text-sm tracking-wide" style={{ fontFamily: "Georgia, serif" }}>
                IEAD
              </div>
              <div className="text-white font-bold text-base leading-tight" style={{ fontFamily: "Georgia, serif" }}>
                Jardim São Carlos
              </div>
              <div className="text-xs tracking-widest uppercase" style={{ color: "#D4AF37", fontFamily: "Inter, sans-serif" }}>
                Setor 08
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className="text-sm transition-colors relative group"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: currentPageName === link.page ? "#D4AF37" : "rgba(255,255,255,0.75)",
                  letterSpacing: "0.02em",
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                  style={{
                    backgroundColor: "#D4AF37",
                    width: currentPageName === link.page ? "100%" : "0",
                  }}
                />
              </Link>
            ))}
            <Link
              to={createPageUrl("Oracao")}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all hover:opacity-90"
              style={{
                fontFamily: "Inter, sans-serif",
                backgroundColor: "#D4AF37",
                color: "#0D1B2A",
                borderRadius: "2px",
              }}
            >
              Pedido de Oração
            </Link>
          </div>

          <motion.button
            className="lg:hidden text-white p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          >
            <motion.div
              animate={menuOpen ? "open" : "closed"}
              className="flex flex-col gap-1.5 w-5"
            >
              <motion.span
                className="block h-0.5 w-full rounded-full bg-white"
                variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 8 } }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="block h-0.5 w-full rounded-full bg-white"
                variants={{ closed: { opacity: 1, scaleX: 1 }, open: { opacity: 0, scaleX: 0 } }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-0.5 w-full rounded-full bg-white"
                variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -8 } }}
                transition={{ duration: 0.25 }}
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden px-6 pb-6"
              style={{ backgroundColor: "#0D1B2A", borderTop: "1px solid rgba(212,175,55,0.15)" }}
            >
              <div className="pt-4 space-y-0">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3.5 text-sm border-b"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      borderColor: "rgba(255,255,255,0.08)",
                      color: currentPageName === link.page ? "#D4AF37" : "rgba(255,255,255,0.75)",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-5 space-y-3">
                  <Link
                    to={createPageUrl("Oracao")}
                    onClick={() => setMenuOpen(false)}
                    className="block text-center py-3 text-sm font-semibold uppercase tracking-widest"
                    style={{ backgroundColor: "#D4AF37", color: "#0D1B2A", fontFamily: "Inter, sans-serif", borderRadius: "2px" }}
                  >
                    Pedido de Oração
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>{children}</main>
      <BackToTop />

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#0D1B2A", color: "rgba(255,255,255,0.5)" }} className="pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-1 gap-10 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <img src={LOGO_URL} alt="Logo IEAD" className="w-14 h-14 rounded-full object-cover" style={{ border: "2px solid rgba(212,175,55,0.4)" }} />
                <div>
                  <div className="text-white font-bold text-sm" style={{ fontFamily: "Georgia, serif" }}>IEAD</div>
                  <div className="text-white font-bold text-sm leading-tight" style={{ fontFamily: "Georgia, serif" }}>Jardim São Carlos</div>
                  <div className="text-xs tracking-widest uppercase" style={{ color: "#D4AF37", fontFamily: "Inter, sans-serif" }}>Setor 08</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                Proclamando o Evangelho de Jesus Cristo com fidelidade à Palavra e ao poder do Espírito Santo.
              </p>
            </div>


          </div>

          <div className="pt-8 text-center text-xs" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", fontFamily: "Inter, sans-serif" }}>
            © 2026 Jardim São Carlos, Setor 08. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}