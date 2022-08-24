import React from "react";
import { Button, Checkbox, Form, Input, Row, Space } from "antd";
import { useRouter } from "next/router";

const FormLoginTemplate = () => {
  const router = useRouter();
  const onFinish = (values) => {
    console.log("Success:", values);
    router.push("/dashboard");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      onFinish={onFinish}
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
