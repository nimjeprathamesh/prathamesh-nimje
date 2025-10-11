import { useContext } from "react";
import Projects from "../portfolio/Projects";
import { MyContext } from "../../Context/Context";
import { projectData } from "../../utils/constants";

const ProjectsPage = () => {
    const { theme } = useContext(MyContext);
    return (
        <div
            className="content mt-10 md:mt-15 xl:mt-25 pb-10 md:pb-25 max-xxl:p-2"
            id="portfolio"
        >
            <div className="xl:mb-17.5 mb-5">
                <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
                    <p className={`section-title ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                        Projects I have developed
                    </p>
                    <p className={`font-normal text-[18px] max-sm:text-[14px] pt-6 ${
                        theme === 'light' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                        Here's a selection of my recent work, showcasing my skills in
                        creating user-centric and visually appealing interfaces.
                    </p>
                </div>
            </div>
            <div className="mx-auto flex justify-center">
                <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
                    {projectData.map((data, index) => (
                        <Projects data={data} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;