import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentGame } from '../../redux/games/reducer';
import GameBuy from '../GameBuy/GameBuy';
import style from './GameItem.scss'

const GameItem = ({ item }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setCurrentGame(item))
    navigate(`/app/${item.title}`)
  }

  return (
    <div className="game-item" onClick={handleClick}>
      <img src={item.image} alt="" className="game-item__img" />
      <div className="game-item__details">
        <span className="game-item__title">{item.title}</span>
        <div className="game-item__genre">
          {item.genres.map((genre) => (
            <span className="game-item__genre-text" key={genre}>
              {genre}
            </span>
          ))}
        </div>
        <GameBuy item={item}></GameBuy>
      </div>
    </div>
  );
};

export default GameItem