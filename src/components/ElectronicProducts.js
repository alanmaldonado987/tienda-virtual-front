    import React from 'react'
    import { useState, useEffect } from 'react'
    import { getElectronic } from '../services/ListElectronicProductsService'
    import Product from './Product'

    export default function ElectronicProducts() {

      const [products, setProducts] = useState([])

      useEffect(()=>{
        async function loadingProducts(){
            const response = await getElectronic();
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
    