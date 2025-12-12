export default function Jadwal() {
  return (
    <section className="container mx-auto px-6 py-16 text-center">
      <h2 className="text-2xl font-bold text-blue-900">Jadwal & Program</h2>
      <p className="text-gray-700 mt-2 mb-10">Kegiatan rutin setiap minggu</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg">Sabtu</h3>
          <p className="text-sm mt-2">Workshop Creative</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg">Selasa</h3>
          <p className="text-sm mt-2">Showcase Project</p>
        </div>
      </div>
    </section>
  );
}