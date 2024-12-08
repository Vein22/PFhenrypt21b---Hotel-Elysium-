"use client";

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
      photos: ["/room1.jpg", "/room2.jpg", "/room3.jpg"],
    },
    {
      name: "Gimnasio",
      icon: "/gym.svg",
      photos: ["/gym1.jpeg", "/gym2.jpeg", "/gym3.jpeg"],
    },
    {
      name: "Piscina",
      icon: "/swimming.svg",
      photos: ["/pool1.jpeg", "/pool2.jpeg", "/pool3.jpeg"],
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
    <section className="py-16 bg-black text-white relative z-10">
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



    <div className="relative z-0"> 
      <Image
        src={service.icon}
        alt={service.name}
        width={64}
        height={64}
        className="mb-4"
      />
    </div>
    <h3 className="text-lg font-semibold z-0">{service.name}</h3> 



    {visibleService === service.name && (
      <div
        className={`absolute top-full mt-4 bg-black p-4 rounded-lg shadow-lg ${
          index === 0
            ? 'left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none'
            : index === services.length - 1
            ? 'right-1/2 transform translate-x-1/2 lg:right-0 lg:transform-none'
            : 'left-1/2 transform -translate-x-1/2'
        }`}
        style={{
          boxShadow: '0 4px 15px rgba(251, 191, 36, 0.8)',
          maxWidth: 'calc(100vw - 48px)',
          zIndex: 99999, 
        }}
      >
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-4 z-99999">
          {service.photos.map((photo, photoIndex) => (
            <div
              key={photoIndex}
              className="w-[180px] h-[180px] flex-shrink-0 overflow-hidden border-2 border-amber-600 rounded-lg"
              style={{ zIndex: 99999 }}
            >
              <Image
                src={photo}
                alt={`${service.name} Foto ${photoIndex + 1}`}
                width={120}
                height={180}
                className="object-cover w-full h-full"
                style={{ objectPosition: 'top' }}
              />
            </div>
          ))}
        </div>
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
