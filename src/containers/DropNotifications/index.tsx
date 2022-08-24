import React from "react";
import DropUserConfigsTemplate from "./template";
import { notifications } from "./mock";

const DropNotifications = () => {
  return <DropUserConfigsTemplate menus={notifications} />;
};

export default DropNotifications;
