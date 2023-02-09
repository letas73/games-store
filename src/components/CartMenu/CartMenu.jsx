import React from 'react'
import { calcTotalPrice } from '../utils';
import Button from '../Button/Button'

import './CartMenu.scss'
import CartItem from '../CartItem/CartItem';

const CartMenu = ({items, onClick}) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__list">
        {
          items.length > 0 ? items.map((game) => (
            <CartItem key={game.title} price={game.price} title={game.title} id={game.id} />
            )) : 'Корзина пуста'
        }
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__totalprice">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} руб.</span>
          </div>
          <Button type="primary" size='m' onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : (
        null
      )}
    </div>
  );
}

export default CartMenu