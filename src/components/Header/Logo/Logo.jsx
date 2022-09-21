import React from 'react';
import classes from './Logo.module.css';
import { CgGames } from 'react-icons/cg';

const Logo = () => {
  return (
    <div className={classes.logo}>
        <CgGames />
    </div>
  )
}

export default Logo