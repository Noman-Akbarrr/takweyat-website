"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Work", href: "/our-work" },
  {
    name: "Pages",
    children: [
      { name: "Where We Work", href: "/where-we-work" },
      { name: "Impact", href: "/our-impact" },
      { name: "Stories", href: "/stories" },
      { name: "Reports", href: "/reports" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/share/18W5ghRAB6/", icon: "fab fa-facebook-f" },
  { name: "X", href: "https://x.com/takweyat", icon: "fab fa-twitter" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/takweyat-foundation/", icon: "fab fa-linkedin-in" },
  { name: "Instagram", href: "https://www.instagram.com/takweyat", icon: "fab fa-instagram" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 45);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-surface-dark text-white/50 text-sm hidden lg:block">
        <Container>
          <div className="flex items-center justify-between h-[45px]">
            <div className="flex items-center gap-6">
              <span>
                <i className="fa fa-map-marker-alt mr-2" />
                Main G.T. Road, Rawalpindi, Pakistan
              </span>
              <span>
                <i className="fa fa-envelope mr-2" />
                info@takweyat.org
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span>Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-surface-dark shadow-lg" : "bg-transparent"
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Takweyat Foundation"
                width={180}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) =>
                item.children ? (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 text-white/80 hover:text-white transition-colors font-medium py-6">
                      {item.name}
                      <svg
                        className={`w-3 h-3 transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-lg min-w-[200px] py-2 animate-fade-in">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-text-secondary hover:text-primary hover:bg-surface-elevated transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors font-medium py-6"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* Donate Button */}
            <div className="hidden lg:block">
              <Link
                href="/get-involved/donate"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-surface-dark transition-all"
              >
                Donate Now
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </nav>
        </Container>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface-dark border-t border-white/10">
            <Container>
              <div className="py-4 flex flex-col gap-2">
                {navigation.map((item) =>
                  item.children ? (
                    <div key={item.name}>
                      <button
                        className="w-full text-left text-white/80 hover:text-white transition-colors font-medium py-3 flex items-center justify-between"
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === item.name ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === item.name && (
                        <div className="pl-4 pb-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block py-2 text-white/60 hover:text-white transition-colors text-sm"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white/80 hover:text-white transition-colors font-medium py-3"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                )}
                <Link
                  href="/get-involved/donate"
                  className="mt-4 inline-flex items-center justify-center border-2 border-white/30 text-white px-5 py-3 rounded-full font-semibold hover:bg-white hover:text-surface-dark transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Donate Now
                </Link>
              </div>
            </Container>
          </div>
        )}
      </header>
    </>
  );
}
