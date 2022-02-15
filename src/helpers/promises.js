import {product} from "../data/Products";


export const productsAPI = new Promise(async (resolve, reject) =>{
    try {
        const response = await fetch ("https://fakestoreapi.com/products")
        const data = await response.json()
        resolve(data);
    } catch (error) {
        reject(error)
    }
    });
