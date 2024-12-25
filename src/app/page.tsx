'use client';
import Landing from './components/landing';
import About from './components/about';
import Contact from './components/contact';
import Gallery from './components/gallery';

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
