import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: 'favorites',
    initialState: {
        games: localStorage.getItem("games") ? JSON.parse(localStorage.getItem("games")) : [],
        totalGames: localStorage.getItem("totalGames") ? JSON.parse(localStorage.getItem("totalGames")) : 0
    },
    reducers: {
        addGameToFavorites(state, action) {
            const newGame = action.payload;
            const existingGame = state.games.find(game => game.id === newGame.id);

            if (!existingGame) {
                state.totalGames++;
                state.games.push({id: newGame.id, title: newGame.title, thumbnail: newGame.thumbnail, genre: newGame.genre})
            } 
            localStorage.setItem("games", JSON.stringify(state.games));
            localStorage.setItem("totalGames", JSON.stringify(state.totalGames))
        },
        removeGameFromFavorites(state, action) {
            const id = action.payload;
            const existingGame = state.games.find(game => game.id === id);
            state.totalGames--;
            if (existingGame) {
                state.games = state.games.filter((game => game.id !== id));
            }
            localStorage.setItem("games", JSON.stringify(state.games));
            localStorage.setItem("totalGames", JSON.stringify(state.totalGames))
        }
    }
});

export const favActions = favSlice.actions

export default favSlice