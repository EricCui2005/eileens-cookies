import Landing from './components/Landing';
import About from './components/About';

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <div id="cookies-gallery" className="bg-cream h-[200vh] text-black">
        <h1>Gallery</h1>
      </div>
    </>
  );
}
