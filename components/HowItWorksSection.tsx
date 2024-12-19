export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-black px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-black text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        How It Works
      </h2>
      <div className="grid md:grid-cols-4 gap-6 text-center">
        <div className="space-y-3">
          <div className="text-2xl font-bold text-white">
            1. Data Collection
          </div>
          <p className="text-gray-300">
            Collect patient-specific brain scans, genetic info, and clinical
            data.
          </p>
        </div>
        <div className="space-y-3">
          <div className="text-2xl font-bold text-white">
            2. Quantum Simulation
          </div>
          <p className="text-gray-300">
            Run quantum-driven models for rapid neural network simulations.
          </p>
        </div>
        <div className="space-y-3">
          <div className="text-2xl font-bold text-white">3. AI Analysis</div>
          <p className="text-gray-300">
            AI refines predictions, identifying patterns and potential
            interventions.
          </p>
        </div>
        <div className="space-y-3">
          <div className="text-2xl font-bold text-white">
            4. Actionable Insights
          </div>
          <p className="text-gray-300">
            Clinicians receive guidance, optimizing treatment plans and
            outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
