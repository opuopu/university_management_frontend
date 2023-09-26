import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";

export default function UMbreadcrub({ items }: any) {
  const breadCrumItems = [
    {
      title: <Link href="/">home</Link>,
    },
    ...items.map((item: any) => {
      return {
        title: item?.Link ? (
          <Link href={item.Link}>{item.label}</Link>
        ) : (
          <span>{item.label}</span>
        ),
      };
    }),
  ];
  return (
    <div>
      <Breadcrumb items={breadCrumItems} />
    </div>
  );
}
