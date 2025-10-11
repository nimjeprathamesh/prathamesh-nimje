import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { MyContext } from "../../Context/Context";

const Profile = () => {
  const { theme } = useContext(MyContext);

  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl drop-shadow-2xl max-xl:mb-5 xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4 ${
        theme === 'light' 
          ? 'bg-white shadow-white' 
          : 'bg-gray-900 shadow-gray-900'
      }`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className={`h-[120%] object-cover ${
                theme === 'light' ? 'bg-soft-white' : 'bg-gray-700'
              }`}
              src="./pratham.png"
              alt=""
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className={`px-6 max-w-66 py-3 z-50 text-center rounded-[4px] center shadow-2xl drop-shadow-2xl ${
                theme === 'light' 
                  ? 'bg-white shadow-white' 
                  : 'bg-gray-700 shadow-gray-900'
              }`}>
                <SocialMedia position="center" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}
          >
            I am a Full Stack Developer
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}
          >
            <p>
              Hello! My name is Prathamesh Nimje and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p className="mt-3">
              Here are a few technologies I have been working with recently:
              <ul className="list-disc list-inside mt-2" style={{ columns: 3 }}>
                <li>HTML5</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Git/Github</li>
                <li>Material UI</li>
                <li>CSS3</li>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>Tailwind </li>
                <li>React Native</li>
                <li>UI/UX</li>
                <li>MySQL</li>
                <li>Digitalocean</li>
                <li>Vercel</li>
                <li>Express.js</li>
              </ul>
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="https://github.com/nimjeprathamesh/nimjeprathamesh"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Projects
            </a>
            <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary duration-300 transition-all hover:text-picto-primary ms-4 text-xs xxs:text-[14px] sm:text-[16px] ${
                theme === 'light' 
                  ? 'bg-white text-black' 
                  : 'bg-gray-700 text-white border-gray-600'
              }`}
              href="./Prathamesh_Nimje_Resume.pdf"
              download="Prathamesh_Nimje_Resume.pdf"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;