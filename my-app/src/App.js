import React from 'react';

//import logo from './logo.svg';

import Car from './components/common/Carousel.js'
import Btn from './components/common/Button.js'

import Grd from "./components/common/Grd.js"
import BrdC from "./components/common/BrdC.js"

import './App.css';
//<Carousel></Carousel>//<Header></Header>
//import style from 'bootstrap/dist/css/bootstrap.css';
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
