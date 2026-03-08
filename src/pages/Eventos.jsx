import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import AddToCalendar from "@/components/shared/AddToCalendar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Eventos() {

  const [eventos, setEventos] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  fetch("/cultos.csv")
    .then((res) => res.text())
    .then((text) => {

      const linhas = text.split("\n").slice(1);

      const dados = linhas
        .filter((linha) => linha.trim() !== "")
        .map((linha, index) => {

          const [dia, data, horario, nome, descricao] = linha.split(";");

          const partesData = data.split("/");
          const dataISO = `${partesData[2]}-${partesData[1]}-${partesData[0]}`;

          return {
            id: index + 1,
            titulo: nome,
            data: dataISO,
            horario,
            local: "Templo Jardim São Carlos — Setor 08",
            descricao,
            imagem_url: "",
            destaque: false,
          };
        });

      setEventos(dados);
      setIsLoading(false);

    });
}, []);

  const hoje = new Date();
  const proximos = eventos
    .filter((e) => new Date(e.data) >= hoje)
    .sort(
      (a, b) =>
        new Date(a.data).getTime() - new Date(b.data).getTime()
    );
  const passados = eventos
    .filter((e) => new Date(e.data) < hoje)
    .sort(
      (a, b) =>
        new Date(b.data).getTime() - new Date(a.data).getTime()
    )
    .slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f1e]/90 to-[#0f0f1e]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-amber-400 text-xs tracking-widest uppercase font-semibold">Agenda</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mt-2 mb-4">Eventos</h1>
            <p className="text-white/60 text-lg">Confira nossa programação e não perca nenhum momento especial.</p>
          </motion.div>
        </div>
      </section>

      {/* Próximos Eventos */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fade()} className="mb-12">
            <span className="text-amber-600 text-xs font-semibold tracking-widest uppercase">Em Breve</span>
            <h2 className="text-4xl font-black text-stone-800 mt-1">Próximos Eventos</h2>
          </motion.div>

          {isLoading && (
            <div className="grid md:grid-cols-3 gap-6">
              {[1,2,3].map(i => <div key={i} className="h-64 bg-stone-100 rounded-2xl animate-pulse" />)}
            </div>
          )}

          {!isLoading && proximos.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-stone-100">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-stone-700 mb-2">Nenhum evento programado</h3>
              <p className="text-stone-500">Fique atento, em breve teremos novidades!</p>
            </div>
          )}

          {proximos.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proximos.map((ev, i) => (
                <motion.div key={ev.id} {...fade(i * 0.07)} whileHover={{ y: -6, transition: { duration: 0.2 } }}>
                  <div className="bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col overflow-visible">
                    <div className="relative h-44 bg-gradient-to-br from-amber-400 to-orange-500 overflow-hidden">
                      {ev.imagem_url
                        ? <img src={ev.imagem_url} alt={ev.titulo} className="w-full h-full object-cover" />
                        : <div className="w-full h-full flex items-center justify-center text-7xl opacity-20">🔥</div>
                      }
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 text-center shadow">
                        <div className="text-2xl font-black text-amber-500">{format(new Date(ev.data), "dd")}</div>
                        <div className="text-stone-500 text-xs uppercase tracking-wide">{format(new Date(ev.data), "MMM", { locale: ptBR })}</div>
                      </div>
                      {ev.destaque && (
                        <div className="absolute top-4 right-4 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full">Destaque</div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-black text-stone-800 text-lg mb-2">{ev.titulo}</h3>
                      {ev.descricao && <p className="text-stone-500 text-sm leading-relaxed mb-3 flex-1 line-clamp-2">{ev.descricao}</p>}
                      <div className="space-y-1.5 pt-3 border-t border-stone-100">
                        {ev.horario && <p className="text-stone-500 text-sm flex items-center gap-2"><Clock size={13} className="text-amber-500" />{ev.horario}</p>}
                        {ev.local && <p className="text-stone-500 text-sm flex items-center gap-2"><MapPin size={13} className="text-amber-500" />{ev.local}</p>}
                        <div className="pt-2">
                          <AddToCalendar evento={ev} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Eventos passados */}
      {passados.length > 0 && (
        <section className="py-24 bg-[#1a1a2e]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fade()} className="mb-12">
              <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Memórias</span>
              <h2 className="text-4xl font-black text-white mt-1">Eventos Realizados</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {passados.map((ev, i) => (
                <motion.div key={ev.id} {...fade(i * 0.07)}>
                  <div className="relative group h-56 rounded-2xl overflow-hidden">
                    <img
                      src={ev.imagem_url || "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80"}
                      alt={ev.titulo}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
                      <div>
                        <p className="text-amber-400 text-xs font-semibold mb-1">{format(new Date(ev.data), "d 'de' MMMM 'de' yyyy", { locale: ptBR })}</p>
                        <h3 className="text-white font-bold text-base">{ev.titulo}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}