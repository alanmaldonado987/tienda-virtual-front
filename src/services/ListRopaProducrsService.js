import axios from 'axios';
export async function getRopa(){
    try{
        const response = await axios({ //Devuelve una promesa
            url: 'http://localhost:4000/products/ropa',
            method: 'GET'
        })
        return response;
    }catch(e){
        console.error(e);
    }
}