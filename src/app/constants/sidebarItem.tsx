import React from "react";
import type { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
export default function SidebarItem(role: string) {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "profile",
      key: "profile",
      icon: <UserOutlined />,
      children: [
        {
          label: "profile account",
          key: "profile",
        },
        {
          label: "change password",
          key: "change-password",
        },
      ],
    },
  ];
  const commonAdminSiderItems: MenuProps["items"] = [
    {
      label: "manage students",
      key: "manage-students",
      icon: <UserOutlined />,
      children: [
        {
          label: <Link href={`/$role/manage-students`}>manage students</Link>,
          key: "manage-student",
        },
      ],
    },
  ];
  if (role === "student") {
    return defaultSidebarItems;
  } else if (role === "admin") {
    return commonAdminSiderItems;
  }
}
