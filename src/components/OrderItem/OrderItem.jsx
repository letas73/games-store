import React from 'react'
import { useDispatch } from 'react-redux'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { deleteItemFromCart } from '../../redux/Cart/reducer'

import './OrderItem.scss'

const OrderItem = ({ game }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id))
  }

  return (
    <div className='order-item'>
      <div className="order-item__cover">
        <img src={game.image} alt="" />
      </div>
      <div className="game-item__title">
        {game.title}
      </div>
      <div className="order-item__price">
        {game.price}
        <AiOutlineCloseCircle size={25} className='order-item__delete' onClick={handleClick} />
      </div>
    </div>
  )
}

export default OrderItem