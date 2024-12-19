export const clientDetails = async (id: string) => {
  const APIURL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(`${APIURL}/users/${id}`);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error en la respuesta del servidor: ${response.status} ${response.statusText}. Detalles: ${errorText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener detalles del cliente:', error);
    throw error;
  }
};

