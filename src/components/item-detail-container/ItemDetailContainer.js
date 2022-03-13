import { Card } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getItem } from "../../helpers/promises"
import ItemCounter from "../item-counter/ItemCounter"
import {getFirestore, getDoc, doc} from 'firebase/firestore/lite';
import "../item/itemCard.css"


const ItemDetailContainer = () => {
    const [selectedItem, setSelectedItem]=useState({})
    const [stockActual, setStockActual]= useState (0)
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
    console.log (counter)
        setStockActual(selectedItem.stock - counter)
    
    }

  return (
      <div>
            <Card className="itemCard">
                <Card.Body>
                    <Card.Img className="cardImage" src={selectedItem.image} />
                    <Card.Title className="cardName" >{selectedItem.name} </Card.Title>
                    <Card.Subtitle className="cardSubname">{selectedItem.price}</Card.Subtitle>
                    <Card.Subtitle className="cardSubname">{selectedItem.catName}</Card.Subtitle>
                    <Card.Text>{selectedItem.description} </Card.Text>
                </Card.Body>
            </Card>
                    <ItemCounter onClick= {modificarStock} stock={selectedItem.stock}/>
                    <p> {stockActual} </p>
        </div>
  )}

export default ItemDetailContainer;