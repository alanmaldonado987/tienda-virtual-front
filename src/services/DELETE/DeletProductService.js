import axios from 'axios';
export async function deleteProduct(id){
    try{
        const response = await axios({ //Devuelve una promesa
            url: `http://localhost:4000/products/${id}` , //URL peticion
            method: 'DELETE', //Tipo de peticion
        })
        return response;
    }catch(e){
        console.error(e);
    }
}
