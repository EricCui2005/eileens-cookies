'use client';
import Landing from './components/landing';
import About from './components/about';
import Contact from './components/contact';
import Gallery from './components/gallery';

export default function Home() {
  return (
    <>
      <div id="home"></div>
      <Landing />
      <div id="about" className="absolute top-[75vh]"></div>
      <About />
      <div id="gallery"></div>
      <Gallery />
      <div id="contact"></div>
      <Contact />
    </>
  );
}
