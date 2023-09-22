import axios from 'axios';
import { URL_API } from '../utils/URL_API';

export async function getElectronic(){
    try{
        const response = await axios({ //Devuelve una promesa
            url: `${URL_API}/products/electronica`,
            method: 'GET'
        })
        return response;
    }catch(e){
        console.error(e);
    }
}