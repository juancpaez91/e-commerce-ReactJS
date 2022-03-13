import { Card } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getItem } from "../../helpers/promises"
import ItemCounter from "../item-counter/ItemCounter"
import {getFirestore, getDoc, doc} from 'firebase/firestore/lite';


const ItemDetailContainer = () => {
    const [selectedItem, setSelectedItem]=useState({})
    const {id} = useParams();
    useEffect( ()=>{
        const db =getFirestore();

        const itemsColl = doc(db, "items", id);
        getDoc(itemsColl)
        .then(item=>{
            setSelectedItem({id:item.id, ...item.data()})
        })
    }, []); 

  return (
      <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src={selectedItem.image} />
                    <Card.Title >{selectedItem.name} </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{selectedItem.price}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{selectedItem.catName}</Card.Subtitle>
                    <Card.Text>{selectedItem.description} </Card.Text>
                    <ItemCounter stock={selectedItem.stock}/>
                </Card.Body>
            </Card>
        </div>
  )}

export default ItemDetailContainer;