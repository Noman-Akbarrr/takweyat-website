import Link from "next/link";
import { Container } from "./Container";

const footerLinks = {
  "Our Work": [
    { name: "Education for All", href: "/our-work/education-for-all" },
    { name: "Hunger Relief", href: "/our-work/hunger-relief-food-distribution" },
    { name: "Medical Aid", href: "/our-work/medical-aid-healthcare" },
    { name: "Social Justice", href: "/our-work/social-justice-advocacy" },
  ],
  Countries: [
    { name: "Pakistan", href: "/where-we-work/pakistan" },
    { name: "Palestine", href: "/where-we-work/palestine" },
    { name: "Sudan", href: "/where-we-work/sudan" },
    { name: "All Countries", href: "/where-we-work" },
  ],
  "Get Involved": [
    { name: "Donate", href: "/get-involved/donate" },
    { name: "Volunteer", href: "/get-involved" },
    { name: "Partner", href: "/about/partners" },
    { name: "Fundraise", href: "/contact" },
  ],
  About: [
    { name: "Who We Are", href: "/about/who-we-are" },
    { name: "Our Mission", href: "/about/mission" },
    { name: "Team", href: "/about/team" },
    { name: "Transparency", href: "/about/transparency" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/share/18W5ghRAB6/", icon: "fab fa-facebook-f" },
  { name: "X", href: "https://x.com/takweyat", icon: "fab fa-twitter" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/takweyat-foundation/", icon: "fab fa-linkedin-in" },
  { name: "Instagram", href: "https://www.instagram.com/takweyat", icon: "fab fa-instagram" },
];

export function Footer() {
  return (
    <footer className="bg-surface-dark text-white/50">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-white">
                  Takweyat
                </span>
              </Link>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all"
                    aria-label={social.name}
                  >
                    <i className={social.icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h5 className="text-white font-semibold mb-4">{category}</h5>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2"
                      >
                        <i className="fa fa-chevron-right text-[10px]" />
                        {link.name}
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Takweyat Foundation. All Rights Reserved.
            </p>
            <p className="text-white/50 text-sm">
              Designed By{" "}
              <a
                href="https://htmlcodex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                HTML Codex
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
