import React from "react";
import "../style/auth.css";
import { AuthLayout } from "../components/Layout/AuthLayout";
import { FormLogin } from "../components/Fragment/FormLogin";

export const Login = () => {
  return (
    <AuthLayout type="login" title="Welcome Back?">
      <FormLogin />
    </AuthLayout>
  );
};
