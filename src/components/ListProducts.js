import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/ListProductsService';
import Product from './Product';
import '../styles/ListProduct.scss';
import Footer from './Footer';
import { deleteProduct } from '../services/DELETE/DeletProductService';
import swal from 'sweetalert';

export default function ListProducts() {

    const [products, setProducts] = useState([])


     async function loadingProducts(){
      const response = await getProducts();
      setProducts(response.data)
    }

    useEffect(()=>{
      loadingProducts();
    }, [])
  
    
  async function handleDelete(id){
    const deleted = await deleteProduct(id);
    swal("Buen trabajo!", "El producto ha sido eliminado!", "success");
    loadingProducts();
  }

  return (
    <div>
        <div className='section_ist_container_products'>
            {products.map(product => (
              <div className='list_container_products'>
                <Product product= {product} handleDelete={handleDelete} />
              </div>
            ))}
        </div>
        <Footer />
  </div>

          
  )
  
}


