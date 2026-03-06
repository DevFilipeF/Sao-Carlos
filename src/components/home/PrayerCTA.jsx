import React from 'react';
import { motion } from 'framer-motion';
import { HandHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function PrayerCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-orange-600/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <HandHeart className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Precisa de Oração?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Nossos intercessores estão prontos para orar por você e sua família. 
            Compartilhe seu pedido de oração e confie que Deus está no controle.
          </p>
          
          <Link to={createPageUrl('Oracao')}>
            <Button size="lg" className="bg-white text-amber-600 hover:bg-white/90 font-semibold px-10 py-6 text-lg rounded-full shadow-lg">
              Enviar Pedido de Oração
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}