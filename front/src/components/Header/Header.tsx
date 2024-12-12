"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import CardUser from "./CardUser";
import { useLoggin } from "@/context/logginContext";
import Switcher from "../Switcher";

const Header = () => {
  const { userData } = useLoggin();
  return (
    <header className="sticky top-0 w-full h-[4.5rem] bg-grisOscuro text-white z-10 grid grid-cols-3 place-items-center">
      {/* Logo */}
      <div>
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

      {/* Navbar */}
      <nav>
        <div className="space-x-6 text-[1rem] uppercase">
          <Link href="/" className="hover:text-mostaza">
            Home
          </Link>
          <Link href="/rooms" className="hover:text-mostaza">
            Habitaciones
          </Link>
          <Link href="/facilities" className="hover:text-mostaza">
            Servicios
          </Link>
          <Link href="/contact" className="hover:text-mostaza">
            Contacto
          </Link>
          <Switcher />
        </div>
      </nav>

      {/* User actions */}
      <div className="space-x-4">
        {userData?.token ? (
          <CardUser />
        ) : (
          <>
            <Link href="/login">
              <button className="bg-marron text-white border border-marronfuerte rounded-lg py-2 px-4 hover:bg-opacity-70">
                Iniciar Sesión
              </button>
            </Link>
            <Link href="/register">
              <button className="bg-marron text-white border border-marronfuerte rounded-lg py-2 px-4 hover:bg-opacity-70">
                Registrarse
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
