import React from 'react';
import classes from './Game.module.css';
import { API_KEY } from '../../utils/apikey';
import axios from 'axios';
import Layout from '../../components/Layout/Layout'
import Box from '../../components/UI/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {AiOutlinePlayCircle} from "react-icons/ai"

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
    }, [params.id])
console.log(game)
console.log(game.screenshots)
  return (
    <Box>
        <Layout>
            <div className={classes.box}>
              <div className={classes.game}>
              <div className={classes.game_left}>
                <img src={game.thumbnail}></img>
                <p>{game.short_description}</p>
                <p>RELEASE DATE: <span>{game.release_date}</span></p>
                <p>DEVELOPER: <span>{game.developer}</span></p>
                <p>PUBLISHER: <span>{game.publisher}</span></p>
              </div>

              <div className={classes.game_right}>
                <h2>{game.title}</h2>
                <div className={classes.game_right_details}>
                <p>GENRE: <span>{game.genre}</span></p>
                <p>STATUS: <span>{game.status}</span></p>
                <p>PLATFORM: <span>{game.platform}</span></p>
                </div>

                <div className={classes.btn_play}>
                  <button><AiOutlinePlayCircle /><a href={game.game_url} target='_blank'>Play Game</a></button>
                </div>
              </div>

              </div>

              <div className={classes.game_scrn}>
                {game.screenshots.map((game) => {
                  return <img src={game.image} />
                })}
              </div>
              
            </div>
        </Layout>
    </Box>
  )
}

export default Game