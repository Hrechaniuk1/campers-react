import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorite: [],
    },
    reducers: {
        changeFavorite: {
            reducer(state, action) {
                state.favorite.push(action.payload)
            }
        },
        deleteFavorite: {
            reducer(state, action) {
              state.favorite = state.favorite.filter(item => item !== action.payload)
            }
        },
    },
})


export const { changeFavorite, deleteFavorite} = favoriteSlice.actions
export const favoriteReducer = favoriteSlice.reducer