import React from "react";
import { useAppDispatch } from "@store/index";
import ExamplesFormTemplate from "./template";

const ExamplesForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const onSaveForm = (values) => {
    console.log(values);
  }

  const onFailForm = (values) => {
    console.log(values);
  }

  return <ExamplesFormTemplate onFinish={onSaveForm} onFinishFailed={onFailForm} />;
};

export default ExamplesForm;
