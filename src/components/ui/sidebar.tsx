"use client";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import React, { useState } from "react";
const { Header, Content, Sider } = Layout;

import type { MenuProps } from "antd";
import { USER_ROLE } from "@/app/constants/role";
import SidebarItem from "@/app/constants/sidebarItem";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const role = USER_ROLE.ADMIN;
  const items = SidebarItem(role);
  return (
    <Sider
      width={280}
      collapsible
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        style={{
          color: "white",
          fontSize: "1rem",
          textAlign: "center",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        UNIVERISTY MANAGEMENT
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
}
