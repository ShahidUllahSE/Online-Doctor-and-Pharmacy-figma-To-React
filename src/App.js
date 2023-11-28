import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Services from './components/Services';
import HealthCare from './components/HealthCare';
import MobApps from './components/MobApps';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
   
   <Header/>
   <Body/>
   <Services/>
   <HealthCare/>
   <MobApps/>
   <Reviews/>

    </div>
  );
}

export default App;
