import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsListContainer from './components/item-list-container/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ProductsListContainer/>
    </div>
  );
}

export default App;
