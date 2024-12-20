"use client";

import React from "react";
import { Quote, Star, Building2, Award, BadgeCheck } from "lucide-react";

interface Testimonial {
  name: string;
  title: string;
  institution: string;
  comment: string;
  expertise: string;
  rating: number;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Dr. Maria López",
      title: "Lead Researcher",
      institution: "Neural Research Institute",
      expertise: "Neurodegenerative Diseases",
      comment:
        "SASCOI's simulations are light-years ahead of anything we've seen. It's game-changing for neurological research.",
      rating: 5,
    },
    {
      name: "John Nguyen, PhD",
      title: "Clinical Director",
      institution: "Advanced Medical Center",
      expertise: "Clinical Neurology",
      comment:
        "The level of insight we get into disease progression is astounding. This could revolutionize clinical decisions.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-black px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          Expert Testimonials
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Hear from leading researchers and clinicians about their experience
          with SASCOI
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {testimonials.map((t, i) => (
          <div key={i} className="relative group">
            {/* Fondo con gradiente sutil */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-pink-500/5 group-hover:from-pink-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-colors duration-300" />

            {/* Contenido */}
            <div className="relative p-8 space-y-6">
              {/* Icono de comilla */}
              <Quote className="w-8 h-8 text-purple-400 opacity-50" />

              {/* Comentario */}
              <p className="text-gray-300 text-lg leading-relaxed italic">
                "{t.comment}"
              </p>

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-purple-400 fill-purple-400"
                  />
                ))}
              </div>

              {/* Separador */}
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

              {/* Info del experto */}
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <p className="font-bold text-white mb-1">{t.name}</p>
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-gray-400">
                      <Award className="w-4 h-4 mr-2 text-pink-400" />
                      {t.title}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Building2 className="w-4 h-4 mr-2 text-pink-400" />
                      {t.institution}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <BadgeCheck className="w-4 h-4 mr-2 text-pink-400" />
                      {t.expertise}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
