import Image from 'next/image';

export default function GalleryImage({ src, h }) {
  return (
    <>
      <div className={`relative`} style={{ height: `${h}vh`, width: '100%' }}>
        <Image src={src} fill alt="Tree Cookie" />
      </div>
    </>
  );
}
