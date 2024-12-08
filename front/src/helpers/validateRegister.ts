import {
  valuesTypesRegisterPrueba,
  valuesTypesRegister,
} from "@/interfaces/TypesRegister";

export const velidateFormRegister = (form: valuesTypesRegisterPrueba) => {
  //     const errors: Partial<valuesTypesRegisterPrueba> = {};

  //     const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  //     const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //     const regexPassword = /^[A-Z][a-zA-Z\d@!]{6,}$/;
  //     const regexPhone = /^\+?\d{7,15}$/;
  //     const regexDni = /^[A-Za-z0-9]{7,12}$/;
  //     const regexAddress = /^[A-Za-z0-9\s,.-]{1,94}$/;

  //     if (!form.name.trim()) {
  //         errors.name = 'El campo "Nombre" es obligatorio';
  //     } else if(!regexName.test(form.name.trim())) {
  //         errors.name = `El campo 'Nombre' debe contener solo letras y espacios, pero has escrito: '${form.name}'.`;
  //     };

  //     if(!form.email.trim()) {
  //         errors.email = 'El correo electrónico es obligatorio';
  //     } else if(!regexEmail.test(form.email.trim())) {
  //         errors.email = 'Por favor, ingresa una dirección de correo electrónico válida.';
  //     };

  //     if(!form.password.trim()) {
  //         errors.password = 'La contraseña es obligatoria';
  //     } else if(!regexPassword.test(form.password.trim())) {
  //         errors.password = 'La contraseña debe cumplir con los requisitos: al menos 7 caracteres, una letra mayúscula y un número.'
  //     };

  //    if(!form.confirm_password.trim()) {
  //         errors.confirm_password = 'Debe de confirmar tu contraseña';
  //     } else if(form.password !== form.confirm_password) {
  //         errors.confirm_password = 'Las contraseñas no coinciden';
  //     };

  //     if(!form.phone.trim()) {
  //         errors.phone = 'El número de teléfono es obligatorio';
  //     } else if(!regexPhone.test(form.phone.trim())) {
  //         errors.phone = 'El número de teléfono debe tener entre 7 y 15 dígitos, y puede incluir un signo de más (+) al principio.';
  //     };

  //     if(!form.Dni.trim()) {
  //         errors.Dni = 'El Dni es obligatorio';
  //     } else if(!regexDni.test(form.Dni.trim())) {
  //         errors.Dni = 'El DNI debe tener entre 7 y 12 caracteres alfanuméricos.';
  //     };

  //if(!form.address.trim()) {
  //  errors.address = 'La dirección es obligatoria';
  //} else if(!regexAddress.test(form.address.trim())) {
  //  errors.address = 'Por favor, ingresa una dirección válida.';
  //};

  // return errors;

  const errors: valuesTypesRegisterPrueba = {};

  // Validar el nombre
  if (!form.name) {
    errors.name = "El nombre es requerido";
  }

  // Validar el correo
  if (!form.email) {
    errors.email = "El correo electónico es requerido";
  }

  // Validar la contraseña
  if (!form.password) {
    errors.password = "La contraseña es requerida";
  }

  // Validar la confirmación de la contraseña
  if (!form.confirm_password) {
    errors.confirm_password = "La confirmación de la contraseña es requerida";
  }

  // Validar el teléfono
  if (!form.phone) {
    errors.phone = "El teléfono es requerido";
  }

  // Validar el DNI
  if (!form.Dni) {
    errors.Dni = "El DNI es requerido";
  }

  return errors;
};
