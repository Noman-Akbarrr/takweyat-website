"use client";

import Image from "next/image";

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
  {
    name: "Fatima Zahra",
    role: "Beneficiary",
    quote: "My children are now able to attend school thanks to Takweyat. They gave us hope when we had none left. I will always be grateful for their support.",
  },
  {
    name: "Dr. Rashid Mehmood",
    role: "Medical Volunteer",
    quote: "The mobile clinics set up by Takweyat have transformed healthcare access in remote villages. I've witnessed lives saved because of their commitment.",
  },
  {
    name: "Aisha Begum",
    role: "Community Leader",
    quote: "Takweyat doesn't just deliver aid — they build lasting relationships with the communities they serve. Their approach is dignified and effective.",
  },
];

function PersonIcon() {
  return (
    <svg className="w-full h-full text-gray-300" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.2c0 .66.54 1.2 1.2 1.2h16.8c.66 0 1.2-.54 1.2-1.2v-1.2c0-3.2-6.4-4.8-9.6-4.8z" />
    </svg>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-[340px] h-[260px] bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      {/* Quote */}
      <p className="text-sm leading-relaxed text-gray-600 line-clamp-5 flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Person Info */}
      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
          {testimonial.image ? (
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          ) : (
            <PersonIcon />
          )}
        </div>
        <div className="min-w-0">
          <h5 className="text-sm font-bold text-gray-900 truncate">{testimonial.name}</h5>
          <span className="text-xs text-gray-400">{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
}

export function TestimonialCarousel() {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 6);

  return (
    <div className="relative -mx-4 overflow-hidden">
      {/* Row 1 — moves right to left */}
      <div className="flex gap-5 mb-5 animate-marquee-left">
        {[...row1, ...row1, ...row1].map((t, i) => (
          <TestimonialCard key={`r1-${i}`} testimonial={t} />
        ))}
      </div>

      {/* Row 2 — moves left to right */}
      <div className="flex gap-5 animate-marquee-right">
        {[...row2, ...row2, ...row2].map((t, i) => (
          <TestimonialCard key={`r2-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
}
