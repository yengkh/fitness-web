import { ClassesType, Selected } from "@/shared/types";
import Image1 from "@/assets/image1.png";
import Image2 from "@/assets/image2.png";
import Image3 from "@/assets/image3.png";
import Image4 from "@/assets/image4.png";
import Image5 from "@/assets/image5.png";
import Image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Classes from "./Classes";

type Props = {
  setSelectedPage: (value: Selected) => void;
};
const classes: Array<ClassesType> = [
  {
    id: 1,
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae fugit nisi, quos assumenda recusandae aut aperiam expedita dolorem. Quod eius, ex voluptates eaque fugit illo.",
    image: Image1,
  },
  {
    id: 2,
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae fugit nisi, quos assumenda recusandae aut aperiam expedita dolorem. Quod eius, ex voluptates eaque fugit illo.",
    image: Image2,
  },
  {
    id: 3,
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae fugit nisi, quos assumenda recusandae aut aperiam expedita dolorem. Quod eius, ex voluptates eaque fugit illo.",
    image: Image3,
  },
  {
    id: 4,
    name: "Yoga Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae fugit nisi, quos assumenda recusandae aut aperiam expedita dolorem. Quod eius, ex voluptates eaque fugit illo.",
    image: Image4,
  },
  {
    id: 5,
    name: "Weight Training Classes",
    image: Image5,
  },
  {
    id: 6,
    name: "Fitnes Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae fugit nisi, quos assumenda recusandae aut aperiam expedita dolorem. Quod eius, ex voluptates eaque fugit illo.",
    image: Image6,
  },
];

const OurClaases = ({ setSelectedPage }: Props) => {
  return (
    <section
      id={`${Selected.OurClasses}`}
      className="w-full bg-primary-100 py-32"
    >
      <motion.div onViewportEnter={() => setSelectedPage(Selected.OurClasses)}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
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
          className="mx-auto w-5/6"
        >
          <div className="md:w-5/6">
            <HText>OUR ClASSES</HText>
            <p className="mt-5 text-sm md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              iure sint animi nihil tempore corporis, sed ad? Corporis,
              veritatis dicta.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[350px] w-full overflow-y-hidden overflow-x-scroll">
          <ul className="w-[2800px whitespace-nowrap">
            {classes.map((items: ClassesType, index) => (
              <Classes
                key={`${items.id}-${index}`}
                name={items.name}
                description={items.description}
                image={items.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClaases;
