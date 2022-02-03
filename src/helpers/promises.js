import {product} from "../data/Products";


export const productsAPI = new Promise((resolve, reject) =>{
    setTimeout (()=>{
        resolve(product);
    }, 3000);
});