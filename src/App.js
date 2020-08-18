import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import Products from './Components/Productts/Products';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <AboutUs></AboutUs>
      <div className="pt-3" id="Products">
      <Products />
      </div>
      <Contact/>
      <Footer></Footer>
    </div>
  );
}

export default App;
