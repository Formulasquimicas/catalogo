import { useState, useEffect } from "react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const amount = window.scrollY;
    const handleScroll = () => { setVisible(window.scrollY > 300); };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
      aria-label="Subir arriba"
    >⇧</button>
  );
}
export default ScrollToTop;
