import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./routes/Routes"
import {CartProvider} from "./context/cartContext"
import Cart from './components/cart/Cart';

function App() {
  return (
    <div className="App">
      <CartProvider>
        {/* <Cart/> */}
        <Routes/>
      </CartProvider>
    </div>
    );
}

export default App;
