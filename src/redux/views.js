import { createSlice } from '@reduxjs/toolkit';

const recentViewSlice = createSlice({
    name: 'recent',
    initialState: {
        products: [],
    },
    reducers: {
        viewProduct: (state, action) => {
            const itemIndex = state.products.findIndex(item => item._id === action.payload._id);
            if (itemIndex >= 0) {
                state.products.splice(state.products[itemIndex], 1);
                // state.products.unshift(action.payload)
            }else{
                state.products.unshift(action.payload);
            }
        },
    }
})

export const { viewProduct } = recentViewSlice.actions
export default recentViewSlice.reducer;