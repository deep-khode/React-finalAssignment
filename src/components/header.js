import React from 'react';
import {Navbar, Nav, Button, Form, Collapse } from 'bootstrap-4-react';
import './style.css';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <Navbar expand="lg" light style={{ backgroundColor: '#e3f2fd' }} mb="3">
        <Navbar.Brand href="#">Product Admin</Navbar.Brand>
        <Navbar.Toggler target="#navbarColor3" />
        <Collapse navbar id="navbarColor3">
        <Navbar.Nav mr="auto" className="">
            <Nav.ItemLink active><Link to="/">Dashboard</Link></Nav.ItemLink>
            <Nav.ItemLink><Link to="/product">Products</Link></Nav.ItemLink>
            <Nav.ItemLink><Link to="/account">Accounts</Link></Nav.ItemLink>
            <Nav.ItemLink><h5>Hi Deep Khode</h5></Nav.ItemLink>
        </Navbar.Nav>
        </Collapse>
    </Navbar>
  )
}

export default Header