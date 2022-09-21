import React from 'react';
import classes from './Header.module.css';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav'

const Header = () => {
  return (
    <div className={classes.header}>
      <Logo />
      <Nav />
    </div>
  )
}

export default Header