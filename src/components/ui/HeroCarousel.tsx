"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { ChevronLeft, ChevronRight, ArrowRight, HandHeart } from "./Icons";

const slides = [
  {
    title: "Empowering Lives with Hope and Dignity",
    subtitle: "Your Generosity Builds Their Future",
    description: "At Takweyat Foundation, every contribution transforms despair into opportunity. Through your Zakat, Sadaqah, and generous donations, we deliver clean water, quality education, healthcare, and humanitarian aid to communities facing extreme adversity.",
    href: "/our-work",
    hrefText: "Explore Our Work",
  },
  {
    title: "Saving Lives Through Compassionate Action",
    subtitle: "Serving Humanity Across 5 Countries",
    description: "From crisis response in Palestine and Sudan to enduring community empowerment across Pakistan, we build resilient schools, medical clinics, and livelihood programs that outlast hardship.",
    href: "/get-involved/donate",
    hrefText: "Donate Now",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[82vh] flex items-center bg-surface-dark overflow-hidden">
      {/* Background pattern & overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(#0d7377_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/80 to-surface-dark/90" />

      {/* Slide Ambient Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-light/15 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <Container>
        <div className="relative z-10 max-w-3xl py-16">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === current
                  ? "opacity-100 translate-y-0 relative"
                  : "opacity-0 translate-y-6 absolute inset-0 pointer-events-none"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-primary-light px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-white/10">
                <HandHeart className="w-4 h-4 text-action-light" />
                <span>{slide.subtitle}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mb-8">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={slide.href}
                  className="inline-flex items-center gap-2.5 bg-action text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-action-dark transition-all shadow-lg hover:shadow-xl active:scale-95"
                >
                  <span>{slide.hrefText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  About Our Mission
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current ? "bg-primary-light w-8" : "bg-white/30 hover:bg-white/50 w-2.5"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all z-20 border border-white/10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all z-20 border border-white/10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </section>
  );
}
