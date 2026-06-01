/**
 * E-KEI LOGISTICS Network Section
 * Design: Industrial Maritime Precision
 * - Global network visualization
 * - Region cards with location pins
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function NetworkSection() {
  const { t } = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const regions = t("network.regions", { returnObjects: true }) as any[];
  const features = t("network.features", { returnObjects: true }) as string[];

  return (
    <section id="network" className="bg-[#F8FAFC] py-20">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="mb-14">
          <div
            className={`ekl-section-tag text-[#1B5FA8] mb-4 flex items-center gap-3 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="w-8 h-px bg-[#1B5FA8]" />
            {t("network.tag")}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 items-end">
            <h2
              className={`ekl-heading text-[#0A1628] transition-all duration-700 delay-100 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              {t("network.title")}
            </h2>
            <div
              className={`transition-all duration-700 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              {features.map((feat, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <MapPin size={14} className="text-[#00B4D8] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
                    {feat}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Region cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {regions.map((region, i) => (
            <div
              key={i}
              className={`ekl-card-hover bg-white border border-gray-100 rounded-sm p-4 md:p-6 transition-all duration-700 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="text-xl md:text-2xl">🌍</span>
                <h3
                  className="ekl-heading text-[#0A1628] text-sm md:text-base"
                  style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)" }}
                >
                  {region.name}
                </h3>
              </div>
              <div className="space-y-1.5 md:space-y-2">
                {region.cities.map((city: string, j: number) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#00B4D8] flex-shrink-0" />
                    <p className="text-gray-600 text-xs md:text-sm" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
                      {city}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
