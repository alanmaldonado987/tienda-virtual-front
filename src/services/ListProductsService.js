import axios from 'axios';
export async function getProducts(){
    try{
        const response = await axios({ //Devuelve una promesa
            url: 'http://localhost:4000/products', //URL peticion
            method: 'GET' //Tipo de peticion
        })
        return response;
    }catch(e){
        console.error(e);
    }
}