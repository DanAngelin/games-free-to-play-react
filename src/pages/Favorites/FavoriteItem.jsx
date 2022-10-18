import React from 'react';
import classes from './FavoriteItem.module.css'
import {RiChatDeleteFill} from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import { favActions } from '../../components/store/fav-slice';
import { Link } from 'react-router-dom';

const FavoriteItem = ({ favGames }) => {
  const dispatch = useDispatch();

  const removeGameFromFavHandler = (id) => {
    dispatch(favActions.removeGameFromFavorites(id))
  }

  return (
    <div className={classes.favorites}>
    {favGames.map((game) => (
      <div className={classes.box_game} key={game.id}>
        <button onClick={() => removeGameFromFavHandler(game.id)} className={classes.btn_delete}><RiChatDeleteFill /></button>
        <Link to={"/game/" + game.id} className={classes.game}>
          <h2>{game.title}</h2>
          <img src={game.thumbnail} alt={game.title}/>
          <p>Genre: {game.genre}</p>
        </Link>
      </div>
    ))}
  </div>
  )
}

export default FavoriteItem