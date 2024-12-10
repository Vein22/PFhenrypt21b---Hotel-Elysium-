import React from 'react'
import SwiperComponent from "../../components/Rooms/CarouselComponent";

const page = () => {
  return (
    <div className="min-h-[75vh] pt-20">
        <h1>Habitaciones y Suites del Hotel Elysium</h1>
        <h2>Descubra nuestras elegantes opciones de alojamiento diseñadas para ofrecerle una experiencia única de confort y lujo</h2>
        <SwiperComponent/>
    </div>
  )
}

export default page