import Image from "next/image";

type Service = {
  name: string;
  icon: string; 
};

const ServicesSection = () => {
  const services: Service[] = [
    { name: 'Desayuno Buffet', icon: '/breakfast.svg' },
    { name: 'Gimnasio', icon: '/gym.svg' },
    { name: 'Piscina', icon: '/swimming.svg' },
    { name: 'Peluquería', icon: '/hair.svg' },
    { name: 'Spa', icon: '/spa.svg' },
    { name: 'Servicio de habitación', icon: '/service.svg' },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Servicios Exclusivos</h2>

        <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.name} className="flex flex-col items-center">
              <Image
                src={service.icon}
                alt={service.name}
                width={48} 
                height={48}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
