import axios from 'axios';
import { URL_API } from '../../utils/URL_API';

export default async function updateProduct(id, product){
    console.log(id, product)
    try{
        await axios.patch(`${URL_API}/products/${id}`, product)
    }catch(e){
        console.error(e);
    }
}