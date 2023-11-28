import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Services from './components/Services';
import HealthCare from './components/HealthCare';
import MobApps from './components/MobApps';
import Reviews2 from './components/Reviews2';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
   
   <Header/>
   <Body/>
   <Services/>
   <HealthCare/>
   <MobApps/>
   <Reviews2/>
   <Articles/>
   <Footer/>

    </div>
  );
}

export default App;
