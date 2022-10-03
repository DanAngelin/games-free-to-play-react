import React from 'react';
import useGames from '../hooks/useGames';
import Category from '../Category/Category';
import GameItem from './GameItem';
import classes from "./Games.module.css"
import { useEffect, useState } from 'react';

const Games = () => {
  const [tag, setTag] = useState();

const dataGames = useGames(tag);
console.log(dataGames);
console.log(tag);

const tagHandler = (value) => {
  setTag(value);
}


  return (
    <div className={classes.games}>
        <Category tagHandler={tagHandler} className={classes.category}/>
        <div  className={classes.gamelist}>
          <GameItem dataGames={dataGames} />
        </div>
    </div>
  )
}

export default Games