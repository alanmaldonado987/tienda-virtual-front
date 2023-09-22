import axios from 'axios';
import { URL_API } from '../../utils/URL_API';
import { GetToken } from '../../utils/GetToken';

export default async function updateProduct(id, product){
    console.log(id, product)
    try{
        const response = await axios({
            url: `${URL_API}/products/${id}`, product,
            method: 'PATCH',
            headers:{
                Authorization: GetToken()
            }
        })
    }catch(e){
        console.error(e);
    }
}