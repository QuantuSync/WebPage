"use client";

import React from "react";
import {
  Clock,
  FlaskConical,
  Dna,
  BrainCircuit,
  ArrowRight,
  Syringe,
  Activity,
  Microscope,
} from "lucide-react";

interface UseCase {
  title: string;
  desc: string;
  Icon: React.ElementType;
  benefits: string[];
  stats: {
    value: string;
    label: string;
  };
}

export default function UseCasesSection() {
  const cases: UseCase[] = [
    {
      title: "Early Diagnosis",
      desc: "Detect neurodegenerative diseases like Alzheimer's or Parkinson's years before symptoms arise.",
      Icon: BrainCircuit,
      benefits: [
        "Early intervention potential",
        "Preventive care planning",
        "Better treatment outcomes",
      ],
      stats: {
        value: "5+ years",
        label: "Earlier Detection",
      },
    },
    {
      title: "Personalized Medicine",
      desc: "Tailor treatment protocols based on individual brain profiles and genetic markers.",
      Icon: Dna,
      benefits: [
        "Custom treatment plans",
        "Genetic profiling",
        "Adaptive protocols",
      ],
      stats: {
        value: "93%",
        label: "Treatment Accuracy",
      },
    },
    {
      title: "Drug Discovery",
      desc: "Accelerate the testing and refinement of new compounds for neurological conditions.",
      Icon: FlaskConical,
      benefits: [
        "Rapid compound screening",
        "Reduced trial time",
        "Cost-effective research",
      ],
      stats: {
        value: "10x",
        label: "Faster Development",
      },
    },
  ];

  return (
    <section
      id="use-cases"
      className="py-20 bg-black px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        Use Cases
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        {cases.map((useCase, i) => {
          const { Icon } = useCase;
          return (
            <div key={i} className="group relative">
              {/* Card background with subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-purple-500/5 rounded-2xl group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-purple-500/10 transition-colors duration-300" />

              {/* Content */}
              <div className="relative p-8 space-y-6">
                {/* Header */}
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center p-3 rounded-xl bg-purple-500/10">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {useCase.desc}
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  {useCase.benefits.map((benefit, j) => (
                    <div
                      key={j}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 text-purple-400" />
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="pt-4 border-t border-purple-500/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">
                      {useCase.stats.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {useCase.stats.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
