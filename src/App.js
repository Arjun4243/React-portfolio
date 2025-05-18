import './App.css';
import NavebarMain from "./component/navbar/navebarMain.jsx";
import HeroMain from "./component/hero/HeroMain.jsx";


function App() {
   return(
      <>
      <div className='max-w-[1500px]'> 
         <NavebarMain />
         <HeroMain/>
      </div>
      </>
  );
}

export default App;
