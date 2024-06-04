import "../../style/auth.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/home/logo.png";
import desktop from "../../assets/images/home/desktop.png";

const Register = () => {
  return (
    <div className="signup">
      <div className="col d-flex justify-content-center align-items-center">
        <div>
          <div className="mb-3">
            <div className="w-100 mb-3">
              <img src={logo} alt="Logo" />
            </div>
            <h2>Sign Up</h2>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Nama Lengkap"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Contoh: johndee@gmail.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="8+ karakter"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          <div className="have-account mt-3 d-flex gap-2 justify-content-center">
            <p>Already have an account?</p>
            <Link to="/login" className="text-decoration-none">
              Sign In here
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

export default Register;
