import About from "../components/about";
import Contact from "../components/contact";
import Experiences from "../components/experiences";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Divider from "../components/ui/divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <Experiences />
      <Contact />
    </main>
  );
}
