import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/home/logo.png";
import desktop from "../../assets/images/home/desktop.png";

export const AuthLayout = (props) => {
  const { children, title, type } = props;

  return (
    <div className="login">
      <div className="col d-flex justify-content-center align-items-center">
        <div>
          <div className="mb-4">
            <div className="w-100 mb-3">
              <img src={logo} alt="Logo" />
            </div>
            <h3>{title}</h3>
          </div>
          {children}
          <div className="have-account mt-3 d-flex gap-2 justify-content-center">
            <p>
              {" "}
              {type === "login"
                ? "Don’t have an account?"
                : "Do you have an account?"}
            </p>
            {type === "login" && (
              <Link to="/register" className="text-decoration-none">
                Sign Up for free
              </Link>
            )}
            {type === "register" && (
              <Link to="/login" className="text-decoration-none">
                Sign In for free
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="bg-images col d-none d-xl-block">
        <div className="images">
          <img src={desktop} alt="Landing-page-Desktop" />
        </div>
      </div>
    </div>
  );
};
