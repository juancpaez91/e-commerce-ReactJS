import React, { useState } from 'react';
import NavBar from "../components/NavBar/NavBar";
import { BrowserRouter, Route, Routes as Switch} from 'react-router-dom';
import ItemDetailContainer from '../components/item-detail-container/ItemDetailContainer';
import ItemListContainer from "../components/item-list-container/ItemListContainer"
import Category from "../components/Category/Category"
import Cart from '../components/cart/Cart';

const Routes = () => {
  const [cantItem, setCantItem] = useState (0)

  function sumarCarrito(counter){
    setCantItem(counter) 
  }
  return (
      <BrowserRouter>
        <NavBar cantItem = {cantItem}/>
        <Switch>
            <Route exact path="/" element={<ItemListContainer/>} />
            <Route path="/item/:id" element={<ItemDetailContainer sumarCarrito = {sumarCarrito} />} />
            <Route path="/category/:id" element={<Category/>} />
            <Route path="/cart" element={<Cart cantItem= {cantItem} />}  />
        </Switch>
      </BrowserRouter>
  )
};

export default Routes;
