import axios from 'axios';
import {URL_API} from '../utils/URL_API';

export async function getProducts(){
    try{
        const response = await axios({ //Devuelve una promesa
            url: `${URL_API}/products`, //URL peticion
            method: 'GET' //Tipo de peticion
        })
        return response;
    }catch(e){
        console.error(e);
    }
}