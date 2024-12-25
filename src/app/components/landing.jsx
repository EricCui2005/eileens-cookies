import Image from 'next/image';
import VaraText from './varaText';

export default function Landing() {
  return (
    <>
      <div id="landing-div" className="h-[100vh] w-[100vw]">
        <div className="flex h-[10vh] items-center justify-center bg-darkBrown">
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
          className="flex h-[90vh] w-[100vw] items-center justify-center bg-lightBrown"
        >
          <h1 className="text-[16vw] text-white">
            <VaraText text="Eileen's Cookies" />
          </h1>
        </div>
      </div>
    </>
  );
}
