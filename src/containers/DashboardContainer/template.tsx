import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Typography } from "antd";
import Link from "next/link";
import React from "react";

const DashboardTemplate = () => {
  return (
    <section>
      <Row>
        <Col>
          <Typography.Title level={2}>Olá, Usuário</Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <Space>
            <Link href="/exemplo/criar">
              <Button type="primary" icon={<PlusOutlined />}>
                Novo Cadastro
              </Button>
            </Link>
            <Link href="/exemplo">
              <Button type="primary" icon={<UnorderedListOutlined />}>
                Acompanhar Cadastros
              </Button>
            </Link>
          </Space>
        </Col>
      </Row>
    </section>
  );
};

export default DashboardTemplate;
