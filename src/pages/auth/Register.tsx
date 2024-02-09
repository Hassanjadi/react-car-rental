import React from "react";
import { Link } from "react-router-dom";
import "../../style/auth.css";

const Login = () => {
  return (
    <div className="signup">
      <div className="col d-flex justify-content-center align-items-center">
        <div>
          <div className="mb-3">
            <img src="" alt="Logo" />
            <h2>Sign Up</h2>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername"
                aria-describedby="usernameHelp"
                placeholder="Nama Lengkap"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Contoh: johndee@gmail.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="6+ karakter"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          <div className="have-account mt-3 d-flex gap-2 justify-content-center">
            <p>Already have an account?</p>
            <a href="/login" className="text-decoration-none">
              Sign In here
            </a>
          </div>
        </div>
      </div>

      <div className="bg-images col d-none d-xl-block">
        <div className="images">
          <img
            src="https://i.ibb.co/wh9JWZm/Landing-page-Desktop.png"
            alt="Landing-page-Desktop"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
