import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {  Link, useNavigate } from "react-router-dom"
import {FaShoppingCart } from "react-icons/fa"

import '../header/Header.css'



const Header = () => {
  // const [showMenu, setShowMenu]=useState(false)
  // const ToggleMenu = () => {
  //   setShowMenu(!showMenu)
  // };
  // const hideMenu =()=>{
  // setShowMenu(false)

  // }
  const navigate = useNavigate()
  const navigateToCart=()=>{
    navigate("/carts")

  }
  const [inputText, setInputText]= useState("0")
  const HandelChange =(e)=>{setInputText(e.target.value)

  }

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
       <Link className='logoo' to="/"> <h2>M.<span className='shop' >Shop</span></h2></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="auto"
          
          >
            
            <Link  className="link" to="/">Home</Link>
            <Link className="link"  to="/shop">Shop</Link>
            
            <Link  className="link" to="/contact">Contact</Link>
            <NavDropdown title="login" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link className="navbarr" to="login">Login</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link className="navbarr" to="register">Register</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="carts" className='cart' onClick={navigateToCart} >
               <FaShoppingCart   className="icon"  size={20} /> <  p onChange={HandelChange}> {inputText} </p>
            </Link>
          </Nav>
         
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </div>
  )
}

export default Header