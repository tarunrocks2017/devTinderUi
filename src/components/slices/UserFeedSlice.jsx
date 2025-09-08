import { createSlice } from "@reduxjs/toolkit";

const UserFeedSlice = createSlice({
    name:"feed",
    initialState: {
        feeds:[]
    },
    reducers: {
        ADD_FEED: (state,action) => {
            state.feeds = action.payload
        }
    }
});

export const {ADD_FEED} = UserFeedSlice.actions;
export default UserFeedSlice.reducer;

