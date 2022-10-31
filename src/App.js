
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer';
import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import CartProvider from './Context/CartContext'
import Cart from './Components/Cart';
import Destacados from './Components/Destacados';
import Error404 from './Components/Error404';


function App() {
  return (
    <>
      <Router>
      
        <CartProvider>
         <NavBar/>
            <Routes>
              <Route exact path='/' element={<ItemListContainer/>} />
              <Route exact path='/destacado' element={<Destacados/>}/>
              <Route exact path='/categoria/:categoriaId' element={<ItemListContainer/>} />
              <Route exact path='/productos/:productosId' element={<ItemDetailContainer />} />
              <Route exact path='/cart' element={<Cart />} />
              <Route path='*' element={<Error404 />} />
            </Routes>
         </CartProvider>
         
      </Router>
    </>
  );
}

export default App;
