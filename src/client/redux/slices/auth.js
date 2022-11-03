import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const fetchUserData = createAsyncThunk('auth/fetchUserData',  async (params) => {
    const {data} = await axios.post('/auth/login', params);
    return data;
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
    const {data} = await axios.get('/auth/me');
    return data;
})

export const fetcRegister = createAsyncThunk('auth/fetcRegister', async (params) => {
    const {data} = await axios.post('/auth/register', params);
    return data;
})

const initialState = {
    data: null,
    status: 'loading'
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        logout: (state) => {
            state.data = null;
        }
    },
    extraReducers: {
        [fetchUserData.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchUserData.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        },
        [fetchUserData.rejected]: (state) => {
            state.data = null;
            state.status = 'error';
        },
        [fetchAuthMe.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchAuthMe.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        },
        [fetchAuthMe.rejected]: (state) => {
            state.data = null;
            state.status = 'error';
        },
        [fetcRegister.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetcRegister.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        },
        [fetcRegister.rejected]: (state) => {
            state.data = null;
            state.status = 'error';
        }
    }
})

export const selectIsAuth = (state) => Boolean(state.auth.data); 

export const authReducer = authSlice.reducer;

export const {logout} = authSlice.actions;