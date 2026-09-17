import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import {
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  Heart,
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
} from "./Icons";

const footerLinks = {
  "Our Work": [
    { name: "Education for All", href: "/our-work/education-for-all" },
    { name: "Hunger Relief", href: "/our-work/hunger-relief-food-distribution" },
    { name: "Medical Aid & Healthcare", href: "/our-work/medical-aid-healthcare" },
    { name: "Social Justice & Legal Aid", href: "/our-work/social-justice-advocacy" },
  ],
  "Where We Work": [
    { name: "Pakistan", href: "/where-we-work/pakistan" },
    { name: "Palestine", href: "/where-we-work/palestine" },
    { name: "Sudan", href: "/where-we-work/sudan" },
    { name: "All Countries", href: "/where-we-work" },
  ],
  "Get Involved": [
    { name: "Donate Now", href: "/get-involved/donate" },
    { name: "Volunteer", href: "/get-involved" },
    { name: "Partner With Us", href: "/about/partners" },
    { name: "Contact Team", href: "/contact" },
  ],
  About: [
    { name: "Who We Are", href: "/about/who-we-are" },
    { name: "Our Mission", href: "/about/mission" },
    { name: "Leadership & Team", href: "/about/team" },
    { name: "Financial Transparency", href: "/about/transparency" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/18W5ghRAB6/",
    icon: FacebookIcon,
  },
  {
    name: "X",
    href: "https://x.com/takweyat",
    icon: TwitterIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/takweyat-foundation/",
    icon: LinkedInIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/takweyat",
    icon: InstagramIcon,
  },
];

export function Footer() {
  return (
    <footer className="bg-surface-dark text-white/70 border-t border-white/10">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/logo.png"
                  alt="Takweyat Foundation"
                  width={180}
                  height={50}
                  className="h-11 w-auto brightness-105"
                />
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
                Takweyat Foundation is a humanitarian organization dedicated to providing education, food security, clean water, and emergency relief to vulnerable communities across 5 countries.
              </p>
              <div className="space-y-2 mb-6 text-sm text-white/70">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary-light shrink-0" />
                  Main G.T. Road, Rawalpindi, Pakistan
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary-light shrink-0" />
                  <a href="mailto:info@takweyat.org" className="hover:text-white transition-colors">
                    info@takweyat.org
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary-light shrink-0" />
                  <a href="tel:+923145217958" className="hover:text-white transition-colors">
                    +92 314 5217958
                  </a>
                </p>
              </div>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-primary-light hover:bg-primary-light/10 transition-all"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h5 className="text-white font-semibold mb-4 text-base tracking-wide">{category}</h5>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-primary-light transition-colors text-sm flex items-center gap-1.5 group"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-primary-light transition-colors shrink-0" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <p>
              &copy; {new Date().getFullYear()} Takweyat Foundation. All Rights Reserved.
            </p>
            <p className="flex items-center gap-1.5">
              <span>Built with dedication for humanity</span>
              <Heart className="w-3.5 h-3.5 text-action inline fill-action" />
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
