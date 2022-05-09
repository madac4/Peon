import { createSlice } from '@reduxjs/toolkit';
import {toast} from 'react-toastify'

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        products: [],
    },
    reducers: {
        addToFav: (state, action) => {
            if (!state.products.includes(action.payload)) {
                state.products.push(action.payload);
                toast.success(`${action.payload.name} a fost adăugat la favorite`, {position: 'top-left'})
            }
        },
        removeFromFav: (state, action) => {
            state.products.splice(state.products.findIndex(product => product._id === action.payload._id),1);
            toast.error(`${action.payload.name} a fost șters de la favorite`, {position: 'top-left'})
        }
    }
})

export const { addToFav, removeFromFav } = favoriteSlice.actions
export default favoriteSlice.reducer;