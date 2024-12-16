'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

interface Reservation {
  id: number
  roomNumber: string
  checkIn: string
  checkOut: string
}

interface Client {
  id: number
  name: string
  email: string
  phone: string
  reservations: Reservation[]
}

export default function ClientDetails() {
  const params = useParams()
  const id = params?.id
  const [client, setClient] = useState<Client | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchClientData = async () => {
      if (id) {
        try {
          // Simulamos una llamada a la API con un retraso
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          // Datos de ejemplo
          const mockClient: Client = {
            id: Number(id),
            name: 'Juan Pérez',
            email: 'juan@example.com',
            phone: '+1234567890',
            reservations: [
              { id: 1, roomNumber: '101', checkIn: '2023-06-01', checkOut: '2023-06-05' },
              { id: 2, roomNumber: '203', checkIn: '2023-07-15', checkOut: '2023-07-20' },
            ]
          }
          setClient(mockClient)
        } catch (error) {
          console.error('Error fetching client data:', error)
        } finally {
          setLoading(false)
        }
      } else {
        setLoading(false)
      }
    }

    fetchClientData()
  }, [id])

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Cargando...</div>
  }

  if (!client) {
    return <div className="flex justify-center items-center h-screen">No se encontró el cliente</div>
  }

  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Detalles del Cliente</h2>
      <div className="mb-6">
        <p><strong>Nombre:</strong> {client.name}</p>
        <p><strong>Email:</strong> {client.email}</p>
        <p><strong>Teléfono:</strong> {client.phone}</p>
      </div>
      <h3 className="text-xl font-semibold mb-2">Historial de Reservas</h3>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Habitación
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Check-in
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Check-out
            </th>
          </tr>
        </thead>
        <tbody>
          {client.reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {reservation.roomNumber}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {reservation.checkIn}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {reservation.checkOut}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

