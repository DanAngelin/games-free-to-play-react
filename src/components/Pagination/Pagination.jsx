import React from 'react';
import classes from './Pagination.module.css';

const Pagination = ({ currentPage, gamesPerPage, totalGames, paginate}) => {
    console.log(currentPage, gamesPerPage, totalGames, paginate)
    const totalPages = [];
    for(let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
        totalPages.push(i);
      }
      console.log(totalPages)
  return (
    <div className={classes.pages}>
        {totalPages.map((page) => (
            <button className={classes.btn_page} onClick={() => 
                paginate(page)} key={page}>{page}</button>
        ))}
    </div>
  )
}

export default Pagination