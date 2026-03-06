import { motion } from "framer-motion";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const valores = [
  { emoji: "📖", titulo: "Autoridade da Bíblia", desc: "As Escrituras Sagradas são a infalível Palavra de Deus, nossa única regra de fé e prática." },
  { emoji: "✝️", titulo: "Salvação em Cristo", desc: "A salvação é pela graça mediante a fé em Jesus Cristo, que morreu e ressuscitou." },
  { emoji: "🔥", titulo: "Batismo no Espírito", desc: "Cremos no batismo com o Espírito Santo com a evidência de falar em outras línguas." },
  { emoji: "🌊", titulo: "Batismo nas Águas", desc: "O batismo por imersão é ordenança do Senhor para todo aquele que crê e se arrepende." },
  { emoji: "🍞", titulo: "Santa Ceia", desc: "A Ceia do Senhor é memorial da morte de Cristo, proclamação até que Ele venha." },
  { emoji: "🌍", titulo: "Segunda Vinda", desc: "Cremos no retorno pessoal, visível e glorioso de Jesus Cristo para buscar a sua Igreja." },
];

const lideranca = [
  {
    nome: "Pr. Marcelo",
    cargo: "Pastor Titular",
    img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6997061fe701824b15311d54/975c1f182_Capturadetela2026-03-01014925.png",
    bio: "Servo de Deus dedicado ao pastoreio, ao ensino da Palavra e ao cuidado da congregação Jardim São Carlos Setor 08."
  },
];

export default function AIgreja() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/90 to-[#0a0a1a]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-amber-400 text-xs tracking-widest uppercase font-semibold">Assembleia de Deus</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mt-2 mb-4">Jardim São Carlos</h1>
            <p className="text-white/60 text-lg">Setor 08 — São Carlos, SP</p>
          </motion.div>
        </div>
      </section>

      {/* Missão / Visão / Propósito */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { titulo: "Missão", emoji: "🎯", cor: "from-amber-400 to-orange-500", texto: "Evangelizar, discipular e edificar vidas no poder do Espírito Santo, para a glória de Deus e expansão do Seu Reino em São Carlos e além." },
            { titulo: "Visão", emoji: "👁️", cor: "from-blue-500 to-indigo-600", texto: "Ser uma congregação avivada, onde o poder de Deus se manifesta, vidas são transformadas e famílias são restauradas." },
            { titulo: "Propósito", emoji: "✨", cor: "from-purple-500 to-pink-600", texto: "Glorificar a Deus por meio da adoração genuína, da comunhão verdadeira, do serviço fiel e do testemunho corajoso." },
          ].map((card, i) => (
            <motion.div key={card.titulo} {...fade(i * 0.1)}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.cor} flex items-center justify-center text-xl mb-5`}>{card.emoji}</div>
                <h3 className="text-xl font-black text-stone-800 mb-3">{card.titulo}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{card.texto}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-[#0f0f1e]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fade()}>
              <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Nossa Trajetória</span>
              <h2 className="text-4xl font-black text-white mt-2 mb-6">Jardim São Carlos<br/>Setor 08</h2>
              <div className="space-y-5 text-white/60 leading-relaxed text-sm">
                <p>A Jardim São Carlos — Setor 08 é uma congregação da Igreja Evangélica Assembleia de Deus com raízes profundas na história do pentecostalismo brasileiro. Nossa congregação nasceu do compromisso de levar a Palavra de Deus e o avivamento pentecostal ao Jardim São Carlos e região.</p>
                <p>Crescemos como família de fé, comprometida com a pregação genuína do Evangelho, a oração fervorosa, o discipulado transformador e o serviço à comunidade local com amor prático.</p>
                <p>Hoje somos uma congregação ativa, com ministérios que alcançam crianças, jovens, adultos e famílias — todos unidos em torno do mesmo Senhor e da mesma missão.</p>
              </div>
            </motion.div>
            <motion.div {...fade(0.15)} className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1519491050282-cf00c82424ee?w=400&q=80" className="rounded-2xl h-48 w-full object-cover" alt="" />
              <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&q=80" className="rounded-2xl h-48 w-full object-cover mt-8" alt="" />
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80" className="rounded-2xl h-48 w-full object-cover" alt="" />
              <img src="https://images.unsplash.com/photo-1445445290350-18a3b86e0b5a?w=400&q=80" className="rounded-2xl h-48 w-full object-cover mt-8" alt="" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Declaração de Fé */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-12">
            <span className="text-amber-600 text-xs font-semibold tracking-widest uppercase">O que cremos</span>
            <h2 className="text-4xl font-black text-stone-800 mt-2">Declaração de Fé</h2>
            <p className="text-stone-500 mt-2 max-w-lg mx-auto text-sm">Nosso posicionamento teológico é fundamentado nas Escrituras Sagradas e na doutrina histórica pentecostal.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valores.map((v, i) => (
              <motion.div key={v.titulo} {...fade(i * 0.07)}>
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-stone-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 h-full flex gap-4">
                  <div className="text-3xl shrink-0 mt-1">{v.emoji}</div>
                  <div>
                    <h3 className="font-black text-stone-800 mb-2">{v.titulo}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Liderança */}
      <section className="py-20 bg-[#0f0f1e]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-12">
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Liderança</span>
            <h2 className="text-4xl font-black text-white mt-2">Nosso Pastor</h2>
          </motion.div>
          <div className="max-w-sm mx-auto">
            {lideranca.map((p, i) => (
              <motion.div key={p.nome} {...fade(i * 0.1)}>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
                  <img src={p.img} alt={p.nome} className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-amber-400" />
                  <h3 className="text-xl font-black text-white">{p.nome}</h3>
                  <p className="text-amber-400 text-sm font-semibold mb-4">{p.cargo}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{p.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}