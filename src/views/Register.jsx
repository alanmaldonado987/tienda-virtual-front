import React, { useState } from 'react';
import '../styles/Register.scss';
import img_form_container from '../assets/login_img.png';
import { Link, Navigate, Route } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import registerUserService from '../services/RegisterUserService';
import Swal from 'sweetalert2'

export default function Register() {

    const { register, handleSubmit, formState:{errors} } = useForm();


     const registerUser = async (user) => {
        try{
            return await registerUserService(user);
        }catch(error){
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }
    }

    return (
        <>
            <div className='register_container'>
                <div className='register_form_container'>
                    <div className='register_header'>
                        <h2>WELCOME FOR</h2>
                        <span><h2>THE FIRST TIME!</h2></span>
                        <p>I have a account, <span><Link to={'/'}>Sing In</Link></span></p>
                    </div>
                    <div className='register_form_login'>
                        <form onSubmit = {handleSubmit(registerUser)} >
                            <label>Username</label>
                            <input placeholder='daniel123@gmail.com' type='text' name='email' {...register('email',
                              {required:true, minLength:2, maxLength:20})} />
                             {
                                errors.email?.type === 'required' && (
                                <p style={{color: 'red'}}>Ingrese un nombre</p>
                            )
                            }
                            {
                            errors.email?.type === 'minLength' && (
                                <p style={{color: 'red'}}>El nombre debe tener minimo 2 caracteres</p>
                            )
                            }
                            {
                            errors.email?.type === 'maxLength' && (
                                <p style={{color: 'red'}}>El nombre debe tener máximo 20 caracteres</p>
                            )
                            }
                            <div className='register_names'>
                              <div className='register_name'>
                                <label>Name</label>
                                <input placeholder='Daniel' type='text' required name='name' {...register('name',
                                 {required:true, minLength:2, maxLength:20})} />
                              </div>

                              <div className='register_lastname'>
                                <label>Lastname</label>
                                <input placeholder='Armando' type='text' required name='lastname' {...register('lastname',
                                 {required:true, minLength:2, maxLength:20})} />
                              </div>
                            </div>

                            <label>Password</label>
                            <input type='password' placeholder='*******' required name='password' {...register('password',
                                 {required:true, minLength:2, maxLength:20})} />
                            <button className='register_sing_up'>Sing In</button>
                        </form>
                    </div>
                </div>
                <div className='register_img_form_container'>
                    <img src= {img_form_container} className='register_img_form_container_img' />
                </div>
            </div>
        </>
    )
}
