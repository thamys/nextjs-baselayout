import React from "react";
import { BellOutlined } from "@ant-design/icons";
import { Button } from "antd";
import DropdownComponent from "@components/Dropdown";

const DropUserNotificationsTemplate = ({ menus }) => {
  return (
    <DropdownComponent menus={menus}>
      <Button type="ghost">
        <BellOutlined />
      </Button>
    </DropdownComponent>
  );
};

export default DropUserNotificationsTemplate;
