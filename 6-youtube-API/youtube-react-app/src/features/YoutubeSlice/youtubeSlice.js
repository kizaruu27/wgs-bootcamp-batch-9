import {createSlice} from '@reduxjs/toolkit';

export const youtubeSlice = createSlice({
    name: 'youtube',
    initialState: {
        videos: [],
        selectedVideo: [],
        searchKey: '',
        isSelected: false
    },
    reducers: {
        setVideos: (state, action) => {
            state.videos = action.payload;
            console.dir(state.videos);
        },
        setSearch: (state, action) => {
            state.searchKey = action.payload;
        },
        setSelectedVides: (state, action) => {
            state.selectedVideo = action.payload;
            console.dir(state.selectedVideo);
        },
        setIsSelected: (state, action) => {
            state.isSelected = action.payload;
        }
    }
})

export const {setVideos, setSearch, setSelectedVides, setIsSelected} = youtubeSlice.actions;
export default youtubeSlice.reducer;