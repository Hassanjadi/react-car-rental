import React from "react";
import { InputForm } from "../Element/Input/Index";

export const FormLogin = () => {
  return (
    <form className="d-flex flex-column gap-3">
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
      <button type={"submit"}>Submit</button>
    </form>
  );
};
