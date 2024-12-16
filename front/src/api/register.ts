import { valuesTypesRegister } from "@/interfaces/TypesRegister";


export const fetchRegister = async (form: Omit<valuesTypesRegister, 'confirm_password'>) => {
    const APIURL = process.env.NEXT_PUBLIC_API_URL;
    try {
        const result = await fetch(`${APIURL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });

        if(result.ok) {
            const data = await result.json();

///ROLL DEL USUARIO/////////////////////////////////////
            const defaultRole = {
                name: 'cliente',
                description: 'Persona con permisos de cliente.'
            };

            const createRoleResponse = await fetch(`${APIURL}/roles`, {
               method: 'POST',
                headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify(defaultRole)
            });

            
            if (createRoleResponse.ok) {
                const roleData = await createRoleResponse.json();
                console.log('Rol "Cliente" creado :', roleData);
            } else {
                throw new Error('Error al crear el rol "Cliente"');
            }
/////////////////////FIN//////////////////////////////////

            console.log('¡Usuario creado exitosamente!');
            return data
        } else {
            const errorData = await result.json();
            console.log('Error al registrar usuario:', errorData);
            throw new Error(errorData.message || 'Error desconocido');
        };

    } catch (error) {

        console.log('Error al registrar usuario:', error);

        throw error;
    };

};