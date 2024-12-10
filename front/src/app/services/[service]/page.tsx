import Image from "next/image";

type ServiceProps = {
  name: string;
  referencia: string;
  photos: string[];
  comments: { photo: string; comment: string }[];
};

const serviceData: Record<string, ServiceProps> = {
  breakfast: {
    name: "Desayuno Buffet",
    referencia: "Servicio de Desayuno Buffet",
    photos: ["/room1.jpg", "/room2.jpg", "/room3.jpg"],
    comments: [
      { photo: "/persona1.jpg", comment: "Disfruta de un desayuno delicioso y variado." },
      { photo: "/persona2.jpg", comment: "Productos frescos y de calidad para empezar tu día." },
      { photo: "/persona3.jpg", comment: "Opciones para todos los gustos y preferencias." },
    ],
  },
  gym: {
    name: "Gimnasio",
    referencia: "Servicio de Gimnasio",
    photos: ["/gym1.jpeg", "/gym2.jpeg", "/gym3.jpeg"],
    comments: [
      { photo: "/persona1.jpg", comment: "Equipamiento moderno para tu entrenamiento." },
      { photo: "/persona2.jpg", comment: "Abierto las 24 horas para tu conveniencia." },
      { photo: "/persona3.jpg", comment: "Entrena con vistas relajantes." },
    ],
  },
  swimming: {
    name: "Piscina",
    referencia: "Servicio de Piscina",
    photos: ["/pool1.jpeg", "/pool2.jpeg", "/pool3.jpeg"],
    comments: [
      { photo: "/persona1.jpg", comment: "Equipamiento moderno para tu disfrute." },
      { photo: "/persona2.jpg", comment: "Abierta las 24 horas para tu familia y amigos." },
      { photo: "/persona3.jpg", comment: "Disfruta y relájate en las mejores piscinas." },
    ],
  },
  hair: {
    name: "Peluquería",
    referencia: "Servicio Profesional de Peluqueria",
    photos: ["/hair1.jpg", "/hair2.jpg", "/hair3.jpg"],
    comments: [
      { photo: "/persona1.jpg", comment: "Atención profesional con los mejores tratamientos" },
      { photo: "/persona2.jpg", comment: "A toda hora nuestros los mejores cortes y tratamientos" },
      { photo: "/persona3.jpg", comment: "Impacta con los peinados modernos para ti, tu familia" },
    ],
  },
  spa: {
    name: "Spa",
    referencia: "Servicio de Spa",
    photos: ["/spa1.jpg", "/spa2.jpg", "/spa3.jpg"],
    comments: [
      { photo: "/persona1.jpg", comment: "Renuévate con nuestros tratamientos de spa." },
      { photo: "/persona2.jpg", comment: "Relájate en un ambiente de tranquilidad." },
      { photo: "/persona3.jpg", comment: "Descubre el lujo y el confort en cada detalle." },
    ],
  },
  roomservice: {
    name: "Servicio de Habitación",
    referencia: "Servicio de Atención a la Habitación",
    photos: ["/room1.jpg", "/room2.jpg", "/room3.jpg"],
    comments: [
      { photo: "/persona1.jpg", comment: "Bebidas y platos en la comodidad de tu habitación." },
      { photo: "/persona2.jpg", comment: "Disponible las 24 horas para tu conveniencia." },
      { photo: "/persona3.jpg", comment: "Los mejores vinos y platos para nuestros clientes." },
    ],
  },
};


/// Mortal 
const ServicePage = async ({ params }: { params: { service: string } }) => {
  const { service } = await params;

  const serviceDataItem = serviceData[service];

  if (!serviceDataItem) {
    return <p className="text-center text-black bg-white">Servicio no encontrado</p>;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">




        <h2 className="text-6xl font-extrabold mb-12 text-center bg-gradient-to-r from-amber-500 to-amber-700 text-transparent bg-clip-text">
          {serviceDataItem.referencia}
        </h2>

        <div className="space-y-12">
          {serviceDataItem.photos.map((photo, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              } items-center gap-8 relative`}
            >



              <div className={`absolute ${index % 2 === 0 ? "left-20 top-1 bottom-4" : "right-10 top-1 bottom-4"} z-1`}>
                <Image
                  src={serviceDataItem.comments[index].photo}
                  alt={`Persona ${index + 1} Apuntando al Comentario`}
                  width={320}
                  height={320}
                />
              </div>




              <div className="p-4 bg-white text-black rounded-lg shadow-lg border-4 border-amber-500 order-1 lg:order-2">
                <p className="text-lg">{serviceDataItem.comments[index].comment}</p>
              </div>




              <div
                className="rounded-lg shadow-lg border-4 border-amber-500 order-2 lg:order-1"
                style={{ width: "400px", height: "400px" }}
              >
                <Image
                  src={photo}
                  alt={`${serviceDataItem.name} Foto ${index + 1}`}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
