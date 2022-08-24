import React from "react";
import { Breadcrumb, Button, Col, Row, Space, Typography } from "antd";
import { InfoCircleOutlined, PlusOutlined } from "@ant-design/icons";
import UserLayout from "../../layouts/UserLayout";
import ExamplesTable from "../../containers/ExamplesTable";
import styles from "./styles.module.css";

const { Item } = Breadcrumb;
const { Title } = Typography;

const ExamplesPage = () => {
  return (
    <UserLayout>
      <Row>
        <Col>
          <Breadcrumb>
            <Item>Home</Item>
            <Item>Listagem de Cadastros</Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row justify="space-between" align="middle">
        <Col>
          <Space align="baseline">
            <Title level={2}>Cadastros</Title>
            <Typography>
              <InfoCircleOutlined /> Ajuda
            </Typography>
          </Space>
        </Col>
        <Col>
          <Button type="primary" icon={<PlusOutlined />} href="/exemplo/criar">
            Cadastrar
          </Button>
        </Col>
      </Row>
      <Row justify="space-between" className={styles.titleLine}>
        <Col span={24}>
          <ExamplesTable />
        </Col>
      </Row>
    </UserLayout>
  );
};

export default ExamplesPage;
