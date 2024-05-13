import { Container } from "@/components/global/Container";
import Footer from "@/components/global/Footer";
import SocialMedia from "@/components/global/SocialMedia";
import ContactForm from "@/components/global/contact/ContactForm";
import ContactSection from "@/components/global/contact/ContactSection";
import EyeSvg from "@/components/global/contact/EyeSvg";
import HeroSection from "@/components/global/HeroText";
import Navbar from "@/components/global/navbar";
import Achievements from "@/components/home/Achievements";
import NumbersCard from "@/components/home/NumbersCard";
import NumbersSvg from "@/components/home/NumbersSvg";
import OurClients from "@/components/home/OurClients";
import QutationSvg from "@/components/home/QutationSvg";
import Testimonials from "@/components/home/Testimonials";
import Filter from "@/components/our works/Filter";
import Projects from "@/components/our works/Projects";
import Image from "next/image";
import HeroText from "@/components/global/HeroText";
import NumbersSection from "@/components/home/NumbersSection";
import MiddelHeroSection from "@/components/home/MiddelHeroSection";
import HomeHero from "@/components/home/HomeHero";
import OurWorksSection from "@/components/our works/OurWorksSection";
import OurServicesSection from "@/components/home/OurServicesSection";
export default function Home() {


  return (
    <div>
      <HomeHero />

      <NumbersSection />

      <OurServicesSection/>

      <div className="bg-[#E9EAFF] pt-8">
        <OurWorksSection customHeaderStyle="text-4xl md:text-6xl w-48  md:w-80 text-black font-bold  pt-10" />
      </div>

      <MiddelHeroSection />
      <OurClients />

      <Testimonials />

      <Achievements />
      <ContactSection />

      <Footer />
    </div>
  );
}
