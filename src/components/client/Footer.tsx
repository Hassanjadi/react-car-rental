import FeatherIcon from "feather-icons-react";
import logo from "../../assets/images/home/logo.png";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="address col-lg-3 col-md-6">
            <p>Jalan Suroyo No. 161 Badegan Kabupaten Ponorogo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="menu col-lg-3 col-md-6 d-flex flex-column gap-3 mb-3">
            <a href="#service">Our Service</a>
            <a href="#why-us">Why Us</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#service">FAQ</a>
          </div>
          <div className="account col-lg-3 col-md-6 mb-2">
            <p>Connect with us</p>
            <div className="social-media d-flex gap-2">
              <a
                className="d-flex justify-content-center align-items-center"
                href="https://www.facebook.com/"
              >
                <FeatherIcon icon="facebook" />
              </a>
              <a
                className="d-flex justify-content-center align-items-center"
                href="https://www.instagram.com/"
              >
                <FeatherIcon icon="instagram" />
              </a>
              <a
                className="d-flex justify-content-center align-items-center"
                href="https://www.mail.google.com/"
              >
                <FeatherIcon icon="mail" />
              </a>
              <a
                className="d-flex justify-content-center align-items-center"
                href="https://www.twitch.tv/"
              >
                <FeatherIcon icon="twitch" />
              </a>
            </div>
          </div>
          <div className="copyright col-lg-3 col-md-6">
            <p>Copyright Binar 2022</p>
            <div>
              <img src={logo} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
