import React from "react";
import { Faq } from "../Fragment/Faq";
import { Hero } from "../Fragment/Hero";
import { Footer } from "../Fragment/Footer";
import { Service } from "../Fragment/Service";
import { CtaBanner } from "../Fragment/CtaBanner";
import { Testimonial } from "../Fragment/Testimonial";
import { NavigationBar } from "../Fragment/NavigationBar";

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
