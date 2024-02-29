import CtaBanner from "../../components/client/CtaBanner";
import Testimonial from "../../components/client/Testimonial";
import Service from "../../components/client/Service";
import WhyUs from "../../components/client/WhyUs";
import Hero from "../../components/client/Hero";
import FAQ from "../../components/client/FAQ";
import "../../style/home.css";

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
