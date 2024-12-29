"use client";
import styles from './Login.module.css';
import Image from 'next/image';
import Swal from 'sweetalert2';

import { login } from '@/api/login';
import { validateFields } from '@/helpers/validateLogin';
import { IloginError, IloginProps } from '@/interfaces/TypesLogin';
import { useRouter } from 'next/navigation';
import React, { useState,useEffect, useCallback } from 'react';
import { useLoggin } from '@/context/logginContext'; 
import { signIn, useSession, signOut } from 'next-auth/react';

function LoginForm() {
  const router = useRouter();
  const { setUserData } = useLoggin(); 
  const {data:session} = useSession()
  console.log (session)


  const initialState = {
    email: "",
    password: "",
    role:""
  };

  const [dataUser, SetdataUser] = useState<IloginProps>(initialState);
  const [errors, SetErrors] = useState<IloginError>(initialState);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    SetdataUser({
      ...dataUser,
      [name]: value
    });
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateFields(dataUser);

    if (Object.keys(validationErrors).length > 0) {
      SetErrors(validationErrors);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hay un error en los campos ingresados.',
      });
    } else {
      try {
        const response = await login(dataUser);
        if (response.success) {

          const { token, user, role } = response.data; // Asegúrate de que la API devuelva el rol




          setUserData({
            token,
            userData: user,

          });


          localStorage.setItem('sessionStart', JSON.stringify({ token, userData: user, role })); 




          router.push('/');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Tus credenciales no son correctas.',
          });
        }
      } catch (error) {
        console.error("Login error:", error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al iniciar sesión.',
        });
      }
    }
  };

  // const handleGoogleLogin = async () => {
  //   if (session?.user?.email) {
  //     const email = session.user.email;
  //     console.log (email)
  //     const response = await login({ email }); 
  //     console.log(response)
  //     if (response.success) {
  //       const { token, user } = response.data;
 
  //       setUserData({
  //         token,
  //         userData: user,
  //       });

  //       localStorage.setItem('sessionStart', JSON.stringify({ token, userData: user }));

  //       router.push('/');
  //     } else {
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Error',
  //         text: 'Error al iniciar sesión con Google.',
  //       });
  //     }
  //   } else {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Error',
  //       text: 'No se pudo obtener el email de la sesión de Google.',
  //     });
  //   }
  // };

  // // useEffect para manejar el inicio de sesión con Google
  // useEffect(() => {
  //   if (session) {
  //     handleGoogleLogin();
  //   }
  // }, [session]); // Se ejecu

  const handleGoogleLogin = useCallback(async () => {
    if (session?.user?.email) {
        const email = session.user.email;
        console.log(email);
        const response = await login({ email });
        console.log(response);
        if (response.success) {
            const { token, user } = response.data;

            setUserData({
                token,
                userData: user,
            });

            localStorage.setItem('sessionStart', JSON.stringify({ token, userData: user }));

            router.push('/');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al iniciar sesión con Google.',
            });
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo obtener el email de la sesión de Google.',
        });
    }
}, [session, setUserData, router]); // Incluye las dependencias

  // useEffect para manejar el inicio de sesión con Google
  useEffect(() => {
    if (session) {
      handleGoogleLogin();
    }
  }, [session, handleGoogleLogin]); 

  return (
    <div className={styles.containerp}>
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/login.jpg" 
          alt="Login"
          width={500}
          height={500}
        />
      </div>

      <div className={styles.formContainer}>
        <h1>Iniciar Sesión</h1>

        <div className={styles.inputLabelGroup}>
          <input
            type="text"
            name="email"
            id="email"
            required
            aria-label="correo electrónico"
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
            name="password"
            id="password"
            required
            aria-label="ingrese contraseña"
            value={dataUser.password}
            onChange={handleChange}
            placeholder=""
            className={styles.inputForm}
          />
          <label htmlFor="password_id" className={styles.labelForm}>Contraseña</label>
        </div>
        {errors.password && (
          <div className="text-red-500 text-xs mt-2">{errors.password}</div>
        )}

        <div>
          <button className={styles.submit}>INGRESAR</button>
        </div>
      </div>
    </form>
    
    <div>
          <button onClick={() => signIn('google')} className={styles.submit}>INGRESAR CON GOOGLE</button>
        <p>{session?.user?.email}</p>
        </div>
          
          <div>
        <button onClick={() => signOut()} className={styles.submit}>cerrar</button>
        </div>

    </div>
  );
}

export default LoginForm;
