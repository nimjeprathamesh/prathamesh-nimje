import { useParams } from 'react-router-dom';
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { MyContext } from '../Context/Context';
import { androidDetailsData } from '../utils/constants';

export default function AppsDetails() {
    const { id } = useParams();
    const { theme } = useContext(MyContext);
    const project = androidDetailsData.find((project) => project.id === parseInt(id));
    const renderDescription = (description) => {
        if (!description) return null;

        const lines = description.split('\n').filter(line => line.trim());
        const elements = [];
        let i = 0;

        while (i < lines.length) {
            const line = lines[i].trim();
            
            if (line.endsWith(':')) {
                elements.push(
                    <p key={`header-${i}`} className={`font-semibold text-base sm:text-lg mt-4 mb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                        {line}
                    </p>
                );
                i++;
                
                const bulletPoints = [];
                while (i < lines.length && !lines[i].trim().endsWith(':') && !lines[i].includes('?')) {
                    if (lines[i].trim()) {
                        bulletPoints.push(lines[i].trim());
                    }
                    i++;
                }
                
                if (bulletPoints.length > 0) {
                    elements.push(
                        <div key={`bullets-${i}`} className='flex flex-col gap-2 mb-4'>
                            {bulletPoints.map((point, idx) => (
                                <div key={idx} className='flex gap-3'>
                                    <span className={`${theme === 'light' ? 'text-blue-600' : 'text-blue-400'} font-bold text-lg sm:text-xl flex-shrink-0`}>»</span>
                                    <p className={`flex-1 text-sm sm:text-base ${theme === 'light' ? 'text-gray-900' : 'text-gray-300'}`}>{point}</p>
                                </div>
                            ))}
                        </div>
                    );
                }
            } else {
                elements.push(
                    <p key={`para-${i}`} className={`text-justify mb-4 text-sm sm:text-base ${theme === 'light' ? 'text-gray-900' : 'text-gray-300'}`}>
                        {line}
                    </p>
                );
                i++;
            }
        }

        return elements;
    };

    return (
        <div className={`flex flex-col items-center gap-6 sm:gap-10 py-6 sm:py-10 px-4 sm:px-8 md:px-16 lg:px-32 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
            <img
                src={project?.image}
                alt={`${project?.image} image`}
                className={`w-full max-w-sm sm:max-w-md lg:max-w-2xl mx-auto shadow-xl ${theme === 'light' ? 'shadow-[#aaa]' : 'shadow-gray-800'} rounded-xl`}
            />
            <div className='flex flex-col sm:flex-row justify-between items-center py-4 sm:py-5 w-full gap-4 sm:gap-0'>
                <img
                    src={project?.logo}
                    alt={`${project?.image} image`}
                    className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shadow-xl ${theme === 'light' ? 'shadow-[#aaa]' : 'shadow-gray-800'} rounded-xl flex-shrink-0`}
                />
                <div className='flex flex-col justify-center items-start text-center sm:text-left'>
                    <h1 className={`font-bold text-2xl sm:text-3xl ${theme === 'light' ? 'text-black' : 'text-white'}`}>{project.title}</h1>
                    <p className={`text-base sm:text-xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>{project.short_desc}</p>
                </div>
                <a
                    href={project?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn hover:border-picto-primary hover:text-picto-primary text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 py-2 px-6 w-full sm:w-auto text-center mt-2 sm:mt-5 inline-block ${theme === 'light' ? 'bg-white text-gray-900 hover:bg-gray-50' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                >
                    Live Link
                    <span className="ms-1 xs:ms-3">
                        <FontAwesomeIcon icon={faArrowRight} size="lg" />
                    </span>
                </a>
            </div>
            <div className="w-full max-w-4xl">
                {renderDescription(project?.description)}
            </div>
        </div>
    );
}