import React from 'react';
import { motion } from 'framer-motion';
import { Heart, BookOpen, Users, Flame, Target, Eye } from 'lucide-react';
import Footer from '@/components/shared/Footer';

const values = [
  {
    icon: BookOpen,
    title: 'Palavra de Deus',
    description: 'Cremos que a Bíblia é a infalível Palavra de Deus, nossa regra de fé e prática.'
  },
  {
    icon: Flame,
    title: 'Poder do Espírito',
    description: 'Cremos no batismo e nos dons do Espírito Santo para a edificação da igreja.'
  },
  {
    icon: Heart,
    title: 'Amor Incondicional',
    description: 'Acolhemos a todos com amor, sem distinção, assim como Cristo nos acolheu.'
  },
  {
    icon: Users,
    title: 'Comunhão',
    description: 'Valorizamos a comunhão entre os irmãos, formando uma verdadeira família de fé.'
  }
];

const pastors = [
  {
    name: 'Pr. José Silva',
    role: 'Pastor Presidente',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    description: 'Líder espiritual da igreja há mais de 15 anos, dedicado ao ensino da Palavra.'
  },
  {
    name: 'Pra. Maria Silva',
    role: 'Pastora Auxiliar',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    description: 'Responsável pelo ministério feminino e aconselhamento pastoral.'
  }
];

export default function Sobre() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1445445290350-18a3b86e0b5a?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-300 text-sm font-medium tracking-wider uppercase mb-6">
              Nossa História
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quem Somos
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Conheça a história e os valores da Igreja Pentecostal Chama Viva
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-10 shadow-sm"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Nossa Missão</h3>
              <p className="text-slate-600 leading-relaxed">
                Pregar o Evangelho de Jesus Cristo a toda criatura, fazendo discípulos em todas as nações, 
                batizando-os em nome do Pai, do Filho e do Espírito Santo, ensinando-os a guardar todas 
                as coisas que Jesus nos ordenou.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-10 shadow-sm"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Nossa Visão</h3>
              <p className="text-slate-600 leading-relaxed">
                Ser uma igreja relevante na comunidade, transformando vidas através do poder do Espírito Santo, 
                formando líderes comprometidos com o Reino de Deus e impactando positivamente a sociedade 
                com os valores cristãos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium tracking-wider uppercase mb-4">
              Nossos Pilares
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
              Valores que nos guiam
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pastors */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-300 text-sm font-medium tracking-wider uppercase mb-4">
              Liderança
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Nossos Pastores
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {pastors.map((pastor, index) => (
              <motion.div
                key={pastor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10"
              >
                <img
                  src={pastor.image}
                  alt={pastor.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-amber-500"
                />
                <h3 className="text-2xl font-bold text-white mb-2">{pastor.name}</h3>
                <p className="text-amber-400 font-medium mb-4">{pastor.role}</p>
                <p className="text-slate-300 leading-relaxed">{pastor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}