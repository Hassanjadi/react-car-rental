import CtaBanner from "../../components/client/CtaBanner";
import FAQ from "../../components/client/FAQ";
import Hero from "../../components/client/Hero";
import Service from "../../components/client/Service";
import Testimonial from "../../components/client/Testimonial";
import WhyUs from "../../components/client/WhyUs";

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
