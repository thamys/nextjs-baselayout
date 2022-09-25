import React from "react";
import { Button, Checkbox, Form, Input, Row } from "antd";

const FormLoginTemplate = ({ onLogin }) => {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      onFinish={onLogin}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
      action="/dashboard"
    >
      <Form.Item
        label="Email para acesso"
        name="email"
        rules={[
          {
            required: true,
            message: "O campo e-mail é obrigatório",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Senha"
        name="password"
        rules={[
          {
            required: true,
            message: "Favor inserir a senha!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Row justify="space-between">
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Lembre de mim</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Acessar a plataforma
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default FormLoginTemplate;
