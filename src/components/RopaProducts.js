import React from 'react'
import { useState, useEffect } from 'react'
import { getRopa } from '../services/ListRopaProducrsService'
import Product from './Product'

export default function RopaProducts() {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    async function loadingProducts(){
        const response = await getRopa();
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
