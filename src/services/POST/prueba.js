import axios from 'axios';
import { URL_API } from '../../utils/URL_API';
import { GetToken } from '../../utils/GetToken';

export async function createFile(file){
    try{
        const response = await axios({ //Devuelve una promesa
            url: `${URL_API}/products/prueba`, //URL peticion
            method: 'POST', //Tipo de peticion
            data: {
                file
            },
            headers:{
                Authorization: GetToken()
            }
        })
        return response;
    }catch(e){
        console.error(e);
    }
}
