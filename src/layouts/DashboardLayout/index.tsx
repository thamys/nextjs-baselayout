import React from "react";
import { Layout } from "antd";
import Sidebar from "../../containers/Sidebar";
import Header from "../../containers/Header";
import styles from "./styles.module.css";
import Link from "next/link";

const { Footer, Content } = Layout;

const DashboardLayout = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <Sidebar />
      <Layout className="layout">
        <Header />
        <Content className={styles.siteLayout}>{children}</Content>
        <Footer className={styles.footer}>
          Copyright © 2022 Empresa - Todos os direitos reservados.
          <Link href={"/dashboard"}> Termo de Uso do sistema.</Link>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
