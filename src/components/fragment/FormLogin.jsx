import React from "react";
import { Button } from "../Element/Button";
import { InputForm } from "../Element/Input/Index";

export const FormLogin = () => {
  const handleLogin = () => {
    event.preventDefault();

    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/";
  };
  return (
    <form className="d-flex flex-column gap-3" onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="Contoh: johndee@gmail.com"
      />
      <InputForm
        label="Password"
        type="text"
        name="password"
        placeholder="6+ Karakter"
      />
      <Button classname="btn-login" type="submit">
        Login
      </Button>
    </form>
  );
};
