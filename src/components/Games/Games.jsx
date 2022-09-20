import React from 'react';
import useGames from '../hooks/useGames';
import GameItem from './GameItem';

const Games = () => {
    const dataGames = useGames()

  return (
    <div>
        <GameItem dataGames={dataGames}/>
    </div>
  )
}

export default Games