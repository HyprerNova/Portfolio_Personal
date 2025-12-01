import Navbar from "@/components/NavBar";
import Home from "@/sections/home";
import Career from "@/sections/Career";
import Contact from "@/sections/Contact";
import Life from "@/sections/Life";
export default function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <Career />
      <Life />
      <Contact />
    </div>
  );
}
