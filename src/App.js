import ListProducts from './components/ListProducts';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Carrito from './components/Carrito';
import { ProductData } from './context/ProductContext';
import UploadProduct from './components/UploadProduct';
import HogarProducts from './components/HogarProducts';
import ElectronicProducts from './components/ElectronicProducts';
import RopaProducts from './components/RopaProducts';
import Login from './views/Login';
import Register from './views/Register';
import ProtectedRoutes from './routes/ProtectedRoutes';
import Home from './views/Home';
import UploadFile from './components/UploadFile';

function App() {

  const jwtToken2 = localStorage.getItem('JwtToken');
  const userRole = localStorage.getItem('role');

  return (
    <ProductData>
        <div className="App">
          <Routes>
              <Route path='/' element= { <Login/> }/>
              <Route path='/register' element= { <Register/> }/>
              <Route path= '/pruebas' element = {<UploadFile/>} />
              <Route element={<ProtectedRoutes canActivate={jwtToken2} role ={userRole} />}>
                <Route path='/carrito' element= { <Carrito /> } />
                <Route path='/ListProducts' element= { <ListProducts /> } />
                <Route path='/uploadProduct' element= { <UploadProduct/> }/>
                <Route path='/HogarProducts' element= { <HogarProducts/> }/>
                <Route path='/ElectronicProducts' element= { <ElectronicProducts/> }/>
                <Route path='/RopaProducts' element= { <RopaProducts/> }/>
                <Route path='/home' element={<Home />} />
              </Route>
          </Routes>
       </div>
    </ProductData>
      
  );
}

export default App;
