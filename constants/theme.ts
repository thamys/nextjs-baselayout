import { theme, ThemeConfig } from "antd";

const seedTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    // Seed Token
    colorPrimary: "#FADA58",
    colorLink: "#FADA58",
    borderRadius: 4,
    colorText: "#1E1E1E",
  }
};

export const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    ...seedTheme.token,
    // Dark Token
    colorText: "#FFFCF2",
  },
};

export const lightTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    ...seedTheme.token,
  },
};

export const getThemeConfig: (type?: "light" | "dark") => ThemeConfig = (
  type = "light"
) => {
  if (type === "dark") {
    return darkTheme;
  }
  return lightTheme;
};
