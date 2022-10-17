import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Favorites.module.css';
import Layout from '../../components/Layout/Layout';
import Box from '../../components/UI/Box';
import FavoriteItem from './FavoriteItem';

const Favorites = (props) => {
  const favGames = useSelector(state => state.fav.games)




  return (
    <Box>
        <Layout>
          <div className={classes.page_favorites}>
            <h3>Favorites ❤️ Games</h3>
            <FavoriteItem favGames={favGames}/>
          </div>
        </Layout>
    </Box>
  )
}

export default Favorites