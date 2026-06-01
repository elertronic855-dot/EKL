/**
 * E-KEI LOGISTICS Contact Section
 * Design: Industrial Maritime Precision
 * - Contact form + info cards
 * - Dark navy background
 */

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const contacts = t("contact.departments", { returnObjects: true }) as any[];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#0A1628] py-20">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <div
            className={`ekl-section-tag text-[#00B4D8] mb-4 flex items-center justify-center gap-3 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="w-8 h-px bg-[#00B4D8]" />
            {t("contact.tag")}
            <span className="w-8 h-px bg-[#00B4D8]" />
          </div>
          <h2
            className={`ekl-heading text-white transition-all duration-700 delay-100 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            {t("contact.title")}
          </h2>
          <p
            className={`text-white/50 text-sm mt-3 transition-all duration-700 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
          >
            {t("contact.description")}
          </p>
        </div>

        <div ref={contentRef} className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
          {/* Left: Contact info */}
          <div className="md:col-span-3 lg:col-span-2 space-y-4 md:space-y-6">
            {/* Company info */}
            <div
              className={`transition-all duration-700 ${contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div className="bg-[#1E3A5F]/50 border border-[#00B4D8]/20 rounded-sm p-4 md:p-6 mb-4 md:mb-6">
                <h3
                  className="ekl-heading text-white text-sm md:text-base mb-3 md:mb-4"
                  style={{ fontSize: "clamp(0.95rem, 2vw, 1rem)" }}
                >
                  {t("contact.company")}
                </h3>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex gap-2 md:gap-3">
                    <MapPin size={14} className="text-[#00B4D8] flex-shrink-0 mt-0.5 md:w-4 md:h-4" />
                    <p className="text-white/60 text-xs md:text-sm" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
                      {t("contact.address")}
                    </p>
                  </div>
                  <div className="flex gap-2 md:gap-3">
                    <Phone size={14} className="text-[#00B4D8] flex-shrink-0 mt-0.5 md:w-4 md:h-4" />
                    <div>
                      <p className="text-white/60 text-xs md:text-sm" style={{ fontFamily: 'Barlow, sans-serif' }}>
                        {t("contact.phone")}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 md:gap-3">
                    <Mail size={14} className="text-[#00B4D8] flex-shrink-0 mt-0.5 md:w-4 md:h-4" />
                    <a
                      href={`mailto:${t("contact.email")}`}
                      className="text-[#90E0EF] text-xs md:text-sm hover:text-white transition-colors"
                      style={{ fontFamily: 'Barlow, sans-serif' }}
                    >
                      {t("contact.email")}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Department contacts */}
            <div className="space-y-2 md:space-y-3">
              {contacts.map((c, i) => (
                <div
                  key={i}
                  className={`bg-[#0D1F3C] border border-[#00B4D8]/15 rounded-sm p-3 md:p-4 hover:border-[#00B4D8]/40 transition-all duration-300 ${contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  <div className="flex items-start gap-2 md:gap-3">
                    <span className="text-lg md:text-xl flex-shrink-0">
                      {i === 0 && "✈️"}
                      {i === 1 && "🚢"}
                      {i === 2 && "🏢"}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-[#00B4D8] text-xs font-bold"
                          style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                        >
                          {c.dept}
                        </span>
                      </div>
                      <p className="text-white text-xs md:text-sm font-medium mb-1 truncate" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
                        {c.name}
                      </p>
                      <p className="text-white/50 text-xs" style={{ fontFamily: 'Barlow, sans-serif' }}>
                        {c.phone}
                      </p>
                      <a
                        href={`mailto:${c.email}`}
                        className="text-[#90E0EF] text-xs hover:text-white transition-colors break-all"
                        style={{ fontFamily: 'Barlow, sans-serif' }}
                      >
                        {c.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact form */}
          <div
            className={`md:col-span-3 lg:col-span-3 transition-all duration-700 delay-300 ${contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="bg-[#0D1F3C] border border-[#00B4D8]/15 rounded-sm p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 md:py-16 text-center">
                  <CheckCircle size={40} className="text-[#00B4D8] mb-3 md:mb-4 md:w-12 md:h-12" />
                  <h3 className="ekl-heading text-white text-lg md:text-xl mb-2">{t("contact.form.success")}</h3>
                  <p className="text-white/60 text-xs md:text-sm" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
                    빠른 시일 내에 담당자가 연락드리겠습니다.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                  <div className="grid sm:grid-cols-2 gap-3 md:gap-5">
                    <div>
                      <label
                        className="block text-[#90E0EF] text-xs mb-2"
                        style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                      >
                        {t("contact.form.name")} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-[#1E3A5F]/50 border border-[#00B4D8]/20 rounded-sm px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#00B4D8]/60 transition-colors"
                        placeholder="John Doe"
                        style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-[#90E0EF] text-xs mb-2"
                        style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                      >
                        {t("contact.form.company")} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="w-full bg-[#1E3A5F]/50 border border-[#00B4D8]/20 rounded-sm px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#00B4D8]/60 transition-colors"
                        placeholder="Company Name"
                        style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-[#90E0EF] text-xs mb-2"
                        style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                      >
                        {t("contact.form.email")} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-[#1E3A5F]/50 border border-[#00B4D8]/20 rounded-sm px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#00B4D8]/60 transition-colors"
                        placeholder="example@company.com"
                        style={{ fontFamily: 'Barlow, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-[#90E0EF] text-xs mb-2"
                        style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                      >
                        {t("contact.form.phone")}
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-[#1E3A5F]/50 border border-[#00B4D8]/20 rounded-sm px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#00B4D8]/60 transition-colors"
                        placeholder="+1-555-0000"
                        style={{ fontFamily: 'Barlow, sans-serif' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-[#90E0EF] text-xs mb-2"
                      style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                    >
                      {t("contact.form.service")}
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full bg-[#1E3A5F]/50 border border-[#00B4D8]/20 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00B4D8]/60 transition-colors"
                      style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
                    >
                      <option value="" className="bg-[#0A1628]">{t("contact.form.selectService")}</option>
                      <option value="air" className="bg-[#0A1628]">{t("contact.form.air")}</option>
                      <option value="sea" className="bg-[#0A1628]">{t("contact.form.sea")}</option>
                      <option value="truck" className="bg-[#0A1628]">{t("contact.form.truck")}</option>
                      <option value="warehouse" className="bg-[#0A1628]">{t("contact.form.warehouse")}</option>
                      <option value="all" className="bg-[#0A1628]">All Services</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-[#90E0EF] text-xs mb-2"
                      style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                    >
                      {t("contact.form.message")} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-[#1E3A5F]/50 border border-[#00B4D8]/20 rounded-sm px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#00B4D8]/60 transition-colors resize-none"
                      placeholder="Cargo type, origin, destination, estimated volume, etc."
                      style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="ekl-btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Send size={15} />
                    {t("contact.form.submit")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
