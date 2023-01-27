/* eslint-disable react/jsx-no-undef */
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Slider from './components/Slider/Slider';
import Virtual from './components/Virtual/Virtual';
import Products from './components/Products/Products';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonial/>  
      <Footer />
    </div>
    
  );
}

export default App;
