import React from 'react'
import './CartItem.scss'

const CartItem = ({ price, id, title }) => {
  return (
    <div className='cart-item'>
      <span>{title}</span>
      <div className="cart-item__price">
        {price} руб.
      </div>
    </div>
  )
}

export default CartItem