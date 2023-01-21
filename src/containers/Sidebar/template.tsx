import React, { useMemo, useState } from "react";
import { Menu, MenuProps } from "antd";
import loadable from "@loadable/component";
import { SidebarStyled } from "./styled";
import { RootState, useAppSelector } from "@store/index";

const TemplateSideBar = ({ items }) => {
  const [collapsed, setCollapsed] = useState(true);

  const { user } = useAppSelector((state: RootState) => state.authReducer);

  type MenuItem = Required<MenuProps>["items"][number];

  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  };

  const menuItens: MenuItem[] = useMemo(() => {
    const treatedItems = items.map((item) => {
      const DynamicIcon = loadable((props) =>
        import(`@ant-design/icons/es/icons/${props.type}.js`).catch(
          (err) => import(`@ant-design/icons/es/icons/WarningOutlined.js`)
        )
      );
      if (item.children) {
        const children = item.children.map((child) =>
          getItem(child.title, child.id)
        );
        return getItem(
          item.title,
          item.id,
          <DynamicIcon type={item.icon} />,
          children
        );
      } else
        return getItem(item.title, item.id, <DynamicIcon type={item.icon} />);
    });
    return treatedItems;
  }, [items]);

  return (
    <SidebarStyled
      backgroundColor={user.secondaryColor}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu theme="dark" mode="inline" items={menuItens} />
    </SidebarStyled>
  );
};

export default TemplateSideBar;
