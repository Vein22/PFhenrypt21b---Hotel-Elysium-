"use client";

import { useState } from "react";
import Swal from "sweetalert2";

const CreateTestimonio = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [rating, setRating] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const APIURL = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(`${APIURL}/testimonys`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, mensaje, rating }),
      });

      if (!response.ok) {
        throw new Error("Hubo un problema al enviar el testimonio.");
      }


      Swal.fire({
        icon: 'success',
        title: '¡Testimonio enviado!',
        text: 'Tu testimonio ha sido enviado correctamente.',
        confirmButtonText: 'Aceptar'
      });
    } catch (error) {

      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Hubo un error al enviar el testimonio. Intenta de nuevo.',
        confirmButtonText: 'Aceptar'
      });
      setError("Hubo un error al enviar el testimonio.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-4">
        Tu Testimonio es Importante para Elysium
      </h1>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="mensaje">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="rating">
            Rating (1-5)
          </label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            min="1"
            max="5"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full p-2 bg-mostaza text-white rounded-md"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Testimonio"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTestimonio;
