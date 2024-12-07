import { ApiBodyOptions } from "@nestjs/swagger"

export const createRoomSchema: ApiBodyOptions = {
    description: 'Formulario para crear una habitación con una imagen',
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        size: { type: 'string' },
        beds: { type: 'number' },
        rating: { type: 'number' },
        image: { type: 'string', format: 'binary' },
        price: { type: 'number' },
        roomType: { type: 'string' },
        description: { type: 'string' },
      },
    }
}
