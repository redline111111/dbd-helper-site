import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../../axios';


export const fetchProfile = createAsyncThunk('profile/fetchProfile', async (login) => {
    console.log(login)
    const {data} = await axios.get(`/profile/${login}`);
    return data;
})

const initialState = {
    profile: {
        data: [],
        status: 'loading',
    },
};
const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProfile.pending]: (state) => {
            state.profile.status = 'loading';
        },
        [fetchProfile.fulfilled]: (state, action) => {
            state.profile.data = action.payload;
            state.profile.status = 'loaded';
        },
        [fetchProfile.rejected]: (state) => {
            state.profile.data = [];
            state.profile.status = 'error';
        }
    },
})

export const profileReducer = profileSlice.reducer;