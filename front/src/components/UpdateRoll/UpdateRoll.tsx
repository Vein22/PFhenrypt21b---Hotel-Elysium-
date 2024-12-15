'use client'

//import { useState } from "react";
//!IMPORTANTE ESTE COMPONENTE ESTA EN PROCESO "NO LO CAMBIEN NI MODIFIQUE POR FAVOR"
export const UpdateRoll = () => {
//  const [searchQuery, setSearchQuery] = useState("");
//  const [user, setUser] = useState(null);  // Inicializa como null
//  const [newRole, setNewRole] = useState("");
//
 // const API = process.env.API_URL
  // Buscar usuario EXISTENTE
 // const handleSearch = async () => {
//    try {
//      const response = await fetch(`${API}/users?q=${searchQuery}`);
//      const data = await response.json();
 // 
 //     if (data.length > 0) {
 //       setUser(data[0]);  // Selecciona el primer usuario encontrado
 //     } else {
 //       alert("Usuario no encontrado");
 //       setUser(null);
 //     }
 //   } catch (error) {
 //     console.error("Error al buscar el usuario", error);
 //   }
 // };

  // Asignar rol a un USUARIO EXISTENTE
 // const handleAssignRole = async () => {
 //   if (!user || !newRole) return;
//  
//    try {
 //     const response = await fetch(`http://localhost:5000/users/${user}`, {
 //       method: "PUT",
 //       headers: {
 //         "Content-Type": "application/json",
 //       },
        //body: JSON.stringify({ ...user, role: newRole }),  // Asegúrate de que 'user' sea un objeto
 //     });
 // 
 //     if (response.ok) {
 //       alert("Rol asignado correctamente");
 //       setUser(null);
 //       setSearchQuery("");
 //       setNewRole("");
 //     } else {
 //       alert("Error al asignar el rol");
 //     }
//    } catch (error) {
//      console.error("Error al asignar el rol", error);
//    }
//  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Buscar Usuario</h1>

      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Escribe el nombre de usuario..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          /*value={searchQuery}*/
          /*onChange={(e) => setSearchQuery(e.target.value)}*/
        />
        <button
          /*onClick={handleSearch}*/
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Buscar
        </button>
      </div>

    {/* {user && user.name ? (
        <div className="mt-8 w-full max-w-md p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold text-gray-800">Detalles del Usuario</h2>
          <p className="mt-2 text-gray-600">
            <span className="font-bold">Nombre:</span> {user.name}
          </p>
          <p className="mt-1 text-gray-600">
            <span className="font-bold">Email:</span> {user.email}
          </p>

          <div className="mt-4">
            <label className="block text-gray-600">Asignar nuevo rol</label>
            <input
              type="text"
              placeholder="Escribe el nuevo rol..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
            />
          </div>


          <button
            onClick={handleAssignRole}
            className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
          >
            Asignar Rol
          </button>
        </div>
      ) : (
        <p className="mt-8 text-gray-600">No se ha encontrado un usuario o no tiene nombre disponible</p>
      )} */}
    </div>
  );
};

export default UpdateRoll;
