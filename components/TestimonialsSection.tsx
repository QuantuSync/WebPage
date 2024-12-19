export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Maria López",
      comment:
        "SASCOI's simulations are light-years ahead of anything we've seen. It's game-changing for neurological research.",
    },
    {
      name: "John Nguyen, PhD",
      comment:
        "The level of insight we get into disease progression is astounding. This could revolutionize clinical decisions.",
    },
  ];

  return (
    <section className="py-20 bg-black px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-black text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
        Testimonials
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-6 border border-gray-800 rounded bg-gray-900/50 backdrop-blur-sm"
          >
            <p className="text-gray-300 italic mb-4">"{t.comment}"</p>
            <p className="text-gray-400 font-bold text-right">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
