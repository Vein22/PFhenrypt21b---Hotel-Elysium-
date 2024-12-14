import Image from "next/image";

const FeatureSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center items-center">
          <Image
            src="/habitacion.png"
            alt="Habitación de lujo"
            className="rounded-lg shadow-lg shadow-marronclaro"
            width={400}
            height={200}
          />
        </div>
        <div>
          <h1>Hotel y resort de lujo</h1>
          <h2 className="text-[2.5rem] uppercase">
            El Mejor Hotel en la Ciudad de California
          </h2>
          <h3 className="mb-6">Alojate y Volveras. La mejor Experiencia</h3>

          <ul className="flex">
            <li className="flex flex-col">
              <h3 className="text-primary text-mostaza text-[4rem]">250</h3>
              <span className="text-mostaza font-bold text-[3rem]">+</span>
              <p>Habitaciones de Lujo</p>
            </li>
            <li>
              <h3 className="text-primary text-[3rem] ml-5">4.9</h3>
              Calificación de los Clientes
            </li>
          </ul>

          <hr className="border-t-2 border-marron my-4" />
          <button className="bg-marron text-white border border-marron rounded-lg py-2 px-4 hover:bg-opacity-70">
            Más información
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
