import React from 'react'

import Button from '../Button/Button';
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../redux/Cart/reducer";

const GameBuy = ({item}) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart)
  const isItemInCart = items.some((game) => game.id === item.id)

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(item.id));
    } else { 
      dispatch(setItemInCart(item));
    }
  };

  return (
    <div className="game-item__buy">
      <span className="game-item__buy-price">{item.price} руб.</span>
      <Button type={isItemInCart ? 'secondary' : 'primary'} onClick={handleClick}>
        {isItemInCart ? "убрать из корзины" : "В корзину"}
      </Button>
    </div>
  );
}

export default GameBuy