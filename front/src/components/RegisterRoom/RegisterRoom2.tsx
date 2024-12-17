"use client";

import { useState } from "react";
import {
  validateTitle,
  validateDescription,
  validateSize,
  validateBeds,
  validateRating,
  validatePrice,
  validateImage,
  validateRoomType,
} from "@/helpers/validateNewRoom";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import FileUploader from "./FileUploader";
import GuestsInput from "./GuestsInput";
import RoomList from "./RoomList";

const RegisterForm = () => {
  const APIURL = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    size: "",
    beds: "",
    rating: "",
    image: "",
    price: "",
    roomType: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    size: "",
    beds: "",
    rating: "",
    image: "",
    price: "",
    roomType: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateInput(name, value),
    }));
  };
  const validateInput = (name: string, value: string) => {
    switch (name) {
      case "title":
        return validateTitle(value);
      case "size":
        return validateSize(value);
      case "beds":
        return validateBeds(Number(value));
      case "rating":
        return validateRating(Number(value));
      case "image":
        return validateImage(value);
      case "price":
        return validatePrice(Number(value));
      case "roomType":
        return validateRoomType(value);
      case "description":
        return validateDescription(value);
      default:
        return "";
    }
  };

  const isFormValid = () => {
    return (
      Object.values(errors).every((error) => error === "") &&
      Object.values(formData).every((value) => value !== "")
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      Swal.fire({
        icon: "error",
        title: "Formulario inválido",
        text: "Por favor, corrige los errores antes de enviar.",
      });
      return;
    }

    try {
      const datosParaEnviar = {
        ...formData,
        beds: parseInt(formData.beds, 10),
        rating: parseFloat(formData.rating),
        price: parseFloat(formData.price)
      };

      console.log("Datos a enviar:", datosParaEnviar);
      const response = await fetch(`${APIURL}/rooms/registerRoom`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosParaEnviar),
      });

      if (!response.ok) {
        const datosError = await response.json();
        throw new Error(datosError.message || "No se pudo registrar la habitación.");
      }

      Swal.fire({
        icon: "success",
        title: "¡Registro exitoso!",
        timer: 1500,
      }).then(() => router.push("/"));
    } catch (error) {
      console.error("Error en el registro:", error);
      Swal.fire({
        icon: "error",
        title: "Error en el registro",
        text: "Intenta nuevamente más tarde.",
      });
    }
  };
  
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-3 justify-center"
      >
        <div className="bg-gray-300 p-4 flex flex-col gap-4">
          <FileUploader
            onFileUpload={(fileUrl) =>
              setFormData((prev) => ({ ...prev, image: fileUrl }))
            }
          />
          <p
            className={`text-red-500 text-xs mt-0 ${
              errors.image ? "" : "invisible"
            }`}
            style={{ minHeight: "0.5rem" }}
          >
            {errors.image}
          </p>
          <div className="flex flex-col justify-center gap-4 h-1/2">
            <label>Categoría</label>
            <input
              name="roomType"
              placeholder="Tipo de habitación"
              value={formData.roomType}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border border-gray-400 rounded p-2"
            />
            <p
              className={`text-red-500 text-xs mt-0 ${
                errors.roomType ? "" : "invisible"
              }`}
              style={{ minHeight: "0.5rem" }}
            >
              {errors.roomType}
            </p>
            <label>Descripción</label>
            <textarea
              name="description"
              placeholder="Información de la habitación"
              value={formData.description}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border border-gray-400 rounded p-2 resize-none h-24 w-full"
            />
            <p
              className={`text-red-500 text-xs mt-0 ${
                errors.description ? "" : "invisible"
              }`}
              style={{ minHeight: "0.5rem" }}
            >
              {errors.description}
            </p>
          </div>
        </div>

        <div className="bg-white p-8 flex flex-col gap-4">
          <h1>Gestión de alojamientos</h1>
          <label>Título</label>
          <input
            name="title"
            placeholder="Nombre de la habitación"
            value={formData.title}
            onChange={handleChange}
            onBlur={handleBlur}
            className="border border-gray-400 rounded p-1.5 m-0"
          />
          <p
            className={`text-red-500 text-xs mt-0 ${
              errors.title ? "" : "invisible"
            }`}
            style={{ minHeight: "0.5rem" }}
          >
            {errors.title}
          </p>
          <label>Tamaño</label>
          <input
            name="size"
            placeholder="Tamaño de la habitación en m2"
            value={formData.size}
            onChange={handleChange}
            onBlur={handleBlur}
            className="border border-gray-400 rounded p-1.5 m-0"
          />
          <p
            className={`text-red-500 text-xs mt-0 ${
              errors.size ? "" : "invisible"
            }`}
            style={{ minHeight: "0.5rem" }}
          >
            {errors.size}
          </p>
          <label>Capacidad</label>
          <GuestsInput
            maxGuests={8}
            initialGuests={parseInt(formData.beds, 10) || 0}
            onGuestsChange={(value) =>
              setFormData((prev) => ({ ...prev, beds: value.toString() }))
            }
          />
          <p
            className={`text-red-500 text-xs mt-0 ${
              errors.beds ? "" : "invisible"
            }`}
            style={{ minHeight: "0.5rem" }}
          >
            {errors.beds}
          </p>
          <label>Puntuación</label>
          <input
            name="rating"
            placeholder="Rating del 0 al 5"
            value={formData.rating}
            onChange={handleChange}
            onBlur={handleBlur}
            className="border border-gray-400 rounded p-1.5 m-0"
          />
          <p
            className={`text-red-500 text-xs mt-0 ${
              errors.rating ? "" : "invisible"
            }`}
            style={{ minHeight: "0.5rem" }}
          >
            {errors.rating}
          </p>
          <label>Precio por noche</label>
          <input
            name="price"
            placeholder="Precio por noche"
            value={formData.price}
            onChange={handleChange}
            onBlur={handleBlur}
            className="border border-gray-400 rounded p-1.5 m-0"
          />
          <p
            className={`text-red-500 text-xs mt-0 ${
              errors.price ? "" : "invisible"
            }`}
            style={{ minHeight: "0.5rem" }}
          >
            {errors.price}
          </p>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-tertiary text-white border border-tertiary rounded-lg py-2 px-3 hover:bg-opacity-90"
            >
              Registrar
            </button>
          </div>
        </div>
      </form>
      <RoomList />
    </>
  );
};

export default RegisterForm;
