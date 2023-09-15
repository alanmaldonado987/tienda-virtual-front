import React, { useState, useEffect, useContext } from 'react';
import '../styles/Product.scss';
import { productContext } from '../context/ProductContext';
import swal from 'sweetalert';
import ModalUpdate from './ModalUpdate';


export default function Product( {product, handleDelete } ) {

  //--------------------------------------------------------------
  const { setNumProducts } = useContext(productContext);
  const { numProducts } = useContext(productContext);
  const { setCarProducts } = useContext(productContext);
  const { carProducts } = useContext(productContext);
  const [modalOpen, setModalOpen] = useState(false);


  function addProduct() {
    if(product.stock === 0){
      swal({
        title: "Lo sentimos",
        text: "Este producto no tiene Stock Disponible",
        icon: "warning"
      });
      
    }else{
      setCarProducts((prevCarProducts) => [...prevCarProducts, product]);
      setNumProducts(numProducts+1);
      product.stock = product.stock-1;
    }
  }

  useEffect(() => {
    
  }, [carProducts]);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  
  return (
    <>
      <div className='product_container'>
        
        <div className='product_img'>
          <div className='updateIcon' onClick={handleOpen}><ion-icon name="sync"></ion-icon></div>
            {modalOpen === false ? null : <ModalUpdate open={modalOpen} onClose={handleClose} product={product} />}
              <img src='https://i.ytimg.com/vi/OVTZQME-mVY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCOVqK8CQcisYTrjujimMqHrVEjYg' />
          </div>
        <div className='product_tittle'>
          <h2> {product.name} </h2>
        </div>
        <div className='product_description'>
          <p> {product.description} </p>
        </div>
        <div className='product_price'>
          <p> ${product.price} </p>
        </div>
        <div className='product_stock'>
          Stock Disponible: <p> { product.stock } </p>
          {product.stock > 10 ? <p>{product.tock}</p> : <ion-icon name="alert" style={{ color: 'red', fontSize: '20px' }}></ion-icon>}    
        </div>
        <div className='product_button'>
          <button onClick={addProduct}> <ion-icon name="cart"></ion-icon> Comprar </button>
          <button onClick={()=>{handleDelete(product.id)}}><ion-icon name="trash"></ion-icon></button>
        </div>
      </div>
      
    </>
  )
}



