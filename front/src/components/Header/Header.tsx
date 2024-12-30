// "use client";

// import { useLoggin } from "@/context/logginContext";
// import { PaymentButton } from "../PaymentButton/PaymentButton";
// import Link from "next/link";
// import Image from "next/image";
// import React from "react";
// import CardUser from "./CardUser";
// import Switcher from "../Switcher";

// const Header = () => {
//   const { userData } = useLoggin();

//   return (
//     <header className="sticky top-0 z-50 w-full h-[4.5rem] bg-grisOscuro text-white z-10 flex justify-between items-center px-6">
//       <div className="flex items-center">
//         <Link href="/">
//           <Image
//             src="/HE.png"
//             alt="Elysim"
//             width={120}
//             height={50}
//             className="hover:scale-105 transition-transform duration-200"
//           />
//         </Link>
//       </div>
//       <nav className="flex items-center space-x-6 text-[1rem] uppercase">
//         <div className="flex space-x-6 text-[1rem] uppercase items-center">
//           <Link href="/" className="hover:text-mostaza">
//             Home
//           </Link>
//           <Link href="/rooms" className="hover:text-mostaza">
//             Habitaciones
//           </Link>
//           <Link href="/facilities" className="hover:text-mostaza">
//             Servicios
//           </Link>
//           <Link href="/contact" className="hover:text-mostaza">
//             Contacto
//           </Link>
//           <Switcher />
//         </div>
//       </nav>
//       <div className="space-x-4 flex items-center">
//         {userData?.token ? (
//           <>
//             {/* Esto está aquí provisional */}
//             <PaymentButton
//               amount={5000}
//               currency="usd"
//               description="Producto de ejemplo"
//             />
//             <CardUser />
//           </>
//         ) : (
//           <>
//             <Link href="/login">
//               <button >
//                 Iniciar Sesión
//               </button>
//             </Link>
//             <Link href="/register">
//               <button >
//                 Registrarse
//               </button>
//             </Link>
//           </>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;











'use client';

import { useState } from "react";
import { useLoggin } from "@/context/logginContext";
import { PaymentButton } from "../PaymentButton/PaymentButton";
import Link from "next/link";
import Image from "next/image";
import CardUser from "./CardUser";
import Switcher from "../Switcher";

const Header = () => {
  const { userData } = useLoggin();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-grisOscuro sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 bg-mostaza text-white hover:bg-mostaza hover:text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${menuOpen ? "hidden" : "block"} size-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${menuOpen ? "block" : "hidden"} size-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start gap-8">
            <div className="flex shrink-0 items-center">
              <Link href="/">
                <Image
                  src="/HE.png"
                  alt="Elysim"
                  width={120}
                  height={50}
                  className="hover:scale-105 transition-transform duration-200"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              <Link href="/" className="rounded-md px-3 py-2 text-white hover:text-mostaza">
                Home
              </Link>
              <Link href="/rooms" className="rounded-md px-3 py-2 text-white hover:text-mostaza">
                Habitaciones
              </Link>
              <Link href="/facilities" className="rounded-md px-3 py-2 text-white hover:text-mostaza">
                Servicios
              </Link>
              <Link href="/contact" className="rounded-md px-3 py-2 text-white hover:text-mostaza">
                Contacto
              </Link>
              <Switcher />
            </div>
          </div>
          <div className="uppercase absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {userData ? (
              <>
                <PaymentButton
                  amount={5000}
                  currency="usd"
                  description="Producto de ejemplo"
                />
                <CardUser />
              </>
            ) : (
              <div className="flex space-x-4">
                <Link href="/login" className="rounded-md px-3 py-2 font-bold text-white bg-mostaza hover:bg-gray-700">
                  Iniciar sesión
                </Link>
                <Link href="/register" className="hidden md:block rounded-md px-3 py-2 font-bold text-white bg-mostaza hover:bg-gray-700 hover:text-white">
                  Registrarse
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-grisOscuro sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link href="/" className="block rounded-md px-3 py-2 text-base font-medium text-white">
              Home
            </Link>
            <Link href="/rooms" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              Habitaciones
            </Link>
            <Link href="/facilities" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              Servicios
            </Link>
            <Link href="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              Contacto
            </Link>

            {!userData && (
              <div className="mt-6">
                <Link href="/login" className="rounded-md px-3 py-2 font-bold text-white bg-mostaza hover:bg-gray-700">
                  Iniciar sesión
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
