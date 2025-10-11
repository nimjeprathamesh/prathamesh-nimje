import { useContext } from "react";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { MyContext } from "../../Context/Context";
import { informationSummaryData } from "../../utils/constants";

const Introduction = () => {
  const { theme } = useContext(MyContext);

  return (
    <div
      className={`flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4 ${
        theme === 'dark' ? 'text-white' : 'text-black'
      }`}
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I'm
            <span className="text-nowrap shrink-0 inline-block w-full">
              Prathamesh Nimje
            </span>
          </p>
          <p className={`text-xs xxs:text-lg lg:text-[18px] my-6 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I build apps for the web. As a BCCA Computer Application graduate and MCA Computer Application post graduate student, I have a solid foundation in full-stack web development. Skilled in creating user-friendly, responsive web applications with React and its ecosystem, I am passionate about delivering seamless, dynamic user experiences.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:nimjeprathamesh1@gmail.com"
            >
              Say Hello!
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`w-full h-full absolute bottom-0 object-cover rounded-3xl ${
            theme === 'light' 
              ? 'shadow-2xl shadow-gray-200 bg-white' 
              : 'shadow-2xl shadow-gray-800 bg-gray-800'
          }`}
          src="./pratham.png"
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;