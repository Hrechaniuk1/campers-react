import { createSlice } from "@reduxjs/toolkit";

import { fetchAll, fetchPaginationAll } from "./operations";

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
        error: false,
        loading: false,
    },
    reducers: {
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
            console.log(action.payload)})
        .addCase(fetchAll.fulfilled, (state, action) => {
            state.error = false
            state.page = 1
            state.loading = false
            state.items = action.payload.items
            state.total = action.payload.total
        })
        .addCase(fetchAll.rejected, (state, action) => {
            state.loading = false
            state.error = true
        })
        .addCase(fetchPaginationAll.pending, (state, action) => { 
            state.loading = true
            console.log(action.payload)})
        .addCase(fetchPaginationAll.fulfilled, (state, action) => {
            state.error = false
            state.loading = false
            state.items = [...state.items, ...action.payload.items]
            state.total = action.payload.total
        })
        .addCase(fetchPaginationAll.rejected, (state, action) => {
            state.loading = false
            state.error = true
        })
    }

})


export const {changeError, changeFilter, changeLoading, changePage, changeTotal} = camperSlice.actions
export const camperReducer = camperSlice.reducer