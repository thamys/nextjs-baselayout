import React from "react";
import DropUserConfigsTemplate from "./template";
import { options } from "./data";

const DropUserConfigs = () => {
  return <DropUserConfigsTemplate configs={options} />;
};

export default DropUserConfigs;
