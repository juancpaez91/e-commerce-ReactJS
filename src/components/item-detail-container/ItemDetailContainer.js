import { Card } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getItem } from "../../helpers/promises"

const ItemDetailContainer = ({}) => {
    const [selectedItem, setSelectedItem]=useState({})
    const {id} = useParams();
    useEffect( ()=>{
        async function getItemFunc(){
            setSelectedItem(await getItem(id))
        }
        getItemFunc()
        /* async function getItem (){
            try{
                console.log (id)
                const url= await fetch ("https://fakestoreapi.com/products/" + id)
                const item = await url.json()
                console.log(item)
                setSelectedItem(item)
            }catch (error){
                console.log(error)
            }
        }
        getItem(); */
    }, [id]); 

  return (
      <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src={selectedItem.image} />
                    <Card.Title >{selectedItem.title} </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{selectedItem.price}</Card.Subtitle>
                    <Card.Text>{selectedItem.description} </Card.Text>
                </Card.Body>
            </Card>
        </div>
  )}

export default ItemDetailContainer;