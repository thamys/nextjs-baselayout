import React from "react";
import BreadcrumbTemplate from "./template";

const Breadcrumb = () => {
  const items = ["Home", "List", "App"];
  return <BreadcrumbTemplate items={items} />;
};

export default Breadcrumb;
