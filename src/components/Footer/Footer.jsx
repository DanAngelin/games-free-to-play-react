import React from 'react';
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.footer}>
        <h3>&copy; {new Date().getFullYear()} Angelin | For Educational Purposes Only</h3>
    </div>
  )
}

export default Footer