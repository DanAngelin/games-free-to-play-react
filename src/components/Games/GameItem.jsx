import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favActions } from '../store/fav-slice';
import classes from "./GameItem.module.css";
import { Link } from 'react-router-dom';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const GameItem = ({ id, title, thumbnail, genre, platform, publisher }) => {

  const findId = useSelector(state => state.fav.games)

  const dispatch = useDispatch()

  const removeGameFromFavHandler = (id) => {
    dispatch(favActions.removeGameFromFavorites(id))
  }

  const addToFavHandler = () => {
    dispatch(favActions.addGameToFavorites({
      id,
      title,
      thumbnail,
      genre
    }))
  }

  return (
  <div className={classes.game_box}>

                    {/* Icon Favorite Game */}
                  {findId.find(game => game.id === id) ? 
                  <button onClick={() => removeGameFromFavHandler(id)} className={classes.game_icon_fav}><MdFavorite /></button>
                  :
                  <button onClick={addToFavHandler} className={classes.game_icon_fav}><MdFavoriteBorder /></button>
                  }

                  <Link to={"/game/" + id} className={classes.game}>
                      <p className={classes.game_title}>{title}</p>
                      <img src={thumbnail} alt={title}></img>
                      <p className={classes.game_info}><span>Genre:</span> {genre}</p>
                      <p className={classes.game_info}><span>Platform:</span> {platform}</p>
                      <p className={classes.game_info}><span>Publisher:</span> {publisher}</p>
                  </Link>
            </div>
  )
}

export default GameItem;