import { AxiosError } from 'axios';
import axios from 'axios';
import { URL_API } from '../utils/URL_API';
import Swal from 'sweetalert2'

export default async function registerUserService (user){
    try{
        return await axios.post(`${URL_API}/auth/register`, user);
    }catch(error){
        console.error(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Credenciales Invalidas!',
          })
    }
}