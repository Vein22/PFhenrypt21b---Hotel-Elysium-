'use client'

import { useFormRegister } from "@/hooks/useFormRegister";

const initialForm = {
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    phone: '',
    Dni: '',
    address: ''
};

export const RegisterComponent = () => {

    const {
        form, 
        handleChange
    } = useFormRegister(initialForm)
    return (
        <section className="bg-slate-50">
            
            <h1 className="text-gray-50">Compoenente para el registro</h1>
            <h1 className="text-gray-50">Compoenente para el registro</h1>
            <h1 className="text-gray-50">Compoenente para el registro</h1>
            <h1 className="text-gray-50">Compoenente para el registro</h1>
            <h1 className="text-gray-50">Compoenente para el registro</h1>
            <h1 className="text-gray-50">Compoenente para el registro</h1>
            <h1 className="text-gray-50">Compoenente para el registro</h1>

            <h1 className="text-gray-50">Compoenente para el registro</h1>
            <h1 className="text-gray-50">Compoenente para el registro</h1>
            <h1 className="text-gray-50">Compoenente para el registro</h1>
            <h1 className="text-gray-50">Compoenente para el registro</h1>
            <h1 className="text-gray-50">Compoenente para el registro</h1>
            <h1 className="text-gray-50">Compoenente para el registro</h1>


            {/*Formulario de registro*/}
            <div>
            <h1 className="text-gray-50">Registrarse</h1>
{/*Nombre*/}
            <div>
                <input type="text" name="name" id="name_id" onChange={handleChange}/>
                <label htmlFor="name_id">Nombre Completo</label>
            </div>
{/*Email*/}
            <div>
                <input type="text" name="email" id="email_id" />
                <label htmlFor="email_id">Correo Electronico</label>
            </div>
{/*Contraseña*/}
            <div>
                <input type="password" name="password" id="password_id" />
                <label htmlFor="password_id">Contraseña</label>
            </div>
{/*Confirmar contraseña*/}
            <div>
                <input type="password" name="confirm_password" id="confirm_password_id" />
                <label htmlFor="confirm_password_id">Confirmar Contraseña</label>
            </div>
{/*Teléfono*/}
            <div>
                <input type="text" name="phone" id="phone_id" />
                <label htmlFor="phone_id">Teléfono</label>
            </div>
{/*Dni*/}
            <div>
                <input type="text" name="Dni" id="Dni_id" />
                <label htmlFor="Dni_id">Dni</label>
            </div>
{/*Dirección*/}
            <div>
                <input type="text" name="address" id="address_id" />
                <label htmlFor="address_id">Dirección</label>
            </div>

            <p>¿Ya tienes una cuenta? <a href="/login">INICIA SESIÓN</a></p>

            <button>REGISTRARSE</button>
            </div>
        </section>
    )
}

export default RegisterComponent;