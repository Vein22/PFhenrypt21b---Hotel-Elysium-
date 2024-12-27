"use client";
import React, { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`bg-grisOscuro text-white ${
        isExpanded ? "w-72" : "w-20"
      } h-auto p-4 transition-all duration-300`}
    >
      <div
        className={`font-bold text-grisClaro mb-4 transition-opacity duration-300 ${
          isExpanded ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <ul className="space-y-4">
        <li
          className="hover:text-mostaza cursor-pointer flex items-center"
          title="CLIENTES REGISTRADOS"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M9 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm6 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm-6 2c-2.67 0-8 1.34-8 4v2h8v-2c0-.68.33-1.34.88-1.72C7.91 16.77 8.45 16 9 16c.55 0 1.09.77 1.12 1.28.55.38.88 1.03.88 1.72v2h8v-2c0-2.66-5.33-4-8-4zm9.78 2c-.53 0-1.04.23-1.41.63-.43.46-.75 1.13-.75 1.84h2.52v-2c0-.26-.1-.52-.36-.72zM12 18v-2c-.78-.61-1.75-1-3-1s-2.22.39-3 1v2h6z"
              fill="currentColor"
            />
          </svg>
          {isExpanded && (
            <Link href="/clientdetails">
              Clientes Registrados
            </Link>
          )}
        </li>
        <li
          className="hover:text-mostaza cursor-pointer flex items-center"
          title="HISTORIAL DE CLIENTES"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 3v18h18V3H3zm17 17H4V10h16v10zm0-11H4V4h16v5zM6 13h2v2H6v-2zm0 3h2v2H6v-2zm3-3h2v2H9v-2zm0 3h2v2H9v-2zm3-3h2v2h-2v-2zm0 3h2v2h-2v-2zm3-3h2v2h-2v-2zm0 3h2v2h-2v-2zm-9-6h2v2H6v-2zm3 0h2v2H9v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2z" />
          </svg>
          {isExpanded && (
            <Link href="/clientlist" className="ml-4">
              Historial de Clientes
            </Link>
          )}
        </li>
        <li
          className="hover:text-mostaza cursor-pointer flex items-center"
          title="REGISTRO DE HABITACIONES"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M6 2v20h12V2H6zm11 18h-2V4h2v16zm-4 0h-2V4h2v16zm-4 0H7V4h2v16z"
              fill="currentColor"
            />{" "}
            <path d="M6 2H4v20h2V2zm14 0h-2v20h2V2z" fill="currentColor" />
          </svg>
          {isExpanded && (
            <Link href="/roomsManagement" className="ml-4">
              Registro de Habitaciones
            </Link>
          )}
        </li>

        <li
          className="hover:text-mostaza cursor-pointer flex items-center"
          title="LISTA DE HABITACIONES"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M21 10h-8V6c0-1.66-1.34-3-3-3s-3 1.34-3 3v4H3c-1.1 0-2 .9-2 2v7h2v-3h18v3h2v-7c0-1.1-.9-2-2-2zM10 6c0-.55.45-1 1-1s1 .45 1 1v4h-2V6zM3 15v-3h6v3H3zm8 0v-3h2v3h-2zm8 0h-6v-3h6v3z"
              fill="currentColor"
            />
          </svg>
          {isExpanded && (
            <Link href="/rooms" className="ml-4">
              Lista de Habitaciones
            </Link>
          )}
        </li>

        <li
          className="hover:text-mostaza cursor-pointer flex items-center"
          title="CREAR EMPLEADOS"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-4.42 0-8 3.58-8 8h16c0-4.42-3.58-8-8-8z" />
          </svg>
          {isExpanded && (
            <Link href="/employee" className="ml-4">
              Crear Empleados
            </Link>
          )}
        </li>
        <li
          className="hover:text-mostaza cursor-pointer flex items-center"
          title="MODIFICAR EMPLEADOS"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M15.41 6.17l1.41-1.41 2.83 2.83-1.41 1.41L20 10.59 21.41 12l1.41-1.41a2 2 0 0 0 0-2.83l-6.24-6.24a2 2 0 0 0-2.83 0L12 3.59 13.41 5l1.42-1.42-1.42 1.42L15.41 6.17zM3 20.59L20.59 3H14V1h9v9h-2V3.41L4.41 20.59 3 19.18z"
              fill="currentColor"
            />{" "}
            <path
              d="M14 18h-4v-1h4v1zm0 3h-4v-1h4v1zm2-8v1H8v-1h8zM4 5.41L5.41 4 11 9.59l-1.41 1.41L4 5.41zm1.41 13.18L2 20.59 3.41 22l3.41-3.41-1.41-1.41zM13 14h-2v-1h2v1zm-4 4h8v1H9v-1z"
              fill="currentColor"
            />
          </svg>
          {isExpanded && (
            <Link href="/employeelist" className="ml-4">
              Modificar Empleados
            </Link>
          )}
        </li>
        <li
          className="hover:text-mostaza cursor-pointer flex items-center"
          title="APROBAR TESTIMONIOS"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M10 10 H 190 V 140 H 10 Z"
              fill="#f0f0f0"
              stroke="#000"
              stroke-width="2"
            />
            <path
              d="M10 10 Q 0 75 10 140"
              fill="none"
              stroke="#000"
              stroke-width="2"
            />
          </svg>
          {isExpanded && (
            <Link href="/testimonialsadmin" className="ml-3">
              Aprobar Testimonios
            </Link>
          )}
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
