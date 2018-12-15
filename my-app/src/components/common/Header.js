import React from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
//import About from "../../../src/About.js"
class Header extends React.Component{
  //  constructor(props){
//super(props);
//this.handleSelect=this.handleSelect.bind(this);
//this.state={index:0,direction:null};
 //   }//"../../../src/About.js"
 render(){
     return(
        <Navbar inverse="true">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">MySiteHome</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            About
          </NavItem>
          <NavItem eventKey={2} href={"../../../src/About.js"}>
            ContactUs
          </NavItem>
          <NavDropdown eventKey={3} title="Releases" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Program1</MenuItem>
            <MenuItem eventKey={3.2}>Program2</MenuItem>
            <MenuItem eventKey={3.3}>Program3</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>AboutPrograms</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
     );
 }}

 export default Header;



