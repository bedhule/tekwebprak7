import HeroSection from "../components/HeroSection";
import Content from "../components/Content";
import Jadwal from "../components/Jadwal";
import Showcase from "../components/Showcase";
import Testi from "../components/Testi";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Content />
      <Jadwal />
      <Showcase />
      <Testi />
    </div>
  );
}
