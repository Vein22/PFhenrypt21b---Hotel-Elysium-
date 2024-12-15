import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex bg-beige justify-center items-center p-[6rem] gap-10">
        <div className="flex flex-col lg:flex-row p-4 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8 max-w-4xl">
          <div className="flex-1 max-w-md">
            <span className="font-primary text-mostaza uppercase">Elysium</span>
            <h6 className="font-primary text-[2.5rem] text-grisOscuro">
              CONTACTENOS
            </h6>
            <p className="my-6">
              Estamos aquí para ayudarte. No dudes en ponerte en contacto con
              nosotros para cualquier consulta, reserva o comentario. <br />
              Nuestro equipo está disponible para brindarte la mejor atención y
              asegurar que tu experiencia con nosotros sea inolvidable.
            </p>
            <div className="flex items-center border-b-1 border-mostaza py-4">
              <div className="flex items-center"></div>
              <Image
                src="/saul/phone-call.svg"
                alt="Teléfono"
                width={24}
                height={24}
              />
              <span className="text-grisOscuro font-secondary ml-4">
                555 123 456789
              </span>
            </div>
            <div className="flex items-center border-b-1 border-mostaza py-4">
              <Image
                src="/saul/mail.svg"
                alt="Correo electrónico"
                width={24}
                height={24}
              />
              <span className="text-grisOscuro font-secondary ml-4">
                example@gmail.com
              </span>
            </div>
            <div className="flex items-center py-4">
              <Image
                src="/saul/location.svg"
                alt="Dirección"
                width={24}
                height={24}
              />
              <span className="text-grisOscuro font-secondary ml-4">
                Calle falsa 123, Nº 789
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-md bg-grisOscuro text-white p-8 rounded-lg">
          <h2 className="text-[2.5rem]">CONSULTANOS</h2>
          <form className="my-4 space-y-4 font-secondary text-grisOscuro">
            <input
              type="text"
              placeholder="Nombre Completo"
              className="w-full p-3 bg-white placeholder-gray-400 focus:ring-2 focus:ring-mostaza focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-3 bg-white placeholder-gray-400 focus:ring-2 focus:ring-mostaza focus:outline-none"
              required
            />
            <textarea
              placeholder="Escribir mensaje"
              rows={5}
              className="w-full p-3 bg-white placeholder-gray-400 focus:ring-2 focus:ring-mostaza focus:outline-none"
              required
            ></textarea>
          </form>
          <button
            type="submit"
            className="w-full bg-mostaza p-3 transition duration-300 hover:bg-opacity-70"
          >
            ENVIAR MENSAJE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
