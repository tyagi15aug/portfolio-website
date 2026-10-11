import { useState } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import type { ProjectEntry } from './types';

export function App() {
  const [activeDemo, setActiveDemo] = useState<ProjectEntry | null>(null);

  return (
    <>
      <Nav />
      <main className="wrap">
        <Hero />
        <Experience />
        <Projects onLaunchDemo={setActiveDemo} />
        <Skills />
        <Footer />
      </main>
      <DemoModal project={activeDemo} onClose={() => setActiveDemo(null)} />
    </>
  );
}
