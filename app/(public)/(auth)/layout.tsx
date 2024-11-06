"use client";
import { Layout, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React, { PropsWithChildren } from "react";

const AuthTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout className="flex !flex-row !justify-stretch !items-stretch h-full">
      <Content>
        <div className="flex flex-col flex-grow p-10 justify-center items-center gap-6 max-w-screen-sm mx-auto h-full">
          {children}
        </div>
      </Content>
      <Sider
        width={600}
        style={{
          backgroundImage: "url('/images/sider-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="p-4 !flex text-center !flex-col !justify-center !items-center py-12"
      >
        <Typography.Title level={2} className="!text-black">
          Welcome to the App
        </Typography.Title>
        <Typography.Text className="!text-black">
          Please login to access the app
        </Typography.Text>
      </Sider>
    </Layout>
  );
};

export default AuthTemplate;
