import React from 'react';

//import logo from './logo.svg';
import Header from './components/common/Header.js'
import Car from './components/common/Carousel.js'
import Btn from './components/common/Button.js'
import Tab from "./components/common/Table.js"
import './App.css';
//<Carousel></Carousel>//<Header></Header>
//import style from 'bootstrap/dist/css/bootstrap.css';
class Form extends React.Component{
  render(){
    return (
 <fragment>
  <Header></Header>
  <Car ></Car> 
   <Btn></Btn>
   <Tab></Tab>
   </fragment>
      );
  }
}

export default Form;
