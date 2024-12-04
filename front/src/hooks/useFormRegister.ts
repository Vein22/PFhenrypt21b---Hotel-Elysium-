import { valuesTypesRegister } from "../interfaces/TypesRegister";
import { useState } from "react";



type typeFormVR = (form: valuesTypesRegister) => Partial<valuesTypesRegister>

export const useFormRegister = (initialForm: valuesTypesRegister, validateForm: typeFormVR, dataForm) => {
const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState<Partial<valuesTypesRegister>>({});
    const [loading, setLoading] = useState(false);
    const [isSuccessResponse, setIsSuccessResponse] = useState(false);
    const [isErrorResponse, setIsErrorResponse] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
    
        setForm(
            {
            ...form,
            [name]: value
        }
        );
        console.log(form);
    };

    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e);
        setErrors(validateForm(form));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0) {
            try {
            const result = dataForm(form);

            if(result) {
                console.log('Datos enviados');
                setIsErrorResponse(false);
                setIsSuccessResponse(true);
            } else {
                setIsErrorResponse(true);
            }
            } catch (error) {
                console.error('Error al registrar:', error);
            }
        }  else {
            console.log('Hay errores en el formulario');
        };

    };
    

    return {
        form,
        errors,
        isSuccessResponse,
        isErrorResponse,
        handleChange,
        handleBlur,
        handleSubmit
    };
};