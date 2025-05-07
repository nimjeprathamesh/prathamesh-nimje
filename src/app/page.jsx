import About from "@/components/about/about.jsx";
import Contact from "@/components/contact/Contact.jsx";
import { Experience } from "@/components/experience/Experience.jsx";
import Footer from "@/components/footer/footer.jsx";
import Header from "@/components/header/Header.jsx";
import HeroSection from "@/components/hero/HeroSection.jsx";
import Project from "@/components/project/Project.jsx";
import { SidebarProvider } from "@/components/ui/sidebar.jsx";

export default function Home() {
  return (
    <SidebarProvider>
      <Header />
      {/* <div className="2xl:py-16 2xl:px-72 xl:py-12 xl:px-40 lg:px-16 md:px-0"> */}
      <div className="font-serif">
        <HeroSection />
        <About />
        <Experience />
        <Project />
        <Contact />
      </div>
      <Footer />
    </SidebarProvider>
  );
}
