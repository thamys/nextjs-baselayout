import React from "react";
import { Menu } from "antd";
import styles from "../../styles/Home.module.css";

const NavbarTemplate = ({ items }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo} />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items}
      />
    </header>
  );
};

export default NavbarTemplate;
