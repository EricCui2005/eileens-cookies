'use client';
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Gallery />
      <Contact />
    </>
  );
}
