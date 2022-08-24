import React from "react";
import { Breadcrumb, Button, Col, Row, Space, Typography } from "antd";
import { InfoCircleOutlined, PlusOutlined } from "@ant-design/icons";
import UserLayout from "../../layouts/UserLayout";
import styles from "./styles.module.css";
import ExamplesForm from "../../containers/ExamplesForm";

const { Item } = Breadcrumb;
const { Title } = Typography;

const CreateExamplePage = () => {
  return (
    <UserLayout>
      <Row>
        <Col>
          <Breadcrumb>
            <Item>Home</Item>
            <Item>Listagem de Cadastros</Item>
            <Item>Novo Cadastro</Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row justify="space-between" align="middle">
        <Col>
          <Space align="baseline">
            <Title level={2}>Novo cadastro</Title>
            <Typography>
              <InfoCircleOutlined /> Ajuda
            </Typography>
          </Space>
        </Col>
      </Row>
      <Row justify="space-between" className={styles.titleLine}>
        <Col span={24}>
          <ExamplesForm />
        </Col>
      </Row>
    </UserLayout>
  );
};

export default CreateExamplePage;
