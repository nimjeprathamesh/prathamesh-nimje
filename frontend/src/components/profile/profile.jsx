import { useContext } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { MyContext } from "../../Context/Context";

const Profile = () => {
  const { theme } = useContext(MyContext);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const socialMediaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.15
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const techListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3
      }
    }
  };

  const techItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const technologies = [
    "HTML5", "JavaScript", "React.js", "Git/Github", "Material UI",
    "CSS3", "Node.js", "Next.js", "Tailwind", "React Native",
    "UI/UX", "MySQL", "Digitalocean", "Vercel", "Express.js"
  ];

  return (
    <motion.div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl drop-shadow-2xl max-xl:mb-5 xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4 ${
        theme === 'light' 
          ? 'bg-white shadow-white' 
          : 'bg-gray-900 shadow-gray-900'
      }`}
      id="profile"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <motion.div 
          className="xxl:max-w-106 w-auto h-auto xxl:max-h-126"
          variants={imageVariants}
        >
          <motion.div 
            className="max-w-106 h-117 object-fill overflow-hidden rounded-xl"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              className={`h-[120%] object-cover ${
                theme === 'light' ? 'bg-soft-white' : 'bg-gray-700'
              }`}
              src="./pratham.png"
              alt="Prathamesh Nimje"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
          
          {/* Social media section */}
          <motion.div 
            className="relative bottom-9"
            variants={socialMediaVariants}
          >
            <div className="flex justify-center">
              <motion.div 
                className={`px-6 max-w-66 py-3 z-50 text-center rounded-[4px] center shadow-2xl drop-shadow-2xl ${
                  theme === 'light' 
                    ? 'bg-white shadow-white' 
                    : 'bg-gray-700 shadow-gray-900'
                }`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <SocialMedia position="center" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="max-sm:w-full w-[33rem]"
          variants={contentVariants}
        >
          <motion.h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}
            variants={headingVariants}
          >
            I am a Full Stack Developer
          </motion.h2>

          <motion.div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}
            variants={paragraphVariants}
          >
            <motion.p variants={paragraphVariants}>
              Hello! My name is Prathamesh Nimje and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </motion.p>

            <motion.div variants={paragraphVariants}>
              <p className="mt-3">
                Here are a few technologies I have been working with recently:
              </p>
              <motion.ul 
                className="list-disc list-inside mt-2" 
                style={{ columns: 3 }}
                variants={techListVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {technologies.map((tech, index) => (
                  <motion.li 
                    key={index}
                    variants={techItemVariants}
                    whileHover={{ 
                      x: 5,
                      color: "#8B5CF6",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {tech}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-8 flex max-md:justify-center"
            variants={buttonVariants}
          >
            <motion.a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="https://github.com/nimjeprathamesh/nimjeprathamesh"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              My Projects
            </motion.a>
            <motion.a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary duration-300 transition-all hover:text-picto-primary ms-4 text-xs xxs:text-[14px] sm:text-[16px] ${
                theme === 'light' 
                  ? 'bg-white text-black' 
                  : 'bg-gray-700 text-white border-gray-600'
              }`}
              href="./Prathamesh_Nimje_Resume.pdf"
              download="Prathamesh_Nimje_Resume.pdf"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Profile;