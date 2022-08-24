import React from "react";
import {
  Button,
  Space,
  Input,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";

export const TemplateSearch = ({
  setSelectedKeys,
  selectedKeys,
  confirm,
  clearFilters,
  dataIndex,
  handleSearch,
  handleReset,
}) => {
  return (
    <>
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space size={'large'}>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    </>
  );
};

export default TemplateSearch;
