export default function Content() {
  const items = [
    {
      title: "Ideation",
      desc: "Brainstorming ide kreatif",
      color: "bg-yellow-200",
    },
    { title: "Creation", desc: "Membuat project nyata", color: "bg-green-200" },
    {
      title: "Collaboration",
      desc: "Kolaborasi lintas jurusan",
      color: "bg-blue-200",
    },
    { title: "Support", desc: "Pendampingan mentor", color: "bg-pink-200" },
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-10">
        Empat Pilar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {items.map((i) => (
          <div key={i.title} className={`${i.color} p-6 rounded-xl shadow-md`}>
            <h3 className="font-semibold text-lg mb-2">{i.title}</h3>
            <p className="text-sm text-gray-700">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
