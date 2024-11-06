"use client";
import { ConfigProvider, ThemeConfig } from "antd";
import React, { PropsWithChildren, useMemo } from "react";
import { getThemeConfig } from "@/constants/theme";

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const theme: ThemeConfig = useMemo(
    () => getThemeConfig(isDarkMode ? "dark" : "light"),
    [isDarkMode]
  );

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener("change", (e) => setIsDarkMode(e.matches));
  }, []);

  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default ThemeProvider;
