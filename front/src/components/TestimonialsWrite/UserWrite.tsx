"use client";
import React, { useState, useEffect } from "react";
import { validateTestimonials } from "@/helpers/validatetestimonials";
import { useLoggin } from "@/context/logginContext";
import axios from "axios";
import Swal from "sweetalert2";

interface TestimonialFormData {
  name: string;
  email: string;
  message: string;
}

const TestimonialForm = () => {
  const { userData } = useLoggin();
  const [form, setForm] = useState<TestimonialFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<TestimonialFormData>>({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [isValid, setIsValid] = useState(false);

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    const validationErrors: Partial<TestimonialFormData> = validateTestimonials(
      {
        ...form,
        [name]: value,
      }
    );
    setErrors(validationErrors);
    setIsValid(Object.keys(validationErrors).length === 0);
  };

  const APIURL = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors: Partial<TestimonialFormData> = validateTestimonials(form);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(`${APIURL}/testimonials`, form, {
          headers: {
            Authorization: `Bearer ${userData?.token}`,
          },
        });
        console.log("Testimonio enviado", response.data);
        Swal.fire({
          title: "Éxito",
          text: "Testimonio enviado con éxito!",
          icon: "success",
          confirmButtonText: "OK",
        });
      } catch (error) {
        console.error("Error al enviar el testimonio:", error);
        Swal.fire({
          title: "Error",
          text: "Hubo un error al enviar el testimonio. Intenta nuevamente.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } else {
      setErrors(validationErrors);
      let errorMessages = "";
      for (let field in validationErrors) {
        if (validationErrors[field as keyof TestimonialFormData]) {
          errorMessages += `${validationErrors[field as keyof TestimonialFormData]}\n`;
        }
      }

      Swal.fire({
        title: "Errores en el formulario",
        text: errorMessages,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    const validationErrors: Partial<TestimonialFormData> =
      validateTestimonials(form);
    setErrors(validationErrors);
    setIsValid(Object.keys(validationErrors).length === 0);
  }, [form]);

  return (
    <div className="w-full h-screen flex items-center justify-center p-2">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-5">
        <div className="w-full md:w-2/5">
          <img
            src="/fondo3.png"
            alt="Testimonios"
            width={700}
            height={700}
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/5"
        >
          <div className="text-center mb-2">
            <h2 className="text-2xl font-bold mb-2">
              {userData?.userData.name}
            </h2>
            <h2 className="text-2xl font-bold">
              Crea Tu Testimonio en Elysium
            </h2>
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Escribe tu nombre"
            />
            {touched.name && errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Escribe tu correo electrónico"
            />
            {touched.email && errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold">
              Testimonio
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows={4}
              placeholder="Escribe tu testimonio aquí..."
            ></textarea>
            {touched.message && errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={`w-full bg-mostaza text-white py-2 rounded-md mb-4 ${
              !isValid ? "opacity-50 cursor-not-allowed" : "hover:bg-grisClaro"
            }`}
          >
            Enviar Testimonio
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestimonialForm;
