import React from 'react';
import classes from './Nav.module.css'
import { IoMdHome } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

const Nav = () => {
  return (
    <div className={classes.nav}>
      <ul>
        <li><IoMdHome />Home</li>
        <li><MdEmail />Contact</li>
      </ul>
    </div>
  )
}

export default Nav