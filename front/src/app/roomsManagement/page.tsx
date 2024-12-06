"use client"
import React, { useState } from "react";

const page = () => {
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
    return (
        <div className="grid grid-cols-2 gap-3 m-16 min-h-screen justify-center">
            <div className="bg-gray-300 p-4 flex flex-col gap-4">
                <div className="bg-gray-500 h-2/3 flex justify-center items-center">
                    <button>Subir fotos</button>
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
                            className="bg-gray-300 rounded p-2 m-0"
                            onClick={decrementGuests}
                        >
                            -
                        </button>
                        <button
                            className="bg-gray-300 rounded p-2 m-0"
                            onClick={incrementGuests}
                        >
                            +
                        </button>
                    </div>
                </label>

                <button className="w-auto mx-auto">
                    Registrar
                </button>
            </div>
        </div>
    );
};

export default page