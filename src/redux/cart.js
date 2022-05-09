import { createSlice } from '@reduxjs/toolkit';
import {toast} from 'react-toastify'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        totalPrice: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            const itemIndex = state.products.findIndex(item => item._id === action.payload._id);
            if (itemIndex >= 0) {
                action.payload.count > 1 ? state.products[itemIndex].count += action.payload.count : state.products[itemIndex].count += 1;
                state.totalPrice += action.payload.price * action.payload.count;
                toast.info(`${action.payload.name} a fost adăugat din nou în coș`, {position: 'top-left'})
            }else{
                const tempProduct = { ...action.payload, quantity: 1};
                state.quantity += 1;
                state.products.push(tempProduct);
                state.totalPrice += action.payload.price * action.payload.count;
                toast.success(`${action.payload.name} a fost adăugat în coș`, {position: 'top-left'})
            }
        },
        removeFromCart: (state, action) => {
            const nextCartItems = state.products.filter(item => item._id !== action.payload._id);
            state.products = nextCartItems;
            state.quantity -= 1;
            state.totalPrice -= action.payload.price * action.payload.count;
            toast.error(`${action.payload.name} a fost șters în coș`, {position: 'top-left'})
        },
        decreaseCount: (state, action) => {
            const itemIndex = state.products.findIndex(item => item._id === action.payload._id);
            
            if (state.products[itemIndex].count > 1) {
                state.totalPrice -= action.payload.price;
                state.products[itemIndex].count -= 1                
            }
        },
        increaseCount: (state, action) => {
            const itemIndex = state.products.findIndex(item => item._id === action.payload._id);
            
            if (state.products[itemIndex].count >= 0) {
                state.totalPrice += action.payload.price;
                state.products[itemIndex].count += 1                
            }
        },
    }
})

export const { addProduct, removeFromCart, decreaseCount, increaseCount } = cartSlice.actions
export default cartSlice.reducer;