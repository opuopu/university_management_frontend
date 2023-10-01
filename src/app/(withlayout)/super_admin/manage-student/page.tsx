"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMbreadcrub from "@/components/ui/UMbreadcrub";
import { getUserInfo } from "@/service/auth.service";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

export default function ManageStudent() {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMbreadcrub
        items={[
          {
            label: `${role}`,
            Link: `/${role}`,
          },
          {
            label: "Manage-Student",
            Link: `/${role}/manage-student`,
          },
        ]}
      />
      <ActionBar title="this is admin manage student page">
        <Link href={`/${role}/manage-student/create`}>
          <Button
            style={{
              backgroundColor: "skyblue",
              color: "black",
              fontWeight: "600",
            }}
          >
            create student
          </Button>
        </Link>
      </ActionBar>
    </div>
  );
}
