import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Facebook, MessageCircle } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

export default function Contato() {
  return (
    <div>
      <section className="relative pt-32 pb-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/90 to-[#0a0a1a]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-amber-400 text-xs tracking-widest uppercase font-semibold">Fale Conosco</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mt-2 mb-4">Contato</h1>
            <p className="text-white/60 text-lg">Jardim São Carlos — Setor 08, SP</p>
          </motion.div>
        </div>
      </section>

      {/* Cards de contato */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { Icon: MapPin, cor: "from-amber-400 to-orange-500", titulo: "Endereço", texto: "Rua Claudia Muzio, 34\nJardim São Carlos\nSão Carlos – SP" },
              { Icon: Phone, cor: "from-green-500 to-emerald-600", titulo: "WhatsApp", texto: "(16) 99999-9999\nHorário de atendimento:\nSeg–Sex, 9h–18h" },
              { Icon: Mail, cor: "from-blue-500 to-indigo-600", titulo: "E-mail", texto: "belem.sc.setor08\n@gmail.com" },
              { Icon: Clock, cor: "from-purple-500 to-pink-600", titulo: "Cultos", texto: "Dom: 9h e 18h30\nQua e Sex: 19h30\nSáb (Jovens): 19h" },
            ].map((c, i) => (
              <motion.div key={c.titulo} {...fade(i * 0.08)}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300 h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.cor} flex items-center justify-center mx-auto mb-5`}>
                    <c.Icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-black text-stone-800 text-lg mb-3">{c.titulo}</h3>
                  <p className="text-stone-500 text-sm whitespace-pre-line leading-relaxed">{c.texto}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mapa Google */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div {...fade()}>
              <span className="text-amber-600 text-xs font-semibold tracking-widest uppercase">Como chegar</span>
              <h2 className="text-4xl font-black text-stone-800 mt-2 mb-4">Setor 08 — São Carlos</h2>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Nossa congregação fica no Setor 08 em São Carlos, SP. Venha nos visitar nos horários dos cultos. Temos um lugar especial reservado para você e sua família!
              </p>

              <div className="space-y-3 mb-8">
                {[
                  ["🚗", "Estacionamento", "Disponível nos dias de culto"],
                  ["♿", "Acessibilidade", "Local adaptado para todos"],
                  ["👶", "Ministério Infantil", "Cuidamos das crianças durante o culto"],
                ].map(([e, t, d]) => (
                  <div key={t} className="flex items-center gap-4 p-4 bg-stone-100 rounded-xl">
                    <span className="text-2xl">{e}</span>
                    <div>
                      <div className="font-semibold text-stone-800 text-sm">{t}</div>
                      <div className="text-stone-500 text-xs">{d}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp destacado */}
              <a
                href="https://wa.me/5516999999999?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20Igreja%20Belém%20Setor%2008"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-black rounded-full text-sm uppercase tracking-wide transition-all hover:scale-105 shadow-lg shadow-green-500/25"
              >
                <MessageCircle size={18} />
                Falar pelo WhatsApp
              </a>
            </motion.div>

            <motion.div {...fade(0.1)} className="rounded-3xl overflow-hidden shadow-xl h-[420px]">
              <iframe
                title="Mapa São Carlos Setor 08"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697!2d-47.8823!3d-21.9714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUnVhIENsYXVkaWEgTXV6aW8sIDM0IC0gSmFyZGltIFPDo28gQ2FybG9z!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr&q=Rua+Claudia+Muzio,+34,+Jardim+São+Carlos,+São+Carlos,+SP"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Redes sociais */}
      <section className="py-20 bg-[#0f0f1e]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fade()}>
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Redes Sociais</span>
            <h2 className="text-4xl font-black text-white mt-2 mb-4">Nos Acompanhe</h2>
            <p className="text-white/60 mb-10 text-sm">Siga nossas redes e fique por dentro de tudo que acontece na Jardim São Carlos — Setor 08.</p>
            <div className="flex justify-center gap-5 flex-wrap">
              {[
                { Icon: Instagram, label: "Instagram", cor: "hover:bg-pink-600", href: "#" },
                { Icon: Youtube, label: "YouTube", cor: "hover:bg-red-600", href: "#" },
                { Icon: Facebook, label: "Facebook", cor: "hover:bg-blue-600", href: "#" },
                { Icon: MessageCircle, label: "WhatsApp", cor: "hover:bg-green-600", href: "https://wa.me/5516999999999" },
              ].map(({ Icon, label, cor, href }) => (
                <a key={label} href={href} className={`w-16 h-16 border border-white/20 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all hover:scale-110 ${cor} hover:border-transparent`}>
                  <Icon size={20} className="text-white" />
                  <span className="text-white/60 text-[10px]">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}