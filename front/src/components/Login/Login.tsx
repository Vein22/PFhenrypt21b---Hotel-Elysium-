
 "use client"

import styles from  './Login.module.css'
import Image from 'next/image';
import { MdAttachEmail } from "react-icons/md";
import Swal from 'sweetalert2';


import { login } from '@/api/login';
import { validateFields } from '@/helpers/validateLogin';
import { IloginError, IloginProps } from '@/interfaces/TypesLogin';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const dataHarcor = {
  email: 'harcordigital@gmail.com',
  password: 'harcordigital',
}
function LoginForm() {

  const router = useRouter();

const initialState = {
  email:"",
  password:""
}

const [dataUser, SetdataUser] = useState<IloginProps> (initialState);
const [errors, SetErrors] = useState<IloginError>(initialState);

// CAPTURO LA INFORMACION DE LOS INPUTS
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
const {name, value} = event.target;
SetdataUser ({
  ...dataUser, [name]:value
})
}

  // ENVIO LOS DATOS AL BACK
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault ();

const Validaterrors = validateFields (dataUser)

if (Object.keys(Validaterrors).length > 0) {
  SetErrors(Validaterrors)
// alert ('hay un error')

Swal.fire({
  icon: 'error',
  title: 'Error',
  text: 'Hay un error en los campos ingresados.',
});
} else {

  try {
    const response = await login (dataUser);
    if (response.success) {
      const {token, user} = response.data;
      // localStorage.setItem ('token', token);
      // localStorage.setItem ('user', JSON.stringify(user));
      // AQUI ES DONDE GUARDO LOS NUEVOS DATOS DEL USUARIO EN EL NAVEGADOR PARA QUE SEA PERSISTENTE
   localStorage.setItem ('userSesion', JSON.stringify ({token: token, userData:user}))

    router.push ('/');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Tus credenciales no son correctas.',
      });
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'error al iniciar sesion.',
    });
  }

  }
}

// VERIFICO SI EXISTE ALGUN ERROR EN LA VALIDACION DE LOS INPUTS
// useEffect (() =>{
//   const errors = validateFields (dataUser)
//   SetErrors (errors)
//   }, [dataUser])


return (


  <form onSubmit={handleSubmit} className= {styles.container}>

<div className= {styles.imgContainer}>
  <Image
        src="/login.jpg" // Ruta de la imagen en la carpeta public
        alt="Login"
        width={500} // Ancho de la imagen
        height={500} // Altura de la imagen
        // className= {styles.imgform}
      />
  </div>
       
      <div className={styles.formContainer}> {/*este encierra los inputs*/}
            <h1>Iniciar Sesión</h1>
      
          <div className={styles.inputLabelGroup}>
      <input
        type="text"
        name='email'
        id = 'email'
        required
        aria-label='correo electronico'
        value={dataUser.email}
        onChange={handleChange}
        placeholder=""
        className={styles.inputForm}
      />
        <label htmlFor="email" className={styles.labelForm}>Correo Electrónico</label>  
      </div>
      {errors.email && (
          <div className="text-red-500 text-xs mt-2">{errors.email}</div>
        )}


<div className={styles.inputLabelGroup}>
 
      <input
        type="password"
        name='password'
        id = 'password'
        required
        aria-label='ingrese contraseña'
        value={dataUser.password}
        onChange={handleChange}
        placeholder=""
        className={styles.inputForm}
      />
           <label htmlFor="password_id" className={styles.labelForm}>Contrasena</label>
      </div>
      {errors.password && (
          <div className="text-red-500 text-xs mt-2">{errors.password}</div>
        )}

      <div>
        <button className= {styles.submit}>INGRESAR</button>
      </div>
      </div>
  </form>
  // </div>

)
};

export default LoginForm