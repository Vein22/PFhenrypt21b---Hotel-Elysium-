"use client";

import React, { useState } from "react";

const RegisterRoom = () => {
  const [guests, setGuests] = useState(0);

  const incrementGuests = () => {
    if (guests < 8) {
      setGuests(guests + 1);
    }
  };

  const decrementGuests = () => {
    if (guests > 0) {
      setGuests(guests - 1);
    }
  };

  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setImage(file);

    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Selecciona una imagen antes de subir.");
      return;
    }

    const formData = new FormData();
    formData.append("photo", image);
    console.log(formData);

    try {
      const response = await fetch("http://localhost:4000/rooms/registerRoom", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setUploadedUrl(data.url);
        alert("Imagen subida exitosamente.");
      } else {
        alert("Error al subir la imagen.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema al conectarse con el servidor.");
    }
  };

  return (
    <div className="grid grid-cols-2 gap-3 m-16 min-h-screen justify-center">
      {/* Panel izquierdo */}
      <div className="bg-gray-300 p-4 flex flex-col gap-4">
        <div className="bg-gray-500 h-2/3 flex flex-col justify-center items-center gap-4">
          {/* Vista previa de la imagen */}
          {previewUrl ? (
            <div className="flex flex-col items-center">
              <img src={previewUrl} alt="Preview" className="w-48 h-48 object-cover rounded" />
              <p className="text-sm text-gray-200 mt-2">Vista previa</p>
            </div>
          ) : (
            <p className="text-gray-200">Selecciona una imagen para verla aquí</p>
          )}

          {/* Botones de carga de archivo */}
          <div className="flex flex-col items-center gap-2">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border border-gray-300 p-2 rounded mb-2"
            />
            <button
              onClick={handleUpload}
              className=" px-4 py-2 rounded "
            >
              Subir Foto
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 h-1/3">
          <input
            type="text"
            placeholder="Nombre de la habitación"
            className="border border-gray-400 rounded p-2"
          />
          <textarea
            placeholder="Información de la habitación"
            className="border border-gray-400 rounded p-2 resize-none h-24 w-full"
          ></textarea>
        </div>
      </div>

      {/* Panel derecho */}
      <div className="bg-white p-4 flex flex-col gap-4 justify-center p-8">
        <h1>Gestión de alojamientos</h1>
        <label className="flex flex-col">
          <span>Precio</span>
          <input
            type="text"
            placeholder="$0"
            className="border border-gray-400 rounded p-2"
          />
        </label>

        <label className="flex flex-col">
          <span>Calificación</span>
          <input
            type="text"
            placeholder="1/5"
            className="border border-gray-400 rounded p-2"
          />
        </label>

        <label className="flex flex-col">
          <span>Comodidades</span>
          <div className="flex place-items-start gap-2">
            <input
              type="number"
              value={guests} // Vincula el valor al estado
              onChange={(e) =>
                setGuests(
                  Math.max(0, Math.min(8, Number(e.target.value))) // Restringe entre 0 y 8
                )
              }
              placeholder="Indique cantidad de huéspedes. Max 7"
              className="border border-gray-400 rounded p-2 flex-grow"
              max={8}
              min={0}
            />
            <button
              className=" rounded p-2 m-0"
              onClick={decrementGuests}
            >
              -
            </button>
            <button
              className= "rounded p-2 m-0"
              onClick={incrementGuests}
            >
              +
            </button>
          </div>
        </label>

        <button className="px-4 py-2 rounded mx-auto">
          Registrar
        </button>
      </div>
    </div>
  );
};

export default RegisterRoom;

