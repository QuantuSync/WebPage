export default function UseCasesSection() {
  const cases = [
    {
      title: "Early Diagnosis",
      desc: "Detect neurodegenerative diseases like Alzheimer's or Parkinson’s years before symptoms arise.",
    },
    {
      title: "Personalized Medicine",
      desc: "Tailor treatment protocols based on individual brain profiles and genetic markers.",
    },
    {
      title: "Drug Discovery",
      desc: "Accelerate the testing and refinement of new compounds for neurological conditions.",
    },
  ];

  return (
    <section
      id="use-cases"
      className="py-20 bg-black px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-black text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        Use Cases
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {cases.map((c, i) => (
          <div
            key={i}
            className="p-6 border border-gray-800 rounded bg-gray-900/50 backdrop-blur-sm hover:border-pink-500 transition transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-white mb-2">{c.title}</h3>
            <p className="text-gray-300">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
