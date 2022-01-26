import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>Articulos</h1>
      <ItemListContainer/>
    </div>
  );
}

export default App;
