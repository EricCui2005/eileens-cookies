import Image from 'next/image';

export default function GalleryImage({ src, h }) {
  return (
    <>
      <div
        className={`relative overflow-hidden rounded-3xl border border-2 border-lightGray drop-shadow-md`}
        style={{ height: `${h}vh`, width: '100%' }}
      >
        <Image src={src} fill alt="Tree Cookie" />
      </div>
    </>
  );
}
