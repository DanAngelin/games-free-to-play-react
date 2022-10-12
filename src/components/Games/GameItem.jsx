import React from 'react';
import { useDispatch } from 'react-redux';
import { favActions } from '../store/fav-slice';
import classes from "./GameItem.module.css";
import { Link } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md'

const GameItem = ({ id, title, thumbnail, genre, platform, publisher }) => {

  console.log(id )
  const dispatch = useDispatch()

  const addToFavHandler = () => {
    dispatch(favActions.addGameToFavorties({
      id,
      title,
      thumbnail,
      genre
    }))
  }

  return (
    <div className={classes.link}>
                  <button onClick={addToFavHandler} className={classes.icon_fav}><MdFavoriteBorder /></button>
                  <Link to={"/game/" + id} className={classes.game}>
                      <p className={classes.game_title}>{title}</p>
                      <img src={thumbnail} alt={title}></img>
                      <p>Genre: {genre}</p>
                      <p>Platform: {platform}</p>
                      <p>Publisher: {publisher}</p>
                </Link>
    </div>
  )
}

export default GameItem;