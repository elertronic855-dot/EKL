/**
 * E-KEI LOGISTICS - Main Home Page
 * Design: Industrial Maritime Precision
 * All sections assembled in order
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import NetworkSection from "@/components/sections/NetworkSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <NetworkSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
