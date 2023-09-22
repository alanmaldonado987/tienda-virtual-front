import { useContext, useState, React} from "react"
import { productContext } from "../context/ProductContext";
import '../styles/Carrito.scss'
import Modal from "./Modal";
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';

export default function Carrito() {

  
  const { carProducts } = useContext(productContext);
  const { setCarProducts } = useContext(productContext);
  const { setNumProducts } = useContext(productContext);
  const { numProducts } = useContext(productContext);

  let countPrice = 0;

  const deleteProduct = (id) => {
    setCarProducts((carProduct) => carProduct.filter((product) => product.id !== id));
    setNumProducts(numProducts-1);
  };

  const calculatedTotalPrice = () =>{
    carProducts.map((product) => {
      countPrice += product.price;
    })
  }

  //------------------------------------------ prueba

  return (
    <>
       <div className="carrito_product_container">
        <Navbar/>
        <Categories/>
        {carProducts.length === 0 ? <Modal/> : <></> }
          {carProducts.map((product)=>{
            return <div className="carrito_container">
                      <div className="carrito_product">
                               <div className="carrito_img">
                                  <img className="img_carrito" src="https://i.ytimg.com/vi/OVTZQME-mVY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCOVqK8CQcisYTrjujimMqHrVEjYg" />
                                </div>
                                <div className="carrito_info">
                                  <div className="carrito_tittle">
                                      <h3>{product.name}</h3>
                                  </div>
                                  <div className="carrito_description">
                                      <p>{product.description}</p>
                                  </div>
                                  <div className="carrito_price">
                                      <p>${product.price}</p>
                                  </div>
                                    
                                </div>
                                <div> <button onClick={()=> deleteProduct(product.id) } ><ion-icon classname='btndelete' name="trash"></ion-icon></button> </div>
                                
                      </div>
                </div>
          })}
        
      <div className="totalPrice">
      {calculatedTotalPrice()}  
        Costo Total: {countPrice}$
      </div>
       </div>
       
    </>
  )
}
