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
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                className="d-flex justify-content-center align-items-center"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                className="d-flex justify-content-center align-items-center"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-mail"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              <a
                className="d-flex justify-content-center align-items-center"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-twitch"
                >
                  <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="copyright col-lg-3 col-md-6 mt-2">
            <p>Copyright Binar 2022</p>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
