'use client'

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    { name: "Dayi Bustos", text: "Excelente Atención", rating: 5 },
    { name: "Elisabet Rodriguez", text: "Buena Atención", rating: 5 },
    { name: "Juan Pérez", text: "Servicio muy profesional", rating: 4 },
    { name: "Ana López", text: "Me sentí como en casa", rating: 5 },
    { name: "Carlos Gómez", text: "Ambiente relajante", rating: 4 },
    { name: "Lucía Fernández", text: "Lo recomiendo totalmente", rating: 5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 2 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto text-center">
        <div className="mb-8">
        <h2 className="text-[3rem]">Testimonios</h2>
        <p>Descubre como nuestros huéspedes han vivido experiencias inolvidables con nosotros.</p>
        </div>

        <div className="relative">
          <div className="flex flex-wrap justify-center items-center gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                
                className="relative bg-white border border-marronfuerte shadow-lg shadow-marronclaro rounded-lg p-6 w-72"
                style={{

                  zIndex:-1,

                }}
              >
                <div className="relative w-full h-2 bg-marron rounded mb-4"></div>
                <div className="absolute top-1 right-1 text-marronfuerte text-2xl">
                  <Image
                    src="/pluma.svg"
                    alt="Cliente Feliz"
                    width={30}
                    height={30}
                    className="mb-4"
                  />
                </div>
                <p className="italic text-gray-700">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="font-bold mt-4 text-marronfuerte">
                  - {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">
                  Rating: {testimonial.rating}⭐
                </p>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 flex items-center justify-between w-full px-4">
            <button
              onClick={prevSlide}
              className="bg-mostaza text-white p-3 rounded-full shadow-md hover:bg-opacity-70 transition"
            >
              &#9664;
            </button>
            <button
              onClick={nextSlide}
              className="bg-mostaza text-white p-3 rounded-full shadow-md border hover:bg-opacity-70 transition"
            >
              &#9654;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
