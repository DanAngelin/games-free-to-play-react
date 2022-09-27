import React from 'react';
import classes from './Logo.module.css';
import { Link } from 'react-router-dom';
import { CgGames } from 'react-icons/cg';

const Logo = () => {
  return (
    <Link to="/">
        <div className={classes.logo}>
        <CgGames />
    </div>
    </Link>
  )
}

export default Logo