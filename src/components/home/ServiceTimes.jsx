import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Users, BookOpen } from 'lucide-react';

const services = [
  {
    day: 'Domingo',
    time: '09:00 - Escola Bíblica',
    time2: '18:00 - Culto de Celebração',
    icon: BookOpen,
    color: 'from-amber-500 to-orange-500'
  },
  {
    day: 'Quarta-feira',
    time: '19:30 - Culto de Ensino',
    icon: Calendar,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    day: 'Sexta-feira',
    time: '19:30 - Culto de Libertação',
    icon: Users,
    color: 'from-purple-500 to-pink-500'
  }
];

export default function ServiceTimes() {
  return (
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
            Programação
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Horários dos Cultos
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Venha nos visitar e fazer parte dessa família abençoada
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-50 rounded-3xl p-8 h-full border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {service.day}
                </h3>
                <div className="space-y-2">
                  <p className="text-slate-600 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-500" />
                    {service.time}
                  </p>
                  {service.time2 && (
                    <p className="text-slate-600 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-500" />
                      {service.time2}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}