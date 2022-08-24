import React from "react";
import { Table } from "antd";
import { columns } from "./consts";

const ExamplesTableTemplate = ({ data }) => {
  return <Table columns={columns} dataSource={data} />;
};

export default ExamplesTableTemplate;
