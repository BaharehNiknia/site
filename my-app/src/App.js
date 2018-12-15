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
import Jmb from "./components/common/Jmb.js"
import Lbl from "./components/common/Lbl.js"
import MdlApp from "./components/common/Mdl.js"
import Pgr from "./components/common/Pgr.js"
import Pnlgrp from "./components/common/Pnlgrp.js"

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
   <Pgr></Pgr>
   <Tab></Tab>
   <Frm></Frm>
   <Img></Img>
   <MdlApp></MdlApp>
   <Jmb></Jmb>
   <Lbl></Lbl>
   <Pnlgrp></Pnlgrp>


   
   
   
  
   </fragment>
      );
  }
}

export default Form;
