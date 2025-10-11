import { useContext } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyContext } from "../../Context/Context";

const Projects = ({ data }) => {
  const { theme } = useContext(MyContext);

  return (
    <div
      className={`max-w-106 rounded-lg hover:shadow-2xl duration-300 transition-all cursor-pointer ${
        theme === 'light' 
          ? 'outline-[#FFFFFF] shadow-gray-300 border border-gray-200 bg-white' 
          : 'shadow-gray-900 border border-gray-700 bg-gray-800'
      }`}
      onClick={() => window.open(`/projectdetails/${data.id}`, '_blank')}
    >
      <img
        src={data?.image}
        alt={`${data?.title} image`}
        className="rounded-tl-lg rounded-tr-lg w-full"
      />
      <div className="p-4 xs:p-8">
        <p className={`text-xs font-medium ${
          theme === 'light' ? 'text-gray-400' : 'text-gray-400'
        }`}>
          {data?.category}
        </p>
        <p className={`text-md xxs:text-lg font-semibold pt-1 mb-3 ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          {data?.title}
        </p>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className={`text-xs xxs:text-[14px] text-wrap ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}
        >
          {data?.description}
        </p>

        {/* Buttons wrapper */}
        <div className="flex flex-col sm:flex-row gap-3 mt-5">
          <a
            href={data?.source}
            target="_blank"
            className={`btn hover:border-picto-primary hover:text-picto-primary text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 py-3 px-6 w-full sm:w-auto text-center ${
              theme === 'light' 
                ? 'bg-white text-black border-gray-300' 
                : 'bg-gray-700 text-white border-gray-600'
            }`}
          >
            Source Code
            <span className="ms-1 xs:ms-3">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </span>
          </a>

          <a
            href={data?.link}
            target="_blank"
            className={`btn hover:border-picto-primary hover:text-picto-primary text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 py-3 px-6 w-full sm:w-auto text-center ${
              theme === 'light' 
                ? 'bg-white text-black border-gray-300' 
                : 'bg-gray-700 text-white border-gray-600'
            }`}
          >
            Live Link
            <span className="ms-1 xs:ms-3">
              <FontAwesomeIcon icon={faArrowRight} size="lg" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;