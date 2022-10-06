import React from 'react';
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
        <h3>&copy; {new Date().getFullYear()} Angelin | For Educational Purposes Only</h3>
    </footer>
  )
}

export default Footer