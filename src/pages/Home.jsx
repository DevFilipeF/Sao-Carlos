import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Clock, MapPin, ChevronRight, CheckCircle, X } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6997061fe701824b15311d54/b1fa5e570_325855322_3281150415479821_6288694906918816209_n.jpg";
const CHURCH_IMG = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6997061fe701824b15311d54/6211e5c08_SaveClipApp_613615045_18188164654350154_3701680856750707916_n.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

function VisitaModal({ onClose }) {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", mensagem: "" });
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSend = async () => {
    if (!form.nome || !form.telefone || sending) return;
    setSending(true);
    // Simula envio para servidor
    await new Promise((r) => setTimeout(r, 500));
    setDone(true);
    setSending(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-600"><X size={20} /></button>

        {done ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-black text-stone-800 mb-2">Te esperamos! 🙌</h3>
            <p className="text-stone-500 mb-6 text-sm">Recebemos seu contato. Em breve nossa equipe entrará em contato para te acolher.</p>
            <button onClick={onClose} className="px-6 py-2 bg-amber-400 text-white font-bold rounded-full text-sm">Fechar</button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-black text-stone-800 mb-1">Quero Visitar! 👋</h3>
            <p className="text-stone-500 text-sm mb-6">Preencha abaixo e nossa equipe te acolherá.</p>
            <div className="space-y-4">
              <input required value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} placeholder="Seu nome *" className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm" />
              <input required value={form.telefone} onChange={e => setForm({ ...form, telefone: e.target.value })} placeholder="Seu WhatsApp *" className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm" />
              <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="E-mail (opcional)" className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm" />
              <textarea value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })} placeholder="Mensagem (opcional)" rows={3} className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm resize-none" />
              <button
                onClick={handleSend}
                disabled={sending || !form.nome || !form.telefone}
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-black rounded-full text-sm uppercase tracking-wide disabled:opacity-60 hover:scale-[1.02] transition-all"
              >
                {sending ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [visitaOpen, setVisitaOpen] = useState(false);

  const [eventos, setEventos] = useState([]);

useEffect(() => {
  fetch("/cultos.csv")
    .then(res => res.text())
    .then(text => {
      const linhas = text.split("\n").slice(1);

      const dados = linhas.map((linha, index) => {
        const [dia, data, horario, nome, descricao] = linha.split(";");

        if (!data) return null;

        const [d, m, y] = data.trim().split("/");

        return {
          id: index,
          titulo: nome,
          data: `${y}-${m}-${d}`,
          horario: horario,
          local: "Templo Jardim São Carlos — Setor 08",
          descricao: descricao
        };
      }).filter(Boolean);

      setEventos(dados);
    });
}, []);


  const proximos = eventos
    .filter((e) => new Date(e.data) >= new Date())
    .sort(
      (a, b) =>
        new Date(a.data).getTime() - new Date(b.data).getTime()
    )
    .slice(0, 3);

  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${CHURCH_IMG}?w=1400&q=75&auto=format')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/90 via-[#0f0f1e]/85 to-[#0a0a1a]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="mb-6">
            <img src={LOGO_URL} alt="Jardim São Carlos Setor 08" className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-amber-400/60 shadow-lg" />
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-amber-400/60" />
            <span className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase">Jardim São Carlos · Setor 08</span>
            <div className="h-px w-10 bg-amber-400/60" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] mb-2"
          >
            Jardim<br/>São Carlos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-amber-400/80 text-lg md:text-xl font-medium tracking-wide mb-4"
          >
            Assembleia de Deus · Setor 08
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed italic"
          >
            "Sede cheios do Espírito Santo." — Efésios 5:18
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => setVisitaOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-black rounded-full text-sm uppercase tracking-wide shadow-xl shadow-amber-500/25 hover:scale-105 transition-all"
            >
              Quero Visitar
            </button>
            <Link
              to={createPageUrl("Oracao")}
              className="px-8 py-4 border border-white/25 text-white font-medium rounded-full text-sm uppercase tracking-wide hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Pedido de Oração
            </Link>
          </motion.div>

          {/* Próximo culto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 inline-flex items-center gap-4 bg-white/8 backdrop-blur border border-white/10 rounded-2xl px-6 py-4"
          >
            <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
              <Clock size={18} className="text-amber-400" />
            </div>
            <div className="text-left">
              <div className="text-white/50 text-xs uppercase tracking-widest">Próximo Culto</div>
              <div className="text-white font-bold text-sm">Domingo · 18h30 — Culto da Família</div>
            </div>
            <Link to={createPageUrl("Eventos")} className="text-amber-400 text-xs font-semibold ml-2 hover:underline">Ver agenda →</Link>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30">
          <ChevronRight size={24} className="rotate-90" />
        </motion.div>
      </section>

      {/* ── HORÁRIOS DOS CULTOS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <span className="text-amber-600 text-xs font-semibold tracking-widest uppercase">Programação Semanal</span>
            <h2 className="text-4xl font-black text-stone-800 mt-2">Venha nos Cultos</h2>
            <p className="text-stone-500 mt-2">Jardim São Carlos, Setor 08 — São Carlos, SP · Todos são bem-vindos!</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { dia: "Domingo", cultos: ["9h00 — Escola Bíblica", "18h30 — Culto da Família"], cor: "from-amber-400 to-orange-500", destaque: true },
              { dia: "Quarta-feira", cultos: ["19h30 — Culto de Ensino"], cor: "from-blue-500 to-indigo-600" },
              { dia: "Sexta-feira", cultos: ["19h30 — Culto de Libertação"], cor: "from-purple-500 to-pink-600" },
              { dia: "Sábado", cultos: ["19h — Culto de Jovens"], cor: "from-emerald-500 to-teal-600" },
            ].map((item, i) => (
              <motion.div key={item.dia} {...fadeUp(i * 0.08)}>
                <div className={`rounded-2xl p-6 h-full border-2 transition-all hover:-translate-y-1 hover:shadow-lg duration-300 ${item.destaque ? "border-amber-400 bg-[#0f0f1e] text-white" : "border-stone-100 bg-white"}`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.cor} flex items-center justify-center mb-4 shadow-sm text-white font-black text-lg`}>
                    {i === 0 ? "☀" : i === 1 ? "📖" : i === 2 ? "🔥" : "✋"}
                  </div>
                  <h3 className={`font-black text-lg mb-3 ${item.destaque ? "text-white" : "text-stone-800"}`}>{item.dia}</h3>
                  {item.cultos.map(c => (
                    <p key={c} className={`text-sm flex items-center gap-2 mb-1.5 ${item.destaque ? "text-white/70" : "text-stone-500"}`}>
                      <Clock size={12} className="text-amber-400 shrink-0" />{c}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.2)} className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-stone-100 rounded-xl px-5 py-3">
              <MapPin size={15} className="text-amber-500" />
              <span className="text-stone-600 text-sm font-medium">Jardim São Carlos · Setor 08 — São Carlos, SP</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section className="py-20 bg-[#0f0f1e]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp()}>
              <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Nossa Igreja</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-2 mb-6 leading-tight">
                Jardim<br/><span className="text-amber-400">São Carlos — Setor 08</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-4 text-sm">
                A Jardim São Carlos — Setor 08 é uma congregação da Igreja Evangélica Assembleia de Deus comprometida com a pregação genuína do Evangelho, a operação dos dons do Espírito Santo e o discipulado transformador.
              </p>
              <p className="text-white/60 leading-relaxed mb-8 text-sm">
                Somos uma família de fé que acolhe a todos, ora por todos e serve à nossa comunidade com amor prático e verdadeiro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={createPageUrl("AIgreja")} className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:gap-4 transition-all text-sm">
                  Conheça mais <ChevronRight size={18} />
                </Link>
                <button onClick={() => setVisitaOpen(true)} className="inline-flex items-center gap-2 text-white/60 hover:text-white font-medium text-sm transition-all">
                  Quero visitar
                </button>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="relative">
              <img
                src={CHURCH_IMG}
                alt="Templo Jardim São Carlos Setor 08"
                className="rounded-3xl w-full object-cover"
                style={{ height: "380px" }}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl px-7 py-5 shadow-xl">
                <div className="text-2xl font-black text-white">Setor 08</div>
                <div className="text-white/80 text-xs font-semibold uppercase tracking-wide">São Carlos, SP</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VERSÍCULO ── */}
      <section className="relative py-28 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1445445290350-18a3b86e0b5a?w=1600&q=80')" }}>
        <div className="absolute inset-0 bg-[#0a0a1a]/82" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp()}>
            <div className="text-amber-400 text-5xl mb-4 font-serif">"</div>
            <p className="text-white text-2xl md:text-3xl font-light italic leading-relaxed mb-5">
              Mas recebereis poder, ao descer sobre vós o Espírito Santo, e ser-me-eis testemunhas.
            </p>
            <span className="text-amber-400 font-semibold tracking-wide">Atos 1:8</span>
          </motion.div>
        </div>
      </section>

      {/* ── PRÓXIMOS EVENTOS ── */}
      {proximos.length > 0 && (
        <section className="py-20 bg-stone-50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fadeUp()} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-amber-600 text-xs font-semibold tracking-widest uppercase">Agenda</span>
                <h2 className="text-4xl font-black text-stone-800 mt-1">Próximos Eventos</h2>
              </div>
              <Link to={createPageUrl("Eventos")} className="text-amber-600 font-semibold text-sm flex items-center gap-1 hover:gap-3 transition-all">
                Ver todos <ChevronRight size={16} />
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {proximos.map((ev, i) => (
                <motion.div key={ev.id} {...fadeUp(i * 0.1)}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="relative h-40 bg-gradient-to-br from-amber-400 to-orange-500">
                      {ev.imagem_url ? <img src={ev.imagem_url} alt={ev.titulo} className="w-full h-full object-cover" /> : <div className="w-full h-full" />}
                      <div className="absolute top-3 left-3 bg-white/95 rounded-xl px-3 py-1.5 text-center shadow">
                        <div className="text-xl font-black text-amber-500">{format(new Date(ev.data), "dd")}</div>
                        <div className="text-stone-500 text-[10px] uppercase">{format(new Date(ev.data), "MMM", { locale: ptBR })}</div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-black text-stone-800 mb-2">{ev.titulo}</h3>
                      {ev.horario && <p className="text-stone-400 text-sm flex items-center gap-1.5"><Clock size={12} className="text-amber-500" />{ev.horario}</p>}
                      {ev.local && <p className="text-stone-400 text-sm flex items-center gap-1.5 mt-1"><MapPin size={12} className="text-amber-500" />{ev.local}</p>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── ORAÇÃO CTA ── */}
      <section className="py-20 bg-gradient-to-br from-amber-400 to-orange-500">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp()}>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Precisa de Oração?</h2>
            <p className="text-white/85 text-lg mb-8 leading-relaxed">
              Nossa equipe de intercessão está pronta para orar por você. Compartilhe seu pedido com segurança e fé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Oracao")} className="px-10 py-4 bg-white text-orange-500 font-black rounded-full text-sm uppercase tracking-wide shadow-xl hover:scale-105 transition-all">
                Enviar Pedido de Oração
              </Link>
              <a href="https://wa.me/5516999999999?text=Olá!%20Tenho%20um%20pedido%20de%20oração" className="px-10 py-4 border-2 border-white/50 text-white font-bold rounded-full text-sm uppercase tracking-wide hover:bg-white/10 transition-all">
                Via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {visitaOpen && <VisitaModal onClose={() => setVisitaOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}