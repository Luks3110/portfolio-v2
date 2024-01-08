import About from "./components/about";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Divider from "./components/ui/divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <Divider />
      <About />
      <Projects />
    </main>
  );
}
