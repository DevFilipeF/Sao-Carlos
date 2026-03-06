import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const STORAGE_KEY = "iead_sermoes_favoritos";

export function getFavoritos() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function toggleFavorito(id) {
  const favs = getFavoritos();
  const idx = favs.indexOf(String(id));
  if (idx === -1) favs.push(String(id));
  else favs.splice(idx, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
  return favs;
}

export default function FavoritoButton({ id }) {
  const [favoritado, setFavoritado] = useState(false);

  useEffect(() => {
    setFavoritado(getFavoritos().includes(String(id)));
  }, [id]);

  const handleClick = (e) => {
    e.stopPropagation();
    const novos = toggleFavorito(id);
    setFavoritado(novos.includes(String(id)));
  };

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      className={`p-2 rounded-xl transition-colors ${favoritado ? "bg-red-50 text-red-500" : "bg-stone-100 text-stone-400 hover:text-red-400 hover:bg-red-50"}`}
      title={favoritado ? "Remover dos favoritos" : "Favoritar sermão"}
    >
      <Heart size={15} fill={favoritado ? "currentColor" : "none"} />
    </motion.button>
  );
}