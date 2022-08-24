import { SearchOutlined } from "@ant-design/icons";
import { FilterDropdownProps } from "antd/lib/table/interface";
import React from "react";
import SearchComponent from ".";

export type getColumnSearchPropsType = (dataIndex: string) => {
  filterDropdown:
    | React.ReactNode
    | ((props: FilterDropdownProps) => React.ReactNode);
  filterIcon: (filtered: boolean) => React.ReactNode;
  onFilter: (value: string, record: string) => boolean;
};

export const getColumnSearchProps: getColumnSearchPropsType = (dataIndex) => ({
  filterDropdown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
  }) => (
    <SearchComponent
      setSelectedKeys={setSelectedKeys}
      selectedKeys={selectedKeys}
      confirm={confirm}
      clearFilters={clearFilters}
      dataIndex={dataIndex}
    />
  ),
  filterIcon: (filtered: boolean) => (
    <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
  ),
  onFilter: (value, record) =>
    record[dataIndex]
      .toString()
      .toLowerCase()
      .includes((value as string).toLowerCase()),
});
