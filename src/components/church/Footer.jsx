import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                  <rect x="10" y="2" width="4" height="20" />
                  <rect x="2" y="8" width="20" height="4" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold leading-tight">Chama Viva</div>
                <div className="text-yellow-400/60 text-xs">Igreja Pentecostal</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Proclamando o evangelho e edificando vidas no poder do Espírito Santo.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Youtube, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Páginas</h3>
            <ul className="space-y-3 text-sm">
              {[
                ["Início", "Home"],
                ["Quem Somos", "QuemSomos"],
                ["Ministérios", "Ministerios"],
                ["Eventos", "Eventos"],
                ["Contato", "Contato"],
              ].map(([label, page]) => (
                <li key={page}>
                  <Link to={createPageUrl(page)} className="hover:text-yellow-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horários */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Cultos</h3>
            <ul className="space-y-3 text-sm">
              {[
                ["Domingo", "9h e 18h30"],
                ["Quarta-feira", "19h30"],
                ["Sexta-feira", "19h30"],
                ["Sábado (Jovens)", "19h"],
              ].map(([dia, hora]) => (
                <li key={dia} className="flex items-start gap-2">
                  <Clock size={14} className="mt-0.5 text-yellow-400/60 flex-shrink-0" />
                  <span><span className="text-white/90">{dia}</span> — {hora}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-yellow-400/60 flex-shrink-0" />
                <span>Rua das Flores, 123<br />Centro, São Paulo – SP</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-yellow-400/60 flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-yellow-400/60 flex-shrink-0" />
                <span>contato@chamaviva.com.br</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © 2026 Igreja Pentecostal Chama Viva. Todos os direitos reservados.
      </div>
    </footer>
  );
}