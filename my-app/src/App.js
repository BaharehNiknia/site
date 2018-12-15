import React from 'react';

//import logo from './logo.svg';
import Header from './components/common/Header.js'
import Car from './components/common/Carousel.js'
import Btn from './components/common/Button.js'
import Tab from "./components/common/Table.js"
import Grd from "./components/common/Grd.js"
import BrdC from "./components/common/BrdC.js"
import Frm from "./components/common/Frm.js"
import Img from "./components/common/Img.js"
import './App.css';
//<Carousel></Carousel>//<Header></Header>
//import style from 'bootstrap/dist/css/bootstrap.css';
class Form extends React.Component{
  render(){
    return (
 <fragment>
  <Header></Header>
  <BrdC></BrdC>
  <Car ></Car> 
   <Btn></Btn>
   <Grd></Grd>
   <Tab></Tab>
   <Frm></Frm>
   <Img></Img>
   
   
   
  
   </fragment>
      );
  }
}

export default Form;
