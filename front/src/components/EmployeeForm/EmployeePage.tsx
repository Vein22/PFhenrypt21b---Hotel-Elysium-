// import { useState, useEffect } from "react";
// import EmployeeForm from "./EmployeeForm";
// import EmployeeList from "./EmployeeList";
// import { IEmployeeProps } from "@/interfaces/TypeEmployee";

// export default function EmployeeManager() {
//   const [employees, setEmployees] = useState<IEmployeeProps[]>([]);

//   useEffect(() => {
//     // Cargar la lista inicial de empleados desde la API
//     const fetchEmployees = async () => {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/employee`);
//       const data = await response.json();
//       setEmployees(data);
//     };
//     fetchEmployees();
//   }, []);

//   const addEmployee = (newEmployee: IEmployeeProps) => {
//     setEmployees([...employees, newEmployee]);
//   };

//   return (
//     <div>
//       <EmployeeForm addEmployee={addEmployee} />
//       <EmployeeList employees={employees} />
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import { IEmployeeProps } from "@/interfaces/TypeEmployee";
const App = () => {
  const [employees, setEmployees] = useState<IEmployeeProps[]>([]);

// ENDPOINT 
const APIURL = process.env.NEXT_PUBLIC_API_URL;
 const fetchEmployees = async () => {
  const response = await fetch(`${APIURL}/employee`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  setEmployees(data);
  return data;
};

  // Llamar a la función para obtener empleados al montar el componente
  useEffect(() => {
    fetchEmployees();

  }, []);

  console.log ('epa aqui empleados', employees)

  // Función para agregar un nuevo empleado
  const addEmployee = (newEmployee:IEmployeeProps) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  return (
    <div>
      <EmployeeForm addEmployee={addEmployee} />
      {/* <EmployeeList employeprop={employees} /> */}
    </div>
  );
};

export default App;
