'use client';
import Landing from './components/Landing';
import About from './components/About';
import { TextField } from '@mui/material';
import ContactDetailsPair from './components/ContactDetailsPair';
// import { RowsPhotoAlbum } from 'react-photo-album';
// import { photos } from '@/data/galleryPhotos';

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <div id="cookies-gallery" className="bg-cream h-[100vh] text-black">
        <h1>Gallery</h1>
        {/* <RowsPhotoAlbum photos={photos} /> */}
      </div>
      <div id="contact" className="bg-lightGray h-[75vh] text-black">
        <div id="decorative-bar" className="h-[4vh] bg-white"></div>
        <div className="flex h-[71vh] flex-col items-center">
          <h1 className="my-[6vh] text-[1.5vw]">CONTACT</h1>
          <div className="flex gap-[16vw]">
            <div id="contact-fields" className="flex flex-col gap-4">
              <h1>ONLINE CONTACT</h1>
              <TextField id="name" label="Name" variant="outlined" />
              <TextField id="email" label="Email" variant="outlined" />
              <TextField id="Phone" label="Phone" variant="outlined" />
              <TextField id="Message" label="Message" variant="outlined" />
            </div>
            <div className="flex flex-col gap-4">
              <h1>GET IN TOUCH</h1>
              <ContactDetailsPair title="Email" content="eileencui@gmail.com" />
              <ContactDetailsPair title="Phone" content="814-308-0156" />
              <ContactDetailsPair title="Location" content="Coming Soon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
