"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./Container";

const slides = [
  {
    title: "Let's Change The World With Humanity",
    subtitle: "Your Generosity, Their Future",
    description: "At Takweyat Foundation, every act of kindness is a seed sown for a brighter tomorrow. Your Zakat, Sadaqah, and charitable support are lifelines of warmth, wisdom, and well-being.",
    href: "/about",
    hrefText: "Learn More",
  },
  {
    title: "Let's Save More Lives With Our Helping Hand",
    subtitle: "A Gift of Hope, A Legacy of Change",
    description: "We work across 5 countries to provide education, food, healthcare, and hope where it's needed most. Together, we can make a difference.",
    href: "/our-work",
    hrefText: "Learn More",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center bg-surface-dark overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/90 to-surface-dark/70" />

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/30 to-primary/20" />
        </div>
      ))}

      {/* Content */}
      <Container>
        <div className="relative z-10 max-w-3xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                index === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute inset-0"
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-slide-in-down">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-4">
                {slide.subtitle}
              </p>
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl mb-8">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={slide.href}
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-primary-dark transition-colors"
                >
                  {slide.hrefText}
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-primary w-8" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-surface-dark/50 rounded-full flex items-center justify-center text-white hover:bg-surface-dark transition-colors z-10"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-surface-dark/50 rounded-full flex items-center justify-center text-white hover:bg-surface-dark transition-colors z-10"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
