import React from "react";
import { useAppDispatch } from "@store/index";
import { postLoginAction } from "@store/ducks/auth";
import FormLoginTemplate from "./template";
import { useRouter } from "next/router";

const FormLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onLogin = (values) => {
    dispatch(postLoginAction(values));
    router.push("/dashboard");
  };

  return <FormLoginTemplate onLogin={onLogin} />;
};

export default FormLogin;
