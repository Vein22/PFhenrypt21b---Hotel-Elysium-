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
  
      // Reemplazamos la parte de parsear JSON por simplemente leer la respuesta como texto
      const textResponse = await response.text();
  
      // Log para verificar qué está devolviendo el servidor
      console.log("Respuesta del servidor:", textResponse);
  
      if (!response.ok) {
        throw new Error(textResponse || "Error al actualizar la habitación");
      }
  
      // Si el servidor devuelve un mensaje de éxito, retornamos ese mensaje
      return textResponse;  // No intentamos parsear como JSON, solo devolvemos el texto
  
    } catch (error) {
      console.log("Error al realizar la solicitud de actualización:", error);
      throw error;
    }
  };
  