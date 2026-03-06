import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Cross } from "lucide-react";

const navLinks = [
  { label: "Início", page: "Home" },
  { label: "Quem Somos", page: "QuemSomos" },
  { label: "Ministérios", page: "Ministerios" },
  { label: "Eventos", page: "Eventos" },
  { label: "Contato", page: "Contato" },
];

export default function Navbar({ currentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-[#0F1F3D]/95 backdrop-blur-md shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to={createPageUrl("Home")} className="flex items-center gap-3">
          <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
              <rect x="10" y="2" width="4" height="20" />
              <rect x="2" y="8" width="20" height="4" />
            </svg>
          </div>
          <div>
            <div className="text-white font-bold text-sm leading-tight">Chama Viva</div>
            <div className="text-yellow-400/70 text-xs leading-tight">Igreja Pentecostal</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.page}
              to={createPageUrl(link.page)}
              className={`text-sm font-medium transition-colors ${
                currentPage === link.page
                  ? "text-yellow-400"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to={createPageUrl("Contato")}
            className="ml-2 px-5 py-2 gold-gradient text-navy font-bold rounded-full text-xs uppercase tracking-wide hover:opacity-90 transition-all"
          >
            Pedido de Oração
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.page}
              to={createPageUrl(link.page)}
              onClick={() => setMenuOpen(false)}
              className={`block text-base font-medium py-2 border-b border-white/10 ${
                currentPage === link.page ? "text-yellow-400" : "text-white/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to={createPageUrl("Contato")}
            onClick={() => setMenuOpen(false)}
            className="block text-center mt-4 px-5 py-3 gold-gradient text-navy font-bold rounded-full text-sm"
          >
            Pedido de Oração
          </Link>
        </div>
      )}
    </nav>
  );
}