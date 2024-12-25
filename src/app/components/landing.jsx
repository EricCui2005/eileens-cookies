import VaraText from './varaText';
import NavBar from './navBar';

export default function Landing() {
  return (
    <>
      <div id="landing-div" className="h-[100vh] w-[100vw]">
        <NavBar />
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
