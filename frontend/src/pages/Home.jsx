import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import Profession from "../components/profession/Profession";
import Contact from "../components/contact/Contact";
import "../../index.css";
import { useContext } from "react";
import { MyContext } from "../Context/Context";
import { ToastContainer } from "react-toastify";
import Skills from "../components/skills/Skills";

const Home = () => {
  const { theme } = useContext(MyContext);

  return (
    <div className={`relative ${theme === "dark" ? "bg-gray-800" : "bg-soft-white"}`}>
      {/* Hero + Profile section */}
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>

      {/* ✅ Add Skills section here */}
      <Skills />

      {/* Work Process and below */}
      <div className="pt-30">
        <WorkProcess />
      </div>
      <Portfolio />
      <Profession />
      <Contact />
      <ToastContainer theme={theme === "dark" ? "dark" : "light"} />
    </div>
  );
};

export default Home;