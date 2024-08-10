import Logo from "@/assets/Logo.png";
import { PhoneArrowDownLeftIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo Image" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            possimus eos, consequatur corrupti perspiciatis doloremque fuga
            voluptatem a pariatur laborum, dicta suscipit esse at expedita.
          </p>
          <p>All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="cursor-pointer py-2 hover:underline">
            Lorem ipsum, dolor sit amet.
          </p>
          <p className="cursor-pointer hover:underline">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="cursor-pointer py-2 hover:underline">
            Lorem ipsum, dolor sit amet.
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="cursor-pointer py-2">Lorem ipsum, dolor sit amet.</p>
          <p className="cursor-pointer">Lorem ipsum dolor sit amet.</p>
          <p className="cursor-pointer py-2">Lorem ipsum, dolor sit amet.</p>
          <p className="mt-5 flex gap-2">
            <span>
              <PhoneArrowDownLeftIcon className="h-6 w-6" />
            </span>
            <span>(+855)123456789</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
