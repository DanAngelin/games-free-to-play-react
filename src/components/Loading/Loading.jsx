import React from 'react';
import classes from "./Loading.module.css"

const Loading = () => {
  return (
    <div className={classes.loading}>

      <p>Loading</p>

      <div className={classes.spin}></div>
      
    </div>
  )
}

export default Loading