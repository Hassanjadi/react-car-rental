import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      id="header"
      className="header fixed-top"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <motion.img
              src={logo}
              alt="Logos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
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
                {["service", "whyus", "testimonial", "faq"].map((section) => (
                  <motion.li
                    key={section}
                    className="nav-item me-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <a
                      className={`nav-link ${
                        activeLink === section ? "active" : ""
                      }`}
                      aria-current="page"
                      href={`#${section}`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  className="auth d-flex gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
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
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
