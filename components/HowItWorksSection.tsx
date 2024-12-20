import React from "react";
import { Brain, Database, Cpu, LineChart } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-black px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16"
    >
      <h2 className="text-4xl font-black text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        How It Works
      </h2>

      {/* Bloques explicativos mejorados */}
      <div className="grid md:grid-cols-4 gap-6 text-center">
        <div className="space-y-4 p-6 rounded-xl bg-gradient-to-b from-blue-900/40 to-purple-900/40 border border-purple-500/20 hover:scale-105 transition-transform">
          <div className="flex justify-center">
            <Database className="w-12 h-12 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white">
            1. Data Collection
          </div>
          <p className="text-gray-300">
            Collect patient-specific brain scans, genetic info, and clinical
            data.
          </p>
        </div>

        <div className="space-y-4 p-6 rounded-xl bg-gradient-to-b from-blue-900/40 to-purple-900/40 border border-purple-500/20 hover:scale-105 transition-transform">
          <div className="flex justify-center">
            <Cpu className="w-12 h-12 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-white">
            2. Quantum Simulation
          </div>
          <p className="text-gray-300">
            Run quantum-driven models for rapid neural network simulations.
          </p>
        </div>

        <div className="space-y-4 p-6 rounded-xl bg-gradient-to-b from-blue-900/40 to-purple-900/40 border border-purple-500/20 hover:scale-105 transition-transform">
          <div className="flex justify-center">
            <Brain className="w-12 h-12 text-pink-400" />
          </div>
          <div className="text-2xl font-bold text-white">3. AI Analysis</div>
          <p className="text-gray-300">
            AI refines predictions, identifying patterns and potential
            interventions.
          </p>
        </div>

        <div className="space-y-4 p-6 rounded-xl bg-gradient-to-b from-blue-900/40 to-purple-900/40 border border-purple-500/20 hover:scale-105 transition-transform">
          <div className="flex justify-center">
            <LineChart className="w-12 h-12 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white">
            4. Actionable Insights
          </div>
          <p className="text-gray-300">
            Clinicians receive guidance, optimizing treatment plans and
            outcomes.
          </p>
        </div>
      </div>

      {/* Video debajo de los bloques */}
      <div className="mt-16 rounded-xl overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto rounded-xl"
        >
          <source src="/Demo_Plataforma.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
