import React from 'react';
import useGames from '../hooks/useGames';
import GameItem from './GameItem';
import classes from "./Games.module.css"

const Games = () => {
    const dataGames = useGames()

  return (
    <div className={classes.games}>
        <GameItem dataGames={dataGames}/>
    </div>
  )
}

export default Games