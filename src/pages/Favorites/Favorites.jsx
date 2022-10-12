import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Favorites.module.css';
import Layout from '../../components/Layout/Layout';
import Box from '../../components/UI/Box';
import { RiChatDeleteFill } from 'react-icons/ri';

const Favorites = () => {
  const favGames = useSelector(state => state.fav.games)

  return (
    <Box>
        <Layout>
        <div className={classes.favorites}>
            {favGames.map((game) => (
              <div key={game.id} className={classes.game}>
                <button className={classes.btn_delete}><RiChatDeleteFill /></button>
                <h2>{game.title}</h2>
                <img src={game.thumbnail} alt={game.title}/>
                <p>Genre: {game.genre}</p>
              </div>
            ))}
          </div>
        </Layout>
    </Box>
  )
}

export default Favorites