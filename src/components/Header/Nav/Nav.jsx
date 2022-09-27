import React from 'react';
import classes from './Nav.module.css'
import { Link } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

const Nav = () => {
  return (
    <div className={classes.nav}>
      <ul>
        <Link to="/"><IoMdHome />Home</Link>
        <Link to="/contact"><MdEmail />Contact</Link>
      </ul>
    </div>
  )
}

export default Nav