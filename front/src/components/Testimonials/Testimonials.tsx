// 'use client'

// import React, { useState, useEffect, useCallback } from "react";
// import Image from "next/image";

// const Testimonials = () => {
//   const testimonials = [
//     { name: "Dayi Bustos", text: "Excelente Atención", rating: 5 },
//     { name: "Elisabet Rodriguez", text: "Buena Atención", rating: 5 },
//     { name: "Juan Pérez", text: "Servicio muy profesional", rating: 4 },
//     { name: "Ana López", text: "Me sentí como en casa", rating: 5 },
//     { name: "Carlos Gómez", text: "Ambiente relajante", rating: 4 },
//     { name: "Lucía Fernández", text: "Lo recomiendo totalmente", rating: 5 },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
//   }, [testimonials.length]);

//   const prevSlide = useCallback(() => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 2 + testimonials.length) % testimonials.length
//     );
//   }, [testimonials.length]);

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval);
//   }, [nextSlide]);

//   const visibleTestimonials = [
//     testimonials[currentIndex],
//     testimonials[(currentIndex + 1) % testimonials.length],
//     testimonials[(currentIndex + 2) % testimonials.length],
//   ];

//   return (
//     <section className="py-8">
//       <div className="container mx-auto text-center">
//         <div className="mb-8">
//         <h2 className="text-[3rem]">Testimonios</h2>
//         <p>Descubre como nuestros huéspedes han vivido experiencias inolvidables con nosotros.</p>
//         </div>

//         <div className="relative">
//           <div className="flex flex-wrap justify-center items-center gap-6">
//             {visibleTestimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="relative bg-white shadow-lg shadow-mostaza rounded-lg p-6 w-72"
//               >
//                 <div className="relative w-full h-2 bg-marron rounded mb-4"></div>
//                 <div className="absolute top-1 right-1 text-marronfuerte text-2xl">
//                   <Image
//                     src="/pluma.svg"
//                     alt="Cliente Feliz"
//                     width={30}
//                     height={30}
//                     className="mb-4"
//                   />
//                 </div>
//                 <p className="italic text-gray-700">
//                   &quot;{testimonial.text}&quot;
//                 </p>
//                 <p className="font-bold mt-4 text-marronfuerte">
//                   - {testimonial.name}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   Rating: {testimonial.rating}⭐
//                 </p>
//               </div>
//             ))}
//           </div>
//           <div className="absolute inset-y-0 flex items-center justify-between w-full px-4">
//             <button
//               onClick={prevSlide}
//               className="bg-mostaza text-white rounded-full hover:bg-opacity-70 transition"
//             >
//               &#9664;
//             </button>
//             <button
//               onClick={nextSlide}
//               className="bg-mostaza text-white rounded-full hover:bg-opacity-70 transition"
//             >
//               &#9654;
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Slider from "react-slick";

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

  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    });

    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  };

  const windowSize = useWindowSize();

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Pantallas móviles
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Pantallas medianas (tablets)
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const visibleTestimonials =
    windowSize.width >= 1024
      ? [
          testimonials[currentIndex],
          testimonials[(currentIndex + 1) % testimonials.length],
          testimonials[(currentIndex + 2) % testimonials.length],
        ]
      : testimonials.slice(currentIndex, currentIndex + 1);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-[3rem]">Testimonios</h2>
          <p>
            Descubre como nuestros huéspedes han vivido experiencias
            inolvidables con nosotros.
          </p>
        </div>

        {windowSize.width < 1024 ? (
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative shadow-lg bg-white shadow-beige rounded-lg p-4 w-64 border-grisClaro mx-auto"
              >
                <div className="relative w-full bg-beige rounded mb-4"></div>
                <div className="absolute top-1 right-1 text-marronfuerte text-2xl">
                  <Image
                    src="/pluma.svg"
                    alt="Cliente Feliz"
                    width={30}
                    height={30}
                    className="m-2"
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
          </Slider>
        ) : (
          <div className="relative">
            <div className="flex flex-wrap justify-center items-center gap-8">
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative shadow-lg shadow-mostaza rounded-lg p-6 w-72 border-gray-300"
                >
                  <div className="relative w-full h-2 bg-marron rounded mb-4"></div>
                  <div className="absolute top-1 right-1 text-marronfuerte text-2xl">
                    <Image
                      src="/pluma.svg"
                      alt="Cliente Feliz"
                      width={30}
                      height={30}
                      className="m-2"
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
                className="bg-mostaza text-white rounded-full hover:bg-opacity-70 transition w-10 h-10 flex items-center justify-center"
              >
                &#9664;
              </button>
              <button
                onClick={nextSlide}
                className="bg-mostaza text-white rounded-full hover:bg-opacity-70 transition w-10 h-10 flex items-center justify-center"
              >
                &#9654;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
