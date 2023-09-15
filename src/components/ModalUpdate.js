import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../styles/ModalUpdate.scss';
import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/ListProductsService';
import swal from 'sweetalert';
import Swal from 'sweetalert2'
import {getProductById} from '../services/ListProductById';
import updateProduct from '../services/PATCH/UpdateProduct';
import { useForm } from 'react-hook-form'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  'border-radius': '14px'
};



export default function ModalUpdate({ open, onClose, product }){

  const { register, formState:{errors}, handleSubmit, setValue, getValues } = useForm();
    
    const onChange = async ( editData ) => {
      try {
        await updateProduct(product.id, editData);
        swal("Buen trabajo!", "El producto se ha editado correctamente", "success")
      } catch (error) {
          Swal("Oops...", error);
      }
    };
    

    useEffect(()=>{
      setValue('name', product.name);
      setValue('description', product.description);
      setValue('price', product.price);
      setValue('category', product.category);
      setValue('stock', product.stock);
    },[product])

    const handleEdit = (event) =>{
      event.preventDefault();
      const editData = getValues();
      console.log(editData)
      onChange(editData);
    }
    

  return (
    <>
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
           <h1>Editar Producto</h1>
                <form className='form-cont' onSubmit={handleEdit}>
                    <div class="form-group">
                        <input type="text" id="productName" name='name' placeholder="Nombre del producto" required {...register('name',
                        {required:true, minLength:2, maxLength:20})}/>
                    </div>
                    <div class="form-group">
                        <textarea id="description" name="description" placeholder="Descripcion del producto" required {...register('description',
                        {required:true, minLength:2, maxLength:20})} ></textarea>
                    </div>
                    <div class="form-group">
                        <input type="number" id="price" name='price' placeholder="Precio del producto" required {...register('price', {required: true, minLength:1, maxLength: 5000})}  />
                    </div>
                    <div class="form-group">
                    <input type="text" id="productCategory" name='category' placeholder="Categoria del producto" required {...register   ('category', {required: true, minLength:4, maxLength:11})} />
                    </div>
                    <div class="form-group">
                        <input type="number" id="stock" name='stock' placeholder="Stock Disponible" required {...register('stock', {required: true, minLength:1, maxLength:100})} />
                    </div>
                    {console.log(product.name)}
                    <div class="form-group">
                        <button>Guardar</button>
                    </div>
                </form>       
            <div className='exit'>
                <ion-icon name="exit" onClick={ onClose } ></ion-icon>
            </div>
        </Box>
    </Modal>
    </>
  )
}
