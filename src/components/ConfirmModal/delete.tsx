import React from "react";
import { Modal, Typography } from "antd";
import styles from "./styles.module.css";

const ConfirmModalDelete = (onConfirm) => {
  return Modal.confirm({
    icon: null,
    title: (
      <Typography.Title level={5} className={styles.confirmTitle}>
        Tem certeza que deseja remover a procuração?
      </Typography.Title>
    ),
    content: (
      <Typography.Paragraph className={styles.confirmText}>
        Nome da Procuração
      </Typography.Paragraph>
    ),
    className: styles.confirmModal,
    okText: (
      <>
        <strong>SIM</strong>, excluir procuração
      </>
    ),
    cancelText: "Cancelar",
    onOk: () => onConfirm,
    okButtonProps: {
      className: styles.deleteButton,
    },
  });
};

export default ConfirmModalDelete;
