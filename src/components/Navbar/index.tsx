import React from "react";
import type { MenuProps } from "antd";
import Template from "./template";

const Navbar = () => {
  const items: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  return <Template items={items} />;
};

export default Navbar;
