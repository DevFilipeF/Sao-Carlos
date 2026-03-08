import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Users, Music, BookOpen, Heart, Mic } from 'lucide-react';
import Footer from '@/components/shared/Footer';


const ministries = [
  {
    name: 'Ministério de Louvor',
    description: 'Conduz a igreja em adoração através de música.',
    icon: Music
  },
  {
    name: 'Ministério Infantil',
    description: 'Ensina as crianças sobre o amor de Jesus.',
    icon: Heart
  },
  {
    name: 'Grupo de Jovens',
    description: 'Comunhão e discipulado para juventude.',
    icon: Users
  },
  {
    name: 'Escola Bíblica',
    description: 'Ensino sistemático das Escrituras.',
    icon: BookOpen
  }
];

export default function Cultos() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/cultos.csv")
      .then((res) => res.text())
      .then((text) => {
        const linhas = text.split("\n").slice(1);
  
        const dados = {};
  
        linhas.forEach((linha) => {
          const [dia, horario, nome, descricao] = linha.split(",");
  
          if (!dados[dia]) {
            dados[dia] = [];
          }
  
          dados[dia].push({
            time: horario,
            name: nome,
            description: descricao,
            icon: BookOpen,
            color: "from-blue-500 to-indigo-500"
          });
        });
  
        const estrutura = Object.keys(dados).map((dia) => ({
          day: dia,
          services: dados[dia]
        }));
  
        setServices(estrutura);
      });
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1920&q=80')`,
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
              Programação
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Nossos Cultos
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Venha nos visitar e fazer parte dessa família abençoada
            </p>
          </motion.div>
        </div>
          
        
      </section>
      

      {/* Schedule */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium tracking-wider uppercase mb-4">
              Horários
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
              Programação Semanal
            </h2>
          </motion.div>

          <div className="space-y-12">
            {services.map((daySchedule, dayIndex) => (
              <motion.div
                key={daySchedule.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <div className="w-3 h-3 bg-amber-500 rounded-full" />
                  {daySchedule.day}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {daySchedule.services.map((service, serviceIndex) => (
                    <div
                      key={service.name}
                      className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 text-amber-600 font-medium mb-2">
                            <Clock className="w-4 h-4" />
                            {service.time}
                          </div>
                          <h4 className="text-xl font-bold text-slate-800 mb-2">
                            {service.name}
                          </h4>
                          <p className="text-slate-600">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium tracking-wider uppercase mb-4">
                Localização
              </span>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Venha nos visitar
              </h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  Rua da Esperança, 123<br />
                  Centro - São Paulo, SP<br />
                  CEP: 01000-000
                </p>
                <p className="flex items-center gap-3">
                  <Mic className="w-6 h-6 text-amber-500" />
                  Estacionamento gratuito
                </p>
                <p className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-amber-500" />
                  Acessibilidade para cadeirantes
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[400px] rounded-3xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&q=80"
                alt="Igreja"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ministries */}
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
              Ministérios
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Faça Parte
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <ministry.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{ministry.name}</h3>
                <p className="text-slate-400 text-sm">{ministry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}