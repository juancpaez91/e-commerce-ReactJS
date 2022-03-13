import { useEffect, useState } from "react";
import { Container, Nav, NavDropdown, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import CarritoCompras from "../Icons/CarritoCompras";
import "./NavBar.css"
import {getFirestore, getDocs, collection} from 'firebase/firestore/lite';
// import {getCategories} from "../../helpers/promises"


const NavBar = () => {
    const [categories, setCategories]= useState([])

    useEffect(()=>{
        const db= getFirestore()
        try{
            async function getCategories(db) {
                const categoriesColl = collection(db, 'category');
                const categories = await getDocs(categoriesColl);
                const categoryList = categories.docs.map(doc =>{
                    return{
                        id: doc.id, name: doc.data().name 
                    }
                });
                setCategories(categoryList)
            } 
            if (categories.length === 0){
                getCategories(db)
            }
        } catch (error){
            console.log (error)
        }
        })

        
    return (
        <Navbar className="NavStyle" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to={"/"}>Home</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown  title="Categorias" id="basic-nav-dropdown">
                    {categories.map((category, index)=>
                        <div key={index}>
                            <Link to={"/category/" + category.id }>{category.name}</Link>
                        </div>
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
