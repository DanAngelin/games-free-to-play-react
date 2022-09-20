import {useState, useEffect} from 'react';
import Box from '../../components/UI/Box';
import useGames from '../../components/hooks/useGames';
import classes from "./Home.module.css";

const Home = () => {

    const dataGames = useGames()

   console.log(dataGames.splice(0, 30))

  return (
    <Box>Home</Box>
  )
}

export default Home