import React, { useState, useEffect } from "react";
import "../styles/AnimatedBackground.css"
import DarkVeil from "./Background";

interface BackgroundWrapperProps {
  children: React.ReactNode;
}

const AnimatedBackground: React.FC<BackgroundWrapperProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`background-wrapper ${isScrolled ? "scrolled" : ""}`}>
      < DarkVeil /> {/* React bits background */}
      <div className="background-wrapper__overlay" />

      {/* Page Content */}
      <div className="background-wrapper__content">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
