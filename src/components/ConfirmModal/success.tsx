import React from "react";
import { CheckCircleFilled } from "@ant-design/icons";
import { Modal, Typography } from "antd";
import styles from "./styles.module.css";

const ConfirmModalSuccess = () => {
  return Modal.success({
    icon: null,
    title: (
      <div className={styles.header}>
        <CheckCircleFilled className={styles.icon} />
        <Typography.Title level={3} className={styles.confirmTitle}>
          Sua procuração foi cadastrado com sucesso!
        </Typography.Title>
      </div>
    ),
    content: (
      <Typography.Paragraph className={styles.confirmText}>
        Clique no botão abaixo para retornar à tela de procurações
      </Typography.Paragraph>
    ),
    className: styles.successModal,
  });
};

export default ConfirmModalSuccess;
