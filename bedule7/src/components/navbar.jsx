import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full shadow px-6 py-4 flex justify-between items-center bg-white sticky top-0 z-50">
      <h1 className="font-bold text-xl text-blue-600">Ruang Ekspresi</h1>
      <div className="flex gap-6 text-sm">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/program">Program</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/testimony">Testimony</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
    </nav>
  );
}