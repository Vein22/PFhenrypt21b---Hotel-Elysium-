
 "use client"
import React from 'react'
// import '@/app/globals.css'
import styles from  './Login.module.css'
import Image from 'next/image';
import { MdAttachEmail } from "react-icons/md";


function LoginForm() {

return (

  <div className={styles.divprincipal}>
  
  <div className= {styles.divregister}>
  <Image
        src="/login.jpg" // Ruta de la imagen en la carpeta public
        alt="Login"
        width={500} // Ancho de la imagen
        height={500} // Altura de la imagen
        className= {styles.imgform}
      />
  </div>

  <form className= {styles.form}>
            <h1 className={styles.h1title}>Iniciar Sesión</h1>
      <div>
        <label htmlFor="email">Correo Electrónico</label>
        <div>
      <input
        type="text"
        name='email'
        id = 'email'
        required
        aria-label='correo electronico'
        // value={dataUser.email}
        // onChange={handleChange}
        placeholder="email"
        className={styles.input}
      />
      </div>
      </div>

      <div>
      <label htmlFor="email">Contrasena</label>
      <div>
      <input
        type="password"
        name='password'
        id = 'password'
        required
        aria-label='ingrese contraseña'
        // value={dataUser.email}
        // onChange={handleChange}
        placeholder="Contraseña"
        className={styles.input}
      />
      </div>
      </div>

      <div>
        <button className= {styles.boton}>INGRESAR</button>
      </div>

  </form>
  </div>

)
};

export default LoginForm