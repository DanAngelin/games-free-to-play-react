import React from 'react';
import classes from './Nav.module.css'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import { MdEmail, MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const Nav = () => {

  const totalFavoritesGames = useSelector(state => state.fav.totalGames)

  return (
    <div className={classes.nav}>
      <ul>
        <li>
        <NavLink to="/"><IoMdHome />Home</NavLink>
        </li>
        <li>
        <NavLink to="/contact"><MdEmail />Contact</NavLink>
        </li>
        <li>
        <NavLink to="/favorites" className={classes.fav_total}>{totalFavoritesGames > 0 ? <MdFavorite /> : <MdFavoriteBorder />}<p>{totalFavoritesGames}</p></NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav