
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer';
import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
      <header className="App-header">
        
            <NavBar/>
      </header>

        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/destacado' element={"Proximamente"}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        </Routes>
      

      </Router>
    </>
  );
}

export default App;
