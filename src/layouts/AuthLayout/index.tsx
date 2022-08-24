import React from "react";
import { Col, Layout, Row, Space } from "antd";
import styles from "./styles.module.css";
import Image from "next/image";

const { Sider, Content } = Layout;
const AuthLayout = ({ children }) => {
  return (
    <Layout>
      <Sider className={styles.sider} width={"50%"} />
      <Content className={styles.content}>
        <Row align="middle" justify="center" gutter={24} className={styles.row}>
          <Col span={24}>
            <Space direction="vertical" className={styles.space}>
              <Image src={"/vercel.svg"} width={"180px"} height={"60px"} />
              {children}
            </Space>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default AuthLayout;
