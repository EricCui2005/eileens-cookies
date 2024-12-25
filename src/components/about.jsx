import Image from 'next/image';

export default function About() {
  return (
    <>
      <div
        id="about"
        className="bg-milk flex h-[75vh] items-center justify-center gap-[15vw] text-black"
      >
        <div className="flex-flex-col w-[50vw] items-center justify-center">
          <h1 className="mb-[2vw] text-[2vw]">ABOUT US</h1>
          <p className="text-[1.2vw]">
            Eileen&apos;s Cookies has been delighting the Erie community with custom, hand-crafted
            decorative cookies since 2021. Our focus is on delivering high-quality, made-to-order
            creations that add a personal touch to any occasion. With a commitment to both
            efficiency and excellence, we ensure every cookie meets the highest standards.
            <br />
            <span className="mt-[1vw] block"></span>
            Our signature royal icing sugar cookies are not only beautiful but can also be tailored
            to perfectly match your event. From weddings to baby showers and everything in between,
            we&apos;re here to make your celebration as sweet as it can be!
          </p>
        </div>
        <div className="relative h-[30vh] w-[30vh]">
          <Image src="/CookieIcon.png" fill alt="Cookie Icon" />{' '}
        </div>
      </div>
    </>
  );
}
