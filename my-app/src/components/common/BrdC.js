import React from 'react'
import {Breadcrumb} from 'react-bootstrap';


class BrdC extends React.Component{
  //  constructor(props){
//super(props);
//this.handleSelect=this.handleSelect.bind(this);
//this.state={index:0,direction:null};
 //   }
 render(){
     return(
        <Breadcrumb active="false">
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
     );
 }}

 export default BrdC;