import React from 'react';
import './Hero.scss'
const Hero = () => {
    return ( 
        <div  id="Hero">
           <h1 className="text-white text-center mb-2 w-75 w-lg-50">Don’t cling to a problem the world is full of solutions.</h1>
           <h2 className="text-white text-center mb-5 w-75 w-lg-50">Find your solution with us</h2>
           <a href="#Contact" className="btn btn-secondary w-15 d-inline-block">Get a quote</a>
        </div>
    );
}
 
export default Hero;