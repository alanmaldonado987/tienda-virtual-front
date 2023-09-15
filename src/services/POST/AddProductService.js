import axios from 'axios';
export async function createProduct(product){
    try{
        const response = await axios({ //Devuelve una promesa
            url: 'http://localhost:4000/products/addProduct', //URL peticion
            method: 'POST', //Tipo de peticion
            data: {
                ...product,
            }
        })
        return response;
    }catch(e){
        console.error(e);
    }
}