"use client";
import React, { PropsWithChildren } from "react";
import { Layout, Typography } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import useThemeTokens from "@/services/hooks/useThemeTokens";
import Link from "next/link";
import PageHeader from "@/ui/PageHeader";

const UserLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { colorBgBase } = useThemeTokens();
  return (
    <Layout className="!h-full !min-h-screen">
      <PageHeader />
      <Content className="flex flex-col justify-start items-center p-10">{children}</Content>
      <Footer
        className="text-center"
        style={{
          backgroundColor: colorBgBase,
        }}
      >
        <Typography.Text>
          © 2024 Created by <Link href="http://thamys.dev">Thamys</Link>
        </Typography.Text>
      </Footer>
    </Layout>
  );
};

export default UserLayout;
