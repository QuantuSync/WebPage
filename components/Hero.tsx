import React from "react";

const Hero = () =>
  React.createElement(
    "section",
    {
      className:
        "relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20",
    },
    React.createElement(
      "div",
      {
        className:
          "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5",
      },
      React.createElement(
        "video",
        {
          autoPlay: true,
          loop: true,
          muted: true,
          playsInline: true,
          className: "w-full h-full object-contain rounded-xl",
        },
        React.createElement("source", {
          src: "/SASCOIDemo.mp4",
          type: "video/mp4",
        })
      )
    ),
    // Añadimos un overlay sutil para mejorar el contraste
    React.createElement("div", {
      className: "absolute inset-0 bg-black/30",
    }),
    React.createElement(
      "div",
      {
        className: "relative z-10 text-center space-y-8 max-w-3xl mx-auto px-4",
      },
      React.createElement(
        "h1",
        {
          className: `
          text-5xl md:text-7xl font-black tracking-tighter mb-6 
          text-white
          [text-shadow:_0_0_30px_rgb(255_255_255_/_80%),_0_0_40px_rgb(147_51_234_/_90%),_0_0_60px_rgb(59_130_246_/_70%)]
        `,
        },
        "Quantum & AI for Brain Health"
      ),
      React.createElement(
        "p",
        {
          className: `
          text-xl max-w-xl mx-auto
          text-white font-semibold
          [text-shadow:_0_0_20px_rgb(255_255_255_/_70%),_0_0_30px_rgb(147_51_234_/_60%)]
        `,
        },
        "Harnessing quantum computing and artificial intelligence to revolutionize diagnosis, simulation, and treatment of neurodegenerative diseases."
      )
    )
  );

export default Hero;
