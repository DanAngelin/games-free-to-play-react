import React from 'react';
import classes from './Game.module.css';
import { API_KEY } from '../../utils/apikey';
import axios from 'axios';
import Layout from '../../components/Layout/Layout'
import Box from '../../components/UI/Box';
import Loading from '../../components/Loading/Loading';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {AiOutlinePlayCircle} from "react-icons/ai";
import {GrSystem} from "react-icons/gr"

const Game = () => {
    const [game, setGame] = useState([]);
    const [loading, setLoading] = useState(true);

    const params = useParams();

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

          const fetchGame = async() => { 
            setLoading(true)
            axios.request(options).then(function (response) {
            setGame(response.data);
            setLoading(false)
          }).catch(function (error) {
              console.error(error);
          });
        }

        fetchGame();
    }, [params])

  return (
    <Box>
        <Layout>
          {loading ? (<Loading />) : (
            <div className={classes.box}>
            <div className={classes.game}>
              <div className={classes.game_left}>
                <img src={game.thumbnail} alt="Game Thumbnail"></img>
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
                  <button><AiOutlinePlayCircle /><a href={game.game_url} target='_blank' rel="noreferrer">Play Game</a></button>
                </div>

                <div className={classes.game_sys}>
                  <h3><GrSystem /> SYS MIN REQ</h3>
                  <p>GRAPHICS: <span>{game.minimum_system_requirements?.graphics}</span></p>
                  <p>MEMORY: <span>{game.minimum_system_requirements?.memory}</span></p>
                  <p>OS: <span>{game.minimum_system_requirements?.os}</span></p>
                  <p>PROCESSOR: <span>{game.minimum_system_requirements?.processor}</span></p>
                  <p>STORAGE: <span>{game.minimum_system_requirements?.storage}</span></p>
                </div>
              </div>

            </div>

            <div className={classes.game_scrn}>
              {game.screenshots.map((game, index) => {
                return <img src={game.image} key={index} alt="screenshot"/>
              })}
            </div>
            
          </div>
          )}

        </Layout>
    </Box>
  )
}

export default Game