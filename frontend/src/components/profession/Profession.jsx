import { useContext } from "react";
import Roles from "./Roles";
import { MyContext } from "../../Context/Context";
import { rolesData } from "../../utils/constants";

const Profession = () => {
  const { theme } = useContext(MyContext);

  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className={`section-title max-md:text-center ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          What I do?
        </p>
        <div className="mt-6 text-[14px]">
          <p className={`text-xs sm:text-lg font-normal mb-4 ${
            theme === 'light' ? 'text-gray-400' : 'text-gray-300'
          }`}>
            I specialize in full-stack web development with MERN (using MySQL),
            building modern mobile apps with React Native, and deploying
            applications on cloud platforms.
          </p>
          <p className={`text-xs sm:text-lg font-normal ${
            theme === 'light' ? 'text-gray-400' : 'text-gray-300'
          }`}>
            My work combines technical expertise and creativity to deliver
            scalable, user-friendly, and production-ready solutions across web
            and mobile platforms.
          </p>
        </div>
        <a
          href="mailto:nimjeprathamesh1@gmail.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div>
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;