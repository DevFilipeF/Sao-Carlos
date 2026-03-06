import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function Oracao() {
  const [form, setForm] = useState({ nome: "", pedido: "", anonimo: false });
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.pedido || sending) return;

    setSending(true);
    // Simula envio para servidor
    await new Promise((r) => setTimeout(r, 500));
    setDone(true);
    setSending(false);
  };

  return (
    <div>
      <section className="relative pt-32 pb-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/90 to-[#0a0a1a]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-amber-400 text-xs tracking-widest uppercase font-semibold">IEAD Jardim São Carlos · Setor 08</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mt-2 mb-4">Pedido de Oração</h1>
            <p className="text-white/60 text-lg italic">"A oração eficaz do justo pode muito." — Tiago 5:16</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-xl mx-auto px-6">
          {done ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-3xl p-12 text-center shadow-sm border border-stone-100">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={36} className="text-white" />
              </div>
              <h2 className="text-3xl font-black text-stone-800 mb-3">Pedido Recebido! 🙏</h2>
              <p className="text-stone-500 leading-relaxed mb-8">
                Seu pedido chegou à nossa equipe de intercessores com muito amor. Estaremos orando por você! Deus te abençoe!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={() => { setDone(false); setForm({ nome: "", pedido: "", anonimo: false }); }} className="px-8 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-full text-sm uppercase tracking-wide hover:scale-105 transition-all">
                  Novo Pedido
                </button>
                <a href="https://wa.me/5516999999999?text=Olá!%20Tenho%20um%20pedido%20de%20oração" className="px-8 py-3 border border-green-500/40 text-green-600 font-semibold rounded-full text-sm hover:bg-green-50 transition-all">
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-stone-800 mb-2">Como podemos orar por você?</h2>
                <p className="text-stone-500 text-sm">Tratamos todos os pedidos com total sigilo, respeito e amor.</p>
              </div>

              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-100 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Seu Nome</label>
                  <input
                    type="text"
                    value={form.nome}
                    onChange={e => setForm({ ...form, nome: e.target.value })}
                    disabled={form.anonimo}
                    placeholder={form.anonimo ? "Pedido anônimo" : "Como podemos te chamar?"}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all disabled:bg-stone-50 disabled:text-stone-400 text-sm"
                  />
                </div>

                <label className="flex items-center gap-3 cursor-pointer select-none group">
                  <div
                    onClick={() => setForm({ ...form, anonimo: !form.anonimo, nome: "" })}
                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all flex-shrink-0 ${form.anonimo ? "bg-amber-400 border-amber-400" : "border-stone-300 group-hover:border-amber-300"}`}
                  >
                    {form.anonimo && (
                      <svg viewBox="0 0 12 10" fill="none" stroke="white" strokeWidth="2" width="10" height="8">
                        <polyline points="1,5 4,8 11,1" />
                      </svg>
                    )}
                  </div>
                  <span className="text-stone-600 text-sm">Enviar meu pedido anonimamente</span>
                </label>

                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Seu Pedido de Oração *</label>
                  <textarea
                    required
                    value={form.pedido}
                    onChange={e => setForm({ ...form, pedido: e.target.value })}
                    placeholder="Compartilhe seu pedido de oração. Pode ser sobre saúde, família, trabalho, salvação de alguém, ou qualquer necessidade do seu coração..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending || !form.pedido}
                  className="w-full py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-black rounded-full text-sm uppercase tracking-wide shadow-lg hover:scale-[1.02] transition-all disabled:opacity-60 disabled:scale-100 flex items-center justify-center gap-2"
                >
                  {sending ? (
                    <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <><Send size={16} /> Enviar Pedido de Oração</>
                  )}
                </button>

                <div className="text-center pt-2 border-t border-stone-100">
                  <p className="text-stone-400 text-xs mb-2">Prefere pelo WhatsApp?</p>
                  <a href="https://wa.me/5516999999999?text=Olá!%20Tenho%20um%20pedido%20de%20oração" className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm hover:underline">
                    Falar diretamente com a equipe →
                  </a>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0f0f1e] to-[#0a0a1a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="text-amber-400 text-5xl mb-4 font-serif">"</div>
            <p className="text-white text-2xl md:text-3xl font-light italic leading-relaxed mb-5">
              Não andeis ansiosos de coisa alguma; em tudo, porém, sejam conhecidas diante de Deus as vossas petições, pela oração e súplica com ação de graças.
            </p>
            <span className="text-amber-400 font-semibold">Filipenses 4:6</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}