import './App.css';
import Footer from './Components/Footer/Footer';
import Mission from './Components/Mission/Mission';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import Vision from './Components/Vision/Vision';
import Offer from './Components/Offer/Offer';
import Instructor from './Components/Instructor/Instructor';
import News from './Components/News/News';
import Partners from './Components/Partners/Partners';
import Contact from './Components/Contact/Contact';
import Mis from './Components/Mission/mis';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Offer />
      <Vision />
      <Instructor />
      <Mission />
      <News />
      <Partners />
      <Mis />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
