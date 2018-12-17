import React from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends React.Component{
 render(){
     return(
        <Navbar inverse={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href={`/home`}>MySiteHome</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href={`/about`}>
            About
          </NavItem>
          <NavItem eventKey={2} href={`/contact`}>
            ContactUs
          </NavItem>
          <NavDropdown eventKey={3} title="Releases" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} href={`/Releases`}>Program1</MenuItem>
            <MenuItem eventKey={3.2} href={`/Releases`}>Program2</MenuItem>
            <MenuItem eventKey={3.3} href={`/Qs?a=2`}>Querystring</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4} href={`/post/:1`}>AboutPrograms</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
     
     );
 }}

 export default Header;



