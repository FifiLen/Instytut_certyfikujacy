import { About } from "@/components/About";
import { Courses } from "@/components/Courses";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <main className=" bg-gray-200/20">
      
      <Hero />
      <Courses />
      <About />
      
      
      
    </main>
  );
}
