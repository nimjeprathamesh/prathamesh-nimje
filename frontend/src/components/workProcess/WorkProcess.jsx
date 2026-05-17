import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MyContext } from "../../Context/Context";
import { tabs } from "../../utils/constants";

const WorkProcess = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || 1);
  const { theme } = useContext(MyContext);

  // Advanced staggered orchestration variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const experienceCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
      rotateX: 8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 16
      }
    },
    exit: {
      opacity: 0,
      x: 30,
      scale: 0.95,
      transition: { duration: 0.3 }
    }
  };

  const detailVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.section 
      className={`flex flex-col px-4 py-24 relative overflow-hidden transition-colors duration-500 ${
        theme === 'light' ? 'bg-slate-50' : 'bg-slate-900'
      }`} 
      id="work-process"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      {/* Background Decorative Mesh Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#9929fb]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Title */}
      <motion.div className="text-center mb-16" variants={titleVariants}>
        <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${
          theme === 'light' ? 'text-slate-900' : 'text-white'
        }`}>
          Professional <span className="bg-gradient-to-r from-[#9929fb] via-[#cc59ff] to-[#ff9f1c] bg-clip-text text-transparent">Journey</span>
        </h2>
      </motion.div>

      {/* Modern Dashboard Sliding Navigation Center */}
      <div className="w-full max-w-5xl mx-auto mb-16 flex justify-center">
        <motion.div 
          className={`flex flex-wrap p-1.5 rounded-2xl border gap-1 sm:gap-2 items-center justify-center ${
            theme === 'light' ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-950/60 border-slate-800/80 backdrop-blur-md'
          }`}
          variants={titleVariants}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                className={`relative px-6 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all cursor-pointer select-none border border-transparent z-10 ${
                  isActive
                    ? "text-white"
                    : theme === 'light' 
                      ? "text-slate-600 hover:text-slate-900"
                      : "text-slate-400 hover:text-white"
                }`}
                onClick={() => setActiveTab(tab.id)}
                whileTap={{ scale: 0.97 }}
              >
                {/* Smooth Layout Indicator backplate */}
                {isActive && (
                  <motion.div
                    layoutId="activeExperienceTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#9929fb] to-[#cc59ff] rounded-xl z-[-1] shadow-[0_4px_20px_rgba(153,41,251,0.3)]"
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  />
                )}
                {tab.title}
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Experience Display Board Stage */}
      <div className="w-full max-w-4xl mx-auto perspective-[1200px]">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="space-y-8 relative before:absolute before:inset-y-0 before:left-0 md:before:left-1/2 before:w-px before:bg-gradient-to-b before:from-[#9929fb]/40 before:via-[#ff9f1c]/30 before:to-transparent"
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ transformStyle: "preserve-3d" }}
          >
            {tabs
              .find((tab) => tab.id === activeTab)
              ?.experiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={`${activeTab}-${index}`}
                    className={`flex flex-col md:flex-row items-center justify-between relative w-full md:gap-8 ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                    variants={experienceCardVariants}
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  >
                    {/* Center Timeline Node Anchor point */}
                    <div className="absolute left-0 md:left-1/2 top-8 md:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#9929fb] to-[#ff9f1c] border-4 border-slate-900 z-20 shadow-[0_0_10px_rgba(153,41,251,0.6)] hidden md:block" />

                    {/* Acrylic Plate Container */}
                    <div className={`w-full md:w-[46%] rounded-2xl p-6 border shadow-xl transition-all relative overflow-hidden ${
                      theme === 'light' 
                        ? 'bg-white border-slate-200/80' 
                        : 'bg-slate-950/40 border-slate-800/60 shadow-[0_15px_35px_rgba(0,0,0,0.3)] backdrop-blur-md'
                    }`}>
                      {/* Flex Heading block with logo sync */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="space-y-1">
                          <span className="text-xs uppercase tracking-widest font-extrabold text-[#9929fb]">
                            {exp.date}
                          </span>
                          <h3 className={`text-xl font-black m-0 leading-tight ${
                            theme === 'light' ? 'text-slate-900' : 'text-white'
                          }`}>
                            {exp.role}
                          </h3>
                          <p className="text-sm font-bold text-slate-400 m-0">
                            {exp.company}
                          </p>
                        </div>

                        {/* Structured Corporate Identity Badge */}
                        <motion.div 
                          className={`p-2 rounded-xl border flex-shrink-0 flex items-center justify-center bg-white ${
                            theme === 'light' ? 'border-slate-200' : 'border-slate-800 bg-slate-900'
                          }`}
                          whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                        >
                          <img
                            src={exp.logo}
                            alt={`${exp.company} branding identity assets logo`}
                            className="w-10 h-10 object-contain rounded-md"
                          />
                        </motion.div>
                      </div>

                      {/* Bullet point nodes matrix details mapping array */}
                      <ul className="space-y-2.5 p-0 m-0 list-none">
                        {exp.details.map((point, i) => (
                          <motion.li 
                            key={i} 
                            className={`flex items-start gap-2.5 text-sm leading-relaxed ${
                              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                            }`}
                            custom={i}
                            variants={detailVariants}
                          >
                            <span className="text-[#9929fb] font-bold text-base select-none leading-none mt-0.5">»</span>
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Invisible Spacer element block column mapping to maintain layout equilibrium across devices */}
                    <div className="hidden md:block w-[46%]" />
                  </motion.div>
                );
              })}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default WorkProcess;