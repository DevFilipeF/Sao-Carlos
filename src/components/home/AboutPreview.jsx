import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const values = [
  { icon: Heart, label: 'Amor ao Próximo' },
  { icon: BookOpen, label: 'Palavra de Deus' },
  { icon: Users, label: 'Comunhão' },
  { icon: Star, label: 'Fé Viva' },
];

export default function AboutPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-300 text-sm font-medium tracking-wider uppercase mb-6">
              Quem Somos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Uma igreja que
              <span className="text-amber-400"> transforma vidas</span>
            </h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Somos uma comunidade de fé comprometida com a pregação do Evangelho de Jesus Cristo. 
              Nossa missão é levar esperança, amor e salvação a todas as pessoas, 
              independente de sua história ou condição.
            </p>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Acreditamos no poder transformador do Espírito Santo e na relevância 
              das Escrituras para os dias de hoje.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 rounded-xl p-3"
                >
                  <value.icon className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-medium">{value.label}</span>
                </motion.div>
              ))}
            </div>

            <Link to={createPageUrl('Sobre')}>
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-full">
                Conheça Nossa História
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519491050282-cf00c82424ee?w=800&q=80"
                alt="Comunidade da igreja"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl"
            >
              <p className="text-4xl font-bold text-amber-500">15+</p>
              <p className="text-slate-600 font-medium">Anos de ministério</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}