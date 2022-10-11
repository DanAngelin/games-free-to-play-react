import React from 'react';
import classes from "./GameItem.module.css";
import { Link } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md'

const GameItem = ({ dataGames }) => {

  return (
    <>
    {dataGames.slice(0, 15).map((game) => {
        return <Link to={"/game/" + game.id} key={game.id} className={classes.link}>
                  <button className={classes.icon_fav}><MdFavoriteBorder /></button>
                  <div className={classes.game}>
                  <p className={classes.game_title}>{game.title}</p>
                  <img src={game.thumbnail} alt={game.title}></img>
                  <p>Genre: {game.genre}</p>
                  <p>Platform: {game.platform}</p>
                  <p>Publisher: {game.publisher}</p>
                  </div>
                </Link>
    })}
    </>
  )
}

export default GameItem;