import React from "react";

export interface MenuItem_types {
  pageName: string;
  key: string;
  rout: string;
  subMenu: any;
  icon: React.FC;
}

export interface MenuItemHover_types {
  key: string;
  label: string;
  disable: boolean;
  alert: boolean;
  link: string
}

