import { useContext } from "react";
import { motion } from "framer-motion";
import { MyContext } from "../../Context/Context";
import { telegramSVG } from "../../icons/icons";
import { ClipLoader } from "react-spinners";

const Form = () => {
  const { theme, formData, loading, handleChange, handleSubmit } = useContext(MyContext);

  const commonClass = `input input-lg px-5 border-0 border-b-2 focus:outline-none focus:placeholder:text-picto-primary placeholder:text-[15px] md:placeholder:text-lg focus:border-picto-primary w-full rounded-none px-0 ${
    theme === 'light'
      ? 'border-[#E6E8EB] bg-white text-black placeholder:text-gray-400'
      : 'border-gray-600 bg-gray-800 text-white placeholder:text-gray-400'
  }`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    focus: {
      scale: 1.01,
      transition: {
        duration: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.p
        className={`text-[12px] xs:text-[14px] max-lg:text-center sm:text-lg font-normal ${
          theme === 'light' ? 'text-soft-dark' : 'text-gray-300'
        }`}
        variants={inputVariants}
      >
        Looking to connect, share ideas, or discuss opportunities? Send me a message below.
      </motion.p>

      <div className="mx-2">
        <motion.form
          className="flex flex-col gap-4 mt-4"
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.input
            type="text"
            placeholder="Name*"
            className={commonClass}
            value={formData?.name || ''}
            onChange={(e) => handleChange('name')(e.target.value)}
            variants={inputVariants}
            whileFocus="focus"
            required
          />

          <motion.input
            type="email"
            placeholder="Email*"
            className={commonClass}
            value={formData?.email || ''}
            onChange={(e) => handleChange('email')(e.target.value)}
            variants={inputVariants}
            whileFocus="focus"
            required
          />

          <motion.input
            type="text"
            placeholder="Subject*"
            className={commonClass}
            value={formData?.subject || ''}
            onChange={(e) => handleChange('subject')(e.target.value)}
            variants={inputVariants}
            whileFocus="focus"
            required
          />

          <motion.textarea
            placeholder="Message*"
            className={`${commonClass} min-h-[100px] resize-none pt-3`}
            value={formData?.message || ''}
            onChange={(e) => handleChange('message')(e.target.value)}
            variants={inputVariants}
            whileFocus="focus"
            required
          />

          <motion.button
            type="submit"
            className="btn gap-3 max-lg:mx-auto btn-primary rounded-sm mt-5 text-[13px] md:text-[16px] w-fit font-semibold lg:mt-12.5 p-2 md:px-4"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {loading ? <ClipLoader color="#fff" size={30} /> : <>Submit {telegramSVG}</>}
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Form;