import React from 'react'
import {ButtonToolbar,Button,Glyphicon} from 'react-bootstrap';


class Btn extends React.Component{
  //  constructor(props){
//super(props);
//this.handleSelect=this.handleSelect.bind(this);
//this.state={index:0,direction:null};
 //   }
 render(){
     return(
        <ButtonToolbar>
     
       <Button bsStyle="success"><Glyphicon glyph="star" /> StarSuccess</Button>
      </ButtonToolbar>
     );
 }}

 export default Btn;



