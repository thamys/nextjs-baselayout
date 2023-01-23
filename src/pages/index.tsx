import React from "react";
import FormLogin from "@containers/FormLogin";
import AuthLayout from "@layouts/AuthLayout";

const AuthPage = () => {
  return (
    <AuthLayout>
      <FormLogin/>
    </AuthLayout>
  );
};

export default AuthPage;
