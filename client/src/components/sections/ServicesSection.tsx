/**
 * E-KEI LOGISTICS Services Section
 * Design: Industrial Maritime Precision
 * - 4 service cards with generated images
 * - Tab-based detail view
 * - Navy/steel color scheme
 */

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Plane, Ship, Truck, Package, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const AIR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663701518332/L65PTuMiQXAQYgFxj5E8yA/air-freight-Frd6GkWRekbwrzuDyjDQtL.webp";
const SEA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663701518332/L65PTuMiQXAQYgFxj5E8yA/sea-freight-4e7NvNXAwTgJfpFa5QWXuh.webp";
const TRUCK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663701518332/L65PTuMiQXAQYgFxj5E8yA/inland-truck-ekrcZu5yKBspRNTad4r4fN.webp";
const WH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663701518332/L65PTuMiQXAQYgFxj5E8yA/warehouse-QCDBULSDexDCymN9uDanSM.webp";

export default function ServicesSection() {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState("air");
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: detailRef, isVisible: detailVisible } = useScrollAnimation();

  const services = [
    {
      id: "air",
      icon: Plane,
      label: t("services.air.label"),
      title: t("services.air.title"),
      image: AIR_IMG,
      summary: t("services.air.summary"),
      features: t("services.air.features", { returnObjects: true }) as any[],
    },
    {
      id: "sea",
      icon: Ship,
      label: t("services.sea.label"),
      title: t("services.sea.title"),
      image: SEA_IMG,
      summary: t("services.sea.summary"),
      features: t("services.sea.features", { returnObjects: true }) as any[],
    },
    {
      id: "truck",
      icon: Truck,
      label: t("services.truck.label"),
      title: t("services.truck.title"),
      image: TRUCK_IMG,
      summary: t("services.truck.summary"),
      features: t("services.truck.features", { returnObjects: true }) as any[],
    },
    {
      id: "warehouse",
      icon: Package,
      label: t("services.warehouse.label"),
      title: t("services.warehouse.title"),
      image: WH_IMG,
      summary: t("services.warehouse.summary"),
      features: t("services.warehouse.features", { returnObjects: true }) as any[],
    },
  ];

  const activeServiceData = services.find((s) => s.id === activeService)!;

  return (
    <section id="services" className="bg-white py-20">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <div
            className={`ekl-section-tag text-[#1B5FA8] mb-4 flex items-center justify-center gap-3 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="w-8 h-px bg-[#1B5FA8]" />
            {t("services.tag")}
            <span className="w-8 h-px bg-[#1B5FA8]" />
          </div>
          <h2
            className={`ekl-heading text-[#0A1628] transition-all duration-700 delay-100 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            {t("services.title")}
          </h2>
        </div>

        {/* Service cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-16"
        >
          {services.map((service, i) => {
            const isActive = service.id === activeService;
            return (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`ekl-card-hover group relative overflow-hidden rounded-sm transition-all duration-300 h-40 sm:h-48 md:h-64 ${
                  cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-[#0A1628]/60 to-transparent" />

                <div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <service.icon size={24} className="text-[#00B4D8] md:w-7 md:h-7" />
                    {isActive && (
                      <div className="w-2 h-2 bg-[#00B4D8] rounded-full" />
                    )}
                  </div>

                  <div className="text-left">
                    <div
                      className="text-[#90E0EF] text-xs mb-1 md:mb-2 font-bold"
                      style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                    >
                      {service.label}
                    </div>
                    <h3
                      className="ekl-heading text-white text-sm md:text-lg"
                      style={{ fontSize: "clamp(0.9rem, 2vw, 1.2rem)" }}
                    >
                      {service.title}
                    </h3>
                  </div>
                </div>

                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00B4D8] to-transparent" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detail view */}
        <div
          ref={detailRef}
          className={`bg-[#F8FAFC] rounded-sm p-6 md:p-10 transition-all duration-700 ${
            detailVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12 items-start md:items-center">
            {/* Left: Image */}
            <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-sm overflow-hidden">
              <img
                src={activeServiceData.image}
                alt={activeServiceData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/40 to-transparent" />
            </div>

            {/* Right: Content */}
            <div className="w-full">
              <div
                className="text-[#00B4D8] text-xs font-bold mb-3"
                style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                {activeServiceData.label}
              </div>
              <h3
                className="ekl-heading text-[#0A1628] mb-4"
                style={{ fontSize: "clamp(1.3rem, 3vw, 2.2rem)" }}
              >
                {activeServiceData.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 leading-relaxed" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
                {activeServiceData.summary}
              </p>

              {/* Features list */}
              <div className="space-y-3 md:space-y-4">
                {activeServiceData.features.map((feature, i) => (
                  <div key={i} className="flex gap-3 md:gap-4">
                    <ChevronRight size={16} className="text-[#00B4D8] flex-shrink-0 mt-0.5 md:w-5 md:h-5" />
                    <div className="min-w-0">
                      <h4 className="ekl-heading text-[#0A1628] text-xs md:text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-xs md:text-sm" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
                        {feature.desc}
                      </p>
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
