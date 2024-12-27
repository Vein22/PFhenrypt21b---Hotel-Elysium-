'use client'

import React from "react";
import { useLoggin } from "@/context/logginContext";
import PageComponent from "./page"; 

interface Params {
  id: string;
  price: number;
}

const ClientPage = ({ params }: { params: Promise<{ id: string; price: number }> }) => {
  const { userData } = useLoggin();
  const token = userData?.token;

  if (!token) {
    return <div>Error: Token de autenticación no disponible</div>;
  }

  return <PageComponent params={params} token={token} />;
};

export default ClientPage;