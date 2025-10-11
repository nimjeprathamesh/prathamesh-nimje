"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext } from "react";
import { MyContext } from "../../Context/Context";

const Address = ({ item }) => {
  const [hover, setHover] = useState(false);
  const { theme } = useContext(MyContext);

  return (
    <div
      className={`max-w-84 p-3 md:p-3.75 lg:p-6 flex xs:not-odd:my-3 rounded-[10px] hover:scale-[1] duration-450 cursor-pointer hover:shadow-[0px_0px_37px_5px_rgba(0,_0,_0,_0.1)] max-sm:mx-auto ${
        theme === 'light' 
          ? 'bg-white shadow-gray-200' 
          : 'bg-gray-700 shadow-gray-900'
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`h-10 md:h-12 aspect-square ${
          hover ? "bg-picto-primary" : theme === 'light' ? "bg-[#EDD8FF80]" : "bg-[#4a1a6e]"
        } center rounded-[4px]`}
      >
        <FontAwesomeIcon
          icon={item?.icon}
          className={`text-lg md:text-xl ${
            hover ? "text-white" : "text-picto-primary"
          }`}
        />
      </div>
      <div className="ms-3.25">
        <p className={`text-[12px] md:text-[14px] font-normal ${
          theme === 'light' ? 'text-[#424E60]' : 'text-gray-400'
        }`}>
          {item?.title}:
        </p>
        <p className={`text-[14px] md:text-[16px] font-medium ${
          theme === 'light' ? 'text-[#132238]' : 'text-white'
        }`}>
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default Address;