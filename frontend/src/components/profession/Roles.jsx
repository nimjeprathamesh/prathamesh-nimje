"use client"

import { useEffect, useState, useContext } from "react";
import { MyContext } from "../../Context/Context";

const Roles = ({ role }) => {
  const [mouseHover, setMouseHover] = useState(false);
  const { theme } = useContext(MyContext);

  useEffect(() => {
    window.addEventListener("mouseenter", (e) => {
      console.log("Mouse entered on the: ", e.target);
    });
  }, []);

  return (
    <div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      className={`p-4 xs:p-8 hover:shadow-xl h-auto ease-out duration-800 rounded-lg my-6 flex relative overflow-hidden ${
        theme === 'light' 
          ? 'bg-white shadow-gray-300' 
          : 'bg-gray-700 shadow-gray-900'
      }`}
    >
      <p
        className={`bg-picto-primary absolute start-0 w-0 h-full mt-[-16px] xs:mt-[-32px] ${
          mouseHover && "duration-200 w-[5px]"
        }`}
      />
      <div>
        <p className={`text-xl sm:text-2xl font-semibold pb-4 ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          {role?.title}
        </p>
        <p className={`text-[13px] sm:text-[16px] font-normal ${
          theme === 'light' ? 'text-gray-700' : 'text-gray-300'
        }`}>
          {role?.description}
        </p>
      </div>
    </div>
  );
};

export default Roles;