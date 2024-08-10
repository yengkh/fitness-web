import { Selected } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactusGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: Selected) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.reventDefault();
    }
  };

  const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-2 placeholder-white mb-4`;

  return (
    <section id={`${Selected.ContactUs}`} className="mx-auto w-5/6 pb-32 pt-32">
      <motion.div onViewportEnter={() => setSelectedPage(Selected.ContactUs)}>
        <motion.div
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
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
        </motion.div>
        <motion.div
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
          className="md:w-5/6"
        >
          <p className="mt-5 text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cum
            veniam omnis, laboriosam quos a tenetur expedita aperiam obcaecati
            mollitia libero alias praesentium deleniti et laborum assumenda
            temporibus. Non, velit.
          </p>
        </motion.div>
        {/* Form */}
        <div className="mt-10 justify-between gap-8 md:flex md:gap-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/589ab137fc41337372cfcfdd07b1baca"
            >
              <input
                className={`${inputStyles}`}
                placeholder="Name"
                type="text"
                {...register("name", {
                  required: true,
                  maxLength: 25,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is lower than 25 characters."}
                </p>
              )}
              <input
                className={`${inputStyles}`}
                placeholder="Email"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              <textarea
                className={`${inputStyles} resize-none`}
                placeholder="Message"
                rows={8}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 250,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "The message is must lest than 250 characters."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-10 py-2 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            <div className="w-full before:absolute before:-bottom-16 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                src={ContactusGraphic}
                alt="This is contact image "
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
