"use client";
import React from "react";
import { Layout } from "antd";
import UMbreadcrub from "./UMbreadcrub";
import Link from "next/link";
const { Content } = Layout;
export default function Contents({ children }: { children: React.ReactNode }) {
  return (
    <Content
      style={{
        minHeight: "100vh",
      }}
    >
      <UMbreadcrub
        items={[
          {
            label: "admin",
            Link: "/admin",
          },
          {
            label: "student",
            Link: "/student",
          },
        ]}
      />
      {children}
    </Content>
  );
}
