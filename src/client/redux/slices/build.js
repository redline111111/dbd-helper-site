import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../../axios';

const initialState = {
    build: {
        title: '',
        character: '',
        perks: [],
        description: '',
        status: 'loading',
    }
};

const postSlice = createSlice({
    name: 'build',
    initialState,
    reducers: {
        addTitle: (state, action) => {
            state.build.title = action.payload
        },
        addCharacter: (state, action) => {
            state.build.character = action.payload
        },
        addPerks: (state, action) => {
            state.build.perks = action.payload;
        },
        addDescription: (state, action) => {
            state.build.description = action.payload
        },
        clear: (state) => {
            state.build = {
                title: '',
                character: '',
                perks: [],
                description: '',
                status: 'loading',
            }
        },
    },
})

export const buildReducer = postSlice.reducer;
export const {addTitle, addCharacter, addPerks, addDescription, clear} = postSlice.actions;