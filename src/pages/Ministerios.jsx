import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const ministerios = [
  { emoji: "🔥", nome: "UMADEB — União da Mocidade", cor: "from-purple-500 to-indigo-600", desc: "O grupo de jovens da IEAD Setor 08. Uma geração ardente em fé, evangelismo, estudos bíblicos e comunhão. Unidos para servir a Deus!", reuniao: "Sábados, 19h" },
  { emoji: "🌸", nome: "UFADEB — União Feminina", cor: "from-pink-400 to-rose-500", desc: "Ministério das irmãs que reúne as mulheres da congregação para crescimento espiritual, comunhão e serviço ao próximo com amor.", reuniao: "A definir" },
  { emoji: "✝️", nome: "CREIO — Adolescentes", cor: "from-blue-500 to-cyan-500", desc: "Ministério dedicado aos adolescentes, formando caráter e fé nos jovens que estão descobrindo sua identidade em Cristo.", reuniao: "A definir" },
  { emoji: "👶", nome: "Ministério das Crianças", cor: "from-yellow-400 to-amber-500", desc: "Planta a Palavra de Deus no coração das crianças com amor, criatividade e cuidado. Funcionamos nos cultos do domingo.", reuniao: "Domingos, 9h e 18h30" },
];

function ModalParticipacao({ ministerio, onClose }) {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", ministerio, mensagem: "" });
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSend = async () => {
    if (!form.nome || sending) return;
    setSending(true);
    // Simula envio para servidor
    await new Promise((r) => setTimeout(r, 500));
    setDone(true);
    setSending(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-600"><X size={20} /></button>

        {done ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-black text-stone-800 mb-2">Interesse Registrado! 🙌</h3>
            <p className="text-stone-500 mb-6 text-sm">Um líder do <strong>{ministerio}</strong> entrará em contato em breve. Que Deus te abençoe!</p>
            <button onClick={onClose} className="px-6 py-2 bg-amber-400 text-white font-bold rounded-full text-sm">Fechar</button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-black text-stone-800 mb-1">Quero Participar</h3>
            <p className="text-amber-600 text-sm font-semibold mb-5">{ministerio}</p>
            <div className="space-y-3">
              <input required value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} placeholder="Seu nome *" className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm" />
              <input value={form.telefone} onChange={e => setForm({ ...form, telefone: e.target.value })} placeholder="Seu WhatsApp" className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm" />
              <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Seu e-mail" className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm" />
              <textarea value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })} placeholder="Conte um pouco sobre você (opcional)" rows={3} className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm resize-none" />
              <button
                onClick={handleSend}
                disabled={sending || !form.nome}
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-black rounded-full text-sm uppercase tracking-wide disabled:opacity-60 hover:scale-[1.02] transition-all"
              >
                {sending ? "Enviando..." : "Enviar Interesse"}
              </button>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Ministerios() {
  const [modalMinisterio, setModalMinisterio] = useState(null);

  return (
    <div>
      <section className="relative pt-32 pb-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/90 to-[#0a0a1a]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-amber-400 text-xs tracking-widest uppercase font-semibold">Servindo a Deus</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mt-2 mb-4">Ministérios</h1>
            <p className="text-white/60 text-lg">Encontre seu lugar na IEAD Jardim São Carlos — Setor 08.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ministerios.map((m, i) => (
              <motion.div key={m.nome} {...fade(i * 0.06)}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${m.cor} flex items-center justify-center text-xl mb-4`}>{m.emoji}</div>
                  <h3 className="font-black text-stone-800 mb-2">{m.nome}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed flex-1 mb-4">{m.desc}</p>
                  <div className="text-stone-400 text-xs mb-4">🕐 {m.reuniao}</div>
                  <button
                    onClick={() => setModalMinisterio(m.nome)}
                    className="w-full py-2.5 border-2 border-amber-400 text-amber-600 font-bold rounded-xl text-xs uppercase tracking-wide hover:bg-amber-400 hover:text-white transition-all"
                  >
                    Quero Participar
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {modalMinisterio && <ModalParticipacao ministerio={modalMinisterio} onClose={() => setModalMinisterio(null)} />}
      </AnimatePresence>
    </div>
  );
}