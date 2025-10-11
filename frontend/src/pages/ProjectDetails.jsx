import { useParams } from "react-router-dom";
import { useContext } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyContext } from "../Context/Context";
import { projectDetailsData } from "../utils/constants";

export default function ProjectDetails() {
    const { id } = useParams();
    const { theme } = useContext(MyContext);
    const project = projectDetailsData.find((project) => project.id === parseInt(id));

    return (
        <div className={`flex flex-col justify-center items-center gap-6 sm:gap-10 py-6 sm:py-10 px-4 sm:px-8 md:px-16 lg:px-32 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
            <p className={`section-title text-center text-2xl sm:text-3xl md:text-4xl ${theme === 'light' ? 'text-black' : 'text-white'}`}>{project.title}</p>
            <img
                src={project?.image}
                alt={`${project?.title} image`}
                className={`w-full max-w-md sm:max-w-lg md:max-w-2xl rounded-4xl border shadow-lg ${theme === 'light' ? 'border-black shadow-gray-900' : 'border-gray-800 shadow-gray-800'}`}
            />
            <p
                style={{ lineHeight: "25px", letterSpacing: "0%" }}
                className={`text-sm sm:text-base md:text-lg text-wrap px-4 sm:px-8 md:px-16 lg:px-32 text-center sm:text-left ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
            >
                {project?.description}
            </p>
            <ul className={`space-y-2 sm:space-y-4 px-4 sm:px-8 md:px-16 lg:px-32 w-full max-w-4xl ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                {project?.details.map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm sm:text-base md:text-lg">
                        <span className={`${theme === 'light' ? 'text-blue-600' : 'text-blue-400'} text-base sm:text-lg flex-shrink-0`}>»</span>
                        <span className="flex-1">{point}</span>
                    </li>
                ))}
            </ul>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-8 w-full max-w-md sm:max-w-lg mt-5">
                <a
                    href={project?.source}
                    target="_blank"
                    className={`btn hover:border-picto-primary hover:text-picto-primary text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 py-3 px-6 w-full sm:w-auto text-center ${theme === 'light' ? 'bg-white text-gray-900 hover:bg-gray-50' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                >
                    Source Code
                    <span className="ms-1 xs:ms-3">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </span>
                </a>
                <a
                    href={project?.link}
                    target="_blank"
                    className={`btn hover:border-picto-primary hover:text-picto-primary text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 py-3 px-6 w-full sm:w-auto text-center ${theme === 'light' ? 'bg-white text-gray-900 hover:bg-gray-50' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                >
                    Live Link
                    <span className="ms-1 xs:ms-3">
                        <FontAwesomeIcon icon={faArrowRight} size="lg" />
                    </span>
                </a>
            </div>
        </div>
    );
}