import { valuesTypesRegister } from "@/types/registerTypes";
import { useState } from "react";

export const useFormRegister = (initialForm: valuesTypesRegister, validateForm: valuesTypesRegister, dataForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
    
        setForm(
            {
            ...form,
            [name]: value
        }
        );
        console.log(form)
    };


    return {
        form,
        handleChange,
    };
};