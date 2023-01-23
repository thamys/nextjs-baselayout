import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import DropdownComponent from "@components/Dropdown";
import styles from "./styles.module.css";

const DropUserConfigsTemplate = ({ configs }) => {
  return (
    <DropdownComponent menus={configs}>
      <Button shape="circle" type="default" className={styles.button}>
        <UserOutlined />
      </Button>
    </DropdownComponent>
  );
};

export default DropUserConfigsTemplate;
