import { createSlice } from "@reduxjs/toolkit";

import { fetchAll } from "./operations";

const camperSlice = createSlice({
    name: 'campers',
    initialState: {
        items: [],
        favorite: [],
        page: 1,
        total: 1,
        filters: {
            location: '',
            equipment: [],
            form: ''
        },
        locations: [],
        error: false,
        loading: false,
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
        changeFilter: {
            reducer(state, action) {
                state.filters = action.payload
            }
        },
        changePage: {
            reducer(state, action) {
                state.page = action.payload
            }
        },
        changeTotal: {
            reducer(state, action) {
                state.total = action.payload
            }
        },
        changeError: {
            reducer(state, action) {
                state.error = action.payload
            }
        },
        changeLoading: {
            reducer(state, action) {
                state.loading = action.payload
            }
        }
    },
    extraReducers: builder => {
        builder
        .addCase(fetchAll.pending, (state, action) => { 
            state.loading = true
        }
        )
        .addCase(fetchAll.fulfilled, (state, action) => {
            state.error = false
            const page = state.page
            if(page !== 1) {
                state.items = [...state.items, ...action.payload.items]
            } else {
                state.items = action.payload.items
            }
            state.loading = false
            state.total = action.payload.total
        })
        .addCase(fetchAll.rejected, (state, action) => {
            state.items = []
            state.loading = false
            state.error = true
        })
    }

})


export const {changeError, changeFilter, changeLoading, changePage, changeTotal, changeFavorite, deleteFavorite} = camperSlice.actions
export const camperReducer = camperSlice.reducer