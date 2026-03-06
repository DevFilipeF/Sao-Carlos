import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Download, BookOpen, Calendar, User, ChevronDown, ChevronUp, PlayCircle, X } from "lucide-react";
import FavoritoButton, { getFavoritos } from "@/components/shared/FavoritoButton";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const seriesEssencia = [
  {
    id: "essencia",
    titulo: "Série Essência",
    descricao:
      "Uma série especial abordando o que é verdadeiramente essencial na fé cristã.",
    pregador: "Pr. Marcelo Ferreira",
    episodios: [
      {
        id: "e1",
        titulo: "Ep. 1 — Essência",
        data: "2026-02-16",
        video_url: "/videos/SaveClip.App_AQPbRHj4vz7fAbU_eBh67cyGCBpXwSZEATZrLxQuo1PrR4bDSrYUejGqHZVld-rUA9EmJ4L1gYe99Vt1KzphsE0HFVnwz8pbYJzWayU.mp4",
      },
      {
        id: "e2",
        titulo: "Ep. 2 — Essência",
        data: "2026-02-09",
        video_url: "/videos/Essencia-ep2.mp4",
      },
      {
        id: "e3",
        titulo: "Ep. 3 — Essência",
        data: "2026-02-02",
        video_url: "/videos/Essencia-ep3.mp4",
      },
      {
        id: "e4",
        titulo: "Ep. 4 — Essência",
        data: "2026-02-02",
        video_url: "/videos/Essencia-ep4.mp4",
      },
    ],
  },
];

const sermoesDemo = [
  {
    id: "e1",
    titulo: "Essência — Ep. 1",
    pregador: "Pr. Marcelo Ferreira",
    data: "2026-02-16",
    descricao: "Primeiro episódio da série Essência: uma reflexão profunda sobre o que é verdadeiramente fundamental na caminhada com Deus.",
    video_url: "/videos/SaveClip.App_AQPbRHj4vz7fAbU_eBh67cyGCBpXwSZEATZrLxQuo1PrR4bDSrYUejGqHZVld-rUA9EmJ4L1gYe99Vt1KzphsE0HFVnwz8pbYJzWayU.mp4",
    serie: "Essência",
  },
  {
    id: "e2",
    titulo: "Essência — Ep. 2",
    pregador: "Pr. Marcelo Ferreira",
    data: "2026-02-09",
    descricao: "Segundo episódio da série Essência: aprofundando o que nos move e nos define como filhos de Deus.",
    video_url: "/videos/Essencia-ep2.mp4",
    serie: "Essência",
  },
  {
    id: "e3",
    titulo: "Essência — Ep. 3",
    pregador: "Pr. Marcelo Ferreira",
    data: "2026-02-02",
    descricao: "Terceiro episódio da série Essência: descobrindo o propósito essencial de cada crente.",
    video_url: "/videos/Essencia-ep3.mp4",
    serie: "Essência",
  },
  {
    id: "e4",
    titulo: "Essência — Ep. 4",
    pregador: "Pr. Marcelo Ferreira",
    data: "2026-02-02",
    descricao: "Quarto episódio da série Essência: aprofundando o que nos move e nos define como filhos de Deus.",
    video_url: "/videos/Essencia-ep4.mp4",
    serie: "Essência",
  },
];


