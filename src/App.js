import './App.css';
import { Cover } from './components/Cover';
import { TopBar } from './components/TopBar';
import { Sobre } from './components/Sobre';
import { TimeSection } from './components/Time';
import { Footer } from './components/Footer';
import  Noticias from './components/Noticias';

function App() {
  return (
    <div className="App bg-black h-screen pt-10 text-white flex flex-col ">
      <TopBar/>
      <Cover/>
      <Sobre/> 
      <TimeSection/> 
      <Noticias/>
      <Footer/>
    </div>
  );
}

export default App;
