import axios from 'axios';
import { URL_API } from '../../utils/URL_API';
export async function createProduct(product){
    try{
        const response = await axios({ //Devuelve una promesa
            url: `${URL_API}/products/addProduct`, //URL peticion
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
