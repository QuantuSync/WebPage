"use client";

import React from "react";
import { Brain, Microscope, HeartPulse, Binary } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      Icon: Brain,
      title: "Neural Innovation",
      description:
        "Advanced neural network simulations powered by quantum computing",
    },
    {
      Icon: Microscope,
      title: "Research Focus",
      description:
        "Bridging theoretical breakthroughs with practical applications",
    },
    {
      Icon: HeartPulse,
      title: "Healthcare Impact",
      description: "Transforming patient care through precision diagnostics",
    },
    {
      Icon: Binary,
      title: "Data Driven",
      description: "Processing complex datasets for actionable insights",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-black px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="space-y-16">
        {/* Encabezado y descripción principal */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            About SASCOI
          </h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              SASCOI is a groundbreaking platform that leverages the power of
              quantum computing and AI to transform how we understand, diagnose,
              and treat brain diseases. By simulating complex neural networks
              and analyzing massive datasets, SASCOI provides insights that were
              previously unreachable with classical methods.
            </p>
          </div>
        </div>

        {/* Grid de características destacadas */}
        <div className="grid md:grid-cols-4 gap-8">
          {highlights.map((item, i) => {
            const { Icon } = item;
            return (
              <div key={i} className="relative group p-6">
                {/* Fondo con gradiente sutil */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Contenido */}
                <div className="relative space-y-4">
                  <div className="inline-flex p-2 rounded-lg bg-purple-500/10">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Misión */}
        <div className="relative max-w-3xl mx-auto p-8 rounded-2xl">
          {/* Fondo con gradiente sutil */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10" />

          {/* Contenido */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Our Mission
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Our mission is to bridge the gap between cutting-edge research and
              practical healthcare applications, accelerating discoveries in the
              realm of neurodegenerative conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
