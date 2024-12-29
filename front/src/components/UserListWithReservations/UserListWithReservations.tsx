'use client'; // Next.js 15 requiere esto para componentes que usan hooks

import { fetchClientsWithReservations } from '@/api/clientDetails';
import { useLoggin } from '@/context/logginContext';
import React, { useEffect, useState } from 'react';

interface Client {
  id: string;
  name: string;
  email: string;
  reservations: Array<{
    id: string;
    checkInDate: string;
    checkOutDate: string;
  }>;
}

const ClientList: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { userData } = useLoggin();

  const token = userData?.token ?? '';

  useEffect(() => {
    const getClients = async () => {
      try {
        setLoading(true);
        const data = await fetchClientsWithReservations(token);
        setClients(data);
      } catch (error: any) {
        if (error.message.includes('401')) {
          setError('No autorizado. Por favor, inicie sesión nuevamente.');
        } else {
          setError(error.message || 'Error al cargar los datos');
        }
      } finally {
        setLoading(false);
      }
    };

    getClients();
  }, []);

  if (loading)
    return <p className="text-center text-gray-500">Cargando clientes...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto py-6">
      <h1 className="text-2xl font-bold text-center text-blue-600">
        Clientes con Reservas
      </h1>
      <ul className="space-y-4 mt-6">
        {clients.map((client) => (
          <li
            key={client.id}
            className="border border-gray-300 rounded-lg p-4 shadow-md"
          >
            <h2 className="text-xl font-semibold">{client.name}</h2>
            <p className="text-gray-600">Email: {client.email}</p>
            <h3 className="mt-4 text-lg font-medium">Reservas:</h3>
            <ul className="mt-2 space-y-2">
              {client.reservations.map((reservation) => (
                <li
                  key={reservation.id}
                  className="bg-gray-100 p-2 rounded-lg"
                >
                  <p>
                    Desde:{' '}
                    <span className="font-semibold">
                      {new Date(
                        reservation.checkInDate
                      ).toLocaleDateString()}
                    </span>{' '}
                    hasta:{' '}
                    <span className="font-semibold">
                      {new Date(
                        reservation.checkOutDate
                      ).toLocaleDateString()}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
