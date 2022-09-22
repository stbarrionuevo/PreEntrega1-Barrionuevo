
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer';
import './App.css';



function App() {
  return (
    <>
    
      <header className="App-header">
        <NavBar/>
      </header>
      
      <ItemListContainer greeting="Hola! "/>

    
    </>
  );
}

export default App;
