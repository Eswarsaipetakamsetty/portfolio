import React, { useEffect, useRef, useState } from "react";
import "../styles/ScaleUpText.css";

interface ScaleUpTextProps {
    label: string;
    textClassName: string;
}

const ScaleUpText: React.FC<ScaleUpTextProps> = ({label, textClassName}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
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
    <div ref={ref} className={`intro ${visible ? "animate" : ""}`}>
      <h1 className={textClassName}>{label}</h1>
    </div>
  );
};

export default ScaleUpText;
