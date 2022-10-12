import React from 'react';
import classes from './Nav.module.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import { MdEmail, MdFavoriteBorder } from 'react-icons/md';

const Nav = () => {

  const favTotal = useSelector(state => state.fav.totalGames)

  return (
    <div className={classes.nav}>
      <ul>
        <Link to="/"><IoMdHome />Home</Link>
        <Link to="/contact"><MdEmail />Contact</Link>
        <Link to="/favorites" className={classes.fav_total}><MdFavoriteBorder /><p>{favTotal}</p></Link>
      </ul>
    </div>
  )
}

export default Nav