import { About } from "@/components/About";
import Contact from "@/components/Contact";
import { Courses } from "@/components/Courses";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Space from "@/components/Space";
import Space2 from "@/components/Space2";

export default function Home() {
  return (
    <main className=" bg-gray-200/20">
      
      <Hero />
      <Courses />
      <About />
      
      
      
      <Contact />
    </main>
  );
}
