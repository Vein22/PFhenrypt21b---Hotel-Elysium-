'use client';

import React, { useEffect, useState } from "react";
import { useLoggin } from "@/context/logginContext";
import PageComponent from "./page";

interface Params {
  id: string;
  price: number;
}

const ClientPage = ({ params }: { params: Promise<Params> }) => {
  const { userData } = useLoggin();
  const token = userData?.token;

  const [resolvedParams, setResolvedParams] = useState<Params | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    params
      .then(setResolvedParams)
      .catch(() => setError("Failed to resolve parameters"));
  }, [params]);

  if (!token) {
    return <div>Error: Token de autenticación no disponible</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!resolvedParams) {
    return <div>Loading...</div>;
  }

  return <PageComponent params={resolvedParams} token={token} />;
};

export default ClientPage;
