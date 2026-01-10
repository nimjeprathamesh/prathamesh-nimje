import { useContext } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyContext } from "../../../Context/Context";
import { socialIcons } from "../../../utils/constants";

const SocialMedia = ({ position }) => {
  const { theme } = useContext(MyContext);

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Animation variants for each icon
  const iconVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Hover animation
  const iconHoverVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
        rotate: {
          duration: 0.5,
          ease: "easeInOut"
        },
        scale: {
          duration: 0.2
        }
      }
    },
    tap: {
      scale: 0.9
    }
  };

  return (
    <motion.div
      className={`flex ${
        position === "left" ? "flex-row items-start" : "flex-row justify-center"
      } gap-3`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialIcons.map((item, index) => (
        <motion.a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex p-2 xs:p-2.5 sm:p-3 rounded-md transition-colors duration-300 ${
            theme === 'light'
              ? 'text-picto-primary hover:bg-picto-primary hover:text-white'
              : 'text-picto-primary hover:bg-picto-primary hover:text-white'
          }`}
          key={index}
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
          custom={index}
        >
          <motion.div
            variants={iconHoverVariants}
          >
            {item.icon && (
              <FontAwesomeIcon 
                icon={item.icon} 
                className="text-xl w-4.5 aspect-square" 
              />
            )}
            {item.img && (
              <img 
                src={item.img} 
                className="w-4.5 aspect-square bg-picto-primary" 
                alt={`Social icon ${index}`}
              />
            )}
            {item.tag && item.tag}
          </motion.div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialMedia;