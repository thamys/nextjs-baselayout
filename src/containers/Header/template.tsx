import React from "react";
import { Layout, Input, Row, Col, Space } from "antd";
import styles from "./styles.module.css";
import DropNotifications from "@containers/DropNotifications";
import DropUserConfigs from "@containers/DropUserConfigs";
import Image from "next/image";

const { Header } = Layout;
const { Search } = Input;

const TemplateHeader = ({ onSearch }) => {
  return (
    <Header className={styles.headerCabecalho}>
      <Row justify="space-between" align="middle">
        <Col className={styles.alignCenterVertical}>
          <Search placeholder="Pesquisa" onSearch={onSearch} />
        </Col>
        <Col className={styles.alignCenterVertical}>
          <Image src={"/vercel.svg"} width={"120px"} height={"48px"} />
        </Col>
        <Col>
          <Space>
            <DropNotifications />
            <DropUserConfigs />
          </Space>
        </Col>
      </Row>
      {/* // </Space> */}
    </Header>
  );
};

export default TemplateHeader;
