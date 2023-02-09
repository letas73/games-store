import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from '../components/OrderItem/OrderItem'
import { calcTotalPrice } from '../components/utils'

const Order = () => {
  const items = useSelector((state) => state.cart.itemsInCart)

  if (items.length < 1) {
    return <h1>Ваша корзина пуста</h1>
  }

  return (
    <div className='order'>
      <div className="order__left">
        {
          items.map((game) => <OrderItem game={game} key={game.id} />)
        }
      </div>
      <div className="order__right">
        <div className="order__totalprice">
          Общая стоимость товаров {calcTotalPrice(items)} руб.
        </div>
      </div>
    </div>
  )
}

export default Order