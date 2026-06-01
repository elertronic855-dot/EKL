/**
 * E-KEI LOGISTICS Clients Section
 * Design: Industrial Maritime Precision
 * - Client logos grid
 * - Semiconductor/tech industry focus
 * - Multilingual support (KR/EN)
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";

export default function ClientsSection() {
  const { t } = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  // Get clients data from translation
  const clients = t("clients.companies", { returnObjects: true }) as Array<{
    name: string;
    category: string;
  }>;

  return (
    <section id="clients" className="bg-white py-20">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <div
            className={`ekl-section-tag text-[#1B5FA8] mb-4 flex items-center justify-center gap-3 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="w-8 h-px bg-[#1B5FA8]" />
            {t("clients.tag")}
            <span className="w-8 h-px bg-[#1B5FA8]" />
          </div>
          <h2
            className={`ekl-heading text-[#0A1628] transition-all duration-700 delay-100 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            {t("clients.title")}
          </h2>
          <p
            className={`text-gray-500 text-sm mt-3 max-w-xl mx-auto transition-all duration-700 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
          >
            {t("clients.description")}
          </p>
        </div>

        {/* Clients grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4"
        >
          {Array.isArray(clients) && clients.map((client, i) => (
            <div
              key={i}
              className={`group bg-[#F8FAFC] border border-gray-100 rounded-sm p-3 md:p-5 flex flex-col items-center justify-center text-center hover:bg-[#0A1628] hover:border-[#00B4D8]/30 transition-all duration-300 cursor-default ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${(i % 8) * 50}ms`, minHeight: "70px" }}
            >
              <div
                className="font-bold text-[#0A1628] group-hover:text-white transition-colors text-xs md:text-sm mb-1"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}
              >
                {client.name}
              </div>
              <div
                className="text-gray-400 group-hover:text-[#90E0EF] transition-colors text-xs"
                style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
              >
                {client.category}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div
          className={`mt-10 md:mt-14 bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-sm p-6 md:p-8 text-center transition-all duration-700 delay-300 ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="text-white/80 text-sm md:text-lg italic"
            style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.02em' }}
          >
            "{t("clients.quote")}"
          </p>
          <div className="w-16 h-0.5 bg-[#00B4D8] mx-auto mt-4" />
        </div>
      </div>
    </section>
  );
}
