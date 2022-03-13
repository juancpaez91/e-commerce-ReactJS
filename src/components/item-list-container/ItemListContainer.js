import { useEffect, useState } from "react";
import Item from "../item/Item"
import {getFirestore, getDocs, collection} from 'firebase/firestore/lite';
import "./itemContainer.css"


const ItemListContainer = ({category}) => {
    const [item, setItem] =useState([]);
    const [itemRequest, setItemRequest] = useState(false)
    const [loadingItem, setloadingItem]= useState(true)
    
    useEffect(()=>{
        const db= getFirestore()
        try{
            async function getItems(db) {
                const itemsColl = collection(db, 'items');
                const items = await getDocs(itemsColl);
                const itemList = items.docs.map(doc =>{
                    let item = doc.data()
                        item.id = doc.id
                        return item                   
                });
                setItem(itemList)
                setloadingItem (false)
                setItemRequest (true)
            }
                async function getItemsBycategory (db, category){
                    const itemsColl = collection(db, 'items');
                    const items = await getDocs(itemsColl);
                    let itemList = items.docs.map(doc =>{
                        let item = doc.data()
                        if(doc.data().category === category){ 
                            item.id = doc.id
                            return item
                        }
                    
                    });
                itemList = itemList.filter(item => item)
                setItem(itemList)
                setloadingItem (false)
                setItemRequest (true)
            }
            if (!itemRequest){
                if ( category ) {
                    getItemsBycategory(db, category)
                } else{
                getItems(db)
            }
            }
        } catch (error){
            console.log (error)
        }

        })

    if (loadingItem){
        return <h3> Cargando articulos...</h3>;
    }

    return (
        <div className="itemContainer">
            {
                item.map(({id, name, price, image, description, stock, category} )=>(
                    <Item key={id} id={id} name= {name} price= {price} category= {category} stock= {stock} image= {image} description={description}/>
                ))
            }
        </div>
        );

    };

export default ItemListContainer;
