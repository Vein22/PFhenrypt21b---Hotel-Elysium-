type Room = {
    id: string;
    title: string;
    size: string;
    beds: number;
    rating: number;
    image?: string;
    price: number;
    description: string;
    roomType: string;
    roomNumber: number;
    isDeleted: boolean;
    available: boolean;
  };

  const API_URL = process.env.NEXT_PUBLIC_API_URL

  export const editRoomsService = async (id: string, roomData: Partial<Room>) => {
    try {
      const response = await fetch(`${API_URL}/rooms/updateRoom/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(roomData),
      });
  
      const textResponse = await response.text();
      console.log('Cuerpo de la respuesta:', textResponse);
  
      if (!response.ok) {
        throw new Error(textResponse || 'Error al actualizar la habitación');
      }

      if (textResponse === 'Room changed successfully') {
        return 'Habitación actualizada exitosamente.';
      }
  
      try {
        const data = JSON.parse(textResponse);
        return data;
      } catch (err) {
        console.log('No se pudo parsear la respuesta como JSON', err);
        throw new Error('La respuesta no es un JSON válido');
      }
  
    } catch (error) {
      console.log("Error al realizar la solicitud de actualización:", error);
      throw error;
    }
  };
  