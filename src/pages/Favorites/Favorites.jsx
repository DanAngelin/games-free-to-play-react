import React from 'react';
import classes from './Favorites.module.css';
import Layout from '../../components/Layout/Layout';
import Box from '../../components/UI/Box';
import { RiChatDeleteFill } from 'react-icons/ri';

const Favorites = () => {
  const DUMMY_GAMES = [
        {id: 1, title: "Overwatch 2", img: "https://www.freetogame.com/g/540/thumbnail.jpg", genre: "Shooter"},
        {id: 2, title: "Diablo", img: "https://www.freetogame.com/g/521/thumbnail.jpg", genre: "MMOARPG"},
        {id: 3, title: "Lost ARK", img: "https://www.freetogame.com/g/517/thumbnail.jpg", genre: "ARPG"},
  ]
  return (
    <Box>
        <Layout>
        <div className={classes.favorites}>
            {DUMMY_GAMES.map((game) => (
              <div key={game.id} className={classes.game}>
                <button className={classes.btn_delete}><RiChatDeleteFill /></button>
                <h2>{game.title}</h2>
                <img src={game.img} alt={game.title}/>
                <p>Genre: {game.genre}</p>
              </div>
            ))}
          </div>
        </Layout>
    </Box>
  )
}

export default Favorites