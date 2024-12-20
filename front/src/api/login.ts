<<<<<<< HEAD
// import { IloginProps } from "@/interfaces/TypesLogin"
=======
import { IloginProps } from "@/interfaces/TypesLogin"
>>>>>>> development
// import Swal from 'sweetalert2';

// const APIURL = process.env.NEXT_PUBLIC_API_URL

// // FUNCION QUE OBTIENE TODOS LOS PRODUCTOS

<<<<<<< HEAD
// export async function login(userData : IloginProps) {
//     try {
//       const ResLogin = await fetch (`${APIURL}/auth/signin`, {
//         // cache: 'no-cache'
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify (userData)    
//     })

//     if (ResLogin.ok) {
//       const data = await ResLogin.json()
//        return {success: true, data}
//     } else {
//       const errorData = await ResLogin.json()
//        return {success: false, errorData}
//     }

//    } catch (error) {
//     Swal.fire({
//       icon: 'error',
//       title: 'Error',
//       text: 'No hay conexión al servidor.',
//   });
//     return {success: false, message: 'no hay conexion al servidor', error }   
//     }
//   };



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

      // Aquí ya tienes acceso a los datos del usuario y el rol
      const user = data.user; // user contiene los datos del usuario y el rol
      const roleId = user.role.id; // ID del rol
      const roleName = user.role.name; // Nombre del rol

      // Si necesitas almacenar esta información, por ejemplo en un estado o en el localStorage:
      localStorage.setItem("roleId", roleId);
      localStorage.setItem("roleName", roleName);

      // También puedes devolver los datos si los necesitas en otra parte de tu aplicación
      return { success: true, data, roleId, roleName };
=======
export async function login(userData : IloginProps) {
      // const ResLogin = await fetch (`${APIURL}/auth/signin`, {
        const ResLogin = await fetch (`${APIURL}/auth/ramon2`, {
        // cache: 'no-cache'
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify (userData)    
    })

    if (ResLogin.ok) {
      const data = await ResLogin.json()
      console.log (data)
       return {success: true, data}
>>>>>>> development
    } else {
      const errorData = await ResLogin.json();
      return { success: false, errorData };
    }
<<<<<<< HEAD
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "No hay conexión al servidor.",
    });
    return { success: false, message: "No hay conexión al servidor", error };
  }
}
=======

  };

>>>>>>> development
