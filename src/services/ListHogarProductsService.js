import axios from 'axios';
import { URL_API } from '../utils/URL_API';
import { GetToken } from '../utils/GetToken';

export async function getHogar(){
    try{
        const response = await axios({ //Devuelve una promesa
            url: `${URL_API}/products/hogar`,
            method: 'GET',
            headers:{
                Authorization: GetToken()
            }
        })
        return response;
    }catch(e){
        console.error(e);
    }
}