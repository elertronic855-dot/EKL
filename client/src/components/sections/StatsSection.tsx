/**
 * E-KEI LOGISTICS Stats Section - Professional Performance Dashboard
 * Design: Industrial Maritime Precision
 * - KPI Cards with animated counters (13,278+ / 3,330+ / 5,744T / 3,702 TEU)
 * - Performance charts (Air & Sea freight trends)
 * - Performance highlights summary
 * - Responsive design for all devices
 */

import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTranslation } from "react-i18next";

// Data for Air Freight Performance
const airData = [
  { year: "2023", export: 6405, import: 3307 },
  { year: "2024", export: 7263, import: 3998 },
  { year: "2025", export: 9085, import: 4193 },
];

// Data for Ocean Freight Performance
const seaData = [
  { year: "2023", export: 2205, import: 670 },
  { year: "2024", export: 2408, import: 755 },
  { year: "2025", export: 2555, import: 775 },
];

const COLORS = {
  export: "#00B4D8",
  import: "#1B5FA8",
};

// KPI Card Component with Counter Animation
function KPICard({ 
  target, 
  suffix = "", 
  label,
  isVisible 
}: { 
  target: number; 
  suffix?: string; 
  label: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1800;
    const startTime = Date.now();
    countRef.current = 0;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      countRef.current = Math.floor(target * eased);
      setCount(countRef.current);

      if (progress >= 1) {
        clearInterval(timer);
        setCount(target);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return (
    <div className="bg-gradient-to-br from-[#0D1F3C] to-[#0A1428] rounded-lg p-6 md:p-8 border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#00B4D8]/10">
      <div className="text-center">
        <div
          className="text-[#00B4D8] font-black mb-2"
          style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: "clamp(2rem, 6vw, 3.2rem)", lineHeight: "1" }}
        >
          {count.toLocaleString()}{suffix}
        </div>
        <div className="text-white/70 text-xs sm:text-sm font-medium" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
          {label}
        </div>
      </div>
    </div>
  );
}

// Custom Tooltip for Charts
const CustomTooltip = ({ active, payload, label }: any) => {
  const { t } = useTranslation();
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0A1628] border border-[#00B4D8]/30 rounded-sm p-3 shadow-xl">
        <p className="text-[#00B4D8] text-xs font-bold mb-2" style={{ fontFamily: 'Barlow, sans-serif' }}>{label}{t("stats.year")}</p>
        {payload.map((entry: any, i: number) => (
          <p key={i} className="text-white text-xs" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
            <span style={{ color: entry.color }}>{entry.name}</span>: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Performance Highlights Component
function PerformanceHighlights() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();
  const highlights = t("stats.highlights.items", { returnObjects: true }) as string[];

  return (
    <div 
      ref={ref}
      className={`bg-[#0D1F3C] rounded-lg p-6 md:p-8 border border-[#00B4D8]/20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <h3
        className="text-white text-base md:text-lg font-bold mb-6"
        style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '0.05em' }}
      >
        {t("stats.highlights.title")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {Array.isArray(highlights) && highlights.map((item: string, idx: number) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#00B4D8] mt-2" />
            <p className="text-white/80 text-sm" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const { t } = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: kpiRef, isVisible: kpiVisible } = useScrollAnimation();
  const { ref: chartsRef, isVisible: chartsVisible } = useScrollAnimation();

  // KPI Data - 요청하신 정확한 값
  const kpiData = [
    { target: 13278, suffix: "+", label: t("stats.kpi.airTotal") },
    { target: 3330, suffix: "+", label: t("stats.kpi.seaTotal") },
    { target: 5744, suffix: "T", label: t("stats.kpi.airWeight") },
    { target: 3702, suffix: " TEU", label: t("stats.kpi.seaVolume") },
  ];

  return (
    <section id="stats" className="bg-[#0A1428] py-20 md:py-28">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <div
            className={`ekl-section-tag text-[#00B4D8] mb-4 flex items-center justify-center gap-3 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="w-8 h-px bg-[#00B4D8]" />
            {t("stats.tag")}
            <span className="w-8 h-px bg-[#00B4D8]" />
          </div>
          <h2
            className={`ekl-heading text-white transition-all duration-700 delay-100 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            {t("stats.title")}
          </h2>
          <p
            className={`text-white/50 text-sm mt-4 transition-all duration-700 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
          >
            2023-2025 {t("stats.air")} & {t("stats.sea")} {t("stats.export")}
          </p>
        </div>

        {/* KPI Cards */}
        <div
          ref={kpiRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20 transition-all duration-700 ${kpiVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {kpiData.map((kpi, idx) => (
            <KPICard 
              key={idx}
              target={kpi.target} 
              suffix={kpi.suffix}
              label={kpi.label}
              isVisible={kpiVisible}
            />
          ))}
        </div>

        {/* Charts Section */}
        <div
          ref={chartsRef}
          className={`grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20 transition-all duration-700 delay-200 ${chartsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Air Freight Performance Chart */}
          <div className="bg-[#0D1F3C] rounded-lg p-6 md:p-8 border border-[#00B4D8]/20 shadow-lg overflow-x-auto">
            <h3
              className="text-white text-sm md:text-base mb-6 font-bold"
              style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '0.05em' }}
            >
              {t("stats.air")} {t("stats.shipments")} (2023-2025)
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={airData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1B5FA8" />
                <XAxis dataKey="year" stroke="#90E0EF" />
                <YAxis stroke="#90E0EF" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="export" 
                  stroke={COLORS.export} 
                  strokeWidth={2}
                  name={`${t("stats.export")} ${t("stats.shipments")}`}
                  dot={{ fill: COLORS.export, r: 5 }}
                  activeDot={{ r: 7 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="import" 
                  stroke={COLORS.import} 
                  strokeWidth={2}
                  name={`${t("stats.import")} ${t("stats.shipments")}`}
                  dot={{ fill: COLORS.import, r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Ocean Freight Performance Chart */}
          <div className="bg-[#0D1F3C] rounded-lg p-6 md:p-8 border border-[#00B4D8]/20 shadow-lg overflow-x-auto">
            <h3
              className="text-white text-sm md:text-base mb-6 font-bold"
              style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '0.05em' }}
            >
              {t("stats.sea")} {t("stats.shipments")} (2023-2025)
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={seaData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1B5FA8" />
                <XAxis dataKey="year" stroke="#90E0EF" />
                <YAxis stroke="#90E0EF" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="export" 
                  stroke={COLORS.export} 
                  strokeWidth={2}
                  name={`${t("stats.export")} ${t("stats.shipments")}`}
                  dot={{ fill: COLORS.export, r: 5 }}
                  activeDot={{ r: 7 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="import" 
                  stroke={COLORS.import} 
                  strokeWidth={2}
                  name={`${t("stats.import")} ${t("stats.shipments")}`}
                  dot={{ fill: COLORS.import, r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Performance Highlights */}
        <PerformanceHighlights />
      </div>
    </section>
  );
}
