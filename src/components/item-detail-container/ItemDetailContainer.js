import { Card } from "react-bootstrap";
import React, { useEffect, useState, useContext} from 'react'
import { useParams } from "react-router-dom";
import ItemCounter from "../item-counter/ItemCounter"
import {getFirestore, getDoc, doc} from 'firebase/firestore/lite';
import "../item/itemCard.css"
import "./ItemDetailContainer.css"
import { CartContext } from "../../context/cartContext";


const ItemDetailContainer = ({sumarCarrito}) => {
    const [selectedItem, setSelectedItem]=useState({})
    const [stockActual, setStockActual]= useState (0)
    const {addItem} = useContext(CartContext)

    const {id} = useParams();
    useEffect( ()=>{
        const db =getFirestore();

        const itemsColl = doc(db, "items", id);
        getDoc(itemsColl)
        .then(item=>{
            setSelectedItem({id:item.id, ...item.data()})
            setStockActual (item.data().stock)
        })
    }, []); 
    function modificarStock(counter){
        setStockActual(selectedItem.stock - counter)
        sumarCarrito(counter)
    }

    const handleAddToCart = () =>{
        addItem({
            selectedItem,
            stockActual
        })
    }

return (
    <>
        <div className="descriptionContent">
            <Card className="itemCard">
                <Card.Body>
                    <Card.Img className="cardImage" src={selectedItem.image} />
                    <Card.Title className="cardName" >{selectedItem.name} </Card.Title>
                    <Card.Subtitle className="cardSubname">{selectedItem.price}</Card.Subtitle>
                    <Card.Subtitle className="cardSubname">{selectedItem.catName}</Card.Subtitle>
                </Card.Body>
            </Card>
            <div>
                <Card.Text className="descriptionText"> {selectedItem.description}</Card.Text>
                <ItemCounter onClick= {modificarStock} stock={selectedItem.stock}/>
                <h6> Stock disponible ({stockActual}) unidades </h6>
                <button onClick={handleAddToCart}> Comprar  </button>
            </div>
        </div>
    </>
)}

export default ItemDetailContainer;