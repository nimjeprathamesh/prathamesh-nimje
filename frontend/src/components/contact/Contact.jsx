import { useContext } from "react";
import { motion } from "framer-motion";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { MyContext } from "../../Context/Context";
import { addressData } from "../../utils/constants";

const Contact = () => {
  const { theme } = useContext(MyContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="relative -bottom-15 -mt-15 z-10 px-2"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={`content p-4 md:p-10 lg:p-22 rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)] ${
          theme === 'light' ? 'bg-white' : 'bg-gray-700'
        }`}
        id="contact"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between">
          {/* Left Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <motion.p
                className={`text-[35px] max-lg:hidden font-semibold text-nowrap ${
                  theme === 'light' ? 'text-[#132238]' : 'text-white'
                }`}
                variants={titleVariants}
              >
                Contact Me
              </motion.p>
              <motion.p
                className={`text-[12px] xs:text-[14px] sm:text-lg md:text-lg max-lg:text-center pt-4 font-normal ${
                  theme === 'light' ? 'text-soft-dark' : 'text-gray-300'
                }`}
                variants={itemVariants}
              >
                I'd love to hear from you. Whether it's about my work, potential collaborations, or simply connecting, don't hesitate to get in touch.
              </motion.p>
            </motion.div>

            <motion.div
              className="my-8.75 sm:max-lg:flex justify-between items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {addressData.map((item, index) => (
                <Address item={item} key={index} index={index} />
              ))}
            </motion.div>

            <motion.div className="w-full max-lg:text-center max-md:mb-4" variants={itemVariants}>
              <SocialMedia position="left" />
            </motion.div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            className="w-full overflow-y-scroll py-6.5"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className={`text-xl mb-2 xs:text-2xl sm:text-2xl md:text-[38px] font-semibold lg:hidden text-center ${
                theme === 'light' ? 'text-[#132238]' : 'text-white'
              }`}
              variants={titleVariants}
            >
              Contact Me
            </motion.p>
            <Form />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;