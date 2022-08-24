import React, { useMemo } from "react";
import Link from "next/link";
import { Dropdown, Menu } from "antd";

const DropdownComponent = ({ children, menus }) => {
  const items = useMemo(() => {
    const items = [];
    menus.map((value) => {
      items.push({
        key: value.key,
        label: (
          <Link key={value.key} href={value.link}>
            {value.label}
          </Link>
        ),
        disabled: value.disable,
        danger: value.alert,
      });
    });
    return items;
  }, [menus]);
  return <Dropdown overlay={<Menu items={items} />}>{children}</Dropdown>;
};

export default DropdownComponent;
