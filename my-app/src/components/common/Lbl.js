import React from 'react'
import {Label} from 'react-bootstrap';


class Lbl extends React.Component{
 render(){
     return(
       <div>
        <Label bsStyle="default">Default</Label>
        <Label bsStyle="primary">Primary</Label>
        <Label bsStyle="success">Success</Label> <Label bsStyle="info">Info</Label>
        <Label bsStyle="warning">Warning</Label>
        <Label bsStyle="danger">Danger</Label>
        </div>
     );
 }}

 export default Lbl;