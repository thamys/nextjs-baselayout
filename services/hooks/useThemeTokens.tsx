'use client';
import { GlobalToken, theme } from "antd";
import React from "react";

type useThemeTokensProps = () => GlobalToken & { algorithm: "light" | "dark" };

const useThemeTokens: useThemeTokensProps = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const { useToken } = theme;
  const { token: themeTokens } = useToken();

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener("change", (e) => setIsDarkMode(e.matches));
  }, []);

  return {
    algorithm: isDarkMode ? "dark" : "light",
    ...themeTokens,
  };
};

export default useThemeTokens;
