import {createSlice} from '@reduxjs/toolkit';

export const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        id: 0
    },
    reducers: {
        setContactID: (state, action) => {
            state.id = action.payload;
        }
    }
});

export const {setContactID} = contactSlice.actions;
export default contactSlice.reducer;
