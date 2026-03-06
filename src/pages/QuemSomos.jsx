import { motion } from "framer-motion";

const valores = [
  { titulo: "Palavra", desc: "A Bíblia é nossa única regra de fé e prática cristã." },
  { titulo: "Oração", desc: "A intercessão é o fundamento de tudo que fazemos." },
  { titulo: "Espírito Santo", desc: "Cremos nos dons e frutos do Espírito Santo operando hoje." },
  { titulo: "Missões", desc: "Somos chamados a levar o evangelho até os confins da terra." },
  { titulo: "Família", desc: "Valorizamos e protegemos a família como instituição divina." },
  { titulo: "Comunidade", desc: "Unidos em amor, crescemos juntos na graça de Deus." },
];

const lideranca = [
  { nome: "Pr. João Silva", cargo: "Pastor Titular", foto: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80" },
  { nome: "Pra. Maria Silva", cargo: "Pastora Auxiliar", foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { nome: "Pr. Carlos Souza", cargo: "Pastor de Jovens", foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
];

export default function QuemSomos() {
  return (
    <div className="pt-20 bg-[#FAF7F0]">
      {/* Header */}
      <section className="navy-gradient py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 100 100" width="100%" height="100%" fill="white">
            <rect x="45" y="5" width="10" height="90" />
            <rect x="5" y="35" width="90" height="10" />
          </svg>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <span className="text-yellow-400 text-xs font-semibold uppercase tracking-widest">Nossa história</span>
          <h1 className="text-5xl font-bold text-white mt-2">Quem Somos</h1>
        </motion.div>
      </section>

      {/* História */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-yellow-600 text-xs font-semibold uppercase tracking-widest">Desde 2001</span>
            <h2 className="text-3xl font-bold text-[#0F1F3D] mt-2 mb-6">Nossa História</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A Igreja Pentecostal Chama Viva nasceu em 2001 a partir de um pequeno grupo de oração que se reunia em uma sala simples. Deus honrou a fé daqueles poucos crentes e o que era pequeno se tornou uma chama que não se apagou.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Hoje, com mais de 25 anos de história, somos uma comunidade de fé apaixonada por Deus, comprometida com o evangelho e dedicada a servir nossa cidade e nações.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 gold-gradient rounded-3xl opacity-20 blur-xl" />
            <img
              src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&q=80"
              alt="Igreja"
              className="relative rounded-2xl w-full object-cover h-72 shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Missão / Visão / Valores */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { titulo: "Missão", texto: "Evangelizar, discipular e edificar vidas no poder do Espírito Santo, para a glória de Deus." },
              { titulo: "Visão", texto: "Ser uma igreja que transforma vidas, famílias e cidades com o amor e o poder de Deus." },
              { titulo: "Propósito", texto: "Glorificar a Deus por meio de uma adoração genuína, comunhão verdadeira e serviço fiel." },
            ].map((item, i) => (
              <motion.div
                key={item.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl border border-gray-100 hover:border-yellow-300 transition-all"
              >
                <div className="text-yellow-600 text-xs font-semibold uppercase tracking-widest mb-2">{item.titulo}</div>
                <p className="text-[#0F1F3D] font-medium leading-relaxed">{item.texto}</p>
              </motion.div>
            ))}
          </div>

          {/* Valores */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F1F3D]">Nossos Valores</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {valores.map((v, i) => (
              <motion.div
                key={v.titulo}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#FAF7F0] rounded-2xl p-6 hover:shadow-md transition-all"
              >
                <div className="w-2 h-2 bg-yellow-500 rounded-full mb-3" />
                <h3 className="font-bold text-[#0F1F3D] mb-1">{v.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Liderança */}
      <section className="py-20 px-6 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-yellow-600 text-xs font-semibold uppercase tracking-widest">Servos de Deus</span>
            <h2 className="text-3xl font-bold text-[#0F1F3D] mt-2">Nossa Liderança</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lideranca.map((l, i) => (
              <motion.div
                key={l.nome}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all text-center"
              >
                <img src={l.foto} alt={l.nome} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-[#0F1F3D] text-lg">{l.nome}</h3>
                  <p className="text-yellow-600 text-sm font-medium mt-1">{l.cargo}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}