"use client";

import { useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ahmed Khan",
    role: "Donor",
    quote: "Takweyat Foundation has been doing incredible work in communities that need it most. I'm proud to support their mission of bringing education and healthcare to those who need it.",
  },
  {
    name: "Sarah Malik",
    role: "Volunteer",
    quote: "Volunteering with Takweyat has been a life-changing experience. Seeing the impact of our work firsthand motivates me to do more every day.",
  },
  {
    name: "Mohammad Ali",
    role: "Partner",
    quote: "Working with Takweyat Foundation has been an honor. Their dedication to helping others is truly inspiring and their impact speaks for itself.",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 px-4 md:w-1/2 transition-all duration-500 ${
                index === current ? "scale-100" : "scale-90 opacity-50"
              }`}
            >
              <div className={`text-center p-8 rounded-xl ${
                index === current ? "bg-primary text-white" : "bg-surface-elevated"
              }`}>
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                ) : (
                  <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    index === current ? "bg-white/20" : "bg-primary/10"
                  }`}>
                    <span className={`text-2xl font-bold ${index === current ? "text-white" : "text-primary"}`}>
                      {testimonial.name[0]}
                    </span>
                  </div>
                )}
                <p className={`mb-4 leading-relaxed ${index === current ? "text-white/90" : "text-text-secondary"}`}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <h5 className={`font-bold ${index === current ? "text-white" : "text-text-primary"}`}>
                  {testimonial.name}
                </h5>
                <span className={`italic text-sm ${index === current ? "text-white/70" : "text-text-muted"}`}>
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all z-10"
        aria-label="Previous testimonial"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all z-10"
        aria-label="Next testimonial"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
