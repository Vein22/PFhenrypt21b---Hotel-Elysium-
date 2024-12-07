import React from 'react'
import CarouselComponent from "../../components/Rooms/CarouselComponent";

const page = () => {
  return (
    <div className="min-h-[75vh] mt-[120px]">
        <h1>Habitaciones y Suites del Hotel Elysium</h1>
        <h2>Descubra nuestras elegantes opciones de alojamiento diseñadas para ofrecerle una experiencia única de confort y lujo</h2>
        <CarouselComponent/>
    </div>
  )
}

export default page