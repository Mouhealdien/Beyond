import { Container } from "@/components/global/Container";
import Footer from "@/components/global/Footer";
import ContactSection from "@/components/global/contact/ContactSection";
import Hero from "@/components/global/hero";
import Filter from "@/components/our works/Filter";
import Image from "next/image";
import React, { useState } from "react";
import work from "../../../public/assets/works.png";

import Projects from "@/components/our works/Projects";
import OurWorksSection from "@/components/our works/OurWorksSection";
const page = () => {
  const HeroSvg = (
    <svg
      className=" m-auto absolute right-0 left-0 top-0 bottom-0 w-auto lg:w-[850px]"
      viewBox="0 0 907 501"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.2"
        d="M197.355 25.3273L328.14 265.495L605.469 243.407L696.537 0L907 78.6816L765.857 455.99L200.596 501L0 132.772L197.355 25.3273Z"
        fill="#C7C8D5"
      />
    </svg>
  );
  return (
    <div>
      <Container customeStyle="bg-primary">
        <Hero svg={HeroSvg} title={"What we did at Beyond"} />
      </Container>
      <OurWorksSection customHeaderStyle="text-3xl  text-[#444545]  pt-10" />
      <ContactSection />

      <Footer />
    </div>
  );
};

export default page;
