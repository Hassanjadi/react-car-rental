import "../../style/landingPage.css";

const Navbar = () => {
  return (
    <>
      <header id="header" className="header fixed-top">
        <nav className="navbar navbar-expand-lg bg-transparent">
          <div className="container">
            <a className="navbar-brand" href="#hero"></a>
            <button
              className="navbar-toggler shadow-none border-0 p-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span>
                <i data-feather="menu"></i>
              </span>
            </button>

            <div
              className="sidebar offcanvas offcanvas-end"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  BCR
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <div className="offcanvas-body d-flex align-items-center py-0">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#service"
                    >
                      Our Service
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#why-us">
                      Why Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimonial">
                      Testimonial
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#faq">
                      FAQ
                    </a>
                  </li>
                </ul>
                <button className="register" type="submit">
                  Register
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
