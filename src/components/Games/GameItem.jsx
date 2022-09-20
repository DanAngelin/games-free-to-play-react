import React from 'react'

const GameItem = ({ dataGames }) => {
console.log(dataGames.slice(0, 20))
  return (
    <>
    {dataGames.slice(0, 20).map((game, index) => {
        return <p key={index}>{game.title}</p>
    })}
    </>
  )
}

export default GameItem;