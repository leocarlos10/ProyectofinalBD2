import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
 /* 
 utilizamos el hook useLocation para capturar la ruta actual
 luego el usamos el useEffect para que lleve el scroll al top 
 cada vez que pathname cambie es decir la ruta.

 al final no retornamos nada
 */

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
} 