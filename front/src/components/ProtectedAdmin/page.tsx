"use client";

import { useLoggin } from "@/context/logginContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const ProtectedAdmin: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { userData } = useLoggin();
  const router = useRouter();

  useEffect(() => {
    if (!userData || userData.userData.role.name !== "Administrador") {
      Swal.fire({
        title: "Acceso Denegado",
        text: "Esta ruta es solo para Administradores.",
        icon: "error",
        confirmButtonText: "Aceptar",
      }).then(() => {
        router.push("/login"); 
      });
    }
  }, [userData, router]);

  if (!userData || userData.userData.role.name !== "Administrador") {
    return <div>Cargando...</div>; 
  }
  return <>{children}</>;
};

export default ProtectedAdmin;
