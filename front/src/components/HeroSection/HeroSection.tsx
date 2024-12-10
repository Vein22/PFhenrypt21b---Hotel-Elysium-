'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center text-center"
      style={{ backgroundImage: "url(/fondo3.png)" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-4xl mx-auto">
        <h1
          className="text-4xl text-white font-bold mb-4"
          style={{ textShadow: "2px 2px 4px rgba(217, 119, 6, 1)" }}
        >
          Vive una Experiencia Única en California
        </h1>

        <p
          className="text-2xl text-white mb-6 font-bold"
          style={{ textShadow: "2px 2px 4px rgba(217, 119, 6, 1)" }}
        >
          Hotel y Resort de Lujo
        </p>

        <motion.button
          className="bg-amber-600 text-white border border-amber-800 rounded-lg py-2 px-4 hover:bg-amber-700 transition-all"
          whileHover={{ scale: 1.05 }}
          onClick={() => setShowMessage(!showMessage)}
        >
          Saber más
        </motion.button>

        {showMessage && (
          <motion.div
            className="mt-6 p-4 text-xl bg-white text-black rounded-lg shadow-lg border-4 border-amber-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <p>El hotel perfecto. 
            Si buscas unas vacaciones perfectas y recuerdos inolvidables, estás en el lugar indicado. Planifiquemos una estancia a tu medida, con los mejres Servicios, Atención en Habitación, Spa, Gimnasio, Peluqueria Profesional, Desayunos Buffet, la mejor Seguridad y mucho mas.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
