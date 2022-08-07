import React from "react";
import { Layout, Menu } from "antd";
import styles from "../../styles/Home.module.css";

const { Sider } = Layout;

const SidebarTemplate = ({ items }) => {
  return (
    <Sider width={200} className={styles.siteLayoutBackground}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items}
      />
      x
    </Sider>
  );
};

export default SidebarTemplate;
