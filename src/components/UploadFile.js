import { useForm } from 'react-hook-form'
import { createFile } from '../services/POST/prueba';
import swal from 'sweetalert';
import axios from 'axios';

export default function UploadFile(){

    const { register, formState:{errors}, handleSubmit, setValue, getValues } = useForm();
    const onSubmit = async (data) => {
        try {

            console.log('data: ', data)
          let f = new FormData();

          console.log('f: ', f)

          f.append('file', data.file[0])

          
          axios.post('http://localhost:4000/api/v1/products/prueba', f)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
          
        } catch (error) {
          console.error('Error al crear el producto:', error);
        }
      };

      return(
        <>
            <form onSubmit={handleSubmit(onSubmit)} >
            <label for="file">Selecciona un archivo:</label>
                <input type="file" name="file" id="file" {...register('file', {required: true})} />
            <br/>

            <button type='submit'>  Agregar Producto</button>
            </form>
        </>
      )
}