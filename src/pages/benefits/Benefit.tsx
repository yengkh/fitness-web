import { Selected } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: Selected) => void;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-10 text-center md:mx-5"
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="cursor-pointer text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(Selected.ContactUs)}
        href={`#${Selected.ContactUs}`}
      >
        Learn More
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
