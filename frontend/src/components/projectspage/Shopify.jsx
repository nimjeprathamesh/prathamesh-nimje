import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { MyContext } from "../../Context/Context";

const Shopify = ({ data }) => {
    const { theme } = useContext(MyContext);
    const handleCardClick = () => {
        window.open(`/shopifydetails/${data.id}`, '_blank');
    };

    const handleLiveLinkClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            className={`max-w-106 rounded-lg hover:shadow-2xl duration-300 transition-all cursor-pointer ${
                theme === 'light'
                    ? 'bg-white border border-gray-200 shadow-gray-300 outline-[#FFFFFF]'
                    : 'bg-gray-800 border border-gray-700 shadow-gray-900 outline-[#1F2937]'
            }`}
            onClick={handleCardClick}
        >
            <img
                src={data?.image}
                alt={`${data?.title} image`}
                className="rounded-tl-lg rounded-tr-lg w-full"
            />
            <div className="p-4 xs:p-8">
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
                
                <a
                    href={data?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLiveLinkClick}
                    className={`btn hover:border-picto-primary hover:text-picto-primary text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 py-2 px-6 w-full sm:w-auto text-center mt-5 inline-block ${
                        theme === 'light'
                            ? 'bg-white text-gray-900 hover:bg-gray-50'
                            : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                >
                    Live Link
                    <span className="ms-1 xs:ms-3">
                        <FontAwesomeIcon icon={faArrowRight} size="lg" />
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Shopify;