export default function Testi() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-xl font-bold text-blue-900 text-center mb-10">
        Testimoni
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow">
            <p className="text-sm text-gray-700 mb-4">
              Belajar lintas jurusan sangat membantu meningkatkan skill.
            </p>
            <div className="font-semibold">Budi Santoso</div>
            <div className="text-xs text-gray-500">
              Mahasiswa Sistem Informasi
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
