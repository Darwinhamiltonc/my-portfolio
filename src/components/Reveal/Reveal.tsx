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

        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.4,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

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
