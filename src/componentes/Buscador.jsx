import React from 'react'
import {Navbar,Container,Nav,FormControl,Button,Form} from "react-bootstrap"
import Logo from "../img/logo.png"
import "./style.css"

const Buscador = () => {
  return (
    <div>
    <div className="p-3 mb-9 bg-dark text-white w-100">
    </div>
    <div className=''>
    
    <Navbar bg="primary" expand="lg">
  <Container fluid>
  <img src={Logo} alt="arimage" className='logo' />
    <Navbar.Brand href="#" className='empresa'>SGF GLOBAL</Navbar.Brand>
    
    
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className=" me-auto my-2 my-lg-0 textoNav "
        style={{ maxHeight: '100px', color:"red"}}
        navbarScroll
      >
        <Nav.Link className='nav' href="#action1 ">¿QUIENES SOMOS?</Nav.Link>
        <Nav.Link className='nav' href="#action2 ">VALORES</Nav.Link>
        <Nav.Link className='nav' href="#action3 ">INTERPRETES</Nav.Link>
        <Nav.Link className='nav' href="#action3 ">CAPACITACION</Nav.Link>
        <Nav.Link className='nav' href="#action3 ">POSTULARME</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant=" btn btn-light">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  </div>
   
  )
}
  


export default Buscador