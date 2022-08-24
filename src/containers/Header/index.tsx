import React from "react";
import TemplateHeader from "./template";

const onSearch = (value: string) => console.log(value);

const Header: React.FC = () => {
  return <TemplateHeader onSearch={onSearch} />;
};

export default Header;
