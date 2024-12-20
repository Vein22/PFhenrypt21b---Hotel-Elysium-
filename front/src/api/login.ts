import { IloginProps } from "@/interfaces/TypesLogin";
import Swal from "sweetalert2";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function login(userData: IloginProps) {
  try {
    const ResLogin = await fetch(`${APIURL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (ResLogin.ok) {
      const data = await ResLogin.json();

    
      const user = data.user; 
      const roleId = user.role.id; 
      const roleName = user.role.name; 


      localStorage.setItem("roleId", roleId);
      localStorage.setItem("roleName", roleName);


      return { success: true, data, roleId, roleName };
    } else {
      const errorData = await ResLogin.json();
      return { success: false, errorData };
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "No hay conexión al servidor.",
    });
    return { success: false, message: "No hay conexión al servidor", error };
  }
}
