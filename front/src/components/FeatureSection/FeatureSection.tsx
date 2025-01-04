// import Image from "next/image";
// import Link from "next/link";

// const FeatureSection = () => {
//   return (
//     <section className="py-16">
//       <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
//         <div className="flex justify-center">
//           <Image
//             src="/saul/home-presentacion.png"
//             alt="Habitación de lujo"
//             className="w-[35rem]"
//             width={400}
//             height={200}
//           />
//         </div>
//         <article>
//           <div>
//             <h3 className="text-mostaza">Hotel y Resort de Lujo</h3>
//             <h2 className="text-[2.5rem] font-light uppercase">
//               El Mejor Hotel en la Ciudad de California
//             </h2>
//             <p>
//               Experimenta la perfección en Elysium, con vistas panorámicas a la
//               ciudad, piscina infinita y bar en la azotea. <br />
//               servicio personalizado y atención de primera categoría.
//             </p>
//             <div className="flex gap-8">
//               <div className="flex flex-wrap w-40">
//                 <h4 className="text-mostaza text-[4rem]">250</h4>
//                 <span className="text-mostaza text-[2.5rem]">+</span>
//                 <p>Habitaciones de Lujo</p>
//               </div>
//               <div>
//                 <h4 className="text-mostaza text-[4rem]">4.9</h4>
//                 <p>Calificación de los Clientes</p>
//               </div>
//             </div>
//           </div>
//           <div className=" h-[1.5px] bg-mostaza my-5"></div>
//           <div>
//             <button className="bg-mostaza border-mostaza uppercase text-white text-secondary py-2 px-4 hover:bg-opacity-70 transition-all">
//               <Link href="/rooms">Más Información</Link>
//             </button>
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// };

// export default FeatureSection;



import Image from "next/image";
import Link from "next/link";

const FeatureSection = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <Image
            src="/saul/home-presentacion.png"
            alt="Habitación de lujo"
            className="w-full max-w-[25rem] sm:max-w-[30rem] md:max-w-[35rem]"
            width={400}
            height={200}
          />
        </div>
        <article>
          <div>
            <h3 className="text-mostaza">Hotel y Resort de Lujo</h3>
            <h2 className="text-[2rem] sm:text-[2.5rem] font-light uppercase">
              El Mejor Hotel en la Ciudad de California
            </h2>
            <p className="mt-4">
              Experimenta la perfección en Elysium, con vistas panorámicas a la
              ciudad, piscina infinita y bar en la azotea. <br />
              servicio personalizado y atención de primera categoría.
            </p>
            <div className="flex flex-row gap-2 sm:gap-6 md:gap-8 mt-6">
              <div className="flex flex-wrap w-40">
                <h4 className="text-mostaza text-[3rem] sm:text-[4rem]">250</h4>
                <span className="text-mostaza text-[2rem] sm:text-[2.5rem]">+</span>
                <p className="text-sm sm:text-base">Habitaciones de Lujo</p>
              </div>
              <div>
                <h4 className="text-mostaza text-[3rem] sm:text-[4rem]">4.9</h4>
                <p className="text-sm sm:text-base">Calificación de los Clientes</p>
              </div>
            </div>
          </div>
          <div className="h-[1.5px] bg-mostaza my-5"></div>
          <div>
            <Link href="/rooms">
              <button className="text-white text-secondary py-2 px-4 hover:bg-opacity-70 transition-all">
                Más Información
              </button>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FeatureSection;