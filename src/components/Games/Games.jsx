import React from 'react';
import useGames from '../hooks/useGames';
import Category from '../Category/Category';
import GameItem from './GameItem';
import classes from "./Games.module.css"
import { useState } from 'react';


const Games = () => {
  const [tag, setTag] = useState();

const dataGames = useGames(tag);

const tagHandler = (value) => {
  setTag(value);
}


  return (
    <div className={classes.games}>
        <Category tagHandler={tagHandler} className={classes.category}/>
        <section className={classes.gamelist}>
          {dataGames.slice(0, 15).map((game) => {
            return <GameItem  key={game.id}
                              id={game.id}
                              title={game.title}
                              thumbnail={game.thumbnail}
                              genre={game.genre}
                              platform={game.platform}
                              publisher={game.publisher}/>
          })

          }

        </section>
    </div>
  )
}

export default Games