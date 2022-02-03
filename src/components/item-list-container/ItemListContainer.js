import { useEffect, useState } from "react";
import { product } from "../../data/Products";
import { productsAPI } from "../../helpers/promises";
import Product from "../item/Item"



const ProductsListContainer = () => {
    const [products, setProducts] =useState([]);

    useEffect(() => {
        getProducts();
        }, []);
    
    const getProducts = async () =>{
        try{
            const result = await productsAPI;
            setProducts (result);
        }catch(error){
            console.log({error});
        }finally {
            console.log("finalizó de la carga de productos");
        }
    }
    return (
        <div>
            {product.map((products) => (
                <Product key={products.id}{...products}/>
            ))}
        </div>
        );
    };

export default ProductsListContainer;
