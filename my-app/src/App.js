import React from 'react';
import Car from './components/common/Carousel.js'
import Btn from './components/common/Button.js'
import Grd from "./components/common/Grd.js"
import BrdC from "./components/common/BrdC.js"
import './App.css';

class Form extends React.Component{
  render(){
    return (
 <fragment>
  <BrdC></BrdC>
  <Car ></Car> 
   <Btn></Btn>
   <Grd></Grd>
   </fragment>
      );
  }
}

export default Form;
