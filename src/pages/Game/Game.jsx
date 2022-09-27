import React from 'react';
import classes from './Game.module.css';
import Layout from '../../components/Layout/Layout'
import Box from '../../components/UI/Box';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../utils/apikey';

const Game = () => {
    const [game, setGame] = useState({});

const id = "452"

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
            params: {id},
            headers: {
              'X-RapidAPI-Key': API_KEY,
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
          };

          const fetchGame = () => { axios.request(options).then(function (response) {
            setGame(response.data);
          }).catch(function (error) {
              console.error(error);
          });
        }
        fetchGame();
    }, [])
console.log(game)
  return (
    <Box>
        <Layout>
            <h2>Game</h2>
        </Layout>
    </Box>
  )
}

export default Game