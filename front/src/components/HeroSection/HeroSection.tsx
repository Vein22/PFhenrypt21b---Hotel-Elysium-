const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center text-center"
      style={{ backgroundImage: "url(/fondo.webp)" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        
        <h1
          className="text-4xl text-white font-bold mb-4"
          style={{ textShadow: "2px 2px 4px rgba(217, 119, 6, 1)" }}
        >
          Vive una Experiencia Única en California
        </h1>

        <p className="text-white mb-6 font-bold">Hotel y Resort de Lujo</p>

        <button className="bg-amber-600 text-white border border-amber-800 rounded-lg py-2 px-4 hover:bg-opacity-90">
          Saber más
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
