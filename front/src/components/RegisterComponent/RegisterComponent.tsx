"use client";

import { useFormRegister } from "@/hooks/useFormRegister";
import { velidateFormRegister } from "@/helpers/validateRegister";
import { fetchRegister } from "@/api/register";
import Image from "next/image";
import registerImg from "../../../public/register_prueba.png";
import Style from "./register.module.css";

const initialForm = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  phone: "",
  Dni: "",
};

export const RegisterComponent = () => {
  const { form, errors, handleChange, handleBlur, handleSubmit } =
    useFormRegister(initialForm, velidateFormRegister, fetchRegister);

  return (
    <form onSubmit={handleSubmit} className={Style.container}>
      {/*Imagen estática para el componente Register*/}
      <div className={Style.imgContainer}>
        <Image src={registerImg} alt="Usuario" width={500} height={500} />
      </div>

            {/*Formulario de registro*/}
            <div className={Style.formContainer}>
            <h1>Registrarse</h1>
                {errors.name && <p className="text-red-500 text-xs m-2">{errors.name}</p>}
{/*Nombre*/} 
            <div className={Style.inputLabelGroup}>
                <input type="text" name="name" id="name_id" onChange={handleChange} onBlur={handleBlur} value={form.name} className={Style.inputForm} placeholder=" " autoComplete="off"/>
                <label htmlFor="name_id" className={Style.labelForm}>Nombre Completo</label>
            </div>
{/*Email*/}
            {errors.email && <p className="text-red-500 text-xs m-2">{errors.email}</p>}
            <div className={Style.inputLabelGroup}>
                <input type="text" name="email" id="email_id" onChange={handleChange} onBlur={handleBlur} value={form.email} className={Style.inputForm} placeholder=" "/>
                <label htmlFor="email_id" className={Style.labelForm}>Correo Electronico</label>
            </div>
{/*Contraseña*/}
            {errors.password && <p className="text-red-500 text-xs m-2">{errors.password}</p>}
            <div className={Style.inputLabelGroup}>
                <input type="password" name="password" id="password_id" onChange={handleChange} onBlur={handleBlur} value={form.password} className={Style.inputForm} placeholder=" "/>
                <label htmlFor="password_id" className={Style.labelForm}>Contraseña</label>
            </div>
{/*Confirmar contraseña*/}
            {errors.confirm_password && <p className="text-red-500 text-xs m-2">{errors.confirm_password}</p>}
            <div className={Style.inputLabelGroup}>
                <input type="password" name="confirm_password" id="confirm_password_id" onChange={handleChange} onBlur={handleBlur} value={form.confirm_password} className={Style.inputForm} placeholder=" "/>
                <label htmlFor="confirm_password_id" className={Style.labelForm}>Confirmar Contraseña</label>
            </div>
{/*Teléfono*/}
            {errors.phone && <p className="text-red-500 text-xs m-2">{errors.phone}</p>}
            <div className={Style.inputLabelGroup}>
                <input type="text" name="phone" id="phone_id" onChange={handleChange} onBlur={handleBlur} value={form.phone} className={Style.inputForm} placeholder=" "/>
                <label htmlFor="phone_id" className={Style.labelForm}>Teléfono</label>
            </div>
{/*Dni*/}
           {errors.Dni && <p className="text-red-500 text-xs m-2">{errors.Dni}</p>}
            <div className={Style.inputLabelGroup}>
                <input type="text" name="Dni" id="Dni_id" onChange={handleChange} onBlur={handleBlur} value={form.Dni} className={Style.inputForm} placeholder=" "/>
                <label htmlFor="Dni_id" className={Style.labelForm}>Dni</label>
            </div>

        <p className={Style.tienesCuenta}>
          ¿Ya tienes una cuenta? <a href="/login">INICIA SESIÓN</a>
        </p>

        <button type="submit" className={Style.submit}>
          REGISTRARSE
        </button>
      </div>
    </form>
  );
};

export default RegisterComponent;
