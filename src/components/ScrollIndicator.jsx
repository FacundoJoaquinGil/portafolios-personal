import { useEffect, useState } from 'react';
import '../styles/ScrollIndicator.css';

export const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition < 100); // La flecha desaparece después de 100px de scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`scroll-indicator-portfolio ${isVisible ? 'scroll-indicator-portfolio--visible' : 'scroll-indicator-portfolio--hidden'}`}
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
    >
      <div className="scroll-indicator-portfolio__arrow">
        <span className="scroll-indicator-portfolio__arrow-line"></span>
        <span className="scroll-indicator-portfolio__arrow-line"></span>
        <span className="scroll-indicator-portfolio__arrow-line"></span>
      </div>
    </div>
  );
}; 