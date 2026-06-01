/**
 * E-KEI LOGISTICS Footer
 * Design: Industrial Maritime Precision
 * - Dark navy with cyan accents
 * - Company info, quick links, contact
 */

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.stats"), href: "#stats" },
    { label: t("nav.network"), href: "#network" },
    { label: t("nav.clients"), href: "#clients" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <footer className="bg-[#050D1A] border-t border-white/10">
      <div className="container py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-[#1B5FA8] to-[#00B4D8] rounded-sm flex items-center justify-center">
                <span
                  className="text-white font-black text-sm"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  EKL
                </span>
              </div>
              <div>
                <div
                  className="text-white font-bold text-sm"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.08em' }}
                >
                  E-KEI LOGISTICS
                </div>
                <div
                  className="text-[#90E0EF] text-xs"
                  style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '0.15em' }}
                >
                  SHANGHAI
                </div>
              </div>
            </div>
            <p
              className="text-white/50 text-sm leading-relaxed"
              style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
            >
              {t("footer.tagline")}
              <br />
              {t("footer.description")}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-white text-xs font-bold mb-5"
              style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase' }}
            >
              {t("footer.quickLinks")}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-white/50 hover:text-[#00B4D8] text-sm transition-colors"
                  style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4
              className="text-white text-xs font-bold mb-5"
              style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase' }}
            >
              {t("contact.tag")}
            </h4>
            <div className="space-y-2 text-sm text-white/50" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
              <p>{t("contact.phone")}</p>
              <a
                href={`mailto:${t("contact.email")}`}
                className="hover:text-[#00B4D8] transition-colors block"
              >
                {t("contact.email")}
              </a>
              <p className="text-xs mt-3">{t("contact.address")}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p
            className="text-center text-white/30 text-xs"
            style={{ fontFamily: 'Barlow, sans-serif' }}
          >
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
