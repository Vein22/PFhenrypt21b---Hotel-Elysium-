'use client'
import React from "react";
import { useSearchParams } from "next/navigation";
import LoginGoogle from "@/components/logingoogle/LoginGoogle";

const GoogleLogin = () => {
  const searchParams = useSearchParams();
  const emailgoogle = searchParams?.get("email") || "";
  const password = searchParams?.get("password") || "";

  return <LoginGoogle emailgoogle={emailgoogle} password={password} />;
};

export default GoogleLogin;
