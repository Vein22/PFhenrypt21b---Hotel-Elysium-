import Link from "next/link";

const Header = () => {
  return (
    <header className=" absolute w-full bg-black text-white shadow-md shadow-amber-600">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          <Link href="/" className="text-white hover:text-amber-600">
            Hotel
          </Link>
        </div>

        <nav className="flex-grow">
          <div className="flex justify-center space-x-6">
            <Link href="/" className="hover:text-amber-600">
              Home
            </Link>
            <Link href="rooms" className="hover:text-amber-600">
              Habitaciones
            </Link>
            <Link href="#services" className="hover:text-amber-600">
              Servicios
            </Link>
            <Link href="contact" className="hover:text-amber-600">
              Contacto
            </Link>
          </div>
        </nav>

        <div className="flex space-x-4">

          <Link href="/login">
            <button className="bg-amber-600 text-white border border-amber-800 rounded-lg py-2 px-4 hover:bg-opacity-90">
              Iniciar Sesión
            </button>
          </Link>

          <Link href="/register">
            <button className="bg-amber-600 text-white border border-amber-800 rounded-lg py-2 px-4 hover:bg-opacity-90">
              Registrarse
            </button>
          </Link>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
