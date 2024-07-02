import {configureStore} from '@reduxjs/toolkit';
import contactReducer from '../slicer/contactSlicer';

export default configureStore({
    reducer: {
        contact: contactReducer
    }
})