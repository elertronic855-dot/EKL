/**
 * E-KEI LOGISTICS Hero Section
 * Design: Industrial Maritime Precision
 * - Full-screen hero with port background image
 * - Asymmetric layout: text left, stats right
 * - Dark overlay with cyan accent lines
 */

import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663701518332/L65PTuMiQXAQYgFxj5E8yA/hero-port-evRiTNPnHCZtF9mSdegq54.webp";

export default function HeroSection() {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);

  // Performance 페이지와 동일한 KPI 기준
  const heroStats = [
    { value: "13,278+", label: t("hero.stats.airTotal") },
    { value: "3,330+", label: t("hero.stats.seaTotal") },
    { value: "5,744T", label: t("hero.stats.airWeight") },
    { value: "3,702 TEU", label: t("hero.stats.seaVolume") },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Shanghai Port"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/80 to-[#0A1628]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-[#0A1628]/30" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#00B4D8] to-transparent opacity-60" />
      <div className="absolute top-1/3 left-0 w-64 h-px bg-gradient-to-r from-[#00B4D8] to-transparent opacity-40" />
      <div className="absolute bottom-1/3 left-0 w-48 h-px bg-gradient-to-r from-[#1B5FA8] to-transparent opacity-30" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(0,180,216,0.3) 40px, rgba(0,180,216,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0,180,216,0.3) 40px, rgba(0,180,216,0.3) 41px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container py-24">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16">
          {/* Left: Main text */}
          <div className="flex-1 max-w-2xl">
            {/* Tag */}
            <div
              className={`ekl-section-tag text-[#00B4D8] mb-6 flex items-center gap-3 transition-all duration-700 ${
                loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <span className="w-8 h-px bg-[#00B4D8]" />
              {t("hero.tagline")}
            </div>

            {/* Main heading */}
            <h1
              className={`ekl-heading text-white mb-6 transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: "1.15",
                letterSpacing: "0.01em",
                wordSpacing: "0.1em",
              }}
            >
              {t("hero.title")}
            </h1>

            {/* Subheading */}
            <p
              className={`text-[#90E0EF] text-xl font-light mb-4 transition-all duration-700 delay-200 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}
            >
              {t("hero.subtitle")}
            </p>

            <p
              className={`text-white/70 text-base leading-relaxed mb-10 max-w-lg transition-all duration-700 delay-300 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 300 }}
            >
              {t("hero.description")}
            </p>

            {/* CTA buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <button
                className="ekl-btn-primary flex items-center gap-2"
                onClick={() => {
                  const el = document.getElementById("services");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("hero.buttons.service")}
                <ArrowRight size={16} />
              </button>
              <button
                className="ekl-btn-outline"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("hero.buttons.contact")}
              </button>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div
            className={`hidden lg:grid grid-cols-2 gap-4 transition-all duration-700 delay-500 ${
              loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {heroStats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-sm hover:bg-white/10 hover:border-[#00B4D8]/30 transition-all duration-300"
                style={{ minWidth: "160px" }}
              >
                <div
                  className="text-[#00B4D8] font-black mb-1"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: "2.2rem",
                    lineHeight: "1",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-white/60 text-xs"
                  style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 300 }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-[#00B4D8] transition-colors flex flex-col items-center gap-2"
        aria-label="아래로 스크롤"
      >
        <span className="text-xs tracking-widest" style={{ fontFamily: 'Barlow, sans-serif' }}>
          SCROLL
        </span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
}
