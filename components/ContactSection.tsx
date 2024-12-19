export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-black px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto"
    >
      <h2 className="text-4xl font-black text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Contact Us
      </h2>
      <p className="text-gray-300 text-center mb-8">
        Interested in collaborating, investing, or learning more about SASCOI?
        Get in touch!
      </p>
      <form className="space-y-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded focus:ring-2 focus:ring-purple-500 text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded focus:ring-2 focus:ring-purple-500 text-white"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded focus:ring-2 focus:ring-purple-500 text-white"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
