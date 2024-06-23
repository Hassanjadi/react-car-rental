import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import logo from "../../assets/images/home/logo.png";

export const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });

      console.log("Current Section: ", currentSection); // Debug log
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className="header fixed-top">
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logos" />
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
                    className={`nav-link ${
                      activeLink === "service" ? "active" : ""
                    }`}
                    aria-current="page"
                    href="#service"
                  >
                    Our Service
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeLink === "whyus" ? "active" : ""
                    }`}
                    href="#whyus"
                  >
                    Why Us
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className={`nav-link ${
                      activeLink === "testimonial" ? "active" : ""
                    }`}
                    href="#testimonial"
                  >
                    Testimonial
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a
                    className={`nav-link ${
                      activeLink === "faq" ? "active" : ""
                    }`}
                    href="#faq"
                  >
                    FAQ
                  </a>
                </li>
                <li className="auth d-flex gap-3">
                  <Link
                    to="/login"
                    className="register text-decoration-none"
                    type="submit"
                  >
                    Login
                  </Link>
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
