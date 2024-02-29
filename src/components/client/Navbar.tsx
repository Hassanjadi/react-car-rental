import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header id="header" className="header fixed-top">
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="https://i.ibb.co/M2f3jKv/Group-43.png" alt="Logos" />
          </Link>
          <button
            className="navbar-toggler shadow-none border-0 p-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span>
              <FeatherIcon icon="menu" size="20" />
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

            <div className="offcanvas-body py-0">
              <ul className="navbar-nav justify-content-end flex-grow-1">
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
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="register text-decoration-none"
                    type="submit"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/register"
                    className="register text-decoration-none"
                    type="submit"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
