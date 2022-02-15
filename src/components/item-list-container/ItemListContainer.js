import { getActiveElement } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { product } from "../../data/Products";
import { productsAPI } from "../../helpers/promises";
import Item from "../item/Item"



const ProductsListContainer = () => {
    // const [products, setProducts] =useState([]);
    const [itemML, setItemML] =useState([]);
    const [selectItem, setSelectItem]= useState ("")
    const [loadingItemML, setloadingItemML]= useState(true)
    
    useEffect(() => {
        // getProducts();
        console.log(selectItem)
        getItemsML();
        }, []);
    

    const getItemsML = async () =>{
        try {
            let data = await productsAPI
            setItemML(data)
        } catch (error) {
            console.log(error);  
        } finally{
            setTimeout (()=>{
            setloadingItemML(false);
        }, 2000);
        }
    };

    // const getProducts = async () =>{
    //     try{
    //         const result = await productsAPI;
    //         setProducts (result);
    //     }catch(error){
    //         console.log({error});
    //     }finally {
    //         console.log("finalizó de la carga de productos");
    //     }
    // };

    if (loadingItemML){
        return <h3> Cargando articulos...</h3>;
    }


    return (
        <div>
            {
                itemML.map(({id, title, price, image, description} )=>(
                    <Item key={id} id={id} name= {title} price= {price} image= {image} description={description} showItem={setSelectItem}/>
                    
                    ))
                }
            {/* {product.map((products) => (
                <Product key={products.id}{...products}/>
            ))} */}
        </div>
        );

    };

export default ProductsListContainer;
