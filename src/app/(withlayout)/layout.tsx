import React from "react";
import { Layout } from "antd";

import Sidebar from "@/components/ui/sidebar";
import Contents from "@/components/ui/contents";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <Sidebar />
      <Contents> {children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
