import React, { useRef, useEffect, useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const SkillBar = ({ skill, color, shadow }) => {
  const ref = useRef(null);
  const { isVisible } = useIntersectionObserver(ref, { threshold: 0.3 });
  const [displayLevel, setDisplayLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = skill.level;
      const duration = 1400;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayLevel(end);
          clearInterval(timer);
        } else {
          setDisplayLevel(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isVisible, skill.level]);

  const getGlowStyle = () => {
    if (!isVisible) return {};
    if (color.includes('amber')) return { boxShadow: '0 0 12px rgba(251, 191, 36, 0.3)' };
    if (color.includes('orange')) return { boxShadow: '0 0 12px rgba(249, 115, 22, 0.3)' };
    if (color.includes('emerald')) return { boxShadow: '0 0 12px rgba(52, 211, 153, 0.3)' };
    if (color.includes('yellow')) return { boxShadow: '0 0 12px rgba(250, 204, 21, 0.3)' };
    return {};
  };

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-3">
        <span className="text-[15px] font-medium text-slate-200 group-hover:text-white transition-colors duration-300">
          {skill.name}
        </span>
        <span className="text-sm font-bold text-slate-400 group-hover:text-amber-400 transition-colors duration-300 font-mono tabular-nums">
          {displayLevel}%
        </span>
      </div>
      <div className="h-2.5 bg-white/[0.04] rounded-full overflow-hidden relative border border-white/[0.03]">
        <div
          className={`absolute inset-0 h-full bg-gradient-to-r ${color} rounded-full transition-all duration-[1400ms] ease-out`}
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
            ...getGlowStyle(),
          }}
        />
        {/* Shine overlay */}
        <div
          className="absolute inset-0 h-full rounded-full transition-all duration-[1400ms] ease-out overflow-hidden"
          style={{ width: isVisible ? `${skill.level}%` : "0%" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-transparent" />
        </div>
        {/* Shimmer animation */}
        {isVisible && (
          <div
            className="absolute inset-0 h-full rounded-full animate-shimmer opacity-30"
            style={{
              width: `${skill.level}%`,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              backgroundSize: '200% 100%',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SkillBar;
