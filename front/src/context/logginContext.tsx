// "use client";
// import { useState, useEffect, createContext, useContext } from "react";



// import { userSession } from "@/interfaces/Types.session";

// export interface LogginContextProps {
//   userData: userSession | null;
//   setUserData: (userData: userSession | null) => void;
  
// }

// export interface LogginContextProps {
//   userData: userSession | null;
//   setUserData: (userData: userSession | null) => void;
  
  
// }


// export const LogginContext = createContext<LogginContextProps>({
//   userData: null,
//   setUserData: () => {},
// });

// export interface LogginProviderProps {
//   children: React.ReactNode;
// }


// export const LogginProvider: React.FC<LogginProviderProps> = ({ children }) => {
//   const [userData, setUserData] = useState<userSession | null>(null);
  



//   useEffect(() => {
//     if (userData) {
//       localStorage.setItem(
//         "sessionStart",
//         JSON.stringify({ token: userData.token, rolesUser:userData.userRoles, userData: userData.userData })
//       );
//     }
//   }, [userData]);


//   useEffect(() => {
//     const storedUserData = localStorage.getItem("sessionStart");
//     if (storedUserData) {
//       try {
//         const parsedData = JSON.parse(storedUserData);
//         setUserData(parsedData); 
//       } catch (error) {
//         console.error("Error parsing session data:", error);
//         setUserData(null);
//       }
//     }
//   }, []);
  

//   return (
//     <LogginContext.Provider
//       value={{
//         userData,
//         setUserData,
//       }}
//     >
//       {children}
//     </LogginContext.Provider>
//   );
// };


// export const useLoggin = () => useContext(LogginContext);


"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { userSession } from "@/interfaces/Types.session";

// Definir los tipos de datos
export interface LogginContextProps {
  userData: userSession | null; // El estado de usuario será de tipo `userSession` o `null`
  setUserData: (userData: userSession | null) => void; // Función para actualizar el estado
}

export const LogginContext = createContext<LogginContextProps>({
  userData: null, // Inicialmente no hay datos de usuario
  setUserData: () => {}, // Función vacía por defecto
});

export interface LogginProviderProps {
  children: React.ReactNode;
}

// Proveedor de contexto
export const LogginProvider: React.FC<LogginProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<userSession | null>(null);

  // Guardar datos en localStorage cuando se actualiza el estado de userData
  useEffect(() => {
    if (userData) {
      localStorage.setItem(
        "sessionStart",
        JSON.stringify({
          token: userData.token,
          userData: userData.userData
        })
      );
    }
  }, [userData]);

  // Cargar datos desde localStorage cuando el componente se monta
  useEffect(() => {
    const storedUserData = localStorage.getItem("sessionStart");
    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        setUserData(parsedData);
      } catch (error) {
        console.error("Error parsing session data:", error);
        setUserData(null);
      }
    }
  }, []);

  return (
    <LogginContext.Provider value={{ userData, setUserData }}>
      {children}
    </LogginContext.Provider>
  );
};

// Custom hook para acceder al contexto
export const useLoggin = () => useContext(LogginContext);
