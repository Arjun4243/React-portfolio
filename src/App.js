import './App.css';
import NavebarMain from "./component/navbar/navebarMain.jsx";
import HeroMain from "./component/hero/HeroMain.jsx";
import SubHeroSection from './component/hero/SubHeroSection.jsx';
import AboutMeMain from './component/about/AboutMeMain.jsx';
import SkillsMain from './component/skillsSection/SkillsMain.jsx';


function App() {
   return(
      <>
      <div> 
         <NavebarMain />
         <HeroMain/>
         <SubHeroSection/>
         <AboutMeMain/>
         <SkillsMain/>
      </div>
      </>
  );
}

export default App;
