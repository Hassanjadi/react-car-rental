import React from "react";
import { InputForm } from "../Element/Input/Index";

export const FormRegister = () => {
  return (
    <form className="d-flex flex-column gap-3">
      <InputForm
        label="Name"
        type="text"
        name="name"
        placeholder="Nama Lengkap"
      />
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="Contoh: johndee@gmail.com"
      />
      <InputForm
        label="Create Password"
        type="text"
        name="password"
        placeholder="6+ Karakter"
      />
      <button type={"submit"}>Submit</button>
    </form>
  );
};
