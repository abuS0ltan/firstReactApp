import logo from './logo.svg';
import './App.css';
// ----------------------------import bootstrap file---------------------------
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
//-----------------------------import fontawesome-------------------------------
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
////-----------------------------import components-------------------------------
import Navbar from './components/navbar/Navbar';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
