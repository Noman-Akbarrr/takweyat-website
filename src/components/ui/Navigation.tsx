"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import {
  MapPin,
  Mail,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
} from "./Icons";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Work", href: "/our-work" },
  {
    name: "Pages",
    children: [
      { name: "Where We Work", href: "/where-we-work" },
      { name: "Our Impact", href: "/our-impact" },
      { name: "Stories of Hope", href: "/stories" },
      { name: "Impact Reports", href: "/our-impact/reports" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

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

export function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const headerBgClass = !isHome || scrolled
    ? "bg-surface-dark/95 backdrop-blur-md shadow-lg border-b border-white/10"
    : "bg-gradient-to-b from-surface-dark/90 to-transparent";

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-surface-dark text-white/70 text-xs sm:text-sm hidden lg:block border-b border-white/10">
        <Container>
          <div className="flex items-center justify-between h-[42px]">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary-light" />
                Main G.T. Road, Rawalpindi, Pakistan
              </span>
              <a
                href="mailto:info@takweyat.org"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-primary-light" />
                info@takweyat.org
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/50 text-xs">Follow us:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${headerBgClass}`}>
        <Container>
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-11 w-40 flex items-center">
                <Image
                  src="/logo.png"
                  alt="Takweyat Foundation"
                  width={160}
                  height={44}
                  className="h-10 w-auto object-contain brightness-105"
                  priority
                />
              </div>
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
                    <button className="flex items-center gap-1.5 text-white/85 hover:text-white transition-colors font-medium py-6 text-sm tracking-wide">
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === item.name ? "rotate-180 text-primary-light" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 bg-surface shadow-xl rounded-xl min-w-[220px] py-2 border border-border-light animate-fade-in z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-text-secondary hover:text-primary hover:bg-surface-elevated transition-colors font-medium"
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
                    className={`text-sm font-medium tracking-wide py-6 transition-colors ${
                      pathname === item.href
                        ? "text-primary-light font-semibold border-b-2 border-primary-light"
                        : "text-white/85 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* Donate Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/get-involved/donate"
                className="inline-flex items-center gap-2 bg-action text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-action-dark shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                Donate Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="lg:hidden p-2 text-white/90 hover:text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </Container>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface-dark border-t border-white/10 shadow-2xl animate-fade-in">
            <Container>
              <div className="py-4 flex flex-col gap-1">
                {navigation.map((item) =>
                  item.children ? (
                    <div key={item.name} className="border-b border-white/5 pb-2">
                      <button
                        className="w-full text-left text-white/90 hover:text-white transition-colors font-medium py-2.5 flex items-center justify-between text-base"
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.name ? null : item.name)
                        }
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === item.name ? "rotate-180 text-primary-light" : ""
                          }`}
                        />
                      </button>
                      {openDropdown === item.name && (
                        <div className="pl-4 py-1 flex flex-col gap-1 border-l-2 border-primary-light/40 my-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block py-2 text-white/70 hover:text-white transition-colors text-sm"
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
                      className="text-white/90 hover:text-white transition-colors font-medium py-2.5 text-base border-b border-white/5"
                    >
                      {item.name}
                    </Link>
                  )
                )}
                <div className="pt-4 pb-2">
                  <Link
                    href="/get-involved/donate"
                    className="w-full inline-flex items-center justify-center gap-2 bg-action text-white px-5 py-3 rounded-full font-semibold hover:bg-action-dark transition-all text-center"
                  >
                    Donate Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        )}
      </header>
    </>
  );
}
