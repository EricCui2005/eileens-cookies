export default function NavButton({ text, ref }) {
  return (
    <>
      <a
        href={`#${ref}`}
        className="hover:bg-hoverBrown flex h-[100%] w-[10vw] items-center justify-center transition-colors duration-300"
      >
        {text}
      </a>
    </>
  );
}
