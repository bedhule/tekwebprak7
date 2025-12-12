import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Program from "./pages/Program";
import Projects from "./pages/Projects";
import Testimony from "./pages/Testimony";
import Contacts from "./pages/Contacts";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/program" element={<Program />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimony" element={<Testimony />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
