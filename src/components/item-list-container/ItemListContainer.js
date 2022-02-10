import { getActiveElement } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { product } from "../../data/Products";
import { productsAPI } from "../../helpers/promises";
import Item from "../item/Item"



const ProductsListContainer = () => {
    const [products, setProducts] =useState([]);
    const [itemML, setItemML] =useState([]);
    const [loadingItemML, setloadingItemML]= useState(true)

    useEffect(() => {
        getProducts();
        getItemsML();
        }, []);
    

    const getItemsML = async () =>{
        try {
            const response = await fetch ("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055")
            const data = await response.json()
            setItemML(data.results)
        } catch (error) {
            console.log(error);    
        } finally{
            setloadingItemML(false);
        }
    };

    const getProducts = async () =>{
        try{
            const result = await productsAPI;
            setProducts (result);
        }catch(error){
            console.log({error});
        }finally {
            console.log("finalizó de la carga de productos");
        }
    };

    if (loadingItemML){
        return <h3> Cargando articulos...</h3>;
    }

    return (
        <div>
            {
                itemML.map(({id, name, price, thumbnail} )=>(
                    <Item key={id} name= {name} price= {price} image= {thumbnail}/>
                ))
            }
            {/* {product.map((products) => (
                <Product key={products.id}{...products}/>
            ))} */}
        </div>
        );


    };

export default ProductsListContainer;
