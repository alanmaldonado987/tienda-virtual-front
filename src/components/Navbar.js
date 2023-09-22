import '../styles/Narvbar.scss'; 
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { productContext } from '../context/ProductContext';

export default function Navbar() {
    
    const { numProducts } = useContext(productContext);

  return (
    <>
        <div className='navbar' >
            <ul className='logo'>
                <li> <Link to='/ListProducts'> TIENDA CARVAJAL </Link> </li>
            </ul>
            <ul className='secciones'>
                <li><ion-icon name="call"></ion-icon> +57 xxx-xxx-xxxx</li>
                <li>
                    <div className='carrito'>
                    {numProducts} <Link to='/carrito'><ion-icon name="cart"></ion-icon> 
                    Mi Carrito</Link> 
                    </div>
                </li>
                <li>
                    <Link to='/UploadProduct'>
                        <div className='uploadProduct'>
                            <ion-icon name="cloud-upload" style={{ color: 'white', fontSize: '50px' }} ></ion-icon>
                    </div>
                    </Link>
                </li>
            </ul>
        </div>
        <Outlet />
    </>
  )
}

