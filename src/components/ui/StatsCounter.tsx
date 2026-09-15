"use client";

import { useEffect, useRef, useState } from "react";

type StatsCounterProps = {
  value: string;
  label: string;
};

export function StatsCounter({ value, label }: StatsCounterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
        {value}
      </div>
      <div className="text-sm text-text-secondary">{label}</div>
    </div>
  );
}
