import LoginPage from "@/components/Login/LoginPage";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "login",
};
export default function Login() {
  return (
    <>
      <LoginPage />
    </>
  );
}
