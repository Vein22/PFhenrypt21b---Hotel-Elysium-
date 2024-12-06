'use client'

import { useState } from "react";
import Image from "next/image";

type Service = {
  name: string;
  icon: string;
  photos: string[];
};

const ServicesSection = () => {
  const [visibleService, setVisibleService] = useState<string | null>(null);

  const services: Service[] = [
    {
      name: "Desayuno Buffet",
      icon: "/breakfast.svg",
      photos: ["/breakfast1.jpg", "/breakfast2.jpg", "/breakfast3.jpg"],
    },
    {
      name: "Gimnasio",
      icon: "/gym.svg",
      photos: ["/gym1.jpg", "/gym2.jpg", "/gym3.jpg"],
    },
    {
      name: "Piscina",
      icon: "/swimming.svg",
      photos: ["/pool1.jpg", "/pool2.jpg", "/pool3.jpg"],
    },
    {
      name: "Peluquería",
      icon: "/hair.svg",
      photos: ["/hair1.jpg", "/hair2.jpg", "/hair3.jpg"],
    },
    {
      name: "Spa",
      icon: "/spa.svg",
      photos: ["/spa1.jpg", "/spa2.jpg", "/spa3.jpg"],
    },
    {
      name: "Servicio de habitación",
      icon: "/service.svg",
      photos: ["/room1.jpg", "/room2.jpg", "/room3.jpg"],
    },
  ];

  const handleMouseEnter = (name: string) => {
    setVisibleService(name);
  };

  const handleMouseLeave = () => {
    setVisibleService(null);
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Servicios Exclusivos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="relative flex flex-col items-center transition-transform duration-300 hover:scale-110"
              onMouseEnter={() => handleMouseEnter(service.name)}
              onMouseLeave={handleMouseLeave}
            >



{/*Servicios */}
              <Image
                src={service.icon}
                alt={service.name}
                width={64}
                height={64}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold">{service.name}</h3>



{/* Fotos */}
              {visibleService === service.name && (
                <div
                  className={`absolute top-full ${
                    index === 0
                      ? "left-0"
                      : index === services.length - 1
                      ? "right-0"
                      : "left-1/2 transform -translate-x-1/2"
                  } mt-4 bg-black p-4 rounded-lg shadow-lg z-50 flex space-x-2`}
                  style={{ boxShadow: "0 4px 15px rgba(251, 191, 36, 0.8)" }} // 3D amber-600 shadow
                >
                  {service.photos.map((photo, photoIndex) => (
                    <Image
                      key={photoIndex}
                      src={photo}
                      alt={`${service.name} Foto ${photoIndex + 1}`}
                      width={100}
                      height={100}
                      className="rounded-lg border border-amber-600"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
