import ListProducts from './components/ListProducts';
import Navbar from './components/Navbar';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Carrito from './components/Carrito';
import { ProductData } from './context/ProductContext';
import UploadProduct from './components/UploadProduct';
import HogarProducts from './components/HogarProducts';
import ElectronicProducts from './components/ElectronicProducts';
import RopaProducts from './components/RopaProducts';
import Categories from './components/Categories';


function App() {
  return (
    <ProductData>
        <div className="App">
         <Navbar />
         <Categories/>
          <Routes>
              <Route path='/carrito' element= { <Carrito /> } />
              <Route path='/' element= { <ListProducts /> } />
              <Route path='/uploadProduct' element= { <UploadProduct/> }/>
              <Route path='/HogarProducts' element= { <HogarProducts/> }/>
              <Route path='/ElectronicProducts' element= { <ElectronicProducts/> }/>
              <Route path='/RopaProducts' element= { <RopaProducts/> }/>
          </Routes>
          
       </div>
         
    </ProductData>
      
  );
}

export default App;
