import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyContext } from "../../../Context/Context";
import { socialIcons } from "../../../utils/constants";

const SocialMedia = ({ position }) => {
  const { theme } = useContext(MyContext);

  return (
    <div
      className={`flex ${
        position === "left" ? "flex-row items-start" : "flex-row justify-center"
      } gap-3`}
    >
      {socialIcons.map((item, index) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex p-2 xs:p-2.5 sm:p-3 rounded-md transition-colors duration-300 ${
            theme === 'light'
              ? 'text-picto-primary hover:bg-picto-primary hover:text-white'
              : 'text-picto-primary hover:bg-picto-primary hover:text-white'
          }`}
          key={index}
        >
          {item.icon && (
            <FontAwesomeIcon icon={item.icon} className="text-xl w-4.5 aspect-square" />
          )}
          {item.img && (
            <img src={item.img} className="w-4.5 aspect-square bg-picto-primary" />
          )}
          {item.tag && item.tag}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;