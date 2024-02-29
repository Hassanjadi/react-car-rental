import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../../style/auth.css";
import axios from "axios";

interface Register {
  username: string;
  email: string;
  password: string;
}

const Register = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState<Register>({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (event: { target: { value: any; name: any } }) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleRegister = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    let { username, email, password } = input;
    // console.log(input)

    axios
      .post("http://localhost:3000/api/v1/register", {
        username,
        email,
        password,
      })
      .then((res) => {
        // console.log(res);
        let data = res.data;
        Cookies.set("token", data.token, { expires: 1 });
        navigate("/login");
      })

      .catch((error) => {
        // console.log(error)
        alert(error.message);
      });
  };
  return (
    <div className="signup">
      <div className="col d-flex justify-content-center align-items-center">
        <div>
          <div className="mb-3">
            <div className="w-100 mb-3">
              <img src="https://i.ibb.co/M2f3jKv/Group-43.png" alt="Logo" />
            </div>
            <h2>Sign Up</h2>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                value={input.username}
                onChange={handleInput}
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
                value={input.email}
                onChange={handleInput}
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
                value={input.password}
                onChange={handleInput}
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
          <img
            src="https://i.ibb.co/wh9JWZm/Landing-page-Desktop.png"
            alt="Landing-page-Desktop"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
