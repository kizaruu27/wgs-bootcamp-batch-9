import {configureStore} from '@reduxjs/toolkit';
import youtubeReducer from '../../features/YoutubeSlice/youtubeSlice';

export default  configureStore({
    reducer: {
        youtube: youtubeReducer
    }
})