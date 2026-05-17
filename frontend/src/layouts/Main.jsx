import { useContext } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";
import { MyContext } from "../Context/Context"; // Context import karein
import CursorTrail from "../components/common/CursorTrail";

const Main = () => {
  const { theme } = useContext(MyContext); // Current theme access karein

  return (
    <div 
      data-theme={theme} 
      className={`relative min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-soft-white text-slate-900"
      }`}
    >
      <NavBar />
      <main className="w-full">
        <CursorTrail />
        <Outlet />
      </main>
      <div className={theme === "dark" ? "bg-slate-950" : "bg-[#2A374A]"}>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Main;