import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-black px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto"
    >
      <h2 className="text-4xl font-black text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Contact
      </h2>
      <p className="text-gray-300 text-center mb-10 max-w-xl mx-auto">
        Whether you’re seeking more details about SASCOI, or looking to connect
        directly, we are here to help. Reach out and we will respond as soon as
        possible.
      </p>
      <div className="space-y-6 text-white">
        <div className="flex items-center gap-3 bg-gray-900/50 border border-gray-800 p-4 rounded-lg hover:border-purple-500 transition">
          <Mail className="w-6 h-6 text-blue-500" />
          <div className="flex flex-col">
            <span className="font-semibold">General Information</span>
            <a
              href="mailto:info@sascoisimulation.com"
              className="text-gray-300 hover:text-white transition"
            >
              info@sascoisimulation.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-gray-900/50 border border-gray-800 p-4 rounded-lg hover:border-purple-500 transition">
          <Mail className="w-6 h-6 text-blue-500" />
          <div className="flex flex-col">
            <span className="font-semibold">
              Direct Inquiries (Lucas Alaniz Pintos - CEO)
            </span>
            <a
              href="mailto:lucas@sascoisimulation.com"
              className="text-gray-300 hover:text-white transition"
            >
              lucas@sascoisimulation.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-gray-900/50 border border-gray-800 p-4 rounded-lg hover:border-purple-500 transition">
          <Phone className="w-6 h-6 text-blue-500" />
          <div className="flex flex-col">
            <span className="font-semibold">Phone</span>
            <a
              href="tel:+34611594909"
              className="text-gray-300 hover:text-white transition"
            >
              +34 611 594 909
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
