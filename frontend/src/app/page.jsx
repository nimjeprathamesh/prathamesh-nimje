'use client'

import Contact from "@/components/contact/Contact";
import Introduction from "@/components/introduction/Introduction";
import Portfolio from "@/components/portfolio/Portfolio";
import Profession from "@/components/profession/Profession";
import Profile from "@/components/profile/Profile";
import Skills from "@/components/skills/Skills";
import WorkProcess from "@/components/workProcess/WorkProcess";
import { MyContext } from "@/Context/Context";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";

export default function Home() {
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
}