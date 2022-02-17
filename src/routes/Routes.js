import React from 'react';
import NavBar from "../components/NavBar/NavBar";
import { BrowserRouter, Route, Routes as Switch} from 'react-router-dom';
import ItemDetailContainer from '../components/item-detail-container/ItemDetailContainer';
import ItemListContainer from "../components/item-list-container/ItemListContainer"
import Category from "../components/Category/Category"

const Routes = () => {
  return (
      <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route exact path="/" element={<ItemListContainer/>} />
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
            <Route path="/category/:id" element={<Category/>} />
        </Switch>
      </BrowserRouter>
  )
};

export default Routes;
