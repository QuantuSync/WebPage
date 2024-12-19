export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[600px] w-[600px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse" />
      </div>
      <div className="relative z-10 text-center space-y-8 max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Quantum & AI for Brain Health
        </h1>
        <p className="text-xl text-gray-300 max-w-xl mx-auto">
          Harnessing quantum computing and artificial intelligence to
          revolutionize diagnosis, simulation, and treatment of
          neurodegenerative diseases.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a
            href="#about"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="border border-purple-500 text-white px-8 py-3 rounded-lg hover:scale-105 hover:bg-purple-500/10 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
