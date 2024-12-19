export default function TimelineSection() {
  const steps = [
    {
      year: "2024",
      detail: "Initial R&D phase, building the quantum simulation core.",
    },
    {
      year: "2025",
      detail: "Beta testing with research partners, refining AI models.",
    },
    {
      year: "2026",
      detail: "Clinical pilots in select hospitals, feedback loop established.",
    },
    {
      year: "2027",
      detail: "Full-scale deployment and integration into healthcare systems.",
    },
  ];

  return (
    <section
      id="timeline"
      className="py-20 bg-black px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-black text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
        Roadmap
      </h2>
      <div className="relative border-l border-gray-700 ml-6">
        {steps.map((s, i) => (
          <div key={i} className="mb-10 ml-8">
            <div className="absolute w-3 h-3 bg-purple-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="block mb-2 text-lg font-bold text-white">
              {s.year}
            </time>
            <p className="text-gray-300">{s.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
