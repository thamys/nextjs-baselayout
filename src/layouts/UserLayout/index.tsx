import React from "react";
import { Layout } from "antd";
import IsSidebar from "@containers/Sidebar";
import IsHeader from "@containers/Header";
import styles from "./styles.module.css";
import Link from "next/link";

const { Footer, Content } = Layout;

const UserLayout = ({ children }) => {
  return (
    <Layout>
      <IsSidebar />
      <Layout className="site-layout">
        <IsHeader />
        <Content className={styles.layout}>{children}</Content>
        <Footer className={styles.footer}>
          Copyright © 2020 Template - Todos os direitos reservados.
          <Link href={"/dashboard"}> Termo de Uso do sistema.</Link>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default UserLayout;
