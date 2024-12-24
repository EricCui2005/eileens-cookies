import Image from 'next/image';

export default function Landing() {
  return (
    <>
      <div id="landing-div" className="h-[100vh] w-[100vw]">
        <div className="bg-darkBrown flex h-[10vh] items-center justify-center">
          <div
            id="navigation-links"
            className="justify-items flex items-center gap-24 text-[1.1vw]"
          >
            <a>HOME</a>
            <a>ABOUT</a>
            <a>COOKIES</a>
            <a>CONTACT</a>
          </div>
        </div>
        <div
          id="big-text-div"
          className="bg-lightBrown flex h-[90vh] w-[100vw] items-center justify-center"
        >
          <h1 className="text-[8vw]">Eileen&apos;s Cookies</h1>
        </div>
      </div>
    </>
  );
}
