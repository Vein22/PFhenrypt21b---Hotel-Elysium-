"use client";

import React, { useState } from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-56" : "w-20"
        } bg-black h-screen duration-300 fixed left-0 top-0 z-10 group lg:w-56 lg:flex`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="flex flex-col items-start justify-start w-full">
          <ul className="text-white space-y-4 mt-2 w-full">
            <li>
              <div className="text-gray-400 font-bold text-sm uppercase p-5 mb-4 hidden md:block">
                Administrador
              </div>
            </li>
            <li>
              <Link href="/dashboard">
                <MenuItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        d="M9 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm6 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm-6 2c-2.67 0-8 1.34-8 4v2h8v-2c0-.68.33-1.34.88-1.72C7.91 16.77 8.45 16 9 16c.55 0 1.09.77 1.12 1.28.55.38.88 1.03.88 1.72v2h8v-2c0-2.66-5.33-4-8-4zm9.78 2c-.53 0-1.04.23-1.41.63-.43.46-.75 1.13-.75 1.84h2.52v-2c0-.26-.1-.52-.36-.72zM12 18v-2c-.78-.61-1.75-1-3-1s-2.22.39-3 1v2h6z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                  title="Cientes Registrados"
                  open={open}
                />
              </Link>
            </li>
            <li>
              <Link href="/calendar">
                <MenuItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M3 3v18h18V3H3zm17 17H4V10h16v10zm0-11H4V4h16v5zM6 13h2v2H6v-2zm0 3h2v2H6v-2zm3-3h2v2H9v-2zm0 3h2v2H9v-2zm3-3h2v2h-2v-2zm0 3h2v2h-2v-2zm3-3h2v2h-2v-2zm0 3h2v2h-2v-2zm-9-6h2v2H6v-2zm3 0h2v2H9v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2z" fill="currentColor" />
                    </svg>
                  }
                  title="Historial de Clientes"
                  open={open}
                />
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <MenuItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M6 2v20h12V2H6zm11 18h-2V4h2v16zm-4 0h-2V4h2v16zm-4 0H7V4h2v16z" fill="currentColor" /> <path d="M6 2H4v20h2V2zm14 0h-2v20h2V2z" fill="currentColor" />
                    </svg>
                  }
                  title="Registro de Habitaciones"
                  open={open}
                />
              </Link>
            </li>
            <li>
              <Link href="/forms">
                <MenuItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M21 10h-8V6c0-1.66-1.34-3-3-3s-3 1.34-3 3v4H3c-1.1 0-2 .9-2 2v7h2v-3h18v3h2v-7c0-1.1-.9-2-2-2zM10 6c0-.55.45-1 1-1s1 .45 1 1v4h-2V6zM3 15v-3h6v3H3zm8 0v-3h2v3h-2zm8 0h-6v-3h6v3z" fill="currentColor" />
                    </svg>
                  }
                  title="Listado de Habitaciones"
                  open={open}
                />
              </Link>
            </li>
            <li>
              <Link href="/tables">
                <MenuItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor" />
                    </svg>
                  }
                  title="Crear Empleados"
                  open={open}
                />
              </Link>
            </li>
            <li>
              <Link href="/settings">
                <MenuItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 17c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zM12 1v4M12 19v4M4.22 4.22l2.828 2.828M16.95 16.95l2.828 2.828M4.22 19.78l2.828-2.828M16.95 7.05l2.828-2.828"
                      />
                    </svg>
                  }
                  title="Modificar Empleados"
                  open={open}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Botón de menú en dispositivos pequeños */}
      <button
        className="lg:hidden fixed left-2 top-4 z-20 bg-black text-white p-2 rounded-md"
        onClick={() => setOpen(!open)}
      >
        <FiMenu />
      </button>
    </div>
  );
}
