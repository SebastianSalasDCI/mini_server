import React from 'react'
import {Link} from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

export default function CustomNavbar() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">TestApp</NavbarBrand>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/" style={{margin:"0 3px 0"}} >Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/login" style={{margin:"0 3px 0"}} >Login</Link>
            </NavItem>
            <NavItem>
              <Link to="/apipage" style={{margin:"0 3px 0"}} >ApiPage</Link>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  )
}
