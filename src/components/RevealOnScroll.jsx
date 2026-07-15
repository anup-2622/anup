import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const RevealOnScroll = ({ children, className = "", delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const { isVisible } = useIntersectionObserver(ref, { threshold: 0.08 });

  const directionStyles = {
    up: isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
    down: isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12",
    left: isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12",
    right: isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
    scale: isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        directionStyles[direction]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
