import { useEffect, useState } from "react";
import { Container, Nav, NavDropdown, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import CarritoCompras from "../Icons/CarritoCompras";
import "./NavBar.css"
import {getCategories} from "../../helpers/promises"


const NavBar = () => {
    const [categories, setCategories]= useState([])

    useEffect(()=>{
        async function getAllCategories(){
            setCategories(await getCategories)
        } getAllCategories()
        })

    return (
        <Navbar className="NavStyle container-fluid" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to={"/"}>Home</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown  title="Dropdown" id="basic-nav-dropdown">
                    {categories.map((category, index)=>
                        <NavDropdown.Item key={index} href="#action/3.1"> {category} </NavDropdown.Item>
                    )}
                   </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <CarritoCompras/>
            </Container>
        </Navbar>
    )

};

export default NavBar;
