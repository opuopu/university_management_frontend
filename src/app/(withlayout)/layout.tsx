"use client";
import React, { useEffect, useState } from "react";
import { Layout } from "antd";

import Sidebar from "@/components/ui/sidebar";
import Contents from "@/components/ui/contents";
import { useRouter } from "next/navigation";
import { getUserInfo, isLoggedIn } from "@/service/auth.service";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [loading, setloading] = useState<boolean>(false);
  const loggedIn = isLoggedIn();
  useEffect(() => {
    if (!loggedIn) {
      router.push("/login");
    }
    setloading(true);
  }, [router, loading]);

  return (
    <Layout hasSider>
      <Sidebar />
      <Contents> {children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
