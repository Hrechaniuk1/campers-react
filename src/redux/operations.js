import {createAsyncThunk} from '@reduxjs/toolkit'

import getAll from '../fetch/getAll'

export const fetchAll = createAsyncThunk('campers/fetchAll', async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState();
        const data = {
            form: state.campers.campers.filters.form,
            location: state.campers.campers.filters.location,
            equipment: state.campers.campers.filters.equipment,
        }
        const response = await getAll(data)
        return response
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})


export const fetchPaginationAll = createAsyncThunk('campers/fetchPaginationAll', async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState();
        const data = {
            page: state.campers.campers.page,
            form: state.campers.campers.filters.form,
            location: state.campers.campers.filters.location,
            equipment: state.campers.campers.filters.equipment,
        }
        const response = await getAll(data)
        return response
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})
