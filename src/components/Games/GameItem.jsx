import React from 'react';
import classes from "./GameItem.module.css"

const GameItem = ({ dataGames }) => {

  return (
    <>
    {dataGames.slice(0, 12).map((game) => {
        return <div key={game.id} className={classes.game}>
        <p className={classes.game_title}>{game.title}</p>
        <img src={game.thumbnail} alt={game.title}></img>
        <p>Genre: {game.genre}</p>
        <p>Platform: {game.platform}</p>
        <p>Publisher: {game.publisher}</p>
        </div>
    })}
    </>
  )
}

export default GameItem;