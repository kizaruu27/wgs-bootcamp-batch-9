import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        payloadValue: 2
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
            state.payloadValue = 0;
        },
        setPayloadValue : (state, action) => {
            state.payloadValue = action.payload;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
})

export const {increment, decrement, reset, incrementByAmount, setPayloadValue} = counterSlice.actions;
export default counterSlice.reducer;