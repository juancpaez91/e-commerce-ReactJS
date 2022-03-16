import React, { useContext} from 'react'
import CarritoCompras from '../Icons/CarritoCompras'
import { CartContext } from '../../context/cartContext';
import "./Cart.css"

const Cart = ({cantItem}) => {
  const items = useContext(CartContext)
  console.log(items)

  return (
    <div>
      <CarritoCompras />
      <span className="mostrarCant">{cantItem}</span>
      </div>
  )
}

export default Cart