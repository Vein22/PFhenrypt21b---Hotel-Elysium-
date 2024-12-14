'use client'


import { useState } from "react";

export const  UpdateRoll = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const [newRole, setNewRole] = useState("");

  // Buscar usuario EXISTENTE°°°°°°°°°°°°°°°°°°
  const handleSearch = async () => {
    try {
      const response = await fetch(`pendiente?search=${searchQuery}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error al buscar el usuario", error);
    }
  };

  // Asignar roll a un USUARIO EXISTENTE°°°°°°°°°°°°°°°°
  const handleAssignRole = async () => {
    if (!user || !newRole) return;

    try {
      const response = await fetch(`/pendiente`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: newRole }),
      });

      if (response.ok) {
        alert("Rol asignado correctamente");
        setUser(null);
        setSearchQuery("");
        setNewRole("");
      } else {
        alert("Error al asignar el rol");
      }
    } catch (error) {
      console.log("Error al asignar el rol", error);
    }
  };

  return (
    <div>
      <h1>Asignar Rol a Usuario</h1>

      <input
        type="text"
        placeholder="Buscar usuario..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      {user && (
        <div>
          <h2>Usuario Encontrado</h2>
          <p>Nombre:</p>
          <p>Email:</p>

          <select
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
          >
            <option value="">Selecciona un rol</option>
            <option value="admin">Administrador</option>
            <option value="editor">Editor</option>
            <option value="viewer">Visualizador</option>
          </select>

          <button onClick={handleAssignRole}>Asignar Rol</button>
        </div>
      )}
    </div>
  );
}

export default UpdateRoll;