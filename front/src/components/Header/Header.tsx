"use client";
import { useLoggin } from "@/context/logginContext";
import { PaymentButton } from "../PaymentButton/PaymentButton";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import CardUser from "./CardUser";
import Switcher from "../Switcher";

const Header = () => {
  const { userData } = useLoggin();
  return (
    <header className="sticky top-0 w-full h-[4.5rem] bg-grisOscuro text-white z-10 grid grid-cols-3 place-items-center">
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
      <nav>
        <div className="flex space-x-6 text-[1rem] uppercase items-center">
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
        <CardUser />
      </nav>
      <div className="space-x-4 flex items-center">
        {userData?.token ? (     
            <CardUser />
        ) : (
          <>
            {/* Esto esta aqui provisional ojo provisional va en componente de Reserva pero seguro
            lo van a modifcar ni modo */}
            <PaymentButton
              amount={5000}
              currency="usd"
              description="Producto de ejemplo"
            />
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
