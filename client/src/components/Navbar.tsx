/*
 * E-KEI LOGISTICS Navbar
 * Design: Industrial Maritime Precision
 * - Dark navy background with cyan accent
 * - Barlow font for nav links, uppercase tracking
 * - Sticky with backdrop blur on scroll
 * - Language selector dropdown UI
 */

import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail, ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [desktopLangOpen, setDesktopLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const desktopLangRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.stats"), href: "#stats" },
    { label: t("nav.network"), href: "#network" },
    { label: t("nav.clients"), href: "#clients" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const languages = [
    { code: 'ko', name: '한국어', label: 'KO' },
    { code: 'en', name: 'English', label: 'EN' },
    { code: 'zh', name: '简体中文', label: '中文' },
  ];

  const getCurrentLanguageName = () => {
    const lang = languages.find(l => l.code === i18n.language);
    return lang ? lang.name : '한국어';
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = ["home", "about", "services", "stats", "network", "clients", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (desktopLangRef.current && !desktopLangRef.current.contains(e.target as Node)) {
        setDesktopLangOpen(false);
      }
      if (mobileLangRef.current && !mobileLangRef.current.contains(e.target as Node)) {
        setMobileLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const handleLanguageChange = (code: string, isMobile = false) => {
    i18n.changeLanguage(code);
    setDesktopLangOpen(false);
    if (isMobile) {
      setMobileLangOpen(false);
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-[#0A1628] text-[#90E0EF] text-xs py-1.5">
        <div className="container flex justify-end gap-6">
          <a href="tel:+862134689339" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone size={11} />
            <span style={{ fontFamily: 'Barlow, sans-serif' }}>+86-21-3468-9339</span>
          </a>
          <a href="mailto:eklsha@eklchina.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail size={11} />
            <span style={{ fontFamily: 'Barlow, sans-serif' }}>eklsha@eklchina.com</span>
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A1628]/95 backdrop-blur-md border-b border-white/5"
            : "bg-[#0A1628]"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => {
                const el = document.getElementById("home");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="relative w-8 h-8">
                <div className="w-full h-full bg-gradient-to-br from-[#00B4D8] to-[#0096C7] rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-sm" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                    EKL
                  </span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-[#00B4D8] rounded-sm opacity-60" />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-white font-bold text-base tracking-wide"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.08em' }}
                >
                  E-KEI LOGISTICS
                </span>
                <span
                  className="text-[#90E0EF] text-[10px] tracking-widest"
                  style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '0.2em' }}
                >
                  SHANGHAI
                </span>
              </div>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`ekl-nav-link px-3 py-2 rounded-sm transition-all duration-200 ${
                      isActive
                        ? "text-[#00B4D8] bg-[#00B4D8]/10"
                        : "text-[#C0C8D0] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <button
                onClick={() => handleNavClick("#contact")}
                className="ekl-btn-primary ml-4 !py-2 !px-4 !text-xs"
              >
                {t("hero.buttons.contact")}
              </button>

              {/* Desktop Language Dropdown */}
              <div className="ml-4 relative" ref={desktopLangRef}>
                <button
                  onClick={() => setDesktopLangOpen(!desktopLangOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-sm text-[#C0C8D0] hover:text-white hover:bg-white/5 transition-all duration-200 text-xs font-semibold"
                  style={{ fontFamily: 'Barlow, sans-serif' }}
                >
                  <Globe size={14} />
                  <span>{getCurrentLanguageName()}</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${desktopLangOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {desktopLangOpen && (
                  <div className="absolute right-0 mt-1 bg-[#0D1F3C] border border-white/10 rounded-sm shadow-lg overflow-hidden z-50 min-w-[140px]">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full text-left px-4 py-2.5 text-xs font-semibold transition-all duration-200 flex items-center justify-between ${
                          i18n.language === lang.code
                            ? 'bg-[#00B4D8]/20 text-[#00B4D8]'
                            : 'text-[#C0C8D0] hover:text-white hover:bg-white/5'
                        }`}
                        style={{ fontFamily: 'Barlow, sans-serif' }}
                      >
                        <span>{lang.name}</span>
                        {i18n.language === lang.code && (
                          <span className="text-[#00B4D8]">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="메뉴 열기"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#0D1F3C] border-t border-white/10">
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="ekl-nav-link text-left px-4 py-3 text-[#C0C8D0] hover:text-white hover:bg-white/5 rounded-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="border-t border-white/10 my-2" />
              <button
                onClick={() => handleNavClick("#contact")}
                className="ekl-btn-primary mt-2 w-full text-center"
              >
                {t("hero.buttons.contact")}
              </button>

              {/* Mobile Language Dropdown */}
              <div className="mt-3 relative" ref={mobileLangRef}>
                <button
                  onClick={() => setMobileLangOpen(!mobileLangOpen)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-sm text-[#C0C8D0] hover:text-white hover:bg-white/5 transition-all duration-200 text-sm font-semibold border border-white/10"
                  style={{ fontFamily: 'Barlow, sans-serif' }}
                >
                  <span className="flex items-center gap-2">
                    <Globe size={14} />
                    {getCurrentLanguageName()}
                  </span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${mobileLangOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Mobile Dropdown Menu */}
                {mobileLangOpen && (
                  <div className="absolute left-0 right-0 mt-1 bg-[#0D1F3C] border border-white/10 rounded-sm shadow-lg overflow-hidden z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code, true)}
                        className={`w-full text-left px-4 py-2.5 text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                          i18n.language === lang.code
                            ? 'bg-[#00B4D8]/20 text-[#00B4D8]'
                            : 'text-[#C0C8D0] hover:text-white hover:bg-white/5'
                        }`}
                        style={{ fontFamily: 'Barlow, sans-serif' }}
                      >
                        <span>{lang.name}</span>
                        {i18n.language === lang.code && (
                          <span className="text-[#00B4D8]">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
