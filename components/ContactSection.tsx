"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  Copy,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const contactInfo = [
    {
      title: "General Information",
      value: "info@sascoisimulation.com",
      type: "email",
      icon: MessageSquare,
      description: "For general inquiries and information",
    },
    {
      title: "Direct Contact",
      value: "lucas@sascoisimulation.com",
      type: "email",
      icon: Mail,
      description: "Lucas Alaniz Pintos - CEO",
      subtitle: "Direct inquiries", // Añadido subtitle para mejor organización
    },
    {
      title: "Phone",
      value: "+34 611 594 909",
      type: "phone",
      icon: Phone,
      description: "Available during business hours (CET)",
    },
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(text);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return React.createElement(
    "section",
    {
      id: "contact",
      className: "py-20 bg-black px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto",
    },
    [
      React.createElement(
        "h2",
        {
          key: "title",
          className:
            "text-4xl font-black text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500",
        },
        "Get in Touch"
      ),

      React.createElement(
        "p",
        {
          key: "description",
          className: "text-gray-300 text-center mb-12 max-w-xl mx-auto",
        },
        "Whether you're seeking more details about SASCOI, or looking to connect directly, we are here to help. Reach out and we will respond as soon as possible."
      ),

      React.createElement(
        "div",
        {
          key: "grid",
          className: "grid md:grid-cols-3 gap-6",
        },
        contactInfo.map((info, i) => {
          const Icon = info.icon;
          return React.createElement(
            "div",
            {
              key: i,
              className: "group h-full", // Añadido h-full para igualar alturas
            },
            React.createElement(
              "div",
              {
                className:
                  "relative h-full p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 group-hover:border-purple-500/50 transition-all duration-300",
              },
              [
                React.createElement(
                  "div",
                  {
                    key: "header",
                    className: "flex items-center gap-3 mb-4",
                  },
                  [
                    React.createElement(
                      "div",
                      {
                        key: "icon-container",
                        className: "p-2 rounded-lg bg-blue-500/10 shrink-0", // Añadido shrink-0
                      },
                      React.createElement(Icon, {
                        className: "w-5 h-5 text-blue-400",
                      })
                    ),
                    React.createElement(
                      "div",
                      {
                        key: "title-container",
                        className: "space-y-1",
                      },
                      [
                        React.createElement(
                          "h3",
                          {
                            key: "title",
                            className: "font-semibold text-white",
                          },
                          info.title
                        ),
                        info.subtitle &&
                          React.createElement(
                            "p",
                            {
                              key: "subtitle",
                              className: "text-sm text-gray-400",
                            },
                            info.subtitle
                          ),
                      ]
                    ),
                  ]
                ),

                React.createElement(
                  "p",
                  {
                    key: "description",
                    className: "text-sm text-gray-400 mb-4 min-h-[40px]", // Altura mínima para alinear
                  },
                  info.description
                ),

                React.createElement(
                  "div",
                  {
                    key: "contact-value",
                    className:
                      "flex items-center gap-2 bg-gray-900/50 p-3 rounded-lg group/button overflow-hidden", // Añadido overflow-hidden
                  },
                  [
                    React.createElement(
                      "a",
                      {
                        key: "link",
                        href:
                          info.type === "email"
                            ? `mailto:${info.value}`
                            : `tel:${info.value}`,
                        className:
                          "text-gray-300 hover:text-white transition-colors flex items-center gap-2 truncate", // Añadido truncate
                      },
                      [
                        info.value,
                        React.createElement(ExternalLink, {
                          key: "external-icon",
                          className:
                            "w-4 h-4 opacity-0 group-hover/button:opacity-100 transition-opacity shrink-0", // Añadido shrink-0
                        }),
                      ]
                    ),
                    React.createElement(
                      "button",
                      {
                        key: "copy-button",
                        onClick: () => handleCopy(info.value),
                        className:
                          "p-1.5 rounded-md hover:bg-gray-800 transition-colors shrink-0", // Añadido shrink-0
                        title: "Copy to clipboard",
                      },
                      React.createElement(
                        copiedEmail === info.value ? CheckCircle : Copy,
                        {
                          className: `w-4 h-4 ${
                            copiedEmail === info.value
                              ? "text-green-400"
                              : "text-gray-400"
                          }`,
                        }
                      )
                    ),
                  ]
                ),
              ]
            )
          );
        })
      ),
    ]
  );
};

export default ContactSection;
