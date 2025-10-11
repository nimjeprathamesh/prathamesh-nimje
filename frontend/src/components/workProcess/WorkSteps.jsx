import { useState, useContext } from "react";
import { MyContext } from "../../Context/Context";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);
  const { theme } = useContext(MyContext);

  return (
    <div
      className={`rounded-xl hover:drop-shadow-2xl ease-out duration-1000 ${
        theme === 'light' ? 'shadow-gray-300 bg-soft-white' : 'shadow-gray-900 bg-gray-800'
      } ${style && style}`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div
        className={`w-11 h-11 sm:w-18 sm:h-18 ${
          hover ? "bg-picto-primary" : theme === 'light' ? "bg-soft-white" : "bg-gray-800"
        } text-center center rounded-md`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-sm:p-2 sm:w-8 sm:h-8"
        >
          <path d={data?.svgPath} fill={`${hover ? "#FFFFFF" : "#A53DFF"}`} />
        </svg>
      </div>
      <div className="mt-3 xs:mt-4 sm:mt-8">
        <p className={`font-semibold sm:text-xl ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}>
          {`${data?.id}. ${data?.title}`}
        </p>
        <p className={`mt-3 text-[13px] sm:text-[16px] ${
          theme === 'light' ? 'text-[#697482]' : 'text-gray-400'
        }`}>
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default WorkSteps;