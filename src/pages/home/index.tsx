import { Selected } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFotune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: Selected) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediaScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id={`${Selected.Home}`}
      className="gap-16 bg-gray-20 py-4 md:h-full md:py-10 md:pb-0"
    >
      {/* Image and main header */}
      <motion.div
        onViewportEnter={() => setSelectedPage(Selected.Home)}
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      >
        {/* Image header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="Home page text" />
              </div>
            </div>
            <p className="mt-8 text-sm md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optio
              itaque cum exercitationem voluptate consectetur ducimus iusto
              minus iste reprehenderit nostrum error.
            </p>
          </motion.div>
          {/* Action */}
          <motion.div
            className="md: mt-8 flex items-center justify-start gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton selectedPage={setSelectedPage}>Join Now</ActionButton>
            <AnchorLink
              className="cursor-pointer text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(Selected.ContactUs)}
              href={`#${Selected.ContactUs}`}
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </div>
        {/* Image */}
        <motion.div
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img src={HomePageGraphic} alt="Home page graphic" />
        </motion.div>
      </motion.div>
      {/* Sponsor */}
      {isAboveMediaScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto flex w-5/6 items-center gap-32">
            <img src={SponsorRedBull} alt="" />
            <img src={SponsorForbes} alt="" />
            <img src={SponsorFotune} alt="" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
