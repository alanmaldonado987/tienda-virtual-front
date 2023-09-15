import '../styles/UploadProduct.scss';
import { useEffect, useState } from 'react';
import { createProduct } from '../services/POST/AddProductService';
import swal from 'sweetalert';
import { useForm } from 'react-hook-form'

export default function UploadProduct() {
   
    const { register, formState:{errors}, handleSubmit, setValue, getValues } = useForm(); //Registra los nombre de los inputs

    const onSubmit = async (data) => {
        try {
          console.log(data);
          const newProduct = await createProduct(data);
          console.log('Producto creado:', newProduct);
          swal({
            title: "Buen trabajo!",
            text: data.name + " ha sido agregado!",
            icon: "success",
            button: "Aceptar",
          });
          
        } catch (error) {
          console.error('Error al crear el producto:', error);
        }
      };


      useEffect(()=>{
        setValue('name', 'Pedro');
        console.log(getValues('name'));

      },[])


  return (
    <div className='form_container'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>Nombre del Producto</p>
            <input type='text' className='txt' name='name' {...register('name',
            {required:true, minLength:2, maxLength:20})} />
            {
              errors.name?.type === 'required' && (
                <p style={{color: 'red'}}>Ingrese un nombre</p>
              )
            }
            {
              errors.name?.type === 'minLength' && (
                <p style={{color: 'red'}}>El nombre debe tener minimo 2 caracteres</p>
              )
            }
            {
              errors.name?.type === 'maxLength' && (
                <p style={{color: 'red'}}>El nombre debe tener máximo 20 caracteres</p>
              )
            }

            <p>Descripcion del Producto</p>
            <textarea className='txt' name='description' {...register('description', {required: {
              value: true, message: 'PRUEBA'
            }})}/>
            {
            
                <p style={{color: 'red'}}> {errors.description?.message} </p>
              
            }
            {
              errors.description?.type === 'minLength' && (
                <p style={{color: 'red'}}>La descripcion debe tener minimo 2 caracteres</p>
              )
            }
            {
              errors.description?.type === 'maxLength' && (
                <p style={{color: 'red'}}>La descripcion debe tener máximo 20 caracteres</p>
              )
            }

            <p>Precio del Producto</p>
            <input type='number' className='txt' name='price' {...register('price', {required: true, minLength:1, maxLength: 5000})} / >
            {
              errors.price?.type === 'required' && (
                <p style={{color: 'red'}}>Ingrese un precio</p>
              )
            }
            {
              errors.price?.type === 'minLength' && (
                <p style={{color: 'red'}}>El precio debe ser minimo de 1 dolar</p>
              )
            }
            {
              errors.price?.type === 'maxLength' && (
                <p style={{color: 'red'}}>El precio debe ser máximo 5000 dolares</p>
              )
            }

            <p>Categoria del Producto</p>
            <input type='text' className='txt' name='category' {...register('category', {required: true, minLength:4, maxLength:11})} />
            {
              errors.category?.type === 'required' && (
                <p style={{color: 'red'}}>Ingrese una categoria</p>
              )
            }
            {
              errors.category?.type === 'minLength' && (
                <p style={{color: 'red'}}>La categoria debe tener minimo 4 caracteres</p>
              )
            }
            {
              errors.category?.type === 'maxLength' && (
                <p style={{color: 'red'}}>La categoria debe tener máximo 11 caracteres</p>
              )
            }

            <p>Stock del Producto</p>
            <input type='number' className='txt' name='stock'{...register('stock', {required: true, minLength:1, maxLength:100})}/>

            {
              errors.stock?.type === 'required' && (
                <p style={{color: 'red'}}>Ingrese Stock Disponible</p>
              )
            }
            {
              errors.stock?.type === 'minLength' && (
                <p style={{color: 'red'}}>El Stock Disponible sebe ser minimo de 1</p>
              )
            }
            {
              errors.stock?.type === 'maxLength' && (
                <p style={{color: 'red'}}>El Stock Disponible sebe ser máximo de 100</p>
              )
            }

            <br/>

            <button type='submit'>  Agregar Producto</button>
        </form>
    </div>
  )
}
