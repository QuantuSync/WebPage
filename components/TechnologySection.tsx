export default function TechnologySection() {
  const features = [
    {
      title: "Quantum Simulation",
      description:
        "Leverage quantum-based modeling to achieve exponential acceleration in processing complex neuronal data.",
    },
    {
      title: "AI-Driven Insights",
      description:
        "Advanced AI algorithms continuously optimize and refine predictions, guiding personalized treatment strategies.",
    },
    {
      title: "NeuroCore Engine",
      description:
        "A powerful, adaptable brain model that integrates multidimensional data, enabling precise forecasting of disease progression.",
    },
  ];

  return (
    <section
      id="technology"
      className="py-20 bg-black px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-black text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        Technology
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <h3 className="text-xl font-bold mb-2 text-white">{f.title}</h3>
            <p className="text-gray-300">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
