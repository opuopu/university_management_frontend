import React from "react";

export default function ActionBar({ title, children }: any) {
  return (
    <>
      <h1>{title}</h1>
      <div
        style={{
          display: "flex",
        }}
      >
        {children}
      </div>
    </>
  );
}
