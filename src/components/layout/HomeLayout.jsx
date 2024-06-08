import React from "react";
import { Faq } from "../fragment/Faq";
import { Hero } from "../fragment/Hero";
import { Footer } from "../fragment/Footer";
import { Service } from "../fragment/Service";
import { CtaBanner } from "../fragment/CtaBanner";
import { Testimonial } from "../fragment/Testimonial";
import { NavigationBar } from "../fragment/NavigationBar";

export const HomeLayout = () => {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Service />
      <Testimonial />
      <Faq />
      <CtaBanner />
      <Footer />
    </>
  );
};
