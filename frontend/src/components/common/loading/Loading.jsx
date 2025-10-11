import { useContext } from "react";
import { HashLoader } from "react-spinners";
import { MyContext } from "../../../Context/Context";

const Loading = () => {
  const { theme } = useContext(MyContext);

  return (
    <div
      className={`flex justify-center items-center fixed bottom-0 h-[100vh] w-[100vw] mx-auto z-50 ${
        theme === 'light' ? 'bg-white' : 'bg-gray-900'
      }`}
    >
      <HashLoader color="#A53DFF" speedMultiplier={2} size={80} />
    </div>
  );
};

export default Loading;