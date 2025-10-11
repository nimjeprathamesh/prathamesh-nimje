import { useContext } from "react";
import Apps from "./Apps";
import { MyContext } from "../../Context/Context";
import { androidData } from "../../utils/constants";

const AndroidApps = () => {
    const { theme } = useContext(MyContext);

    return (
        <div
            className="content pt-10 md:pt-15 xl:pt-25 pb-10 md:pb-25 max-xxl:p-2"
            id="portfolio"
        >
            <div className="xl:mb-17.5 mb-5">
                <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
                    <p className={`section-title ${
                        theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                        Android Apps I have Published
                    </p>
                </div>
            </div>
            <div className="mx-auto flex justify-center">
                <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
                    {androidData.map((data, index) => (
                        <Apps data={data} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AndroidApps;