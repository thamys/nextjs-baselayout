"use client";
import { SessionProvider } from "next-auth/react";
import React, { PropsWithChildren } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ThemeProvider from "@/infra/ThemeProvider";

const AppTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <SessionProvider>
      <AntdRegistry>
        <ThemeProvider>{children}</ThemeProvider>
      </AntdRegistry>
    </SessionProvider>
  );
};

export default AppTemplate;
