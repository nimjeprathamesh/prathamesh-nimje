import { useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { MyContext } from "../../Context/Context";
import { Filesystem, Directory } from '@capacitor/filesystem';

const splitText = (text) => {
  return text.split('').map((char, index) => (
    <motion.span
      key={index}
      style={{ display: 'inline-block' }}
      variants={{
        hidden: { opacity: 0, y: 20, rotateX: -60 },
        visible: { opacity: 1, y: 0, rotateX: 0 }
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  ));
};

const Profile = () => {
  const { theme } = useContext(MyContext);

  const handleDownloadCV = async (e) => {
    const isNative = window.Capacitor && window.Capacitor.isNative;

    if (isNative) {
      e.preventDefault();

      const pdfUrl = `${import.meta.env.VITE_FRONTEND_URL}/Prathamesh_Nimje_Resume.pdf`;

      try {
        const status = await Filesystem.checkPermissions();

        if (status.publicStorage !== 'granted') {
          const requestStatus = await Filesystem.requestPermissions();
          if (requestStatus.publicStorage !== 'granted') {
            alert("Storage permission is compulsory for downloading the CV.");
            return;
          }
        }

        const downloadResult = await Filesystem.downloadFile({
          url: pdfUrl,
          path: 'Prathamesh_Nimje_Resume.pdf',
          directory: Directory.Downloads,
        });

        alert("CV Successfully Downloaded in your Downloads folder!");
        console.log('Download complete path:', downloadResult.path);

      } catch (error) {
        console.error("Native download failed, switching to fallback:", error);

        try {
          const { Browser } = await import('@capacitor/browser');
          await Browser.open({ url: pdfUrl });
        } catch (browserError) {
          window.open(pdfUrl, '_blank');
        }
      }
    }
  };

  const { scrollYProgress } = useScroll({
    target: { current: document.getElementById('profile') },
    offset: ["start end", "end start"]
  });

  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 10 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.03, type: "spring", stiffness: 160, damping: 18 }
    })
  };

  const continuousFloatAnimation = {
    animate: {
      y: [0, -10, 3, -7, 0],
      rotateX: [0, 2, -2, 1, 0],
      rotateY: [0, -3, 2, -1, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const continuousHaloAnimation = {
    animate: {
      scale: [1, 1.05, 0.96, 1.02, 1],
      opacity: [0.15, 0.28, 0.12, 0.25, 0.15],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const technologies = [
    "HTML5", "JavaScript", "React.js", "Git/Github", "Material UI",
    "CSS3", "Node.js", "Next.js", "Tailwind", "React Native",
    "UI/UX", "MySQL", "DigitalOcean", "Vercel", "Express.js"
  ];

  return (
    <motion.div
      className={`relative mx-4 xxl:mx-0 rounded-3xl p-8 md:p-16 lg:p-20 shadow-2xl border transition-all duration-700 ${theme === 'light'
        ? 'bg-white/90 backdrop-blur-md border-slate-200/60 shadow-slate-100'
        : 'bg-slate-900/60 backdrop-blur-md border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.4)]'
        }`}
      id="profile"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#9929fb]/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#ff9f1c]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

        {/* Left Column */}
        <div className="w-full lg:w-5/12 flex flex-col items-center relative group shrink-0" style={{ perspective: 1200 }}>
          <motion.div
            className="absolute -inset-2 bg-gradient-to-tr from-[#ff9f1c] via-[#cc59ff] to-[#9929fb] blur-3xl rounded-2xl"
            variants={continuousHaloAnimation}
            animate="animate"
          />

          <motion.div
            className="relative max-w-[350px] md:max-w-[370px] aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950/40"
            style={{ transformStyle: "preserve-3d" }}
            variants={continuousFloatAnimation}
            animate="animate"
            whileHover={{
              scale: 1.02,
              boxShadow: theme === 'dark'
                ? '0 25px 50px rgba(153, 41, 251, 0.2)'
                : '0 25px 50px rgba(0, 0, 0, 0.1)'
            }}
          >
            <motion.img
              className={`w-full h-full object-cover transition-all duration-700 select-none ${theme === 'light' ? 'bg-white' : 'bg-slate-950'
                }`}
              src="./pratham.png"
              alt="Prathamesh Nimje Continuous Profile Visual"
              style={{ scale: imgScale }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-6 inset-x-4 z-20 flex justify-center items-center">
              <div className="w-full max-w-[240px] px-4 py-3 rounded-xl border border-white/20 bg-slate-900/85 backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex justify-center items-center text-white">
                <SocialMedia position="center" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-7/12 flex flex-col space-y-6">
          <motion.h2
            className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight max-lg:text-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            variants={containerVariants}
          >
            {splitText("About Me")} <br />
            <span className="bg-gradient-to-r from-[#9929fb] via-[#cc59ff] to-[#ff9f1c] bg-clip-text text-transparent">
              Prathamesh
            </span>
          </motion.h2>

          <motion.p
            className={`text-base md:text-lg leading-relaxed max-lg:text-center font-normal ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'
              }`}
            variants={fadeInUpVariants}
          >
            Hello! My name is Prathamesh Nimje and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          </motion.p>

          <motion.div className="space-y-3" variants={fadeInUpVariants}>
            <p className={`text-xs font-bold tracking-widest uppercase max-lg:text-center ${theme === 'light' ? 'text-slate-400' : 'text-slate-500'
              }`}>
              Core Technologies & Tools
            </p>

            <div className="flex flex-wrap gap-2.5 max-lg:justify-center">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={badgeVariants}
                  className={`text-xs md:text-sm font-semibold px-4 py-2 rounded-xl border cursor-pointer transition-colors ${theme === 'light'
                    ? 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-[#9929fb]/5 hover:text-[#9929fb] hover:border-[#9929fb]/30'
                    : 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-[#9929fb]/10 hover:text-[#cc59ff] hover:border-[#9929fb]/40'
                    }`}
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                    boxShadow: "0 8px 20px rgba(153, 41, 251, 0.15)"
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Call To Action Buttons Hub Row */}
          <motion.div
            className="flex flex-wrap items-center gap-4 pt-4 max-lg:justify-center"
            variants={fadeInUpVariants}
          >
            <motion.a
              className="btn btn-premium btn-md rounded-xl px-6 shadow-xl text-white font-bold tracking-wide decoration-none"
              href="https://github.com/nimjeprathamesh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              My Projects
            </motion.a>

            {/* 🔴 FIX 3: Element ko tag button me hi transform rakha hai onClick handler logic bind karne ke liye */}
            <motion.a
              className={`btn btn-md rounded-xl px-6 font-bold tracking-wide border transition-all ${theme === 'light'
                ? 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50 shadow-sm'
                : 'bg-slate-800/60 border-slate-700 text-white hover:bg-slate-800 shadow-md'
                }`}
              onClick={handleDownloadCV}
              href="./Prathamesh_Nimje_Resume.pdf"
              download="Prathamesh_Nimje_Resume.pdf"
              style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', border: '1px solid currentColor' }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" /> Download CV
            </motion.a>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

export default Profile;