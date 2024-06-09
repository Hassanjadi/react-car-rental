import React from "react";
import { Link } from "react-router-dom";
import { FormLogin } from "../Fragment/FormLogin";
import logo from "../../assets/images/home/logo.png";
import desktop from "../../assets/images/home/desktop.png";

export const AuthLayout = () => {
  return (
    <div className="login">
      <div className="col d-flex justify-content-center align-items-center">
        <div>
          <div className="mb-4">
            <div className="w-100 mb-3">
              <img src={logo} alt="Logo" />
            </div>
            <h3>Welcome Back?</h3>
          </div>
          <FormLogin />
          <div className="have-account mt-3 d-flex gap-2 justify-content-center">
            <p>Don’t have an account?</p>
            <Link to="/register" className="text-decoration-none">
              Sign Up for free
            </Link>
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
