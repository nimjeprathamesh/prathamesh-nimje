import { motion } from "framer-motion";

const InformationSummary = ({ item, index }) => {
  return (
    <motion.div 
      className="glass-stat-card text-center py-4 px-2 flex flex-col justify-center items-center rounded-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.3 + index * 0.1,
      }}
      whileHover={{ 
        y: -4,
        borderColor: "rgba(153, 41, 251, 0.4)",
      }}
    >
      <p className="text-2xl sm:text-3xl font-black bg-gradient-to-b from-[#9929fb] to-[#cc59ff] bg-clip-text text-transparent m-0">
        {item.description}
      </p>
      
      <p className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-slate-400 mt-1 mb-0 px-1 break-words">
        {item.title}
      </p>
    </motion.div>
  );
};

export default InformationSummary;