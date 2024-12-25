import ContactDetailsPair from './contactDetailsPair';
import InputField from './inputField';

export default function Contact() {
  return (
    <>
      <div id="contact" className="h-[75vh] bg-lightGray text-black">
        <div id="decorative-bar" className="h-[4vh] bg-white"></div>
        <div className="flex h-[71vh] flex-col items-center">
          <h1 className="my-[6vh] text-[1.6vw]">CONTACT</h1>
          <div className="flex gap-[12vw]">
            <div id="contact-fields" className="flex w-[30vw] flex-col gap-4">
              <h1>ONLINE CONTACT</h1>
              <InputField placeholder="Name" />
              <InputField placeholder="Email" />
              <InputField placeholder="Phone" />
              <input
                type="text"
                placeholder="Message"
                className="h-[20vh] rounded-lg p-[0.5vw] text-gray-400"
              />
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
