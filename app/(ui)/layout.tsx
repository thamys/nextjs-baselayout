"use client";
import React, { PropsWithChildren } from "react";
import { ConfigProvider, theme as defaultTheme } from "antd";
import * as theme from "@/app/theme.json";

const template: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: defaultTheme.darkAlgorithm,
        ...theme,
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default template;
