import React from "react";
import "../style/auth.css";
import { AuthLayout } from "../components/Layout/AuthLayout";
import { FormRegister } from "../components/Fragment/FormRegister";

export const Register = () => {
  return (
    <AuthLayout type="register" title="Sign Up">
      <FormRegister />
    </AuthLayout>
  );
};
