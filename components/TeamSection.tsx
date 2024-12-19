export default function TeamSection() {
  const team = [
    {
      name: "Lucas Alaniz Pintos PhD",
      role: "CEO & Research Director",
      img: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section
      id="team"
      className="py-20 bg-black px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        Meet the Team
      </h2>
      <div className="grid md:grid-cols-1 gap-8 justify-items-center">
        {team.map((member, i) => (
          <div key={i} className="text-center space-y-3">
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full border-2 border-purple-500"
            />
            <h3 className="text-lg font-bold text-white">{member.name}</h3>
            <p className="text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
