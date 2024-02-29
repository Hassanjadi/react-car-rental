import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../../style/auth.css";
import axios from "axios";

interface Login {
  email: string;
  password: string;
}

const Login = () => {
  let navigate = useNavigate();

  const [input, setInput] = useState<Login>({
    email: "",
    password: "",
  });

  const handleInput = (event: { target: { value: any; name: any } }) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleLogin = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    let { email, password } = input;
    // console.log(input)

    axios
      .post("https://dev-example.sanbercloud.com/api/login", {
        email,
        password,
      })
      .then((res) => {
        // console.log(res);
        let data = res.data;
        Cookies.set("token", data.token, { expires: 1 });
        navigate("/");
      })

      .catch((error) => {
        // console.log(error)
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="col d-flex justify-content-center align-items-center">
        <div>
          <div className="mb-3">
            <div className="w-100 mb-3">
              <img src="https://i.ibb.co/M2f3jKv/Group-43.png" alt="Logo" />
            </div>
            <h2>Welcome Back?</h2>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                value={input.email}
                onChange={handleInput}
                type={"text"}
                name="email"
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
                type={"password"}
                name="password"
                className="form-control"
                placeholder="8+ karakter"
              />
            </div>
            <button type={"submit"}>Submit</button>
          </form>
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
