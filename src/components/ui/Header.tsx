import React from "react";
import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { userLogOut } from "@/service/auth.service";
import { useRouter } from "next/navigation";

const { Header: AntHeader, Content } = Layout;

export default function Header() {
  const router = useRouter();
  const handleLogout = () => {
    userLogOut("accessToken");
    router.push("/login");
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Button onClick={handleLogout}>Logout Now</Button>,
    },
  ];
  return (
    <AntHeader>
      <Row align="middle" justify={"end"}>
        <Dropdown menu={{ items }}>
          <Space direction="vertical" size={16}>
            <Space wrap size={16}>
              <Avatar
                style={{
                  cursor: "pointer",
                }}
                size="large"
                icon={<UserOutlined />}
              />
            </Space>
          </Space>
        </Dropdown>
      </Row>
    </AntHeader>
  );
}
