// Containers
import HomeSection from "@/container/home-page/home-section";
import SkillsSection from "@/container/home-page/skills-section";
import AboutSection from "@/container/home-page/about-section";
import EducationSection from "@/container/home-page/education-section";
import PortfolioSection from "@/container/home-page/portfolio-section";


// Background
import OvalBg from "../../public/background/ovalBg.webp"
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HomeSection/>
      <SkillsSection/>
      <Image src={OvalBg} alt='Oval Bg' style={{width:'100%', position:"absolute", top:'165vh'}}/>
      <AboutSection/>
      <EducationSection/>
      <PortfolioSection />
    </main>
  );
}
