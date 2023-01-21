import React, { useEffect } from "react";
import { ConfigProvider, Layout } from "antd";
import Sidebar from "@containers/Sidebar";
import Header from "@containers/Header";
import styles from "./styles.module.css";
import Link from "next/link";
import { RootState, useAppSelector } from "@store/index";

const { Footer, Content } = Layout;

const DashboardLayout = ({ children }) => {
  const { user } = useAppSelector((state: RootState) => state.authReducer);

  useEffect(() => {
    ConfigProvider.config({
      theme: {
        primaryColor: user.primaryColor,
      },
    });
  }, [user]);

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
