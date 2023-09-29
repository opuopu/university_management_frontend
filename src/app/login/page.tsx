"use client";
import React from "react";
import { Button, Col, Row } from "antd";

import login from "../assests/login.svg";
import Image from "next/image";

import { SubmitHandler } from "react-hook-form";
import Form from "@/components/Forms/Forms";
import FormInput from "@/components/Forms/FormInput";
import { useUserLoginMutation } from "@/redux/features/authSlice/authApi";
import { getUserInfo, storeTokenToStroage } from "@/service/auth.service";
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();
  const [userLogin, data] = useUserLoginMutation();
  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      console.log("data", data);
      const res = await userLogin({
        ...data,
      }).unwrap();
      if (res.data.accessToken) {
        router.push("/profile");
      }
      storeTokenToStroage(res.data.accessToken);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Row
      style={{
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Col xs={12} sm={12} md={16} lg={12}>
        <Image src={login} width={500} alt="login image" />
      </Col>
      <Col xs={12} sm={12} md={8} lg={8}>
        <h1>first login your account</h1>
        <Form submitHandler={onSubmit}>
          <div>
            <div>
              <FormInput
                name="id"
                type="text"
                size="large"
                label="user id"
                placeholder="id here"
              />
            </div>
            <div
              style={{
                margin: "10px 0",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="user password"
                placeholder="password here"
              />
            </div>
          </div>
          <Button
            style={{
              marginTop: "10px",
            }}
            type="primary"
            htmlType="submit"
          >
            login now
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
