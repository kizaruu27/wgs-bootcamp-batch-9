import {createSlice} from '@reduxjs/toolkit';

export const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        customerName: 'Bambang',
        customerAddress: 'Jl. HEHE No.IV'
    },
    reducers: {
        changeCustomerName: (state, action) => {
            state.customerName = action.payload;
        },
        changeCustomerAddress: (state, action) => {
            state.customerAddress = action.payload;
        }
    }
});

export const {changeCustomerAddress, changeCustomerName} = customerSlice.actions;
export default customerSlice.reducer;