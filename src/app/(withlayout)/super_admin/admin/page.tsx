import ActionBar from "@/components/ui/ActionBar";
import UMbreadcrub from "@/components/ui/UMbreadcrub";
import { getUserInfo } from "@/service/auth.service";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

export default function Admin() {
  const role = "super_admin";
  return (
    <div>
      <UMbreadcrub
        items={[
          {
            label: `${role}`,
            Link: `/${role}`,
          },
          {
            label: "admin",
            Link: `/${role}/admin`,
          },
        ]}
      />
      <ActionBar title="this is admin manage admin page">
        <Link href={`/${role}/admin/create`}>
          <Button
            style={{
              backgroundColor: "skyblue",
              color: "black",
              fontWeight: "600",
            }}
          >
            Manage Admin
          </Button>
        </Link>
      </ActionBar>
    </div>
  );
}
