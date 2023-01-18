import React, {useEffect} from 'react';
import classes from './Pagination.module.css';

const Pagination = ({ currentPage, gamesPerPage, totalGames, paginate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [paginate]);

    const totalPages = [];
    for(let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
        totalPages.push(i);
      }

  return (
    <div className={classes.pages}>
        {totalPages.map((page) => (
            <button className={classes.btn_page} 
              style={{backgroundColor: `${page === currentPage ? "#FBB034" : "#695ED4"}`}}
              onClick={() => paginate(page)} key={page}>{page}
            </button>
        ))}
    </div>
  )
}

export default Pagination