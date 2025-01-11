import './App.css';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Newsletter from './components/NewsLetter';
import Pricing from './components/Pricing';
import Services from './components/Services';

function App() {
  return (
   <>
   <NavBar/>
   <Hero/>
   <Services/>
   <Newsletter/>
   <Pricing/>
   {/* <Faq/> */}
   <Footer/>
   </>
  )
}

export default App;
