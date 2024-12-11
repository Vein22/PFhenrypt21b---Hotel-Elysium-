import React from "react";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import FeatureSection from "../FeatureSection/FeatureSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import SwiperComponent from "../Rooms/CarouselComponent";
const HomeContainer = () => {
  return (
    <div>

      <HeroSection />
      <SwiperComponent/>
      <FeatureSection />
      <ServicesSection />
      <Testimonials />

    </div>
  );
};

export default HomeContainer;
