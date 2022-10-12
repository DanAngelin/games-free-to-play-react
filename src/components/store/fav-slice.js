import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: 'favorites',
    initialState: {
        games: [],
        totalGames: 0
    },
    reducers: {
        addGameToFavorties(state, action) {
            const newGame = action.payload;
            const existingGame = state.games.find(game => game.id === newGame.id)
            console.log(state.games)
            if (!existingGame) {
                state.totalGames++;
                state.games.push({id: newGame.id, title: newGame.title, thumbnail: newGame.thumbnail, genre: newGame.genre})
            } 
        },
        removeGameFromFavorties(state, action) {
            const id = action.payload;
            const existingGame = state.games.find(game => game.id === id);
            state.totalGames--;
            if (existingGame) {
                state.games = state.games.filter((game => game.id !== id));
            }
        }
    }
});

export const favActions = favSlice.actions

export default favSlice