function SerieCard({ serie, onPlay }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow border border-stone-100 overflow-hidden">
      
      <div
        onClick={() => setAberto(!aberto)}
        className="p-6 cursor-pointer flex justify-between items-center"
      >
        <div>
          <h3 className="font-black text-xl text-stone-800">
            {serie.titulo}
          </h3>
          <p className="text-sm text-stone-500">
            {serie.descricao}
          </p>
        </div>

        {aberto ? <ChevronUp /> : <ChevronDown />}
      </div>

      <AnimatePresence>
        {aberto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-stone-100"
          >
            {serie.episodios.map((ep) => (
              <div
                key={ep.id}
                className="flex items-center justify-between px-6 py-4 hover:bg-stone-50"
              >
                <div>
                  <p className="font-semibold text-stone-700">
                    {ep.titulo}
                  </p>
                  <p className="text-xs text-stone-400">
                    {format(new Date(ep.data), "d 'de' MMMM", {
                      locale: ptBR,
                    })}
                  </p>
                </div>

                <button
                  onClick={() => onPlay(ep)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 text-xs font-bold rounded-xl hover:bg-red-100"
                >
                  <Play size={14} />
                  Assistir
                </button>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function getYoutubeId(url) {
  if (!url) return null;
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  return match ? match[1] : null;
}

function VideoModal({ sermao, onClose }) {
  const videoId = getYoutubeId(sermao.video_url);
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }}
        className="w-full max-w-4xl"
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            {sermao.serie && <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest">{sermao.serie}</p>}
            <h3 className="text-white font-black text-lg">{sermao.titulo}</h3>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white transition-colors p-2">
            <X size={24} />
          </button>
        </div>
        <div className="w-full rounded-2xl overflow-hidden bg-stone-900 flex justify-center">
          {videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={sermao.titulo}
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          ) : (
            <video
              src={sermao.video_url}
              controls
              autoPlay
              className="max-h-[75vh] w-auto"
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function SermaoCard({ sermao, onPlay }) {
  const [expandido, setExpandido] = useState(false);
  const videoId = getYoutubeId(sermao.video_url);
  const hasVideo = videoId || sermao.video_url;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-md transition-shadow relative">
      {hasVideo ? (
        <button
          onClick={() => onPlay(sermao)}
          className="relative w-full group cursor-pointer"
        >
          {videoId ? (
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={sermao.titulo}
              className="w-full aspect-video object-cover group-hover:brightness-75 transition-all duration-300"
            />
          ) : (
            <video
              src={sermao.video_url}
              className="w-full aspect-video object-cover group-hover:brightness-75 transition-all duration-300"
              muted
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
              <Play size={22} className="text-white ml-1" fill="white" />
            </div>
          </div>
        </button>
      ) : (
        <div className="h-32 bg-gradient-to-br from-[#0f0f1e] to-[#1a1a2e] flex items-center justify-center">
          <div className="text-center">
            <BookOpen size={32} className="text-amber-400 mx-auto mb-2" />
            <span className="text-white/40 text-xs">Vídeo em breve</span>
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex-1">
            {sermao.serie && (
              <span className="inline-block bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">{sermao.serie}</span>
            )}
            <h3 className="font-black text-stone-800 text-lg leading-snug">{sermao.titulo}</h3>
          </div>
          <FavoritoButton id={sermao.id} />
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
          <span className="text-stone-400 text-xs flex items-center gap-1">
            <User size={11} />{sermao.pregador}
          </span>
          <span className="text-stone-400 text-xs flex items-center gap-1">
            <Calendar size={11} />
            {format(new Date(sermao.data), "d 'de' MMMM 'de' yyyy", { locale: ptBR })}
          </span>
        </div>

        {sermao.descricao && <p className="text-stone-500 text-sm leading-relaxed mb-4">{sermao.descricao}</p>}

        <div className="flex flex-wrap gap-3">
          {videoId && (
            <a
              href={sermao.video_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 font-semibold text-xs rounded-xl hover:bg-red-100 transition-colors"
            >
              <Play size={13} />YouTube
            </a>
          )}
          {sermao.audio_url && (
            <a
              href={sermao.audio_url}
              download
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 font-semibold text-xs rounded-xl hover:bg-blue-100 transition-colors"
            >
              <Download size={13} />Áudio
            </a>
          )}
          {sermao.esboço && (
            <button
              onClick={() => setExpandido(!expandido)}
              className="flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-600 font-semibold text-xs rounded-xl hover:bg-stone-200 transition-colors"
            >
              <BookOpen size={13} />
              Esboço
              {expandido ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
            </button>
          )}
        </div>

        {expandido && sermao.esboço && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-stone-100"
          >
            <h4 className="text-xs font-bold text-stone-700 uppercase tracking-widest mb-2">Esboço</h4>
            <pre className="text-stone-500 text-xs leading-relaxed whitespace-pre-wrap font-sans">{sermao.esboço}</pre>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function Sermoes() {
  const [aba, setAba] = useState("essencia");
  const [favoritos, setFavoritos] = useState(() => getFavoritos());
  const [videoAtivo, setVideoAtivo] = useState(null);

  // Sem Base44: usamos apenas a lista demo local
  const sermoes = sermoesDemo;

  const abas = [
    { id: "essencia", label: "Essência" },
    { id: "sermoes", label: "Todos os Sermões" },
    { id: "favoritos", label: `Favoritos${favoritos.length > 0 ? ` (${favoritos.length})` : ""}` },
  ];

  // Refresh favorites when tab is selected
  const handleAba = (id) => { setAba(id); if (id === "favoritos") setFavoritos(getFavoritos()); };

  const todosParaFavoritos = [...seriesEssencia, ...sermoes];
  const listagem = aba === "essencia" ? seriesEssencia
    : aba === "favoritos" ? todosParaFavoritos.filter(s => favoritos.includes(String(s.id)))
    : sermoes;

  return (
    <div>
      <section className="relative pt-32 pb-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6997061fe701824b15311d54/6422e0509_SaveClipApp_539454378_18020138621751429_301078321980004804_n.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/92 to-[#0a0a1a]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-amber-400 text-xs tracking-widest uppercase font-semibold">Palavra de Deus</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mt-2 mb-4">Sermões</h1>
            <p className="text-white/60 text-lg">Ouça, assista e estude os sermões do nosso Pastor Marcelo.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">

          {/* Abas */}
          <div className="flex gap-2 mb-10 bg-white rounded-2xl p-1.5 shadow-sm border border-stone-100 w-fit mx-auto">
            {abas.map(a => (
              <button
                key={a.id}
                onClick={() => handleAba(a.id)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${aba === a.id ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow" : "text-stone-500 hover:text-stone-800"}`}
              >
                {a.id === "essencia" && <span className="mr-1.5">✨</span>}
                {a.id === "favoritos" && <span className="mr-1.5">❤️</span>}
                {a.label}
              </button>
            ))}
          </div>

          {/* Banner da série Essência */}
          {aba === "essencia" && (
            <motion.div {...fade()} className="mb-10 rounded-3xl overflow-hidden bg-gradient-to-r from-[#0f0f1e] to-[#1a1040] p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                <PlayCircle size={40} className="text-white" />
              </div>
              <div>
                <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Série em destaque</span>
                <h2 className="text-3xl font-black text-white mt-1 mb-2">Essência</h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-xl">
                  Uma série especial do pastor abordando o que é verdadeiramente essencial na fé cristã — identidade, propósito e intimidade com Deus.
                </p>
              </div>
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seriesEssencia.map((serie) => (
              <SerieCard
                key={serie.id}
                serie={serie}
                onPlay={setVideoAtivo}
              />
            ))}
          </div>

          {listagem.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-stone-100">
              <div className="text-5xl mb-4">{aba === "favoritos" ? "❤️" : "📺"}</div>
              <h3 className="text-xl font-bold text-stone-700 mb-2">{aba === "favoritos" ? "Nenhum favorito ainda" : "Em breve"}</h3>
              <p className="text-stone-500">{aba === "favoritos" ? "Clique no coração ❤️ em um sermão para salvá-lo aqui." : "Os sermões serão publicados aqui em breve."}</p>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {videoAtivo && <VideoModal sermao={videoAtivo} onClose={() => setVideoAtivo(null)} />}
      </AnimatePresence>

      <section className="py-20 bg-[#0f0f1e]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fade()}>
            <div className="text-amber-400 text-5xl mb-4 font-serif">"</div>
            <p className="text-white text-2xl md:text-3xl font-light italic leading-relaxed mb-5">
              A fé vem pelo ouvir, e o ouvir pela palavra de Cristo.
            </p>
            <span className="text-amber-400 font-semibold">Romanos 10:17</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}