"use client";

import React from "react";
import * as LucideIcons from "lucide-react";

interface Achievement {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function LeadershipSection() {
  const achievements: Achievement[] = [
    {
      icon: React.createElement(LucideIcons.Bot, {
        className: "w-5 h-5 text-purple-400",
      }),
      title: "Research Background",
      description:
        "Specialized in mechatronics engineering and AI applications",
    },
    {
      icon: React.createElement(LucideIcons.Award, {
        className: "w-5 h-5 text-purple-400",
      }),
      title: "PhD in Mechatronic Engineering",
      description: "Focus on advanced robotics and intelligent systems",
    },
    {
      icon: React.createElement(LucideIcons.BookOpen, {
        className: "w-5 h-5 text-purple-400",
      }),
      title: "Published Author",
      description: "Multiple books on engineering and technology innovations",
    },
    {
      icon: React.createElement(LucideIcons.Network, {
        className: "w-5 h-5 text-purple-400",
      }),
      title: "Industry Experience",
      description: "Leading quantum computing applications in healthcare",
    },
  ];

  return (
    <section
      id="leadership"
      className="py-20 bg-black px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        Leadership & Vision
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Perfil y visión */}
        <div className="space-y-6 text-center md:text-left">
          <div className="relative inline-block">
            <img
              src="Lucas.jpeg"
              alt="Dr. Lucas Alaniz Pintos"
              className="w-48 h-48 rounded-2xl object-cover border-2 border-purple-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Dr. Lucas Alaniz Pintos
            </h3>
            <p className="text-purple-400 font-semibold">
              Founder & Research Director
            </p>
            <p className="text-gray-300 leading-relaxed max-w-xl">
              "Our vision is to bridge the gap between advanced engineering and
              healthcare, leveraging quantum computing and AI to transform how
              we understand and treat neurodegenerative diseases."
            </p>
          </div>
        </div>

        {/* Logros y experiencia */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-xl transition-all duration-300"
            >
              {/* Fondo con gradiente sutil */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors duration-300" />

              {/* Contenido */}
              <div className="relative space-y-3">
                <div className="inline-flex p-2 rounded-lg bg-purple-500/10">
                  {item.icon}
                </div>
                <h4 className="text-white font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
