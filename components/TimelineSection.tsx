"use client";

import React from "react";
import { FlaskConical, Sparkles, Building2, Network } from "lucide-react";

interface Step {
  year: string;
  title: string;
  detail: string;
  Icon: React.ElementType;
}

export default function TimelineSection() {
  const steps: Step[] = [
    {
      year: "2024",
      title: "Research & Development",
      detail: "Initial R&D phase, building the quantum simulation core.",
      Icon: FlaskConical,
    },
    {
      year: "2025",
      title: "Beta Testing",
      detail: "Beta testing with research partners, refining AI models.",
      Icon: Sparkles,
    },
    {
      year: "2026",
      title: "Clinical Pilots",
      detail: "Clinical pilots in select hospitals, feedback loop established.",
      Icon: Building2,
    },
    {
      year: "2027",
      title: "Full Deployment",
      detail: "Full-scale deployment and integration into healthcare systems.",
      Icon: Network,
    },
  ];

  return (
    <section
      id="timeline"
      className="py-20 bg-black px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
        Roadmap
      </h2>

      <div className="relative">
        {/* Línea conectora horizontal */}
        <div className="absolute top-11 left-0 right-0 h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20" />

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const { Icon } = step;
            return (
              <div key={i} className="relative">
                {/* Punto en la línea temporal */}
                <div className="absolute top-11 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-purple-500" />

                {/* Contenido */}
                <div className="pt-16 text-center group">
                  <div className="mb-4 inline-flex items-center justify-center">
                    <Icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </div>
                  <time className="block text-lg font-semibold text-blue-400 mb-2">
                    {step.year}
                  </time>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400">{step.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
