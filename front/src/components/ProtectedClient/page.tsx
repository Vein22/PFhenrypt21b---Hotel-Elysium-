"use client";

import { useLoggin } from "@/context/logginContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const ProtectedClient: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { userData } = useLoggin();
  const router = useRouter();

  useEffect(() => {
    if (!userData) {
      Swal.fire({
        title: "Acceso Restringido",
        html: "Esta ruta es solo para usuarios registrados. <br> Por favor, inicia sesión.<br>Si no estás Registrado, por favor, Regístrate.",
        icon: "warning",
        confirmButtonText: "Aceptar",
      }).then(() => {
        router.push("/login");
      });
    }
  }, [userData, router]);

  if (!userData) {
    return <div>Cargando...</div>;
  }

  return <>{children}</>;
};

export default ProtectedClient;
