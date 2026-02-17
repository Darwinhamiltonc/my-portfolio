import { useEffect, useRef, useState } from "react";
import "./Reveal.css";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

function Reveal({ children, className = "" }: RevealProps) {
  // 1️⃣ Creamos una referencia al div
  const ref = useRef<HTMLDivElement | null>(null);

  // 2️⃣ Estado para saber si ya es visible
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 3️⃣ Creamos el observer
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setIsVisible(true); // Cambiamos el estado cuando entra en pantalla
        }
      },
      {
        threshold: 0.4, // Se activa cuando 20% del elemento es visible
      },
    );

    // 4️⃣ Si el elemento existe, lo observamos
    if (ref.current) {
      observer.observe(ref.current);
    }

    // 5️⃣ Cleanup (importante en React)
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "active" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default Reveal;
