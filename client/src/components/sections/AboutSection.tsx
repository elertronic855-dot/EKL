/**
 * E-KEI LOGISTICS About Section
 * Design: Industrial Maritime Precision
 * - Company profile + Vision & Core Values
 * - Timeline history
 * - Asymmetric layout with navy/steel background
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2, Globe, Cpu, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t, i18n } = useTranslation();
  const { ref: profileRef, isVisible: profileVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();

  const coreValues = t("about.values", { returnObjects: true }) as any[];
  const timeline = t("about.timeline", { returnObjects: true }) as any[];

  return (
    <section id="about" className="bg-white">
      {/* Company Profile */}
      <div className="bg-[#0A1628] py-20">
        <div className="container">
          <div
            ref={profileRef}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-16 items-center"
          >
            {/* Left: Info */}
            <div className={`transition-all duration-700 ${profileVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <div className="ekl-section-tag text-[#00B4D8] mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-[#00B4D8]" />
                {t("about.tag")}
              </div>
              <h2
                className="ekl-heading text-white mb-8 whitespace-nowrap"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)", overflow: 'hidden', textOverflow: 'ellipsis' }}
              >
                {t("about.title")}
              </h2>

              <div className="space-y-5">
                {[
                  {
                    icon: Building2,
                    label: t("about.profile.company"),
                    value: t("about.profile.companyValue"),
                  },
                  {
                    icon: Globe,
                    label: t("about.profile.location"),
                    value: t("about.profile.locationValue"),
                  },
                  {
                    icon: Cpu,
                    label: t("about.profile.specialty"),
                    value: t("about.profile.specialtyValue"),
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 transition-all duration-700 ${profileVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: `${i * 100 + 200}ms` }}
                  >
                    <div className="w-10 h-10 rounded-sm bg-[#1E3A5F] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={18} className="text-[#00B4D8]" />
                    </div>
                    <div>
                      <div
                        className="text-[#90E0EF] text-xs mb-1"
                        style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                      >
                        {item.label}
                      </div>
                      <div className="text-white/85 text-sm leading-relaxed" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Quote + Contact */}
            <div className={`transition-all duration-700 delay-300 ${profileVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <blockquote className="border-l-2 border-[#00B4D8] pl-6 mb-10">
                <p
                  className="text-white/80 text-lg leading-relaxed italic"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', fontStyle: 'italic' }}
                >
                  "{t("about.quote")}"
                </p>
              </blockquote>

              <div className="bg-[#1E3A5F]/50 border border-[#00B4D8]/20 rounded-sm p-6">
                <h3
                  className="text-[#00B4D8] font-bold mb-4 text-sm"
                  style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                >
                  {t("about.contact")}
                </h3>
                <div className="space-y-2 text-sm text-white/70" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
                  <p>📍 {t("about.address")}</p>
                  <p>📞 {t("about.phone")}</p>
                  <p>✉️ {t("about.email")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CEO Message */}
      <div className="bg-gradient-to-r from-[#1B5FA8] to-[#0A1628] py-16">
        <div className="container">
          <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${profileVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="ekl-section-tag text-[#00B4D8] mb-6 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-[#00B4D8]" />
              {t("about.ceoMessage")}
              <span className="w-8 h-px bg-[#00B4D8]" />
            </div>
            <blockquote className="border-l-4 border-[#00B4D8] pl-8 mb-6">
              <p
                className="text-white text-base md:text-lg leading-relaxed md:leading-relaxed italic"
                style={i18n.language === 'ko' ? { fontFamily: 'Noto Sans KR, sans-serif', fontStyle: 'italic', wordSpacing: '0.05em', maxWidth: '80%', margin: '0 auto' } : i18n.language === 'en' ? { fontFamily: 'Noto Sans KR, sans-serif', fontStyle: 'italic', wordSpacing: '0.05em', maxWidth: '88%', margin: '0 auto' } : { fontFamily: 'Noto Sans KR, sans-serif', fontStyle: 'italic', wordSpacing: '0.05em', maxWidth: '95%', margin: '0 auto' }}
              >
                "{t("about.ceoQuote")}"
              </p>
            </blockquote>
            <p className="text-white/80 font-semibold text-sm md:text-base" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>{t("about.ceeName")}</p>
          </div>
        </div>
      </div>

      {/* Vision & Core Values */}
      <div className="bg-[#F8FAFC] py-20">
        <div className="container">
          <div ref={valuesRef} className="text-center mb-14">
            <div
              className={`ekl-section-tag text-[#1B5FA8] mb-4 flex items-center justify-center gap-3 transition-all duration-700 ${valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <span className="w-8 h-px bg-[#1B5FA8]" />
              {t("about.vision")}
              <span className="w-8 h-px bg-[#1B5FA8]" />
            </div>
            <h2
              className={`ekl-heading text-[#0A1628] transition-all duration-700 delay-100 ${valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              {t("about.visionTitle")}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {coreValues.map((val, i) => (
              <div
                key={i}
                className={`ekl-card-hover bg-white border border-gray-100 rounded-sm p-8 shadow-sm transition-all duration-700 ${valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 120 + 200}ms` }}
              >
                <div className="w-12 h-12 rounded-sm bg-gradient-to-br from-[#1B5FA8] to-[#00B4D8] flex items-center justify-center mb-6">
                  {i === 0 && <Globe size={22} className="text-white" />}
                  {i === 1 && <Cpu size={22} className="text-white" />}
                  {i === 2 && <Users size={22} className="text-white" />}
                </div>
                <h3
                  className="ekl-heading text-[#0A1628] text-lg mb-3"
                  style={{ fontSize: "1.1rem" }}
                >
                  {val.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Timeline */}
      <div className="bg-[#0D1F3C] py-20">
        <div className="container">
          <div ref={timelineRef}>
            <div className="text-center mb-14">
              <div
                className={`ekl-section-tag text-[#00B4D8] mb-4 flex items-center justify-center gap-3 transition-all duration-700 ${timelineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <span className="w-8 h-px bg-[#00B4D8]" />
                {t("about.history")}
                <span className="w-8 h-px bg-[#00B4D8]" />
              </div>
              <h2
                className={`ekl-heading text-white transition-all duration-700 delay-100 ${timelineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
              >
                {t("about.historyTitle")}
              </h2>
            </div>

            {/* Timeline Container */}
            <div className="relative">
              {/* Vertical line - desktop only (center) */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00B4D8]/50 via-[#1B5FA8]/30 to-transparent hidden md:block transform -translate-x-1/2" />
              
              {/* Vertical line - mobile only (left-aligned) */}
              <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-[#00B4D8]/50 via-[#1B5FA8]/30 to-transparent md:hidden" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className={`relative transition-all duration-700 ${timelineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    style={{ transitionDelay: `${i * 120 + 200}ms` }}
                  >
                    {/* Desktop Layout */}
                    <div className="hidden md:flex md:items-center md:gap-6">
                      {/* Left Card (even items) */}
                      <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "opacity-0"}`}>
                        {i % 2 === 0 && (
                          <div className="bg-[#1E3A5F]/60 border border-[#00B4D8]/20 rounded-sm p-5 inline-block max-w-xs">
                            <h4 className="ekl-heading text-white text-base mb-1">{item.title}</h4>
                            <p className="text-white/60 text-sm" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>{item.desc}</p>
                          </div>
                        )}
                      </div>

                      {/* Center Marker */}
                      <div className="flex-shrink-0 flex justify-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1B5FA8] to-[#00B4D8] flex items-center justify-center z-10 animate-pulse-glow relative">
                          <span
                            className="text-white font-black text-xs"
                            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                          >
                            {item.year}
                          </span>
                        </div>
                      </div>

                      {/* Right Card (odd items) */}
                      <div className={`flex-1 ${i % 2 !== 0 ? "" : "opacity-0"}`}>
                        {i % 2 !== 0 && (
                          <div className="bg-[#1E3A5F]/60 border border-[#00B4D8]/20 rounded-sm p-5 inline-block max-w-xs">
                            <h4 className="ekl-heading text-white text-base mb-1">{item.title}</h4>
                            <p className="text-white/60 text-sm" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>{item.desc}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden flex gap-4">
                      {/* Year Marker */}
                      <div className="flex-shrink-0 flex justify-center pt-1">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1B5FA8] to-[#00B4D8] flex items-center justify-center z-10 animate-pulse-glow relative">
                          <span
                            className="text-white font-black text-xs"
                            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                          >
                            {item.year}
                          </span>
                        </div>
                      </div>

                      {/* Card */}
                      <div className="flex-1 pt-1">
                        <div className="bg-[#1E3A5F]/60 border border-[#00B4D8]/20 rounded-sm p-4">
                          <h4 className="ekl-heading text-white text-base mb-1">{item.title}</h4>
                          <p className="text-white/60 text-sm" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
