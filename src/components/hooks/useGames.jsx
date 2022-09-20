import { useEffect, useState } from 'react';
import axios from 'axios';

const useGames = () => {
    const [dataGames, setDataGames] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        headers: {
          'X-RapidAPI-Key': '******',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };

    useEffect(() => {
          
         const fetchGames = () => { axios.request(options).then(function (response) {
            setDataGames(response.data);
          }).catch(function (error) {
              console.error(error);
          });
        }
        fetchGames();

    }, []);
    
 return dataGames;
}

export default useGames