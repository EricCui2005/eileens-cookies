import NavButton from './navButton';

export default function NavBar() {
  return (
    <>
      <div
        id="navigation-links"
        className="justify-items flex h-[10vh] items-center justify-center bg-darkBrown text-[1.1vw]"
      >
        <NavButton text="HOME" ref="home" />
        <NavButton text="ABOUT" ref="about" />
        <NavButton text="COOKIES" ref="gallery" />
        <NavButton text="CONTACT" ref="contact" />
      </div>
    </>
  );
}
