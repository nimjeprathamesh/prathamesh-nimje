import { useContext } from "react";
import { MyContext } from "../../Context/Context";
import { telegramSVG } from "../../icons/icons";

const Form = () => {
  const { theme, formData, handleChange, handleSubmit } = useContext(MyContext);

  const commonClass = `input input-lg px-5 border-0 border-b-2 focus:outline-none focus:placeholder:text-picto-primary placeholder:text-[15px] md:placeholder:text-lg focus:border-picto-primary w-full rounded-none px-0 ${
    theme === 'light' 
      ? 'border-[#E6E8EB] bg-white text-black placeholder:text-gray-400' 
      : 'border-gray-600 bg-gray-800 text-white placeholder:text-gray-400'
  }`;

  return (
    <div>
      <p className={`text-[12px] xs:text-[14px] max-lg:text-center sm:text-lg font-normal ${
        theme === 'light' ? 'text-soft-dark' : 'text-gray-300'
      }`}>
        Looking to connect, share ideas, or discuss opportunities? Send me a message below.
      </p>
      <div className="mx-2">
        <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name*"
            className={commonClass}
            value={formData?.name || ''}
            onChange={(e) => handleChange('name')(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email*"
            className={commonClass}
            value={formData?.email || ''}
            onChange={(e) => handleChange('email')(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Subject*"
            className={commonClass}
            value={formData?.subject || ''}
            onChange={(e) => handleChange('subject')(e.target.value)}
            required
          />

          <textarea
            placeholder="Message*"
            className={`${commonClass} min-h-[100px] resize-none pt-3`}
            value={formData?.message || ''}
            onChange={(e) => handleChange('message')(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn gap-3 max-lg:mx-auto btn-primary rounded-sm mt-5 text-[13px] md:text-[16px] w-fit font-semibold lg:mt-12.5 p-2 md:px-4"
          >
            Submit {telegramSVG}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;