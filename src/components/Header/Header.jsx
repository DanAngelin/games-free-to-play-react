import React from 'react';
import classes from './Header.module.css';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav'

const Header = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <Nav />
    </header>
  )
}

export default Header