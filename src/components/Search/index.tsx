import React, { useState } from "react";
import type { FilterConfirmProps } from "antd/es/table/interface";
import TemplateSearch from "./template";


const SearchComponent = ({
  setSelectedKeys,
  selectedKeys,
  confirm,
  clearFilters,
  dataIndex,
}) => {

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  return (
    <TemplateSearch
    setSelectedKeys={setSelectedKeys}
    selectedKeys={selectedKeys}
    confirm={confirm}
    clearFilters={clearFilters}
    dataIndex={dataIndex}
    handleSearch={handleSearch}
    handleReset={handleReset}
    />
  );
};

export default SearchComponent;
