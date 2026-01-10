import { motion } from "framer-motion";

const InformationSummary = ({ item }) => {
  return (
    <motion.div 
      className={`bg-[#F6EBFE] text-center`}
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "#E9D5FD",
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-auto h-auto mx-2 sm:mx-4 my-5 xxs:my-5 sm:my-[17px]">
        <motion.p
          className={`text-[16px] xxs:text-[18px] sm:text-[32px] font-semibold text-gray-700`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
        >
          {item.description}
        </motion.p>
        <motion.p
          className={`text-[8px] xxs:text-[9px] sm:text-[16px] font-normal px-[0.90rem] sm:px-[1rem] text-wrap text-gray-500`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {item.title}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default InformationSummary;