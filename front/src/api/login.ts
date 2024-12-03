import { IloginProps } from "@/interfaces/TypesLogin"
import Swal from 'sweetalert2';

const APIURL = process.env.NEXT_PUBLIC_API_URL

// FUNCION QUE OBTIENE TODOS LOS PRODUCTOS

export async function login(userData : IloginProps) {
    try {
      const ResLogin = await fetch (`${APIURL}/auth/signin`, {
        // cache: 'no-cache'
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify (userData)    
    })

    if (ResLogin.ok) {
      const data = await ResLogin.json()
       return {success: true, data}
    } else {
      const errorData = await ResLogin.json()
       return {success: false, errorData}
    }

   } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No hay conexión al servidor.',
  });
    return {success: false, message: 'no hay conexion al servidor', error }   
    }
  };

