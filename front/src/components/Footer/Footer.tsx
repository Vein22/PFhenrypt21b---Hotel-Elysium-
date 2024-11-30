import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-8">
      <div className="container mx-auto text-center">

        <div className="flex justify-between mb-8">
          <div className="flex items-center">
            <Image
              src="/direccion.svg"
              alt="Dirección"
              width={40}
              height={40}
              className="mr-2"
            />
            <div>
              <p className="text-xl font-semibold">Dirección</p>
              <p className="text-sm">Ejemplo de ubicación</p>
            </div>
          </div>


          <div className="flex items-center">
            <Image
              src="/phone.svg"
              alt="Teléfono"
              width={40}
              height={40}
              className="mr-2"
            />
            <div>
              <p className="text-xl font-semibold">Comunicate con Nosotros</p>
              <p className="text-sm">555-555-5555</p>
            </div>
          </div>


          <div className="flex items-center">
            <Image
              src="/email.svg"
              alt="Email"
              width={40}
              height={40}
              className="mr-2"
            />
            <div>
              <p className="text-xl font-semibold">Consultas y reservas</p>
              <p className="text-sm">proyectohenrypt21b@gmail.com</p>
            </div>
          </div>
        </div>


        <div className="w-1/4 h-1 bg-amber-600 mb-2 mx-auto"></div>


        <div className="mt-8">
          <p className="text-xl font-semibold mb-2">Síguenos en Nuestras Redes</p>

          <div className="w-1/4 h-1 bg-amber-600 mb-6 mx-auto"></div>

          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center">
              <div className="mb-2 hover:scale-110 transition-transform duration-200">
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={40}
                  height={40}
                  className="hover:fill-amber-600"
                />
              </div>
              <a href="#" className="hover:text-amber-600">Facebook</a>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-2 hover:scale-110 transition-transform duration-200">
                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  width={40}
                  height={40}
                  className="hover:fill-amber-600"
                />
              </div>
              <a href="#" className="hover:text-amber-600">X</a>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-2 hover:scale-110 transition-transform duration-200">
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="hover:fill-amber-600"
                />
              </div>
              <a href="#" className="hover:text-amber-600">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="w-1/4 h-1 bg-amber-600 mt-5 mb-1 mx-auto"></div>
        <p className="text-amber-500">© 2024, Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
