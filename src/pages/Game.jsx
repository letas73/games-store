import React from 'react'
import { useSelector } from 'react-redux'
import GameBuy from '../components/GameBuy/GameBuy'

const Game = () => {
  const game = useSelector((state) => state.game.currentGame)

  if (!game) return null

  return (
    <div className='game'>
      <h1 className="game__title">
        {game.title}
      </h1>
      <div className="game__cont">
        <div className="game__left">
          <iframe width='90%' height="400px" src={game.video} title="YouTube Video" ></iframe>
        </div>
        <div className="game__right">
          <img src={game.image} alt="" className="game__cover" />
          <p className='game__descr'>
            {game.description}
          </p>
          <p className='secondary-text game__popular'>Популярные метки этого продукта:</p>
          {
            game.genres.map((item) => <span className="game-item__genre-text game__genre" key={item}>
              {item}
            </span>)
          }
          <div className="game__buy">
            <GameBuy item={game} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game