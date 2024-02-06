import CtaBanner from "../../components/CtaBanner/CtaBanner";
import FAQ from "../../components/FAQ/FAQ";
import Hero from "../../components/Hero/Hero";
import Service from "../../components/Service/Service";
import Testimonial from "../../components/Testimonials/Testimonial";
import WhyUs from "../../components/WhyUs/WhyUs";

const Home = () => {
  return (
    <>
      <Hero />
      <Service />
      <WhyUs />
      <Testimonial />
      <FAQ />
      <CtaBanner />
    </>
  );
};

export default Home;
