import Navbar from "@/components/NavBar";
import Home from "@/sections/home";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import BeyondTheCode from "@/sections/BeyondTheCode";
export default function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <BeyondTheCode />
      <Contact />
    </div>
  );
}
