import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import customerReducer from '../features/customerSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        customer: customerReducer
    },
})