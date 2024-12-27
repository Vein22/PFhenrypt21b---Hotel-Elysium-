"use client";

import { useLoggin } from "@/context/logginContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const ProtectedClient: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { userData, loadUserData } = useLoggin();
  const router = useRouter();

  useEffect(() => {
    const checkAccess = async () => {
      if (!userData) {
        try {
          const data = await loadUserData();
        
          if (!data || data.userData.role.name !== "Administrador") {
            Swal.fire({
              title: "Acceso Restringido",
              html: "Esta ruta es solo para usuarios Administrador. <br> Por favor, inicia sesión Como Administrador.<br>Si no Cuenta Con los permisos, por favor, Dirijase a Elysium",
              icon: "warning",
              confirmButtonText: "Aceptar",
            }).then(() => {
              router.push("/login");
            });
          }
        } catch (error) {
          console.error('Error al cargar los datos del usuario:', error);
          router.push("/login");
        }
      }
    };

    checkAccess();
  }, [router, loadUserData, userData]);

  if (userData === undefined) {
    return <div>Cargando...</div>; 
  }

  if (userData?.userData.role.name === "Administrador") {
    return <>{children}</>;
  }
  return <div>Espere ... Cargando</div>;
};

export default ProtectedClient;
