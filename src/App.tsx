import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Nav />
      <main className="wrap">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </>
  );
}
