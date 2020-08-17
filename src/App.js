import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import Products from './Components/Productts/Products';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <AboutUs></AboutUs>
      <div className="pt-3" id="Products">
      <Products />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
