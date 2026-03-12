import { useEffect, useRef, useState } from "react";
import "./Reveal.css";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

function Reveal({ children, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // 👈 clave
      },
      {
        threshold: 0.3,
      },
    );

    const element = ref.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
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
