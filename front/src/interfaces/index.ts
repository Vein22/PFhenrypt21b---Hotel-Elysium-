export interface Room {
    id: number,
    category: string, //Ejemplo: "Habitación de lujo"
    title: string, //Ejemplo: "Habitación familiar deluxe"
    size: string, //Ejemplo: "150 m2"
    beds: number, //Ejemplo: "2 camas King Size"
    rating: number, //Rating con estrellas
    image: string,
    price: number
}