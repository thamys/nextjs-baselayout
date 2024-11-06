import React from "react";
import { Button, Checkbox, Form, FormProps, Input, Typography } from "antd";
import Link from "next/link";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginForm = () => {
  return (
    <Form
      className="w-full !max-w-screen-xs"
      name="basic"
      size="large"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType> name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item className="!w-full text-center">
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          className="w-full !h-12 mb-4"
        >
          Log in
        </Button>
        <Link href="/auth/forget-password" className="mt-4">
          <Typography.Link>Forget Passowrd</Typography.Link>
        </Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
