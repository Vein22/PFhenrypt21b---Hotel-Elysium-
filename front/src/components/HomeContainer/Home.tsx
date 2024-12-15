import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import FeatureSection from "../FeatureSection/FeatureSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import Testimonials from "../Testimonials/Testimonials";
const HomeContainer = () => {
  return (
    <div>

      <HeroSection />
      <FeatureSection />
      <ServicesSection />
      <Testimonials />

    </div>
  );
};

export default HomeContainer;
