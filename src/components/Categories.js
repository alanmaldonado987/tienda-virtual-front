import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories() {
  return (
    <section className='categorias'>
        <ul>
          <Link to = '/ElectronicProducts' >
          <li>
              ELECTRONICA
          </li>
          </Link>
          <Link to = '/HogarProducts' >
          <li>
              HOGAR
          </li>
          </Link>
          <Link to = '/RopaProducts' >
          <li>
              ROPA
          </li>
          </Link>
        </ul>
        
      </section>
  )
}
