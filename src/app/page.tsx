'use client';
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import GalleryImage from './components/GalleryImage';

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <div id="cookies-gallery" className="bg-cream h-[150vh] text-black">
        <h1 className="mb-[4vh] pt-[4vh] text-center text-[1.5vw]">COOKIE GALLERY</h1>
        <div className="flex items-center justify-center gap-[2vw]">
          <div className="flex h-[125vh] w-[25vw] flex-col gap-[4vh]">
            <GalleryImage src="/galleryPictures/tree.JPG" h={50} />
            <GalleryImage src="/galleryPictures/babyShowerCookies.JPG" h={70} />
          </div>
          <div className="flex h-[125vh] w-[25vw] flex-col gap-[4vh]">
            <GalleryImage src="/galleryPictures/christmasCookies.JPG" h={40} />
            <GalleryImage src="/galleryPictures/snowFlakes.JPG" h={30} />
            <GalleryImage src="/galleryPictures/santa.JPG" h={46} />
          </div>
          <div className="flex h-[125vh] w-[25vw] flex-col gap-[4vh]">
            <GalleryImage src="/galleryPictures/brownieCookies.JPG" h={80} />
            <GalleryImage src="/galleryPictures/heart.JPG" h={40} />
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
