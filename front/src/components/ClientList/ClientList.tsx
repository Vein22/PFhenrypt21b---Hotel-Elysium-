'use client'

import { useState } from 'react'
import Link from 'next/link'
import EmployeeList from '../EmployeeForm/EmployeeList'

const mockClients = [
  { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
  { id: 2, name: 'María García', email: 'maria@example.com' },
  { id: 3, name: 'Carlos López', email: 'carlos@example.com' },
]

export default function ClientList() {
  const [filter, setFilter] = useState('')

  const filteredClients = mockClients.filter(client =>
    client.name.toLowerCase().includes(filter.toLowerCase()) ||
    client.email.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h4 className="text-xl font-semibold mb-4">Clientes Registrados</h4>
      <input
        type="text"
        placeholder="Buscar clientes..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <ul className="divide-y divide-gray-200">
        {filteredClients.map(client => (
          <li key={client.id} className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {client.name}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {client.email}
                </p>
              </div>
              <Link href={`/dashboard/clients/${client.id}`} className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Ver Detalles
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <EmployeeList />
    </div>
  )
}

