"use client";
import { useState } from "react";
import { searchUser } from "@/api/updateRollUser";
import { User } from "../../interfaces/user";
import Style from './updateRoll.module.css';
import Image from "next/image";
import img from '../../../public/Form Íconos/Name-User.png'

export const UpdateRoll = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    const results = await searchUser(searchTerm);
    setUsers(results);
  };

  return (
    <div className={Style.container}>
      <h1 className="">Buscar Usuario</h1>

      <div className={Style.seachContainer}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      <button
        onClick={handleSearch}>
        <Image src={img} width={30} height={30} alt="img"/>
      </button>
      </div>

    <div className={Style.datosContainer}>
      <h2 className={Style.datosTitulo}>{users.length > 0 ? 'Datos del usuario' : 'Aquí se mostrarán los datos del usuario que buscas'}</h2>
      {users.length > 0 && (
        <article className={Style.userContainer}>
          {users.map((user) => (
            <div
              key={user.id}
              className={Style.detallesContainer}>
              <p><span>Nombre:  </span>{user.name}</p>
              <p><span>Correo Elétronico:  </span>{user.email}</p>
              <p><span>Teléfono:  </span>{user.phone}</p>
              <p><span>DNI:  </span>{user.dni}</p>
              <p><span>ROLL:  </span>{user.isAdmin}</p>
              <p><span>Se unió el:  </span>{user.registrationDate}</p>
            </div>   
          ))}
        </article>
      )}
      {users.length > 0 && <div>
      <div className={Style.rollContainer}>
        <h2 className={Style.cambiarRoll}>Cambiar Roll</h2>     
      <select>
        <option value="user">Usuario</option>
        <option value="admin">Admin</option>
      </select>
    </div>
    <button className={Style.submit}>Cambiar Roll</button>
    </div> 
    }
    </div>

    </div>
  );
};

export default UpdateRoll;
