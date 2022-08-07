import React from "react";
import { Breadcrumb } from "antd";

const BreadcrumbTemplate = ({ items }) => {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {items.map((item) => (
        <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadcrumbTemplate;
