import axios from 'axios';
import { URL_API } from '../../utils/URL_API';
import { GetToken } from '../../utils/GetToken';

export async function createProduct(product, file){
    try{
        const response = axios.post('http://localhost:4000/api/v1/products/addProduct', product, file)
        return response;
    }catch(e){
        console.error(e);
    }
}
