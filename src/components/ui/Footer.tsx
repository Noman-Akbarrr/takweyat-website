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
    { name: "Volunteer", href: "/get-involved/volunteer" },
    { name: "Partner", href: "/get-involved/partner" },
    { name: "Fundraise", href: "/get-involved/fundraise" },
  ],
  About: [
    { name: "Who We Are", href: "/about/who-we-are" },
    { name: "Our Mission", href: "/about/mission" },
    { name: "Team", href: "/about/team" },
    { name: "Transparency", href: "/about/transparency" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/share/18W5ghRAB6/", icon: "facebook" },
  { name: "Instagram", href: "https://www.instagram.com/takweyat", icon: "instagram" },
  { name: "X", href: "https://x.com/takweyat", icon: "x" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/takweyat-foundation/", icon: "linkedin" },
];

export function Footer() {
  return (
    <footer className="bg-text-primary text-text-inverse">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-text-inverse font-bold text-lg">T</span>
                </div>
                <span className="text-xl font-bold">Takweyat</span>
              </Link>
              <p className="text-text-inverse/70 text-sm leading-relaxed">
                Helping communities build a better future across 8 countries through education, food, healthcare, and hope.
              </p>
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-text-inverse/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.name}
                  >
                    <span className="text-sm">{social.name[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-text-inverse mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-text-inverse/70 hover:text-text-inverse transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-text-inverse/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-inverse/60 text-sm">
              © {new Date().getFullYear()} Takweyat Foundation. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-text-inverse/60">
              <Link href="/privacy" className="hover:text-text-inverse transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-text-inverse transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
