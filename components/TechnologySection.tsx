"use client";

import React from "react";
import { Cpu, Brain, Share2, Waves, Network, Atom } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  Icon: React.ElementType;
  highlights: string[];
  color: string;
}

export default function TechnologySection() {
  const features: Feature[] = [
    {
      title: "Quantum Simulation",
      description:
        "Leverage quantum-based modeling to achieve exponential acceleration in processing complex neuronal data.",
      Icon: Atom,
      highlights: [
        "Quantum circuit optimization",
        "Neural network mapping",
        "Real-time processing",
      ],
      color: "from-blue-500/10 to-purple-500/10",
    },
    {
      title: "AI-Driven Insights",
      description:
        "Advanced AI algorithms continuously optimize and refine predictions, guiding personalized treatment strategies.",
      Icon: Brain,
      highlights: [
        "Deep learning models",
        "Pattern recognition",
        "Predictive analytics",
      ],
      color: "from-purple-500/10 to-pink-500/10",
    },
    {
      title: "NeuroCore Engine",
      description:
        "A powerful, adaptable brain model that integrates multidimensional data, enabling precise forecasting of disease progression.",
      Icon: Share2,
      highlights: [
        "Multi-modal integration",
        "Adaptive modeling",
        "Real-time analysis",
      ],
      color: "from-pink-500/10 to-purple-500/10",
    },
  ];

  return (
    <section
      id="technology"
      className="py-20 bg-black px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        Technology
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        {features.map((feature, i) => {
          const { Icon } = feature;
          return (
            <div key={i} className="relative group">
              {/* Fondo con gradiente sutil */}
              <div
                className={`
                absolute inset-0 rounded-2xl 
                bg-gradient-to-br ${feature.color}
                group-hover:opacity-100 opacity-50 
                transition-opacity duration-500
              `}
              />

              {/* Contenido */}
              <div className="relative p-8 space-y-6">
                {/* Icono y título */}
                <div className="space-y-4">
                  <div className="inline-block p-3 rounded-xl bg-purple-500/10">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>

                {/* Descripción */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Lista de características */}
                <ul className="space-y-3">
                  {feature.highlights.map((highlight, j) => (
                    <li
                      key={j}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <Waves className="w-4 h-4 mr-2 text-blue-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Línea decorativa */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
