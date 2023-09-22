import axios from 'axios';
import { URL_API } from '../utils/URL_API';
import Swal from 'sweetalert2'

export default async function loginUserService (user, token, role){
    try{
        const response = await axios.post(`${URL_API}/auth/login`, user);
        saveToken(token, role);
        return response;
    }catch(error){
        console.error(error);
        if(error.response.status === 404){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.message,
              })
        }

          if (error.response.status === 401) {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized...',
              text: error.response.data.message,
            })
          }
    }
}
export async function saveToken(token, role){
    await localStorage.setItem('JwtToken', token);
    await localStorage.setItem('role', role);
}