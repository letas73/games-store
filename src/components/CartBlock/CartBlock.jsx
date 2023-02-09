import React, { useCallback, useState } from 'react'
import style from './CartBlock.scss'
import { BiCartAlt } from 'react-icons/bi'
import { useSelector } from 'react-redux'

import CartMenu from '../CartMenu/CartMenu'
import { calcTotalPrice } from '../utils'
import ItemsInCart from '../ItemsInCart/ItemsInCart'
import { useNavigate } from 'react-router-dom'

const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
  const items = useSelector(state => state.cart.itemsInCart)
  const totalPrice = calcTotalPrice(items)
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false)
    navigate('/order')
  }, [navigate])

  return (
    <div className="cart-block" onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}>
      <ItemsInCart quantity={items.length} />
      <BiCartAlt size={25} className="cart-block__icon" />
      <span className="cart-block__price">{totalPrice} руб.</span>
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
}

export default CartBlock