import Navbar from "@/components/NavBar";
import Home from "@/sections/home";
import Career from "@/sections/Career";
import Achievements from "@/sections/Achievements";
import Life from "@/sections/Life";
import Contact from "@/sections/Contact";
export default function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <Career />
      <Achievements />
      <Life />
      <Contact />
    </div>
  );
}
