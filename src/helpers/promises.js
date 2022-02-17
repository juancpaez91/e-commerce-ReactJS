export const productsAPI = new Promise(async (resolve, reject) =>{
    try {
        const response = await fetch ("https://fakestoreapi.com/products")
        const data = await response.json()
        resolve(data);
    } catch (error) {
        reject(error)
    }
    });

    export const getItem = (id) =>{
        return new Promise (async (resolve,reject) =>{
            try{
                const url= await fetch ("https://fakestoreapi.com/products/" + id)
                const item = await url.json()
                resolve (item)
            }catch (error){
                reject(error)
            }
        })
    }

    export const getCategories = new Promise (async (resolve, reject) =>{
        try {
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const data = await response.json()
            resolve(data)
        } catch (error) {
            reject(error)            
        }
    })