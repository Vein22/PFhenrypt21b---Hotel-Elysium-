import Link from 'next/link';
import { FC } from 'react';

const SuccessPage: FC = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-6xl font-extrabold mb-12 text-center bg-gradient-to-r text-titulo bg-clip-text">
        Pago Exitoso
      </h2>
      <h1 className="text-4xl text-center mb-8">¡Gracias por tu compra!</h1>
      <p className="text-center mb-8">Tu transacción se ha completado con éxito. Pronto recibirás un correo electrónico con los detalles de tu compra.</p>
      <div className="text-center">
        <Link href="/" legacyBehavior>
          <a className="bg-mostaza border-mostaza uppercase text-white py-2 px-4 hover:bg-opacity-70 transition-all">
            Volver al Inicio
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
