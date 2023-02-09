import React from 'react'
import './ItemsInCart.scss'

const ItemsInCart = ({ quantity = 0 }) => {
  return (
    <>
      {
        quantity > 0 ? (<div className="quantity">{quantity}</div>) : null
      }
    </>
  )
};

export default ItemsInCart