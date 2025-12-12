import Shcase from "../assets/gambar.jpg";

export default function Showcase() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-10">
        Student Projects
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 md:pr-6">
          <h3 className="text-xl font-semibold mt-3">
            Creative Portfolio Platform
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            Platform karya mahasiswa dengan rating & feedback.
          </p>
          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
              Lihat Demo
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-end">
          <img
            src={Shcase}
            alt="Project screenshot"
            className="w-full h-48 md:h-56 object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
