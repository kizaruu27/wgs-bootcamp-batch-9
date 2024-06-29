import {createSlice} from '@reduxjs/toolkit';

export const youtubeSlice = createSlice({
    name: 'youtube',
    initialState: {
        videos: [],
        searchKey: ''
    },
    reducers: {
        setVideos: (state, action) => {
            state.videos = action.payload;
            console.dir(state.videos);
        },
        setSearch: (state, action) => {
            state.searchKey = action.payload;
        }
    }
})

export const {setVideos, setSearch} = youtubeSlice.actions;
export default youtubeSlice.reducer;