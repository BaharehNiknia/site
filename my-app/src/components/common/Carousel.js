import React from 'react'
import Pic from './pic.jpg' 
import {Carousel} from 'react-bootstrap';


class Car extends React.Component{
  //  constructor(props){
//super(props);
//this.handleSelect=this.handleSelect.bind(this);
//this.state={index:0,direction:null};
 //   }
 render(){
     return(
      <Carousel>
      <Carousel.Item>
        <img width={500} height={200} alt="500x200" src={Pic} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={500} height={200} alt="500x200" src={Pic} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={500} height={200} alt="500x200" src={Pic} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
     
     );
 }}

 export default Car;



