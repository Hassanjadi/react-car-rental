import Footer from "../components/client/Footer";
import Navbar from "../components/client/Navbar";

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
