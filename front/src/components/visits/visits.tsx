'use client';

import { useEffect, useState } from 'react';

const APIURL = process.env.NEXT_PUBLIC_API_URL;



export default function Home() {
  const [visits, setVisits] = useState<number>(0);

  // useEffect(() => {
  //   const getClientIp = async () => {
  //     try {
  //       const response = await fetch('https://api.ipify.org?format=json'); 
  //       const data = await response.json();
  //       return data.ip;
  //     } catch (error) {
  //       console.error('Error al obtener la IP del cliente:', error);
  //       return null;
  //     }
  //   };
  //   const registerVisit = async (ip: string) => {
  //     try {


  //       const response = await fetch(`${APIURL}/visits`, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ ip }),
  //       });

  //       if (!response.ok) {
  //         console.error('Error al registrar la visita en el backend');
  //       }
  //     } catch (error) {
  //       console.error('Error al intentar registrar la visita:', error);
  //     }
  //   };


    
  //   const fetchVisits = async () => {
  //     try {
  //       const response = await fetch(`${APIURL}/visits`);
  //       const data = await response.json();

  //       if (Array.isArray(data)) {
  //         const lastVisit = data.reduce((latest, current) =>
  //           current.id > latest.id ? current : latest,
  //         );
  //         setVisits(lastVisit.id);
  //       } else {
  //         console.error('Respuesta inesperada del backend:', data);
  //       }
  //     } catch (error) {
  //       console.error('Error al obtener el contador de visitas:', error);
  //     }
  //   };
  //   getClientIp().then((ip) => {
  //     if (ip) {
  //       registerVisit(ip).then(fetchVisits);
  //     } else {
  //       console.error('No se pudo obtener la IP del cliente');
  //     }
  //   });
  // }, []); 

  useEffect(() => {
    const fetchTotalVisits = async () => {
      try {
        const response = await fetch(`${APIURL}/visits/total`);
        const data = await response.json();
  
        if (data && typeof data.total === 'number') {
          setVisits(data.total); // Actualiza el estado con la suma total
        } else {
          console.error('Respuesta inesperada del backend:', data);
        }
      } catch (error) {
        console.error('Error al obtener el contador de visitas:', error);
      }
    };
  
    const getClientIp = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json'); 
        const data = await response.json();
        return data.ip;
      } catch (error) {
        console.error('Error al obtener la IP del cliente:', error);
        return null;
      }
    };
  
    const registerVisit = async (ip: string) => {
      try {
        const response = await fetch(`${APIURL}/visits`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ip }),
        });
  
        if (!response.ok) {
          console.error('Error al registrar la visita en el backend');
        }
      } catch (error) {
        console.error('Error al intentar registrar la visita:', error);
      }
    };
  
    getClientIp().then((ip) => {
      if (ip) {
        registerVisit(ip).then(fetchTotalVisits);
      } else {
        console.error('No se pudo obtener la IP del cliente');
      }
    });
  }, []); // El array vacío asegura que solo se ejecute una vez
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Contador de Visitas</h1>
      <p className="text-2xl mt-4">Total de Visitas: {visits}</p>
    </div>
  );
}
