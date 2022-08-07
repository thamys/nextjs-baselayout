import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout } from "antd";
import type { MenuProps } from "antd";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import Breadcrumb from "../components/Breadcrumb/index";

const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const App: React.FC = () => (
  <Layout>
    <Navbar />
    <Layout>
      <Sidebar />
      <Layout style={{ padding: "0 24px 24px" }}>
        <Breadcrumb />
        <Content
          className={styles.siteLayoutBackground}
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}>
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default App;
