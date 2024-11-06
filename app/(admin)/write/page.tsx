"use client";
import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, Typography } from "antd";

type FieldType = {
  title?: string;
  text?: string;
  autosave?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const PageWriting: React.FC = () => (
  <>
    <Typography.Title level={1} className="text-center">
      Write a new page
    </Typography.Title>
    <Typography.Title level={4} className="text-center">
      Authenticated page example
    </Typography.Title>
    <Form
    className="w-full max-w-screen-md !mt-10"
      initialValues={{ autosave: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item<FieldType>
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input some title!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Text"
        name="text"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item<FieldType> name="autosave" valuePropName="checked">
        <Checkbox>Save automatically</Checkbox>
      </Form.Item>

      <Form.Item className="justify-self-end">
        <Button type="primary" htmlType="submit">
          Save Draft
        </Button>
        <Button className="ml-4">Publish</Button>
      </Form.Item>
    </Form>
  </>
);

export default PageWriting;
