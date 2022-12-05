import { configureStore } from "@reduxjs/toolkit";
import {postsReducer} from './slices/posts.js'
import {authReducer} from './slices/auth.js'
import { buildReducer } from "./slices/build.js";
import { profileReducer } from "./slices/profile.js";

const store = configureStore({
    reducer: {
        posts: postsReducer,
        auth: authReducer,
        build: buildReducer,
        profile: profileReducer,
    }
});

export default store;