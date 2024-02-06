import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavbarClient/Navbar";

const LayoutClient = (props: { children: any }) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default LayoutClient;
