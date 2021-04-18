import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav,Button  } from 'react-bootstrap';
import { UserContext } from '../../App';
const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            

<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"> <h2 style={{color: 'red'}}>DeviceHealth</h2></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
    <Nav className="ml-auto " aria-controls="basic-navbar-nav">
      <Link to="/home"  > <h5 style={{color: 'black'}}>  Home</h5></Link>
      <Link  to="/about"   > <h5 style={{color: 'black'}}>About</h5></Link>
      <Link  to="/services"   ><h5 style={{color: 'white'}}>Services</h5></Link>
      <Link  to="/contactUs"  ><h5 style={{color: 'white'}}>Contact Us </h5></Link>
      <Link  to="/admin"  ><h5 style={{color: 'white'}}>Admin</h5></Link>
      <Link  to="/login"  ><h5 style={{color: 'white'}}>Login</h5></Link>
      <p style={{ color: 'yellow'}}>{loggedInUser.name || loggedInUser.displayName || loggedInUser.email}</p>
    </Nav>
   
  </Navbar>



            
        </div>
    );
};

export default NavBar;