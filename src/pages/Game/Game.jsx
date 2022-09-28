import React from 'react';
import classes from './Game.module.css';
import { API_KEY } from '../../utils/apikey';
import axios from 'axios';
import Layout from '../../components/Layout/Layout'
import Box from '../../components/UI/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Game = () => {
    const [game, setGame] = useState([]);

    const params = useParams();
    console.log(params.id)

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
            params: {id: params.id},
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
            <h2>{game.title}</h2>
            <img src={game.thumbnail}></img>
            <p>{game.developer}</p>
            <p>{game.short_description}</p>
            <p>{game.genre}</p>
            <p>{game.publisher}</p>
            <p>{game.release_date}</p>
            <p>{game.status}</p>
            <p>{game.platform}</p>

        </Layout>
    </Box>
  )
}

export default Game