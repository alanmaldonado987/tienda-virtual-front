import React from 'react'
import { useState, useEffect } from 'react'
import { getHogar } from '../services/ListHogarProductsService'
import Product from './Product'

export default function HogarProducts() {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    async function loadingProducts(){
        const response = await getHogar();
        setProducts(response.data)
    }
    loadingProducts();
},[])

  return (
    <div className='section_ist_container_products'>
        {products.map(product => (
          <div className='list_container_products'>
            <Product product= {product} />
          </div>
        ))}
    </div>
  )
}
