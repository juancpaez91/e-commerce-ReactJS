import { getActiveElement } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { productsAPI } from "../../helpers/promises";
import Item from "../item/Item"
import ItemDetailContainer from "../item-detail-container/ItemDetailContainer"



const ProductsListContainer = () => {
    const [item, setItem] =useState([]);
    const [selectItem, setSelectItem]= useState ("")
    const [loadingItem, setloadingItem]= useState(true)
    
    useEffect(() => {
        getItems();
        }, []);
    
    const getItems = async () =>{
        try {
            let data = await productsAPI
            setItem(data)
        } catch (error) {
            console.log(error);  
        } finally{
            setTimeout (()=>{
            setloadingItem(false);
        }, 2000);
        }
    };

    if (loadingItem){
        return <h3> Cargando articulos...</h3>;
    }
    // if (selectItem){
    //     const SelectedItem = item.find(i => i.id===selectItem)
    //     return (
    //         <ItemDetailContainer  name={SelectedItem.title} price = {SelectedItem.price} description = {SelectedItem.description} image ={SelectedItem.image}></ItemDetailContainer>
    //                 )
    // }

    return (
        <div>
            {
                item.map(({id, title, price, image, description} )=>(
                    <Item key={id} id={id} name= {title} price= {price} image= {image} description={description} showItem={setSelectItem} />
                ))
            }
        </div>
        );

    };

export default ProductsListContainer;
