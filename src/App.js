import './App.css';
import React from 'react';
import NavebarMain from "./component/navbar/navebarMain.jsx";
import HeroMain from "./component/hero/HeroMain.jsx";
import AboutMeMain from "./component/about/AboutMeMain.jsx";
import SkillsMain from "./component/skillsSection/SkillsMain.jsx";
import SubSkills from "./component/skillsSection/SubSkills.jsx"
import ProjectsMain from './component/projects/ProjectsMain.jsx';
import ContactMain from './component/contacts/ContactMain.jsx';

function App() {
   return(
      <>
      <div className='max-w-[1500px] mx-auto'> 
         <NavebarMain />
         <HeroMain/>
         <AboutMeMain/>
         <SkillsMain/>
         <SubSkills/>
         <ProjectsMain/>
         <ContactMain/>

      </div>
      </>
  );
}

export default App;
