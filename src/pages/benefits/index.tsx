import HText from "@/shared/HText";
import { BenefitsType, Selected } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitsType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art facilities",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur enim totam voluptates dolores sed culpa pariatur amet laboriosam magnam id.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur enim totam voluptates dolores sed culpa pariatur amet laboriosam magnam id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and pro Trainers",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur enim totam voluptates dolores sed culpa pariatur amet laboriosam magnam id.",
  },
];

type Props = {
  setSelectedPage: (value: Selected) => void;
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id={`${Selected.Benifite}`}
      className="mx-auto min-h-full w-5/6 py-24"
    >
      <motion.div onViewportEnter={() => setSelectedPage(Selected.Benifite)}>
        {/* Benefits Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <HText>More Than Just A Gym.</HText>
          <p className="my-5 text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            dolor corrupti magnam doloribus delectus ab autem dicta, saepe
            obcaecati id.
          </p>
        </motion.div>

        {/* Benefits Body */}
        <motion.div
          className="mt-5 items-center justify-between md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitsType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Description */}
        <div className="mt-16 items-center justify-between gap-10 md:mt-28 md:flex">
          <img src={BenefitsPageGraphic} alt="Benefits Image" />

          <div>
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MLLIONS OF HAPPY MEMEBER GETTING{" "}
                    <span className="text-primary-500">FIT.</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae dolor, culpa perferendis, tempore quasi obcaecati
                voluptates, magni nihil ab cumque facilis. Voluptate cum qui in
                ex quidem! Perspiciatis, et qui itaque odio animi beatae
                quibusdam soluta sit odit tempora est explicabo aut rerum
                incidunt adipisci totam dolorum ab modi eos!
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae dolor, culpa perferendis, tempore quasi obcaecati
                voluptates, magni nihil ab cumque facilis. Voluptate cum qui in
                ex quidem! Perspiciatis, et qui itaque odio animi beatae
                quibusdam soluta sit odit tempora est explicabo aut rerum
                incidunt adipisci totam dolorum ab modi eos!
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <ActionButton selectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
