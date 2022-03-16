import { useEffect, useState } from "react";
import { Container, Nav, NavDropdown, Navbar} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CarritoCompras from "../Icons/CarritoCompras";
import "./NavBar.css"
import {getFirestore, getDocs, collection} from 'firebase/firestore/lite';
import Cart from "../cart/Cart";



const NavBar = ({cantItem}) => {
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
        <Navbar className="navStyle">
            <Container>
                <Navbar.Brand className="navItem" >
                    <Link to={"/"}>Home</Link>
                </Navbar.Brand >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navItem">
                    <NavDropdown className="navItem" title="Categorias" id="basic-nav-dropdown">
                    {categories.map((category, index)=>
                        <div key={index}>
                            <Link className="navDrop" to={"/category/" + category.id }>{category.name}</Link>
                        </div>
                    )}
                </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                {/* <div>
                    <Link to={"/cart"}><Cart cantItem={cantItem}/></Link>
                </div> */}
                <NavLink to= "/cart">
                    <CarritoCompras/>
                </NavLink>
            </Container>
        </Navbar>
    )

};

export default NavBar;
