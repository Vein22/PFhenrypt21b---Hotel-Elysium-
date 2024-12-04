'use client'

import { useFormRegister } from "@/hooks/useFormRegister";
import { velidateFormRegister } from "@/helpers/validateRegister";
import { fetchRegister } from "@/api/register";

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
        errors,
        isSuccessResponse,
        isErrorResponse,
        handleChange,
        handleBlur,
        handleSubmit
    } = useFormRegister(initialForm, velidateFormRegister, fetchRegister)
    return (
        <form onSubmit={handleSubmit} className="bg-slate-50">
            
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
                <input type="text" name="name" id="name_id" onChange={handleChange} onBlur={handleBlur} value={form.name}/>
                <label htmlFor="name_id">Nombre Completo</label>
                {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
            </div>
{/*Email*/}
            <div>
                <input type="text" name="email" id="email_id" onChange={handleChange} onBlur={handleBlur} value={form.email}/>
                <label htmlFor="email_id">Correo Electronico</label>
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
{/*Contraseña*/}
            <div>
                <input type="password" name="password" id="password_id" onChange={handleChange} onBlur={handleBlur} value={form.password}/>
                <label htmlFor="password_id">Contraseña</label>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-2">{errors.password}</p>}
{/*Confirmar contraseña*/}
            <div>
                <input type="password" name="confirm_password" id="confirm_password_id" onChange={handleChange} onBlur={handleBlur} value={form.confirm_password}/>
                <label htmlFor="confirm_password_id">Confirmar Contraseña</label>
            </div>
            {errors.confirm_password && <p className="text-red-500 text-xs mt-2">{errors.confirm_password}</p>}
{/*Teléfono*/}
            <div>
                <input type="text" name="phone" id="phone_id" onChange={handleChange} onBlur={handleBlur} value={form.phone}/>
                <label htmlFor="phone_id">Teléfono</label>
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-2">{errors.phone}</p>}
{/*Dni*/}
            <div>
                <input type="text" name="Dni" id="Dni_id" onChange={handleChange} onBlur={handleBlur} value={form.Dni}/>
                <label htmlFor="Dni_id">Dni</label>
            </div>
            {errors.Dni && <p className="text-red-500 text-xs mt-2">{errors.Dni}</p>}
{/*Dirección*/}
            <div>
                <input type="text" name="address" id="address_id" onChange={handleChange} onBlur={handleBlur} value={form.address}/>
                <label htmlFor="address_id">Dirección</label>
            </div>
            {errors.address && <p className="text-red-500 text-xs mt-2">{errors.address}</p>}

            <p>¿Ya tienes una cuenta? <a href="/login">INICIA SESIÓN</a></p>

            <button type="submit">REGISTRARSE</button>
            </div>
        </form>
    )
}

export default RegisterComponent;