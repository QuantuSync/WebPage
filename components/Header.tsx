"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Technology", href: "#technology" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Use Cases", href: "#use-cases" },
  { name: "Leadership", href: "#leadership" },
  { name: "Roadmap", href: "#timeline" },
  { name: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return React.createElement(
    "header",
    {
      className: `fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`,
    },
    React.createElement(
      "div",
      {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
      },
      React.createElement(
        "div",
        {
          className: "flex justify-between items-center",
        },
        // Logo
        React.createElement(
          "div",
          { className: "relative" },
          React.createElement(
            "div",
            {
              className:
                "text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500",
            },
            "SASCOI"
          )
        ),
        // Desktop Navigation
        React.createElement(
          "nav",
          { className: "hidden md:flex items-center space-x-8" },
          React.createElement(
            "div",
            { className: "flex space-x-8 text-sm font-medium" },
            navigation.map((item) =>
              React.createElement(
                "a",
                {
                  key: item.name,
                  href: item.href,
                  className:
                    "relative group text-gray-300 hover:text-white transition-colors duration-300",
                },
                item.name,
                React.createElement("span", {
                  className:
                    "absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
                })
              )
            )
          ),
          React.createElement(
            "a",
            {
              href: "https://www.indiegogo.com/projects/sascoi-quantum-ai-for-transforming-brain-health/x/38305674#/",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 text-sm font-medium",
            },
            "Get Involved"
          )
        ),
        // Mobile Menu Button
        React.createElement(
          "button",
          {
            className: "md:hidden p-2 text-gray-300 hover:text-white",
            onClick: () => setMobileMenuOpen(!mobileMenuOpen),
          },
          mobileMenuOpen
            ? React.createElement(X, { className: "h-6 w-6" })
            : React.createElement(Menu, { className: "h-6 w-6" })
        )
      ),
      // Mobile Menu
      React.createElement(
        "div",
        {
          className: `md:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`,
        },
        React.createElement(
          "nav",
          { className: "pt-4 pb-3 space-y-2" },
          navigation.map((item) =>
            React.createElement(
              "a",
              {
                key: item.name,
                href: item.href,
                onClick: () => setMobileMenuOpen(false),
                className:
                  "flex items-center py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-300",
              },
              item.name,
              React.createElement(ChevronRight, {
                className: "ml-auto h-4 w-4",
              })
            )
          ),
          React.createElement(
            "div",
            { className: "pt-4 px-4" },
            React.createElement(
              "a",
              {
                href: "https://www.indiegogo.com/projects/sascoi-quantum-ai-for-transforming-brain-health/x/38305674#/",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 text-sm font-medium",
              },
              "Get Involved"
            )
          )
        )
      )
    )
  );
};

export default Header;
