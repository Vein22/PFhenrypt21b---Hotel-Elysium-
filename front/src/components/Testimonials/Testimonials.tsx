type Testimonial = {
  name: string;
  text: string;
  rating: number;
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    { name: "Dayi Bustos", text: "Excelente Atención", rating: 5 },
    { name: "Elisabet Rodriguez", text: "Buena Atención", rating: 5 },
  ];

  return (
    <section className="py-16 bg-amber-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonio de un Cliente</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black text-white shadow-lg rounded-lg p-6 w-80"
            >
              <p className="italic">&quot;{testimonial.text}&quot;</p>
              <p className="font-bold mt-4">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
