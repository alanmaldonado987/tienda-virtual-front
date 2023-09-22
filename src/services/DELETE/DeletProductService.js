import axios from 'axios';
import {URL_API} from '../../utils/URL_API';

export async function deleteProduct(id){
    try{
        const response = await axios({ //Devuelve una promesa
            url: `${URL_API}/products/${id}`, //URL peticion
            method: 'DELETE', //Tipo de peticion
        })
        return response;
    }catch(e){
        console.error(e);
    }
}
