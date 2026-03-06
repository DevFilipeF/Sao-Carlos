import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function NavigationTracker() {
  const location = useLocation();

  useEffect(() => {
    // Sem Base44: apenas mantemos um log no console
    // para ajudar em debug/local.
    // console.log("Navegação:", location.pathname);
  }, [location]);

  return null;
}