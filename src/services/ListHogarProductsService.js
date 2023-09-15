import axios from 'axios';
export async function getHogar(){
    try{
        const response = await axios({ //Devuelve una promesa
            url: 'http://localhost:4000/products/hogar',
            method: 'GET'
        })
        return response;
    }catch(e){
        console.error(e);
    }
}