import './App.css';
import NavBar from './components/navbar/NavBar';
import CartWidget from "./components/carro/CartWidget";
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemCount from './components/contador/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer  greeting={'Bienvenidos'}/>
      <ItemCount inital={1} stock={10} onAdd={(quantity) => console.log('Cantidad Agregada ',quantity)}/>
      <CartWidget />
    </div>
  );
}

export default App;
