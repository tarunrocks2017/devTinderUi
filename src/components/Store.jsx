import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/AuthSlice';
import feedReducer from './slices/UserFeedSlice'

const Store = configureStore({
    reducer : {
        auth: authReducer,
        feed: feedReducer
    }
});

export default Store;