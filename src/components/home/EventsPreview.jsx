import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function EventsPreview({ events }) {
  const upcomingEvents = events
    ?.filter(e => new Date(e.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3) || [];

  if (upcomingEvents.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium tracking-wider uppercase mb-4">
              Agenda
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
              Próximos Eventos
            </h2>
          </div>
          <Link to={createPageUrl('Eventos')}>
            <Button variant="ghost" className="text-amber-600 hover:text-amber-700 mt-4 md:mt-0">
              Ver todos os eventos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image_url || 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80'}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white rounded-xl px-4 py-2 shadow-lg">
                  <p className="text-2xl font-bold text-amber-500">
                    {format(new Date(event.date), 'dd')}
                  </p>
                  <p className="text-xs text-slate-500 uppercase">
                    {format(new Date(event.date), 'MMM', { locale: ptBR })}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">
                  {event.title}
                </h3>
                {event.time && (
                  <p className="text-slate-600 flex items-center gap-2 text-sm mb-2">
                    <Calendar className="w-4 h-4 text-amber-500" />
                    {event.time}
                  </p>
                )}
                {event.location && (
                  <p className="text-slate-600 flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    {event.location}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}