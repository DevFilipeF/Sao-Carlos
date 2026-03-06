import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-amber-400">Chama</span> Viva
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Uma igreja que prega a palavra de Deus com amor e verdade.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link to={createPageUrl('Home')} className="text-slate-400 hover:text-amber-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to={createPageUrl('Sobre')} className="text-slate-400 hover:text-amber-400 transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to={createPageUrl('Cultos')} className="text-slate-400 hover:text-amber-400 transition-colors">
                  Cultos
                </Link>
              </li>
              <li>
                <Link to={createPageUrl('Eventos')} className="text-slate-400 hover:text-amber-400 transition-colors">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Horários */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horários</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 text-amber-400" />
                <span>Dom: 09h e 18h</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 text-amber-400" />
                <span>Qua: 19h30</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 text-amber-400" />
                <span>Sex: 19h30</span>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-amber-400 flex-shrink-0" />
                <span>Rua da Esperança, 123 Centro - São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>contato@chamaviva.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
          <p>© 2024 Igreja Pentecostal Chama Viva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}