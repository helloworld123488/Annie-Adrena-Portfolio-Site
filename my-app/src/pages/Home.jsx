import Hero from "../components/Hero";
import Statement from "../components/Statement";
import AboutPage from './AboutPage.jsx'
import ContactPage from './ContactPage.jsx'

import SkillsPage from './SkillsPage.jsx'
import TechnologiesPages from './TechnologiesPage.jsx'
import WorkExperience from "../components/WorkExperience.jsx";


export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <AboutPage/>
      <WorkExperience/>
      <SkillsPage/>
      <TechnologiesPages/>
      <ContactPage/>
    </>
  );
}
