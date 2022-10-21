import React from 'react';
import useGames from '../hooks/useGames';
import Category from '../Category/Category';
import GameItem from './GameItem';
import classes from "./Games.module.css"
import { useState } from 'react';
import Pagination from '../Pagination/Pagination';


const Games = () => {
  const [tag, setTag] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(20);

  const dataGames = useGames(tag);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = dataGames.slice(indexOfFirstGame, indexOfLastGame);
  const paginate = (pageNumber) => setCurrentPage(pageNumber)


const tagHandler = (value) => {
  setTag(value);
}


  return (
    <div className={classes.games}>
        <Category tagHandler={tagHandler} paginate={paginate} className={classes.category}/>
        <div className={classes.container_games}>
          <section className={classes.gamelist}>
            {currentGames.map((game) => {
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

          <Pagination currentPage={currentPage} gamesPerPage={gamesPerPage} totalGames={dataGames.length} paginate={paginate}/>
        </div>
    </div>
  )
}

export default Games