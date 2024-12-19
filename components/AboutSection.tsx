export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-black px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-black text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        About SASCOI
      </h2>
      <p className="text-gray-300 text-center max-w-3xl mx-auto mb-6">
        SASCOI is a groundbreaking platform that leverages the power of quantum
        computing and AI to transform how we understand, diagnose, and treat
        brain diseases. By simulating complex neural networks and analyzing
        massive datasets, SASCOI provides insights that were previously
        unreachable with classical methods.
      </p>
      <p className="text-gray-300 text-center max-w-3xl mx-auto">
        Our mission is to bridge the gap between cutting-edge research and
        practical healthcare applications, accelerating discoveries in the realm
        of neurodegenerative conditions.
      </p>
    </section>
  );
}
